import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class ContactMeComponent implements OnInit {
  world: any;
  start: any = false;
  paused: any = false;
  pacman: any;
  ghost1: object = {w:3,x:7,y:7,z:5};
  ghost2: object = {w:3,x:8,y:6,z:6};
  ghost3: object = {w:3,x:8,y:8,z:7};
  newEmail: any;
  timer1:  any = Observable;
  timer2: any = Observable;
  timer3: any = Observable;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newEmail = {subject:'', email:'', message:''};
    this.build();
  }
  build(){
    this.world = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,2,1,1,1],
    [1,2,2,2,1,2,1,2,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,2,2,1,1,1,1,2,1,1,2,1],
    [1,2,1,1,1,2,1,3,6,1,2,2,2,2,1],
    [1,2,2,2,2,2,3,5,3,1,8,1,1,1,1],
    [1,2,1,1,1,2,1,3,7,1,2,1,2,2,1],
    [1,2,1,1,1,2,1,1,1,1,2,1,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,1,1,1,2,1,2,2,1,1,2,1],
    [1,1,1,2,2,2,1,2,1,1,2,1,2,2,1],
    [1,2,2,2,1,2,2,2,2,1,2,1,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    this.pacman = {
      x:10,
      y:7
    }
  }
  up(ghost){
    this.world[ghost.y][ghost.x] = ghost.w;
    ghost.x -= 1;
    ghost.w = this.world[ghost.y][ghost.x]
    this.world[ghost.y][ghost.x] = ghost.z;
  }
  down(ghost){
    this.world[ghost.y][ghost.x] = ghost.w;
    ghost.x += 1;
    ghost.w = this.world[ghost.y][ghost.x]
    this.world[ghost.y][ghost.x] = ghost.z;
  }
  left(ghost){
    this.world[ghost.y][ghost.x] = ghost.w;
    ghost.y -= 1;
    ghost.w = this.world[ghost.y][ghost.x]
    this.world[ghost.y][ghost.x] = ghost.z;
  }
  right(ghost){
    this.world[ghost.y][ghost.x] = ghost.w;
    ghost.y += 1;
    ghost.w = this.world[ghost.y][ghost.x]
    this.world[ghost.y][ghost.x] = ghost.z;
  }
  ghostescape(){
    let start1 = Observable.timer(1000);
    start1.subscribe(t => {
      this.up(this.ghost1);
    });
    let start2 = Observable.timer(1000);
    start2.subscribe(t => {
      this.up(this.ghost2);
    });
    let start4 = Observable.timer(1000);
    start4.subscribe(t => {
      this.left(this.ghost3);
    });
    let start11 = Observable.timer(1400);
    start11.subscribe(t => {
      this.up(this.ghost1);
    });
    let start22 = Observable.timer(1400);
    start22.subscribe(t => {
      this.right(this.ghost2);
    });
    let start34 = Observable.timer(1400);
    start34.subscribe(t => {
      this.right(this.ghost3);
    });
    let start15 = Observable.timer(1800);
    start15.subscribe(t => {
      this.left(this.ghost1);
    });
    let start62 = Observable.timer(1800);
    start62.subscribe(t => {
      this.up(this.ghost2);
    });
    let start37 = Observable.timer(1800);
    start37.subscribe(t => {
      this.left(this.ghost3);
    });
    let start18 = Observable.timer(2200);
    start18.subscribe(t => {
      this.left(this.ghost1);
    });
    let start29 = Observable.timer(2200);
    start29.subscribe(t => {
      this.up(this.ghost2);
    });
    let start30 = Observable.timer(2200);
    start30.subscribe(t => {
      this.up(this.ghost3);
    });
    let start16 = Observable.timer(2600);
    start16.subscribe(t => {
      this.left(this.ghost1);
    });
    let start32 = Observable.timer(2600);
    start32.subscribe(t => {
      this.right(this.ghost2);
    });
    let start38 = Observable.timer(2600);
    start38.subscribe(t => {
      this.up(this.ghost3);
    });
    let start21 = Observable.timer(3000);
    start21.subscribe(t => {
      this.down(this.ghost1);
    });
    let start24 = Observable.timer(3000);
    start24.subscribe(t => {
      this.right(this.ghost2);
    });
    let start35 = Observable.timer(3000);
    start35.subscribe(t => {
      this.up(this.ghost3);
    });
    let start20 = Observable.timer(3400);
    start20.subscribe(t => {
      this.right(this.ghost2);
    });
    let start43 = Observable.timer(3400);
    start43.subscribe(t => {
      this.up(this.ghost3);
    });
    let start42 = Observable.timer(3800);
    start42.subscribe(t => {
      this.down(this.ghost2);
    });
    let start53 = Observable.timer(3800);
    start53.subscribe(t => {
      this.up(this.ghost3);
    });
  }
  moveghost(ghost){
    if(this.pacman.x >= ghost.x && this.pacman.y >= ghost.y){
      if((this.world[ghost.y][ghost.x+1] === 1 || this.world[ghost.y][ghost.x+1] === 5 || this.world[ghost.y][ghost.x+1] === 6 || this.world[ghost.y][ghost.x+1] === 7) && (this.world[ghost.y+1][ghost.x] === 1 || this.world[ghost.y+1][ghost.x] === 5 || this.world[ghost.y+1][ghost.x] === 6 || this.world[ghost.y+1][ghost.x] === 7)){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if((this.world[ghost.y][ghost.x+1] !== 1 && this.world[ghost.y][ghost.x+1] !== 5 && this.world[ghost.y][ghost.x+1] !== 6 && this.world[ghost.y][ghost.x+1] !== 7) && (this.world[ghost.y+1][ghost.x] !== 1 && this.world[ghost.y+1][ghost.x] !== 5 && this.world[ghost.y+1][ghost.x] !== 6 && this.world[ghost.y+1][ghost.x] !== 7)){
        var num = Math.floor(Math.random()*2)+1;
        if(num == 1){
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.x += 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }else{
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.y += 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }
      }else if(this.world[ghost.y+1][ghost.x] !== 1 && this.world[ghost.y+1][ghost.x] !== 5 && this.world[ghost.y+1][ghost.x] !== 6 && this.world[ghost.y+1][ghost.x] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y += 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if (this.world[ghost.y][ghost.x+1] !== 1 && this.world[ghost.y][ghost.x+1] !== 5 && this.world[ghost.y][ghost.x+1] !== 6 && this.world[ghost.y][ghost.x+1] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x += 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }
    }else if(this.pacman.x >= ghost.x && this.pacman.y <= ghost.y){
      if((this.world[ghost.y][ghost.x+1] === 1 || this.world[ghost.y][ghost.x+1] === 5 || this.world[ghost.y][ghost.x+1] === 6 || this.world[ghost.y][ghost.x+1] === 7) && (this.world[ghost.y-1][ghost.x] === 1 || this.world[ghost.y-1][ghost.x] === 5 || this.world[ghost.y-1][ghost.x] === 6 || this.world[ghost.y-1][ghost.x] === 7)){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if((this.world[ghost.y][ghost.x+1] !== 1 && this.world[ghost.y][ghost.x+1] !== 5 && this.world[ghost.y][ghost.x+1] !== 6 && this.world[ghost.y][ghost.x+1] !== 7) && (this.world[ghost.y-1][ghost.x] !== 1 && this.world[ghost.y-1][ghost.x] !== 5 && this.world[ghost.y-1][ghost.x] !== 6 && this.world[ghost.y-1][ghost.x] !== 7)){
        var num = Math.floor(Math.random()*2)+1;
        if(num == 1){
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.x += 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }else{
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.y -= 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }
      }else if(this.world[ghost.y-1][ghost.x] !== 1 && this.world[ghost.y-1][ghost.x] !== 5 && this.world[ghost.y-1][ghost.x] !== 6 && this.world[ghost.y-1][ghost.x] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y -= 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if (this.world[ghost.y][ghost.x+1] !== 1 && this.world[ghost.y][ghost.x+1] !== 5 && this.world[ghost.y][ghost.x+1] !== 6 && this.world[ghost.y][ghost.x+1] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x += 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }
    }else if(this.pacman.x <= ghost.x && this.pacman.y >= ghost.y){
      if((this.world[ghost.y][ghost.x-1] === 1 || this.world[ghost.y][ghost.x-1] === 5 || this.world[ghost.y][ghost.x-1] === 6 || this.world[ghost.y][ghost.x-1] === 7) && (this.world[ghost.y+1][ghost.x] === 1 || this.world[ghost.y+1][ghost.x] === 5 || this.world[ghost.y+1][ghost.x] === 6 || this.world[ghost.y+1][ghost.x] === 7)){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if((this.world[ghost.y][ghost.x-1] !== 1 && this.world[ghost.y][ghost.x-1] !== 5 && this.world[ghost.y][ghost.x-1] !== 6 && this.world[ghost.y][ghost.x-1] !== 7) && (this.world[ghost.y+1][ghost.x] !== 1 && this.world[ghost.y+1][ghost.x] !== 5 && this.world[ghost.y+1][ghost.x] !== 6 && this.world[ghost.y+1][ghost.x] !== 7)){
        var num = Math.floor(Math.random()*2)+1;
        if(num == 1){
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.x -= 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }else{
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.y += 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }
      }else if(this.world[ghost.y+1][ghost.x] !== 1 && this.world[ghost.y+1][ghost.x] !== 5 && this.world[ghost.y+1][ghost.x] !== 6 && this.world[ghost.y+1][ghost.x] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y += 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if (this.world[ghost.y][ghost.x-1] !== 1 && this.world[ghost.y][ghost.x-1] !== 5 && this.world[ghost.y][ghost.x-1] !== 6 && this.world[ghost.y][ghost.x-1] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x -= 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }
    }else{
      if((this.world[ghost.y][ghost.x-1] === 1 || this.world[ghost.y][ghost.x-1] === 5 || this.world[ghost.y][ghost.x-1] === 6 || this.world[ghost.y][ghost.x-1] === 7) && (this.world[ghost.y-1][ghost.x] === 1 || this.world[ghost.y-1][ghost.x] === 5 || this.world[ghost.y-1][ghost.x] === 6 || this.world[ghost.y-1][ghost.x] === 7)){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if((this.world[ghost.y][ghost.x-1] !== 1 && this.world[ghost.y][ghost.x-1] !== 5 && this.world[ghost.y][ghost.x-1] !== 6 && this.world[ghost.y][ghost.x-1] !== 7) && (this.world[ghost.y-1][ghost.x] !== 1 && this.world[ghost.y-1][ghost.x] !== 5 && this.world[ghost.y-1][ghost.x] !== 6 && this.world[ghost.y-1][ghost.x] !== 7)){
        var num = Math.floor(Math.random()*2)-1;
        if(num == 1){
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.x -= 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }else{
          this.world[ghost.y][ghost.x] = ghost.w;
          ghost.y -= 1;
          ghost.w = this.world[ghost.y][ghost.x]
          this.world[ghost.y][ghost.x] = ghost.z;
        }
      }else if(this.world[ghost.y-1][ghost.x] !== 1 && this.world[ghost.y-1][ghost.x] !== 5 && this.world[ghost.y-1][ghost.x] !== 6 && this.world[ghost.y-1][ghost.x] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y -= 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }else if (this.world[ghost.y][ghost.x-1] !== 1 && this.world[ghost.y][ghost.x-1] !== 5 && this.world[ghost.y][ghost.x-1] !== 6 && this.world[ghost.y][ghost.x-1] !== 7){
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x -= 1;
        ghost.w = this.world[ghost.y][ghost.x]
        this.world[ghost.y][ghost.x] = ghost.z;
      }
    }
    if(this.world[this.pacman.y][this.pacman.x] == this.world[ghost.y][ghost.x]){
      this.gameOver();
    }
    console.log(ghost);
  }
  resume(){
    this.timer1 = Observable.timer(400, 400).subscribe(t => {
      this.moveghost(this.ghost1);
    });
    this.timer2 = Observable.timer(600, 600).subscribe(t => {
      this.moveghost(this.ghost2);
    });
    this.timer3 = Observable.timer(800, 800).subscribe(t => {
      this.moveghost(this.ghost3);
    });
    this.paused = false;
  }
  playgame(){
    this.ghostescape();
    this.timer1 = Observable.timer(3400, 400).subscribe(t => {
      this.moveghost(this.ghost1);
    });
    this.timer2 = Observable.timer(4200, 600).subscribe(t => {
      this.moveghost(this.ghost2);
    });
    this.timer3 = Observable.timer(4200, 800).subscribe(t => {
      this.moveghost(this.ghost3);
    });
    this.start = true;
  }
  pausegame(){
    this.timer1.unsubscribe();
    this.timer2.unsubscribe();
    this.timer3.unsubscribe();
    this.paused = true;
  }
  checkGameStatus(){
    if(!this.timer1._subscriptions && this.start == false){
      this.playgame();
    }else if(!this.timer1._subscriptions && this.start == true){
      this.resume();
    }
  }
  onKeyUp(e:KeyboardEvent){
    if(e.keyCode === 37){
      this.checkGameStatus();
      // left
      if(this.world[this.pacman.y-1][this.pacman.x] === 5 || this.world[this.pacman.y-1][this.pacman.x] === 6 || this.world[this.pacman.y-1][this.pacman.x] === 7){
        this.gameOver();
      }else if(this.world[this.pacman.y-1][this.pacman.x] !== 1){
        this.pacman.y -= 1;
        this.world[this.pacman.y][this.pacman.x] = 9
        this.world[this.pacman.y+1][this.pacman.x] = 3
      }
    }else if(e.keyCode === 38){
      this.checkGameStatus();
      // up
      if(this.world[this.pacman.y][this.pacman.x-1] === 5 || this.world[this.pacman.y][this.pacman.x-1] === 6 || this.world[this.pacman.y][this.pacman.x-1] === 7){
        this.gameOver();
      }else if(this.world[this.pacman.y][this.pacman.x-1] !== 1){
        this.pacman.x -= 1;
        this.world[this.pacman.y][this.pacman.x] = 10
        this.world[this.pacman.y][this.pacman.x+1] = 3
      }
    }else if(e.keyCode === 39){
      this.checkGameStatus();
      // right
      if(this.world[this.pacman.y+1][this.pacman.x] === 5 || this.world[this.pacman.y+1][this.pacman.x] === 6 || this.world[this.pacman.y+1][this.pacman.x] === 7){
        this.gameOver();
      }else if(this.world[this.pacman.y+1][this.pacman.x] !== 1){
        this.pacman.y += 1;
        this.world[this.pacman.y][this.pacman.x] = 8
        this.world[this.pacman.y-1][this.pacman.x] = 3
      }
    }else if(e.keyCode === 40){
      this.checkGameStatus();
      // down
      if(this.world[this.pacman.y][this.pacman.x+1] === 5 || this.world[this.pacman.y][this.pacman.x+1] === 6 || this.world[this.pacman.y][this.pacman.x+1] === 7){
        this.gameOver();
      }else if(this.world[this.pacman.y][this.pacman.x+1] !== 1){
        this.pacman.x += 1;
        this.world[this.pacman.y][this.pacman.x] = 11
        this.world[this.pacman.y][this.pacman.x-1] = 3
      }
    }
  }
  gameOver(){
    alert("Hire Me");
    window.open("http://localhost:8000/assets/images/resume.pdf", "_blank");
    window.location.reload();
  }
  send(){
    if(!this.newEmail.subject || !this.newEmail.email || !this.newEmail.message){
      alert('Please fill out all fields to send an email.');
    }else{
      var emails = this._httpService.sendEmail(this.newEmail);
      emails.subscribe((data: any) => {
        console.log(data);
        console.log('hi');
      })
    }
    alert("Thank You for sending an email. I'll be sure to get back to you shortly")
    window.location.reload();
  }
  ngOnDestroy(){
    if(this.timer1._subscriptions){
      this.pausegame();
    }
  }
  goHome(){
    this._router.navigate(['/home']);
  }
}
