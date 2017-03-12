import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }

  goBack() : void {
      this.location.back();
  }
}
