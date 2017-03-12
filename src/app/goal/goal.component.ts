import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal'
import { GoalService } from '../goal.service'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goal: Goal

  constructor(private goalService: GoalService, private location : Location, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.goal = new Goal();
    this.getGoal(this.activatedRoute.snapshot.params['id']);
  }

  getGoal(id : string): void {
    this.goalService.getGoal(id).subscribe(goal => 
      this.goal = goal);
  }

  goBack() : void {
    this.location.back();
  }
}
