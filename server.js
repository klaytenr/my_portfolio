var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var path = require('path')
app.use(express.static(__dirname + '/portfolio/dist'));
app.use(bodyParser.json());
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'klaytenrichmond@gmail.com',
        clientId: '1007160311751-jvp14tvp4icebhbdjgn32perf446l223.apps.googleusercontent.com',
        clientSecret: 'jMp9WpNR0zw0OUFLhvXQFOfJ',
        refreshToken: '1/oIzjp-sGm8uHYZfIRLCjuC4UeJgmrFmbD6kMeu0H-ts',
        accessToken: 'ya29.GlupBa1CIrRr9nk_TE4oceqR-DhsiMNxv5CBsb4qt3OSvGt4WGlwlk_eIE_EonwIskZZZyHQD_6sjLwGljBxnGPn2a_rrvdeaevS1hZQUwt3XNEsXAsD_S3R1Uco'
    }
});

app.post('/send', function(req, res){
    console.log('hi',req.body);
    var mailOptions = { 
        replyTo: req.body.email,
        to: 'klaytenrichmond@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            console.log(err);
        }else{
            res.json({message:'Email Send Complete', data: res});
        }
    })
})

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./portfolio/dist/index.html'));
})
app.listen(8000, function(){
    console.log('Listening on port 8000')
});