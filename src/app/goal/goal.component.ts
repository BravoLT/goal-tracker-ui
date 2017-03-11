import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id: string
  description: string
  subGoals: GoalComponent[]
  startDate: string
  endDate: string
  who: string

}
