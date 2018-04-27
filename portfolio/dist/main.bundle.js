webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#whole{\n  border: 2px solid blueviolet;\n  width: 88em;\n  height: 60em;\n  background-color: black;\n}\n#right{\n  display: inline-block;\n  vertical-align: top;\n}\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[24];\n      grid-template-columns: repeat(24, 1fr);\n  grid-auto-rows: 2em;\n  width: 52.3em;\n  background-color: #798747;\n  padding: 2em;\n}\n.wrapper > div {\n  border: .02em solid black;\n  background-color: #b78316;\n  color: #d9480f;\n  width: 100%;\n  display: block;\n}\n#topleft{\n  -ms-grid-column: 1;\n      grid-column-start: 1; \n  grid-column-end: 8; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 5; \n  background-image: url('/assets/images/sherlock.png');\n  background-size: 100%;\n  -webkit-clip-path: polygon(0% 0%, 97% 0%, 97% 97%, 85.5% 97%, 85.5% 100%, 71.5% 100%, 71.5% 97%, 0% 97%);\n          clip-path: polygon(0% 0%, 97% 0%, 97% 97%, 85.5% 97%, 85.5% 100%, 71.5% 100%, 71.5% 97%, 0% 97%);\n  border: none;\n}\n#topmiddle{\n  -ms-grid-column: 10;\n      grid-column-start: 10; \n  grid-column-end: 16; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 8; \n  background-image: url('/assets/images/washington.png');\n  background-size: 200%;\n  -webkit-clip-path: polygon(3% 0%, 97% 0%, 97% 97%, 66.5% 97%, 66.5% 100%, 33.5% 100%, 33.5% 97%, 3% 97%);\n          clip-path: polygon(3% 0%, 97% 0%, 97% 97%, 66.5% 97%, 66.5% 100%, 33.5% 100%, 33.5% 97%, 3% 97%);\n  border: none;\n}\n#topright{\n  -ms-grid-column: 18;\n      grid-column-start: 18; \n  grid-column-end: 25; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 7; \n  background-image: url('/assets/images/dojo.png');\n  background-size: 100%;\n  -webkit-clip-path: polygon(16% 0%, 100% 0%, 100% 97%, 29% 97%, 29% 100%, 16% 100%, 16% 97%, 3% 97%, 3% 16%, 16% 16%);\n          clip-path: polygon(16% 0%, 100% 0%, 100% 97%, 29% 97%, 29% 100%, 16% 100%, 16% 97%, 3% 97%, 3% 16%, 16% 16%);\n  border: none;\n}\n#middletopleft{\n  -ms-grid-column: 1;\n      grid-column-start: 1; \n  grid-column-end: 8; \n  -ms-grid-row: 7; \n      grid-row-start: 7; \n  grid-row-end: 12; \n  background-image: url('/assets/images/vegas.png');\n  background-size: 120%;\n  -webkit-clip-path: polygon(14.5% 3%, 14.5% 23%, 0% 23%, 0% 77%, 14% 77%, 14% 97%, 43% 97%, \n                     43% 100%, 57% 100%, 57% 97%, 83% 97%, 83% 77%, 97% 77%, 97% 60%, \n                     100% 60%, 100% 40%, 97% 40%, 97% 23%, 83% 23%, 83% 3%);\n          clip-path: polygon(14.5% 3%, 14.5% 23%, 0% 23%, 0% 77%, 14% 77%, 14% 97%, 43% 97%, \n                     43% 100%, 57% 100%, 57% 97%, 83% 97%, 83% 77%, 97% 77%, 97% 60%, \n                     100% 60%, 100% 40%, 97% 40%, 97% 23%, 83% 23%, 83% 3%);\n  border: none;\n}\n#middlebottomleft{\n  -ms-grid-column: 1;\n      grid-column-start: 1; \n  grid-column-end: 7; \n  -ms-grid-row: 13; \n      grid-row-start: 13; \n  grid-row-end: 18; \n  background-image: url('/assets/images/bowling.png');\n  background-size: 150%;\n  -webkit-clip-path: polygon(97% 3%, 97% 60%, 100% 60%, 100% 80%, 97% 80%, 97% 97%,\n                     0% 97%, 0% 3%, 17% 3%, 17% 0%, 33.5% 0%, 33.5% 3%);\n          clip-path: polygon(97% 3%, 97% 60%, 100% 60%, 100% 80%, 97% 80%, 97% 97%,\n                     0% 97%, 0% 3%, 17% 3%, 17% 0%, 33.5% 0%, 33.5% 3%);\n  border: none;\n}\n#middlemiddle{\n  -ms-grid-column: 10;\n      grid-column-start: 10; \n  grid-column-end: 15; \n  -ms-grid-row: 9; \n      grid-row-start: 9; \n  grid-row-end: 16; \n  background-image: url('/assets/images/me.jpg');\n  background-size: 210%;\n  background-position-x: center;\n}\n#middleright{\n  -ms-grid-column: 17;\n      grid-column-start: 17; \n  grid-column-end: 25; \n  -ms-grid-row: 10; \n      grid-row-start: 10; \n  grid-row-end: 17; \n  background-image: url('/assets/images/school.png');\n  background-size: 100%;\n  -webkit-clip-path: polygon(3% 3%, 12.5% 3%, 12.5% 0%, 25% 0%, 25% 3%, 100% 3%, 100% 97%, 40% 97%, 40% 83%, 3% 83%, 3% 71%, 0% 71%, 0% 57%, 3% 57%);\n          clip-path: polygon(3% 3%, 12.5% 3%, 12.5% 0%, 25% 0%, 25% 3%, 100% 3%, 100% 97%, 40% 97%, 40% 83%, 3% 83%, 3% 71%, 0% 71%, 0% 57%, 3% 57%);\n  border: none;\n}\n#bottomleft{\n  -ms-grid-column: 1;\n      grid-column-start: 1; \n  grid-column-end: 7; \n  -ms-grid-row: 20; \n      grid-row-start: 20; \n  grid-row-end: 25; \n  background-image: url('/assets/images/cross.png');\n  background-size: 120%;\n  -webkit-clip-path: polygon(0% 23%, 0% 100%, 97% 100%, 97% 23%, 80% 23%, 80% 20%, 83% 20%, 83% 3%, 16% 3%, 16% 23%);\n          clip-path: polygon(0% 23%, 0% 100%, 97% 100%, 97% 23%, 80% 23%, 80% 20%, 83% 20%, 83% 3%, 16% 3%, 16% 23%);\n  border: none;\n}\n#bottommiddle{\n  -ms-grid-column: 9;\n      grid-column-start: 9; \n  grid-column-end: 17; \n  -ms-grid-row: 18; \n      grid-row-start: 18; \n  grid-row-end: 26; \n  background-image: url('/assets/images/redondo.png');\n  background-size: 180%;\n  -webkit-clip-path: polygon(3% 3%, 12.5% 3%, 12.5% 0%, 24.5% 0%, 24.5% 3%, 75% 3%, 75% 0%, 87.5% 0%, 87.5% 3%, \n                    97% 3%, 97% 25%, 100% 25%, 100% 38%, 97% 38%, 97% 72%, 73% 72%, 73% 100%, \n                    28% 100%, 28% 72%, 3% 72%, 3% 38%, 0% 38%, 0% 25%, 3% 25%);\n          clip-path: polygon(3% 3%, 12.5% 3%, 12.5% 0%, 24.5% 0%, 24.5% 3%, 75% 3%, 75% 0%, 87.5% 0%, 87.5% 3%, \n                    97% 3%, 97% 25%, 100% 25%, 100% 38%, 97% 38%, 97% 72%, 73% 72%, 73% 100%, \n                    28% 100%, 28% 72%, 3% 72%, 3% 38%, 0% 38%, 0% 25%, 3% 25%);\n  border: none;\n}\n#bottomright{\n  -ms-grid-column: 19;\n      grid-column-start: 19; \n  grid-column-end: 25; \n  -ms-grid-row: 19; \n      grid-row-start: 19; \n  grid-row-end: 25; \n  background-image: url('/assets/images/marines.png');\n  background-size: 80%;\n  background-color: white;\n  -webkit-clip-path: polygon(100% 100%, 3% 100%, 3% 3%, 17% 3%, 17% 0%, 33.5% 0%, 33.5% 3%, 83.5% 3%, 83.5% 16%, 100% 16%);\n          clip-path: polygon(100% 100%, 3% 100%, 3% 3%, 17% 3%, 17% 0%, 33.5% 0%, 33.5% 3%, 83.5% 3%, 83.5% 16%, 100% 16%);\n  border: none;\n}\n#one{\n  -ms-grid-column: 1;\n  grid-column: 1; \n  -ms-grid-row: 5; \n  grid-row: 5; \n  background-color: #798747;\n  border: none;\n}\n#two{\n  -ms-grid-column: 9;\n  grid-column: 9; \n  -ms-grid-row: 1; \n  grid-row: 1; \n  background-color: #798747;\n  border: none;\n}\n#three{\n  -ms-grid-column: 16;\n  grid-column: 16; \n  -ms-grid-row: 1; \n  grid-row: 1; \n  background-color: #798747;\n  border: none;\n}\n#seven{\n  -ms-grid-column: 1;\n  grid-column: 1; \n  -ms-grid-row: 12; \n  grid-row: 12; \n  background-color: #798747;\n  border: none;\n}\n#eight{\n  -ms-grid-column: 7;\n  grid-column: 7; \n  -ms-grid-row: 7; \n  grid-row: 7; \n  background-color: #b78316;\n}\n#nine{\n  -ms-grid-column: 7;\n  grid-column: 7; \n  -ms-grid-row: 11; \n  grid-row: 11; \n  background-color: #b78316;\n}\n#ten{\n  -ms-grid-column: 24;\n  grid-column: 24; \n  -ms-grid-row: 7; \n  grid-row: 7; \n  background-color: #798747;\n  border: none; \n}\n#eleven{\n  -ms-grid-column: 24;\n  grid-column: 24; \n  -ms-grid-row: 9; \n  grid-row: 9; \n  background-color: #798747;\n  border: none; \n}\n#twelve{\n  -ms-grid-column: 17;\n  grid-column: 17; \n  -ms-grid-row: 16; \n  grid-row: 16; \n  background-color: #b78316;\n}\n#thirteen{\n  -ms-grid-column: 18;\n  grid-column: 18; \n  -ms-grid-row: 16; \n  grid-row: 16; \n  background-color: #b78316;\n}\n#fourteen{\n  -ms-grid-column: 19;\n  grid-column: 19; \n  -ms-grid-row: 16; \n  grid-row: 16; \n  background-color: #b78316;\n}\n#fifteen{\n  -ms-grid-column: 1;\n  grid-column: 1; \n  -ms-grid-row: 18; \n  grid-row: 18; \n  background-color: #798747;\n  border: none;\n}\n#sixteen{\n  -ms-grid-column: 6;\n  grid-column: 6; \n  -ms-grid-row: 20; \n  grid-row: 20; \n  background-color: #b78316;\n}\n#seventeen{\n  -ms-grid-column: 24;\n  grid-column: 24; \n  -ms-grid-row: 17; \n  grid-row: 17; \n  background-color: #798747;\n  border: none;\n}\n#nineteen{\n  -ms-grid-column: 18;\n  grid-column: 18; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #798747;\n  border: none;\n}\n#twenty{\n  -ms-grid-column: 7;\n  grid-column: 7; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #798747;\n  border: none;\n}\n#twentyone{\n  -ms-grid-column: 9;\n  grid-column: 9; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #b78316;\n}\n#twentytwo{\n  -ms-grid-column: 10;\n  grid-column: 10; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #b78316;\n}\n#twentythree{\n  -ms-grid-column: 15;\n  grid-column: 15; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #b78316;\n}\n#twentyfour{\n  -ms-grid-column: 16;\n  grid-column: 16; \n  -ms-grid-row: 24; \n  grid-row: 24; \n  background-color: #b78316;\n}\n#twentysix{\n  -ms-grid-column: 10;\n  grid-column: 10; \n  -ms-grid-row: 25; \n  grid-row: 25; \n  background-color: #b78316;\n}\n#twentyseven{\n  -ms-grid-column: 15;\n  grid-column: 15; \n  -ms-grid-row: 25; \n  grid-row: 25; \n  background-color: #b78316;\n}\n.tooltip {\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  padding: 2.1em .5em 0;\n  text-align: center;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: black;\n  color: white;\n  text-align: center;\n  font-size: 110%;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.words > div {\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  display: inline-block;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-image: url('/assets/images/chip.png');\n  background-size: 100%;\n  color: black;\n  text-align: center;\n  font-size: 200%;\n  margin: 1em -.345em;\n}\np{\n  position: relative;\n  top: .4em;\n  -webkit-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n}\n#nav{\n  display: inline-block;\n  background-color: black;\n  border: none;\n  width: 25em;\n  height: 52em;\n  text-align: left;\n  -ms-flex-item-align: left;\n      -ms-grid-row-align: left;\n      align-self: left;\n}\n.words{\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  position: relative;\n  top: 7.5em;\n  left: .1em;\n}"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"whole\">\n    <div id=\"nav\">\n        <div class=\"words\">\n            <div [routerLink]=\"['../home']\" class='filled'><p>H</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>M</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>E</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>B</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>U</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>T</p></div>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>K</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>I</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../projects']\" class='filled'><p>P</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>R</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>J</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>E</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">        \n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>N</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n        </div>\n    </div>\n    <div id=\"right\">\n        <div class=\"wrapper color\">\n            <div class='tooltip' id='topleft'>\n                <h6 class=\"tooltiptext\">In my free time I enjoying watch television shows about crime, such as Sherlock and Psych.</h6>\n            </div>\n            <div id='one'></div>\n            <div id='two'></div>\n            <div class='tooltip' id='topmiddle'>\n                <h6 class=\"tooltiptext\">I was born in Gig Harbor, Washington on December 9th, 1996 — the youngest of four boys.</h6>\n            </div>\n            <div id='three'></div>\n            <div class='tooltip' id='topright'>\n                <h6 class=\"tooltiptext\">Through Coding Dojo I learned a wide variety of programming skills and graduated top of my class. Prior to enrolling, I self-studied Ruby through resources I found online. </h6>\n            </div>\n            <div id='four'></div>\n            <div></div>\n            <div class='tooltip' id='middletopleft'>\n                <h6 class=\"tooltiptext\">I moved to Las Vegas when I was three years old and lived there until I was thirteen.</h6>\n            </div>\n            <div></div>\n            <div></div>\n            <div class='tooltip' id='middlemiddle'>\n                <h6 class=\"tooltiptext\"><a href=\"assets/images/resume.pdf\" target='_blank'>Resume</a></h6>\n            </div>\n            <div></div>\n            <div></div>\n            <div id='seven'></div>\n            <div class='tooltip' id='middleright'>\n                <h6 class=\"tooltiptext\">I attended Redondo Union High School and graduated in 2015. I participated in various extracurricular events including the armed exhibition team in Marine Corps Junior ROTC. See <a href=\"https://www.youtube.com/playlist?list=PLwKWjs49vYcj60YXL9CnP7XyNT2wqoQPD\" target='_blank'>Here.</a></h6>\n            </div>\n            <div id='eight'></div>\n            <div id='nine'></div>\n            <div class='tooltip' id='middlebottomleft'>\n                <h6 class=\"tooltiptext\">My favorite hobby is bowling, for which I even had a custom ball created.</h6>\n            </div>\n            <div id='ten'></div>\n            <div id='eleven'></div>\n            <div class='tooltip' id='bottomleft'>\n                <h6 class=\"tooltiptext\">I have been Christian from a young age and enjoy attending church where I have volunteered since I was fourteen.</h6>\n            </div>\n            <div id='twelve'></div>\n            <div class='tooltip' id='bottommiddle'>\n                <h6 class=\"tooltiptext\">I moved to Redondo Beach, California at thirteen years of age and have lived there since.</h6>\n            </div>\n            <div id='thirteen'></div>\n            <div id='fourteen'></div>\n            <div class='tooltip' id='bottomright'>\n                <h6 class=\"tooltiptext\"> I joined the United States Marine Corps Reserves in February of 2016 as a field artillery fire control man and graduated from bootcamp as the Company Honorman. </h6>\n            </div>\n            <div id='fifteen'></div>\n            <div id='sixteen'></div>\n            <div id='seventeen'></div>\n            <div id='nineteen'></div>\n            <div id='twenty'></div>\n            <div id='twentyone'></div>\n            <div id='twentytwo'></div>\n            <div id='twentythree'></div>\n            <div id='twentyfour'></div>\n            <div id='twentyfive'></div>\n            <div id='twentysix'></div>\n            <div id='twentyseven'></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        core_1.Component({
            selector: 'app-about-me',
            template: __webpack_require__("./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__("./src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
exports.AboutMeComponent = AboutMeComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var about_me_component_1 = __webpack_require__("./src/app/about-me/about-me.component.ts");
var contact_me_component_1 = __webpack_require__("./src/app/contact-me/contact-me.component.ts");
var skills_component_1 = __webpack_require__("./src/app/skills/skills.component.ts");
var projects_component_1 = __webpack_require__("./src/app/projects/projects.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about-me', component: about_me_component_1.AboutMeComponent },
    { path: 'contact-me', component: contact_me_component_1.ContactMeComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n#nav > div {\n    border: 1.5px solid white;\n    color: #d9480f;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    background-color: tan;\n    color: black;\n    outline: .1em solid peru;\n    outline-offset: -.1em;\n    margin: -.2em -.1em;\n    text-align: center;\n    font-size: 160%\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"nav\">\n    <div [routerLink]=\"['../home']\" class='filled'>H</div>\n    <div [routerLink]=\"['../home']\" class='filled'>O</div>\n    <div [routerLink]=\"['../home']\" class='filled'>M</div>\n    <div [routerLink]=\"['../home']\" class='filled'>E</div><br>\n\n    <div [routerLink]=\"['../about-me']\" class='filled'>A</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>B</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>O</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>U</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>T</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>_</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>M</div>\n    <div [routerLink]=\"['../about-me']\" class='filled'>E</div><br>\n\n    <div [routerLink]=\"['../skills']\" class='filled'>S</div>\n    <div [routerLink]=\"['../skills']\" class='filled'>K</div>\n    <div [routerLink]=\"['../skills']\" class='filled'>I</div>\n    <div [routerLink]=\"['../skills']\" class='filled'>L</div>\n    <div [routerLink]=\"['../skills']\" class='filled'>L</div>\n    <div [routerLink]=\"['../skills']\" class='filled'>S</div><br>\n\n    <div [routerLink]=\"['../projects']\" class='filled'>P</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>R</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>O</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>J</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>E</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>C</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>T</div>\n    <div [routerLink]=\"['../projects']\" class='filled'>S</div><br>\n    \n    <div [routerLink]=\"['../contact-me']\" class='filled'>C</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>O</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>N</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>T</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>A</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>C</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>T</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>_</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>M</div>\n    <div [routerLink]=\"['../contact-me']\" class='filled'>E</div><br>\n</div> -->\n\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portfolio';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var about_me_component_1 = __webpack_require__("./src/app/about-me/about-me.component.ts");
var contact_me_component_1 = __webpack_require__("./src/app/contact-me/contact-me.component.ts");
var skills_component_1 = __webpack_require__("./src/app/skills/skills.component.ts");
var projects_component_1 = __webpack_require__("./src/app/projects/projects.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_me_component_1.AboutMeComponent,
                contact_me_component_1.ContactMeComponent,
                skills_component_1.SkillsComponent,
                projects_component_1.ProjectsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/contact-me/contact-me.component.css":
/***/ (function(module, exports) {

module.exports = "*{\n    margin: 0 auto;\n    padding: 0;\n    vertical-align: top;\n}\n#wrapper{\n  border: 2px solid blueviolet;\n  width: 87.75em;\n  height: 59.75em;\n  background-color: black;\n  display: block;\n}\n#world{\n    height: 50em;\n    width: 50em;\n    border: 2px solid green;\n    outline: 1em solid white;\n    display: inline-block;\n    background-image: url('/assets/images/board.png');\n    background-size: 95%;\n    background-repeat: no-repeat;\n    background-position: center;\n}\ndiv{\n    height: 3.3em;\n    width: 3.3em;\n    display: inline-block;\n    background-size: 100%;\n}\n.pacman_up{\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url('/assets/images/me_up.png'); \n}\n.pacman_right{\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url('/assets/images/me_right.png'); \n}\n.pacman_down{\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url('/assets/images/me_down.png'); \n}\n.pacman_left{\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url('/assets/images/me_left.png'); \n}\n.wall{\n    background-color: none;\n}\n.ground{\n    background-color: none;\n}\n.coin{\n    border: 1px solid blue;\n    background-color: blue;\n    border-radius: 100%;\n    height: 1.5em;\n    width: 1.5em;\n    -webkit-box-shadow: 0 0 1em .1em blueviolet;\n            box-shadow: 0 0 1em .1em blueviolet;\n    color: purple;\n    position: relative;\n    top: .8em;\n    left: .8em;\n}\n.facebook{\n    background-image: url('/assets/images/facebook.png');\n}\n.linkedin{\n    background-image: url('/assets/images/linkedin.png');\n}\n.github{\n    text-align: center;\n    padding-top: .1em;\n}\ni{\n    color: white;\n}\nh4{\n    color: white;\n}\nimg{\n    height: 70px;\n    width: 70px;\n}\n.words > div {\n    border-radius: 50%;\n    width: 2em;\n    height: 2em;\n    display: inline-block;\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    background-image: url('/assets/images/chip.png');\n    background-size: 100%;\n    color: black;\n    text-align: center;\n    font-size: 200%;\n    margin: 1em -.345em;\n}\np{\n    position: relative;\n    top: .4em;\n    -webkit-transform: rotate(-40deg);\n            transform: rotate(-40deg);\n}\n#nav{\n    display: inline-block;\n    background-color: black;\n    border: none;\n    width: 25em;\n    height: 52em;\n    text-align: left;\n}\n.words{\n    -webkit-transform: rotate(40deg);\n            transform: rotate(40deg);\n    position: relative;\n    top: 7.5em;\n    left: .1em;\n    width: 25em;\n    height: 15.386%;\n}\nform{\n    margin: 8em 0 0 2em;\n}\nbutton{\n    padding: .5em 2em;\n    display: inline-block;\n    font-size: 120%;\n    margin: 5em 0 0 2.1em;\n}\n#resume{\n    position: relative;\n    left: 62.5em;\n    bottom: 42em;\n    background-color: yellow;\n}\n#play{\n    position: relative;\n    left: 63em;\n    bottom: 42em;\n    background-color: green;\n}\n#pause{\n    position: relative;\n    left: 62.7em;\n    bottom: 42em;\n    background-color: red;\n}\n#send{\n    padding: .1em .3em;\n    font-size: 120%;\n}\ntextarea{\n    margin-bottom: .2em; \n    margin-top: -1.4em; \n}"

/***/ }),

/***/ "./src/app/contact-me/contact-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <div id=\"nav\">\n        <div class=\"words\">\n            <div [routerLink]=\"['../home']\" class='filled'><p>H</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>M</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>E</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>B</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>U</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>T</p></div>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>K</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>I</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../projects']\" class='filled'><p>P</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>R</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>J</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>E</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">        \n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>N</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n        </div>\n        <form (submit)='send()'>\n            <h4>Subject:</h4> <input type=\"text\" name=\"subject\" [(ngModel)]=\"newEmail.subject\"><br>\n            <h4>Email:</h4> <input type=\"email\" name=\"email\" [(ngModel)]=\"newEmail.email\"><br>\n            <h4>Message:</h4> <br> <textarea rows=\"4\" cols=\"50\" name=\"message\" [(ngModel)]=\"newEmail.message\"></textarea>\n            <input id='send' type=\"submit\" value=\"Send\">\n        </form>\n        <button id='play' *ngIf='start == false' (click)='playgame()'>PLAY</button>\n        <button id='resume' *ngIf='paused == true' (click)='resume()'>RESUME</button>\n        <button id='pause' *ngIf='start == true && paused == false' (click)='pausegame()'>PAUSE</button>\n    </div>\n    <div id='world'>\n        <div *ngFor='let row of world'>\n            <div *ngFor='let tile of row'>\n                <div *ngIf='tile === 1' class='wall'></div>\n                <div *ngIf='tile === 2' class='coin'></div>\n                <div *ngIf='tile === 3' class='ground'></div>\n                <a href=\"https://www.facebook.com/klayten.richmond.5\"><div *ngIf='tile === 5' class='facebook'></div></a>\n                <a href=\"https://www.linkedin.com/in/klayten-richmond-36a310155/\"><div *ngIf='tile === 6' class='linkedin'></div></a>\n                <a href=\"https://github.com/klaytenr\"><div *ngIf='tile === 7' class='github'><i class=\"fab fa-github fa-3x\"></i></div></a>\n                <div *ngIf='tile === 8' class='pacman_right'></div>\n                <div *ngIf='tile === 9' class='pacman_left'></div>\n                <div *ngIf='tile === 10' class='pacman_up'></div>\n                <div *ngIf='tile === 11' class='pacman_down'></div>\n            </div>\n            <br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-me/contact-me.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.start = false;
        this.paused = false;
        this.ghost1 = { w: 3, x: 7, y: 7, z: 5 };
        this.ghost2 = { w: 3, x: 8, y: 6, z: 6 };
        this.ghost3 = { w: 3, x: 8, y: 8, z: 7 };
        this.timer1 = Rx_1.Observable;
        this.timer2 = Rx_1.Observable;
        this.timer3 = Rx_1.Observable;
    }
    ContactMeComponent.prototype.ngOnInit = function () {
        this.newEmail = { subject: '', email: '', message: '' };
        this.build();
    };
    ContactMeComponent.prototype.build = function () {
        this.world = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
            [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1],
            [1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
            [1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1],
            [1, 2, 1, 1, 1, 2, 1, 3, 6, 1, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 3, 5, 3, 1, 8, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 2, 1, 3, 7, 1, 2, 1, 2, 2, 1],
            [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1],
            [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        this.pacman = {
            x: 10,
            y: 7
        };
    };
    ContactMeComponent.prototype.up = function (ghost) {
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x -= 1;
        ghost.w = this.world[ghost.y][ghost.x];
        this.world[ghost.y][ghost.x] = ghost.z;
    };
    ContactMeComponent.prototype.down = function (ghost) {
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.x += 1;
        ghost.w = this.world[ghost.y][ghost.x];
        this.world[ghost.y][ghost.x] = ghost.z;
    };
    ContactMeComponent.prototype.left = function (ghost) {
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y -= 1;
        ghost.w = this.world[ghost.y][ghost.x];
        this.world[ghost.y][ghost.x] = ghost.z;
    };
    ContactMeComponent.prototype.right = function (ghost) {
        this.world[ghost.y][ghost.x] = ghost.w;
        ghost.y += 1;
        ghost.w = this.world[ghost.y][ghost.x];
        this.world[ghost.y][ghost.x] = ghost.z;
    };
    ContactMeComponent.prototype.ghostescape = function () {
        var _this = this;
        var start1 = Rx_1.Observable.timer(1000);
        start1.subscribe(function (t) {
            _this.up(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(1000);
        start2.subscribe(function (t) {
            _this.up(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(1000);
        start3.subscribe(function (t) {
            _this.left(_this.ghost3);
        });
        var start1 = Rx_1.Observable.timer(1400);
        start1.subscribe(function (t) {
            _this.up(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(1400);
        start2.subscribe(function (t) {
            _this.right(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(1400);
        start3.subscribe(function (t) {
            _this.right(_this.ghost3);
        });
        var start1 = Rx_1.Observable.timer(1800);
        start1.subscribe(function (t) {
            _this.left(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(1800);
        start2.subscribe(function (t) {
            _this.up(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(1800);
        start3.subscribe(function (t) {
            _this.left(_this.ghost3);
        });
        var start1 = Rx_1.Observable.timer(2200);
        start1.subscribe(function (t) {
            _this.left(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(2200);
        start2.subscribe(function (t) {
            _this.up(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(2200);
        start3.subscribe(function (t) {
            _this.up(_this.ghost3);
        });
        var start1 = Rx_1.Observable.timer(2600);
        start1.subscribe(function (t) {
            _this.left(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(2600);
        start2.subscribe(function (t) {
            _this.right(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(2600);
        start3.subscribe(function (t) {
            _this.up(_this.ghost3);
        });
        var start1 = Rx_1.Observable.timer(3000);
        start1.subscribe(function (t) {
            _this.down(_this.ghost1);
        });
        var start2 = Rx_1.Observable.timer(3000);
        start2.subscribe(function (t) {
            _this.right(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(3000);
        start3.subscribe(function (t) {
            _this.up(_this.ghost3);
        });
        var start2 = Rx_1.Observable.timer(3400);
        start2.subscribe(function (t) {
            _this.right(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(3400);
        start3.subscribe(function (t) {
            _this.up(_this.ghost3);
        });
        var start2 = Rx_1.Observable.timer(3800);
        start2.subscribe(function (t) {
            _this.down(_this.ghost2);
        });
        var start3 = Rx_1.Observable.timer(3800);
        start3.subscribe(function (t) {
            _this.up(_this.ghost3);
        });
    };
    ContactMeComponent.prototype.moveghost = function (ghost) {
        if (this.pacman.x >= ghost.x && this.pacman.y >= ghost.y) {
            if ((this.world[ghost.y][ghost.x + 1] === 1 || this.world[ghost.y][ghost.x + 1] === 5 || this.world[ghost.y][ghost.x + 1] === 6 || this.world[ghost.y][ghost.x + 1] === 7) && (this.world[ghost.y + 1][ghost.x] === 1 || this.world[ghost.y + 1][ghost.x] === 5 || this.world[ghost.y + 1][ghost.x] === 6 || this.world[ghost.y + 1][ghost.x] === 7)) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if ((this.world[ghost.y][ghost.x + 1] !== 1 && this.world[ghost.y][ghost.x + 1] !== 5 && this.world[ghost.y][ghost.x + 1] !== 6 && this.world[ghost.y][ghost.x + 1] !== 7) && (this.world[ghost.y + 1][ghost.x] !== 1 && this.world[ghost.y + 1][ghost.x] !== 5 && this.world[ghost.y + 1][ghost.x] !== 6 && this.world[ghost.y + 1][ghost.x] !== 7)) {
                var num = Math.floor(Math.random() * 2) + 1;
                if (num == 1) {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.x += 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
                else {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.y += 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
            }
            else if (this.world[ghost.y + 1][ghost.x] !== 1 && this.world[ghost.y + 1][ghost.x] !== 5 && this.world[ghost.y + 1][ghost.x] !== 6 && this.world[ghost.y + 1][ghost.x] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.y += 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if (this.world[ghost.y][ghost.x + 1] !== 1 && this.world[ghost.y][ghost.x + 1] !== 5 && this.world[ghost.y][ghost.x + 1] !== 6 && this.world[ghost.y][ghost.x + 1] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.x += 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
        }
        else if (this.pacman.x >= ghost.x && this.pacman.y <= ghost.y) {
            if ((this.world[ghost.y][ghost.x + 1] === 1 || this.world[ghost.y][ghost.x + 1] === 5 || this.world[ghost.y][ghost.x + 1] === 6 || this.world[ghost.y][ghost.x + 1] === 7) && (this.world[ghost.y - 1][ghost.x] === 1 || this.world[ghost.y - 1][ghost.x] === 5 || this.world[ghost.y - 1][ghost.x] === 6 || this.world[ghost.y - 1][ghost.x] === 7)) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if ((this.world[ghost.y][ghost.x + 1] !== 1 && this.world[ghost.y][ghost.x + 1] !== 5 && this.world[ghost.y][ghost.x + 1] !== 6 && this.world[ghost.y][ghost.x + 1] !== 7) && (this.world[ghost.y - 1][ghost.x] !== 1 && this.world[ghost.y - 1][ghost.x] !== 5 && this.world[ghost.y - 1][ghost.x] !== 6 && this.world[ghost.y - 1][ghost.x] !== 7)) {
                var num = Math.floor(Math.random() * 2) + 1;
                if (num == 1) {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.x += 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
                else {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.y -= 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
            }
            else if (this.world[ghost.y - 1][ghost.x] !== 1 && this.world[ghost.y - 1][ghost.x] !== 5 && this.world[ghost.y - 1][ghost.x] !== 6 && this.world[ghost.y - 1][ghost.x] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.y -= 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if (this.world[ghost.y][ghost.x + 1] !== 1 && this.world[ghost.y][ghost.x + 1] !== 5 && this.world[ghost.y][ghost.x + 1] !== 6 && this.world[ghost.y][ghost.x + 1] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.x += 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
        }
        else if (this.pacman.x <= ghost.x && this.pacman.y >= ghost.y) {
            if ((this.world[ghost.y][ghost.x - 1] === 1 || this.world[ghost.y][ghost.x - 1] === 5 || this.world[ghost.y][ghost.x - 1] === 6 || this.world[ghost.y][ghost.x - 1] === 7) && (this.world[ghost.y + 1][ghost.x] === 1 || this.world[ghost.y + 1][ghost.x] === 5 || this.world[ghost.y + 1][ghost.x] === 6 || this.world[ghost.y + 1][ghost.x] === 7)) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if ((this.world[ghost.y][ghost.x - 1] !== 1 && this.world[ghost.y][ghost.x - 1] !== 5 && this.world[ghost.y][ghost.x - 1] !== 6 && this.world[ghost.y][ghost.x - 1] !== 7) && (this.world[ghost.y + 1][ghost.x] !== 1 && this.world[ghost.y + 1][ghost.x] !== 5 && this.world[ghost.y + 1][ghost.x] !== 6 && this.world[ghost.y + 1][ghost.x] !== 7)) {
                var num = Math.floor(Math.random() * 2) + 1;
                if (num == 1) {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.x -= 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
                else {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.y += 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
            }
            else if (this.world[ghost.y + 1][ghost.x] !== 1 && this.world[ghost.y + 1][ghost.x] !== 5 && this.world[ghost.y + 1][ghost.x] !== 6 && this.world[ghost.y + 1][ghost.x] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.y += 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if (this.world[ghost.y][ghost.x - 1] !== 1 && this.world[ghost.y][ghost.x - 1] !== 5 && this.world[ghost.y][ghost.x - 1] !== 6 && this.world[ghost.y][ghost.x - 1] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.x -= 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
        }
        else {
            if ((this.world[ghost.y][ghost.x - 1] === 1 || this.world[ghost.y][ghost.x - 1] === 5 || this.world[ghost.y][ghost.x - 1] === 6 || this.world[ghost.y][ghost.x - 1] === 7) && (this.world[ghost.y - 1][ghost.x] === 1 || this.world[ghost.y - 1][ghost.x] === 5 || this.world[ghost.y - 1][ghost.x] === 6 || this.world[ghost.y - 1][ghost.x] === 7)) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if ((this.world[ghost.y][ghost.x - 1] !== 1 && this.world[ghost.y][ghost.x - 1] !== 5 && this.world[ghost.y][ghost.x - 1] !== 6 && this.world[ghost.y][ghost.x - 1] !== 7) && (this.world[ghost.y - 1][ghost.x] !== 1 && this.world[ghost.y - 1][ghost.x] !== 5 && this.world[ghost.y - 1][ghost.x] !== 6 && this.world[ghost.y - 1][ghost.x] !== 7)) {
                var num = Math.floor(Math.random() * 2) - 1;
                if (num == 1) {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.x -= 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
                else {
                    this.world[ghost.y][ghost.x] = ghost.w;
                    ghost.y -= 1;
                    ghost.w = this.world[ghost.y][ghost.x];
                    this.world[ghost.y][ghost.x] = ghost.z;
                }
            }
            else if (this.world[ghost.y - 1][ghost.x] !== 1 && this.world[ghost.y - 1][ghost.x] !== 5 && this.world[ghost.y - 1][ghost.x] !== 6 && this.world[ghost.y - 1][ghost.x] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.y -= 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
            else if (this.world[ghost.y][ghost.x - 1] !== 1 && this.world[ghost.y][ghost.x - 1] !== 5 && this.world[ghost.y][ghost.x - 1] !== 6 && this.world[ghost.y][ghost.x - 1] !== 7) {
                this.world[ghost.y][ghost.x] = ghost.w;
                ghost.x -= 1;
                ghost.w = this.world[ghost.y][ghost.x];
                this.world[ghost.y][ghost.x] = ghost.z;
            }
        }
        if (this.world[this.pacman.y][this.pacman.x] == this.world[ghost.y][ghost.x]) {
            this.gameOver();
        }
        console.log(ghost);
    };
    ContactMeComponent.prototype.resume = function () {
        var _this = this;
        this.timer1 = Rx_1.Observable.timer(400, 400).subscribe(function (t) {
            _this.moveghost(_this.ghost1);
        });
        this.timer2 = Rx_1.Observable.timer(600, 600).subscribe(function (t) {
            _this.moveghost(_this.ghost2);
        });
        this.timer3 = Rx_1.Observable.timer(800, 800).subscribe(function (t) {
            _this.moveghost(_this.ghost3);
        });
        this.paused = false;
    };
    ContactMeComponent.prototype.playgame = function () {
        var _this = this;
        this.ghostescape();
        this.timer1 = Rx_1.Observable.timer(3400, 400).subscribe(function (t) {
            _this.moveghost(_this.ghost1);
        });
        this.timer2 = Rx_1.Observable.timer(4200, 600).subscribe(function (t) {
            _this.moveghost(_this.ghost2);
        });
        this.timer3 = Rx_1.Observable.timer(4200, 800).subscribe(function (t) {
            _this.moveghost(_this.ghost3);
        });
        this.start = true;
    };
    ContactMeComponent.prototype.pausegame = function () {
        this.timer1.unsubscribe();
        this.timer2.unsubscribe();
        this.timer3.unsubscribe();
        this.paused = true;
    };
    ContactMeComponent.prototype.checkGameStatus = function () {
        if (!this.timer1._subscriptions && this.start == false) {
            this.playgame();
        }
        else if (!this.timer1._subscriptions && this.start == true) {
            this.resume();
        }
    };
    ContactMeComponent.prototype.onKeyUp = function (e) {
        if (e.keyCode === 37) {
            this.checkGameStatus();
            // left
            if (this.world[this.pacman.y - 1][this.pacman.x] === 5 || this.world[this.pacman.y - 1][this.pacman.x] === 6 || this.world[this.pacman.y - 1][this.pacman.x] === 7) {
                this.gameOver();
            }
            else if (this.world[this.pacman.y - 1][this.pacman.x] !== 1) {
                this.pacman.y -= 1;
                this.world[this.pacman.y][this.pacman.x] = 9;
                this.world[this.pacman.y + 1][this.pacman.x] = 3;
            }
        }
        else if (e.keyCode === 38) {
            this.checkGameStatus();
            // up
            if (this.world[this.pacman.y][this.pacman.x - 1] === 5 || this.world[this.pacman.y][this.pacman.x - 1] === 6 || this.world[this.pacman.y][this.pacman.x - 1] === 7) {
                this.gameOver();
            }
            else if (this.world[this.pacman.y][this.pacman.x - 1] !== 1) {
                this.pacman.x -= 1;
                this.world[this.pacman.y][this.pacman.x] = 10;
                this.world[this.pacman.y][this.pacman.x + 1] = 3;
            }
        }
        else if (e.keyCode === 39) {
            this.checkGameStatus();
            // right
            if (this.world[this.pacman.y + 1][this.pacman.x] === 5 || this.world[this.pacman.y + 1][this.pacman.x] === 6 || this.world[this.pacman.y + 1][this.pacman.x] === 7) {
                this.gameOver();
            }
            else if (this.world[this.pacman.y + 1][this.pacman.x] !== 1) {
                this.pacman.y += 1;
                this.world[this.pacman.y][this.pacman.x] = 8;
                this.world[this.pacman.y - 1][this.pacman.x] = 3;
            }
        }
        else if (e.keyCode === 40) {
            this.checkGameStatus();
            // down
            if (this.world[this.pacman.y][this.pacman.x + 1] === 5 || this.world[this.pacman.y][this.pacman.x + 1] === 6 || this.world[this.pacman.y][this.pacman.x + 1] === 7) {
                this.gameOver();
            }
            else if (this.world[this.pacman.y][this.pacman.x + 1] !== 1) {
                this.pacman.x += 1;
                this.world[this.pacman.y][this.pacman.x] = 11;
                this.world[this.pacman.y][this.pacman.x - 1] = 3;
            }
        }
    };
    ContactMeComponent.prototype.gameOver = function () {
        alert("Hire Me");
        window.open("http://localhost:8000/assets/images/resume.pdf", "_blank");
        window.location.reload();
    };
    ContactMeComponent.prototype.send = function () {
        if (!this.newEmail.subject || !this.newEmail.email || !this.newEmail.message) {
            alert('Please fill out all fields to send an email.');
        }
        else {
            var emails = this._httpService.sendEmail(this.newEmail);
            emails.subscribe(function (data) {
                console.log(data);
                console.log('hi');
            });
        }
        alert("Thank You for sending an email. I'll be sure to get back to you shortly");
        window.location.reload();
    };
    ContactMeComponent.prototype.ngOnDestroy = function () {
        if (this.timer1._subscriptions) {
            this.pausegame();
        }
    };
    ContactMeComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    ContactMeComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-me',
            template: __webpack_require__("./src/app/contact-me/contact-me.component.html"),
            styles: [__webpack_require__("./src/app/contact-me/contact-me.component.css")],
            host: {
                '(document:keyup)': 'onKeyUp($event)'
            }
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ContactMeComponent);
    return ContactMeComponent;
}());
exports.ContactMeComponent = ContactMeComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0;\n  font-size: 160%;\n  text-align: center;\n}\n\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[15];\n      grid-template-columns: repeat(15, 1fr);\n  grid-auto-rows: 50px;\n  max-width: 1000px;\n  padding: 16px;\n  grid-column-gap: 0.1em;\n  grid-row-gap: 0.1em;\n}\n\n.color{\n  background-color: saddlebrown;\n}\n\n.filled{\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-color: tan;\n  color: black;\n  outline: .1em solid peru;\n  outline-offset: -.1em;\n}\n\n.filledName{\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-color: tan;\n  color: black;\n  outline: .1em solid peru;\n  outline-offset: -.1em;\n  width: 1.2em;\n  text-align: center;\n  height: 1.2em;\n  font-size: 100%;\n  margin: .1em;\n}\n\n.blue{\n  background-color: cornflowerblue;\n}\n\n.red{\n  background-color: darkorange;\n}\n\n.pink{\n  background-color: hotpink;\n}\n\n.lightgreen{\n  background-color: limegreen;\n}\n\n#top { \n  -ms-grid-column: 1; \n      grid-column-start: 1; \n  grid-column-end: 16; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 2; \n  color: black;\n}\n\n#right { \n  -ms-grid-column: 15; \n      grid-column-start: 15; \n  grid-column-end: 15; \n  -ms-grid-row: 2; \n      grid-row-start: 2; \n  grid-row-end: 15; \n}\n\n#left { \n  -ms-grid-column: 1; \n      grid-column-start: 1; \n  grid-column-end: 1; \n  -ms-grid-row: 2; \n      grid-row-start: 2; \n  grid-row-end: 15; \n  }\n\n#bottom { \n    -ms-grid-column: 1; \n        grid-column-start: 1; \n    grid-column-end: 16; \n    -ms-grid-row: 15; \n        grid-row-start: 15; \n    grid-row-end: 16; \n    color: black;\n  }\n\n.border{\n    border: none;\n    border-radius: 0px;\n  }\n\ndiv {\n    border: 1.5px solid white;\n    background-color: wheat;\n    color: #d9480f;\n    width: 100%;\n    display: block;\n  }\n\np{\n    font-size: 118%;\n    color: white;\n    display: inline;\n    position: relative;\n    bottom: .1em;\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper color\">\n  <div class='border color' id=\"top\"><p>Klayten Richmond</p></div>\n  <div class='red'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='red'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='red'></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div [routerLink]=\"['../projects']\" class='filled'>P</div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div> \n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div [routerLink]=\"['../projects']\" class='filled'>R</div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>A</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>B</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>O</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>U</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>T</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>_</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>M</div>\n  <div [routerLink]=\"['../about-me']\" class='filled'>E</div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div [routerLink]=\"['../projects']\" class='filled'>J</div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div [routerLink]=\"['../projects']\" class='filled'>E</div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>C</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>O</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>N</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>T</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>A</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>C</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>T</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>_</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>M</div>\n  <div [routerLink]=\"['../contact-me']\" class='filled'>E</div>\n  <div></div>\n  <div></div>\n  <div class='red'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div [routerLink]=\"['../projects']\" class='filled'>T</div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div [routerLink]=\"['../skills']\" class='filled'>S</div>\n  <div [routerLink]=\"['../skills']\" class='filled'>K</div>\n  <div [routerLink]=\"['../skills']\" class='filled'>I</div>\n  <div [routerLink]=\"['../skills']\" class='filled'>L</div>\n  <div [routerLink]=\"['../skills']\" class='filled'>L</div>\n  <div [routerLink]=\"['../skills']\" class='filled'>S</div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div class='lightgreen'></div>\n  <div></div>\n  <div></div>\n  <div class='pink'></div>\n  <div></div>\n  <div class='red'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='red'></div>\n  <div></div>\n  <div></div>\n  <div class='blue'></div>\n  <div></div>\n  <div></div>\n  <div class='red'></div>\n  <div class='border color' id=\"right\">\n      <div class='filledName'>R</div>\n      <div class='filledName'>I</div>\n      <div class='filledName'>C</div>\n      <div class='filledName'>H</div>\n      <div class='filledName'>M</div>\n      <div class='filledName'>O</div>\n      <div class='filledName'>N</div>\n      <div class='filledName'>D</div>\n  </div>\n  <div class='border color' id=\"left\">\n      <div class='filledName'>K</div>\n      <div class='filledName'>L</div>\n      <div class='filledName'>A</div>\n      <div class='filledName'>Y</div>\n      <div class='filledName'>T</div>\n      <div class='filledName'>E</div>\n      <div class='filledName'>N</div>\n  </div>\n  <div class='border color' id=\"bottom\"><p>Klayten Richmond</p></div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.sendEmail = function (email) {
        console.log('service');
        return this._http.post('/send', email);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "*{\n    margin: 0 auto;\n    padding: 0;\n}\n#whole{\n    width: 87.75em;\n    height: 59.75em;\n    border: 2px solid blueviolet;\n    background-color: black;\n}\n#wrapper{\n    border: 2px solid rebeccapurple;\n    background-color: forestgreen;\n    display: inline-block;\n    width: 60em;\n    height: 55em;\n    vertical-align: top;\n    position: relative;\n}\nimg{\n    height: 30em;\n    margin: 0 -12.5em 0 2em;\n}\n#one{\n    position: relative;\n    top: .5em;\n}\n#two{\n    position: relative;\n    top: 1em;\n}\n#cardone{\n    background-image: url('/assets/images/card_front.png');\n    position: absolute;\n    bottom: 0;\n    right: 18em;\n    height: 30em;\n    width: 18em;\n    background-size: 100%;\n    display: inline-block;\n    background-repeat: no-repeat;\n}\n#cardtwo{\n    background-image: url('/assets/images/card_front.png');\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    height: 30em;\n    width: 18em;\n    background-size: 100%;\n    display: inline-block;\n    background-repeat: no-repeat;\n}\nh1{\n    font-size: 400%;\n    text-align: center;\n    padding-top: 1.5em;\n}\nh3{\n    border: 1px solid black;\n    overflow: scroll;\n    height: 10em;\n    width: 11em;\n    margin-top: 1em;\n}\nvideo{\n    margin-left: 2.8em;\n}\n#three{\n    position: relative;\n    top: 1.5em;\n}\n#four{\n    position: relative;\n    top: 2em;\n}\n.words > div {\n    border-radius: 50%;\n    width: 2em;\n    height: 2em;\n    display: inline-block;\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    background-image: url('/assets/images/chip.png');\n    background-size: 100%;\n    color: black;\n    text-align: center;\n    font-size: 200%;\n    margin: 1em -.345em;\n}\np{\n    position: relative;\n    top: .4em;\n    -webkit-transform: rotate(-40deg);\n            transform: rotate(-40deg);\n}\n#nav{\n    display: inline-block;\n    background-color: black;\n    border: none;\n    width: 25em;\n    height: 52em;\n    text-align: left;\n}\n.words{\n    -webkit-transform: rotate(40deg);\n            transform: rotate(40deg);\n    position: relative;\n    top: 7.5em;\n    left: .1em;\n}\n.tooltip {\n    display: inline-block;\n    width: 50%;\n}\n.tooltip .tooltiptext {\n    visibility: hidden;\n    background-color: black;\n    color: white;\n    text-align: center;\n    font-size: 200%;\n    position: relative;\n    bottom: 9em;\n}\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n:checked + #two{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"whole\">\n    <div id=\"nav\">\n        <div class=\"words\">\n            <div [routerLink]=\"['../home']\" class='filled'><p>H</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>M</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>E</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>B</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>U</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>T</p></div>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>K</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>I</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../projects']\" class='filled'><p>P</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>R</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>J</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>E</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">        \n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>N</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n        </div>\n    </div>\n\n    <div id=\"wrapper\">\n        <div class=\"tooltip\" id='cards'>\n            <img *ngIf='card1 == false' (click)='card1click()' id='one' src=\"assets/images/card_back.png\" alt=\"Card Back\">\n            <img *ngIf='card2 == false' (click)='card2click()' id='two' src=\"assets/images/card_back.png\" alt=\"Card Back\">\n            <span class=\"tooltiptext\">DRAW</span>\n        </div>    \n        <div id=\"display\">\n            <div *ngIf='card1 == true' id=\"cardone\">\n                <h1>More Coming Soon</h1>\n            </div>\n            <div *ngIf='card2 == true' id=\"cardtwo\">\n                <video width=\"200\" height=\"220\" controls>\n                    <source src=\"assets/images/stones.mp4\">\n                    Your browser does not support the video tag.\n                </video>\n                <h3>This is an e-commerce website I made as a solo project. The website has functionality for: logging in and registering, adding items to a cart, functional check-out(whether logged in or not). In addition, there is an Administrator function that allows the admin to: edit user information, delete users, add items to sell, view and complete orders made by customers. Technologies Used: HTML5, CSS3, Bootstrap, Django, and Python.</h3>\n            </div>\n        </div> \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.card1 = false;
        this.card2 = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.card1click = function () {
        this.card1 = true;
    };
    ProjectsComponent.prototype.card2click = function () {
        this.card2 = true;
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    margin: 0 auto;\n    padding: 0;\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n#wrapper{\n  width: 88em;\n  height: 60em;\n  border: 2px solid blueviolet;\n  background-color: black;\n}\n#rightside{\n  display: inline-block;\n  width: 52.2em;\n  height: 52.2em;\n  vertical-align: top;\n}\n#innerright { \n  display: -ms-grid; \n  display: grid; \n  -ms-grid-columns: (1fr)[13]; \n      grid-template-columns: repeat(13, 1fr); \n  width: 52.2em;\n  border: .1em solid black;\n  border-radius: 5px;\n  background-color: #fff4e6;\n  }\n.topleft { \n  -ms-grid-column: 1; \n      grid-column-start: 1; \n  grid-column-end: 3; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 3; \n  height: 8em;\n  width: 8em;\n}\n.topright { \n  -ms-grid-column: 12; \n      grid-column-start: 12; \n  grid-column-end: 14; \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 3; \n  height: 8em;\n  width: 8em;\n}\n.bottomleft { \n  -ms-grid-column: 1; \n      grid-column-start: 1; \n  grid-column-end: 3; \n  -ms-grid-row: 12; \n      grid-row-start: 12; \n  grid-row-end: 14; \n  height: 8em;\n  width: 8em;\n}\n.bottomright { \n  -ms-grid-column: 12; \n      grid-column-start: 12; \n  grid-column-end: 14; \n  -ms-grid-row: 12; \n      grid-row-start: 12; \n  grid-row-end: 14; \n  height: 8em;\n  width: 8em;\n}\n.middle { \n  -ms-grid-column: 3; \n      grid-column-start: 3; \n  grid-column-end: 12; \n  -ms-grid-row: 3; \n      grid-row-start: 3; \n  grid-row-end: 12; \n}\n.top { \n  -ms-grid-row: 1; \n      grid-row-start: 1; \n  grid-row-end: 3; \n  height: 8em;\n  width: 4em;\n}\n.left { \n  -ms-grid-column: 1; \n      grid-column-start: 1; \n  grid-column-end: 3; \n  height: 4em;\n  width: 8em;\n}\n.right { \n  -ms-grid-column: 12; \n      grid-column-start: 12; \n  grid-column-end: 14; \n  height: 4em;\n  width: 8em;\n}\n.bottom { \n  -ms-grid-row: 12; \n      grid-row-start: 12; \n  grid-row-end: 14; \n  height: 8em;\n  width: 4em;\n}\n#innerright > div{\n  margin: 0em;\n}\n#innerright > div {\n  border: 2px solid black;\n  background-color: #cce3c6;\n}\n.red{\n  background: -webkit-gradient(linear, left top, left bottom, from(red), color-stop(#cce3c6), to(#cce3c6));\n  background: linear-gradient(red, #cce3c6, #cce3c6);\n}\n#red{\n  color: red;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 1.75em;\n  right: .75em;\n}\n.green{\n  background: -webkit-gradient(linear, right top, left top, from(green), color-stop(#cce3c6), to(#cce3c6));\n  background: linear-gradient(to left, green, #cce3c6, #cce3c6);\n}\n#green{\n  color: green;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: relative;\n  top: 2em;\n  left: .25em;\n}\n.blue{\n  background: -webkit-gradient(linear, left bottom, left top, from(blue), color-stop(#cce3c6), to(#cce3c6));\n  background: linear-gradient(to top, blue, #cce3c6, #cce3c6);\n}\n#blue{\n  color: blue;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 3em;\n  left: .8em;\n}\n.purple{\n  background: -webkit-gradient(linear, left bottom, left top, from(purple), color-stop(#cce3c6), to(#cce3c6));\n  background: linear-gradient(to top, purple, #cce3c6, #cce3c6);\n}\n#purple{\n  color: purple;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 2.25em;\n  left: 2.15em;\n}\n.orange{\n  background: -webkit-gradient(linear, left top, right top, from(orange), color-stop(#cce3c6), to(#cce3c6));\n  background: linear-gradient(to right, orange, #cce3c6, #cce3c6);\n}\n#orange{\n  color: orange;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: relative;\n  top: 3em;\n  right: .85em;\n  text-align: center;\n}\nimg{\n  height: 3em;\n}\n#languages{\n  position: relative;\n  top: 1.5em;\n  left: 3em;\n}\n#learning{\n  position: relative;\n  bottom: 2.5em;\n  left: 2.5em;\n}\n#database{\n  position: relative;\n  bottom: .8em;\n  left: .3em;\n}\n#framework{\n  position: relative;\n  top: 3em;\n  left: 2em;\n}\n#title{\n  font-size: 4.1em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 2.5em;\n  border: black .05em solid;\n  text-align: center;\n}\n#arrow_up{\n  height: 8em;\n  position: relative;\n  right: 1.6em;\n  bottom: 4.9em;\n}\n#arrow_right{\n  height: 5em;\n  position: relative;\n  bottom: 7.7em;\n}\n#arrow_down{\n  height: 8em;\n  position: relative;\n  bottom: 6.5em;\n  left: 4.3em;\n}\n#arrow_left{\n  height: 5em;\n  position: relative;\n  bottom: .4em;\n}\n.db_words{\n  text-align: center;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 2.5em;\n  right: .5em;\n}\n.framework_words{\n  text-align: center;\n  -webkit-transform: rotate(-35deg);\n          transform: rotate(-35deg);\n  position: relative;\n  top: 2em;\n  right: 3em;\n}\n.language_words{\n  text-align: center;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: relative;\n  top: 7.4em;\n}\n.learning_words{\n  text-align: center;\n  -webkit-transform: rotate(35deg);\n          transform: rotate(35deg);\n  position: relative;\n  top: 2em;\n  left: 2em;\n}\n.left_skill_words{\n  text-align: center;\n  -webkit-transform: rotate(-35deg);\n          transform: rotate(-35deg);\n  position: relative;\n  top: 2.2em;\n  left: 2em;\n}\n.right_skill_words{\n  text-align: center;\n  -webkit-transform: rotate(35deg);\n          transform: rotate(35deg);\n  position: relative;\n  top: 2.2em;\n  right: 1.7em;\n}\n.rightpics{\n  position: relative;\n  left: 4.6em;\n  bottom: .5em\n}\n.top_skill_words{\n  text-align: center;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: relative;\n  top: 2.8em;\n  right: .7em;\n}\n.bottom_skill_words{\n  text-align: center;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: relative;\n  top: 2em;\n  right: .5em;\n}\n.bottompics{\n  position: relative;\n  top: 2.8em;\n  left: .3em;\n}\n#left{\n  height: 7em;\n  width: 14em;\n  border: dashed .1em black;\n  position: relative;\n  top: 2em;\n  right: 9em;\n  background-image: url('/assets/images/bubble.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#right{\n  height: 7em;\n  width: 14em;\n  border: dashed .1em black;\n  position: relative;\n  top: 15em;\n  left: 9em;\n  background-image: url('/assets/images/point.png');\n  background-position: center;\n  background-size: 50%;\n  background-repeat: no-repeat;\n}\n.words > div {\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  display: inline-block;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-image: url('/assets/images/chip.png');\n  background-size: 100%;\n  color: black;\n  text-align: center;\n  font-size: 200%;\n  margin: 1em -.35em;\n}\np{\n  position: relative;\n  top: .4em;\n  -webkit-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n}\n#nav{\n  display: inline-block;\n  background-color: black;\n  border: none;\n  width: 25em;\n  height: 52em;\n  text-align: left;\n}\n.words{\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  position: relative;\n  top: 7.5em;\n  left: .1em;\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <div id=\"nav\">\n        <div class=\"words\">\n            <div [routerLink]=\"['../home']\" class='filled'><p>H</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>M</p></div>\n            <div [routerLink]=\"['../home']\" class='filled'><p>E</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>B</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>U</p></div>\n            <div [routerLink]=\"['../about-me']\" class='filled'><p>T</p></div>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>K</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>I</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>L</p></div>\n            <div [routerLink]=\"['../skills']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">\n            <div [routerLink]=\"['../projects']\" class='filled'><p>P</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>R</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>J</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>E</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../projects']\" class='filled'><p>S</p></div><br>\n        </div>\n        <div class=\"words\">        \n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>O</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>N</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>A</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>C</p></div>\n            <div [routerLink]=\"['../contact-me']\" class='filled'><p>T</p></div>\n        </div>\n    </div>\n    <div id=\"rightside\">\n        <div id='innerright'>\n            <div class=\"topleft\"> \n                <H3 id='blue'>DATABASES</H3>\n                <H3 id='purple'>SERVERS</H3>\n                <img id='database' src=\"assets/images/database.png\" alt=\"database\">\n                <img id='arrow_right' src=\"assets/images/arrow_right.png\" alt=\"right arrow\">\n            </div>\n            <div class='top blue'>\n                <h6 class='db_words'>MYSQL</h6>\n            </div>\n            <div class='top blue'>\n                <h6 class='db_words'>MONGODB</h6>\n            </div>\n            <div class='top'>\n                <img src=\"assets/images/bubble.png\" alt=\"dialogue bubble\">\n                <h6 class='top_skill_words'>CONFIDENT</h6>\n            </div>\n            <div class='top blue'>\n                <h6 class='db_words'>POSTGRESQL</h6>\n            </div>\n            <div class='top'>\n                <img src=\"assets/images/briefcase.png\" alt=\"briefcase\">\n                <h6 class='top_skill_words'>AUTODIDACTIC</h6>\n            </div>\n            <div class='top blue'>\n                <h6 class='db_words'>MONGOOSE</h6>\n            </div>\n            <div class='top'>\n                <img src=\"assets/images/brain.png\" alt=\"brain\">\n                <h6 class='top_skill_words'>CREATIVE</h6>\n            </div>\n            <div class='top'>\n                <img src=\"assets/images/lightbulb.png\" alt=\"lightbulb\">\n                <h6 class='top_skill_words'>FUNNY</h6>\n            </div>\n            <div class='top purple'>\n                <h6 class='db_words'>NODEJS</h6>\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>EXPRESS</h6>\n            </div>\n            <div class='right orange'>\n                <h6 class='learning_words'>C#</h6>\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>ANGULAR</h6>\n            </div>\n            <div class='right orange'>\n                <h6 class='learning_words'>REACT</h6>\n            </div>\n            <div class='left'>\n                <h6 class='left_skill_words'>TRUSTWORTHY</h6>\n                <img src=\"assets/images/point.png\" alt=\"point\">\n            </div>\n            <div class='right'>\n                <h6 class='right_skill_words'>DEPENDABLE</h6>\n                <img class='rightpics' src=\"assets/images/point.png\" alt=\"point\">\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>DJANGO</h6>\n            </div>\n            <div class='right orange'>\n                <h6 class='learning_words'>JAVA</h6>\n            </div>\n            <div class='left'>\n                <h6 class='left_skill_words'>INITIATIVE</h6>\n                <img src=\"assets/images/briefcase.png\" alt=\"briefcase\">\n            </div>\n            <div class='right'>\n                <h6 class='right_skill_words'>ADAPTABLE</h6>\n                <img class='rightpics' src=\"assets/images/briefcase.png\" alt=\"briefcase\">\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>EMBER</h6>\n            </div>\n            <div class='right'>\n                <h6 class='right_skill_words'>NATURAL LEADER</h6>\n                <img class='rightpics' src=\"assets/images/bubble.png\" alt=\"bubble\">\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>RAILS</h6>\n            </div>\n            <div class='right orange'>\n                <h6 class='learning_words'>PHP</h6>\n            </div>\n            <div class='left'>\n                <h6 class='left_skill_words'>LOGICAL</h6>\n                <img src=\"assets/images/brain.png\" alt=\"brain\">\n            </div>\n            <div class='right'>\n                <h6 class='right_skill_words'>CURIOUS</h6>\n                <img class='rightpics' src=\"assets/images/lightbulb.png\" alt=\"lightbulb\">\n            </div>\n            <div class='left green'>\n                <h6 class='framework_words'>RSPEC</h6>\n            </div>\n            <div class='right orange'>\n                <h6 class='learning_words'>SPRING</h6>\n            </div>\n            <div class='middle'>\n                <div id=\"left\"></div>\n                <h1 id='title'>SKILLS & TRAITS</h1>\n                <div id=\"right\"></div>\n            </div>\n            <div class=\"topright\">\n                <H3 id=\"orange\">CURRENTLY LEARNING</H3>\n                <img id='learning' src=\"assets/images/learning.png\" alt=\"learning\">\n                <img id='arrow_down' src=\"assets/images/arrow_down.png\" alt=\"down arrow\">\n            </div>\n            <div class=\"bottomleft\">\n                <H3 id=\"green\">FRAMEWORKS</H3>\n                <img id='framework' src=\"assets/images/framework.png\" alt=\"framework\">\n                <img id='arrow_up' src=\"assets/images/arrow_up.png\" alt=\"up arrow\">\n            </div>\n            <div class='bottom red'>\n                <h6 class='language_words'>HTML5</h6>\n            </div>\n            <div class='bottom red'>\n                <h6 class='language_words'>CSS3</h6>\n            </div>\n            <div class='bottom'>\n                <h6 class='bottom_skill_words'>SKILLED ORATOR</h6>\n                <img class='bottompics' src=\"assets/images/bubble.png\" alt=\"bubble\">\n            </div>\n            <div class='bottom red'>\n                <h6 class='language_words'>PYTHON</h6>\n            </div>\n            <div class='bottom'>\n                <h6 class='bottom_skill_words'>MANAGES TIME WELL</h6>\n                <img class='bottompics' src=\"assets/images/briefcase.png\" alt=\"briefcase\">\n            </div>\n            <div class='bottom'>\n                <h6 class='bottom_skill_words'>PASSIONATE</h6>\n                <img class='bottompics' src=\"assets/images/lightbulb.png\" alt=\"lightbulb\">\n            </div>\n            <div class='bottom red'>\n                <h6 class='language_words'>RUBY</h6>\n            </div>\n            <div class='bottom'>\n                <h6 class='bottom_skill_words'>ENTHUSIASTIC</h6>\n                <img class='bottompics' src=\"assets/images/point.png\" alt=\"point\">\n            </div>\n            <div class='bottom red'>\n                <h6 class='language_words'>JAVASCRIPT</h6>\n            </div>\n            <div class=\"bottomright\">\n                <H3 id=\"red\">LANGUAGES</H3>\n                <img id='languages' src=\"assets/images/languages.png\" alt=\"languages\">\n                <img id='arrow_left' src=\"assets/images/arrow_left.png\" alt=\"left arrow\">\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map