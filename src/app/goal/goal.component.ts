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

/*
This is a fairly naive implementation, should probably use the graph db to walk the 
tree and aggregate percentages.
*/
  percentComplete() {
    if (this.subGoals.length == 0) {
      return this.done ? 1 : 0
    }

    let completedGoals: number = 0
    for(let subgoal of this.subGoals) {
      if(subgoal.done) {
        completedGoals++
      }
    }

    return completedGoals/this.subGoals.length
  }

  id: string
  description: string
  subGoals: GoalComponent[]
  startDate: string
  endDate: string
  who: string
  done: boolean
}
