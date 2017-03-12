import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal'
import { GoalService } from '../goal.service'

@Component({
  selector: 'goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css'],
  providers: [GoalService]
})
export class GoalListComponent implements OnInit {

  goals: Goal[]

  constructor(private goalService: GoalService) { }

  ngOnInit() {
    this.getGoals();
  }

  getGoals(): void {
    this.goalService.getGoals().then( goals => this.goals = goals);
  }

}
