import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  card1: boolean = false;
  card2: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  card1click(){
    this.card1 = true;
  }
  card2click(){
    this.card2 = true;
  }

}
