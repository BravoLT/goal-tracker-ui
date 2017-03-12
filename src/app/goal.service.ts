import { Injectable } from '@angular/core';
import { Goal } from './goal/goal';

@Injectable()
export class GoalService {

  goals: Goal[]

  constructor() { 
    this.goals = [
      {id:"1", description: "Do some ok stuff", start: "3/1/2017", end: "3/31/2017", who: {id:"own1", name: "Mike"}},
      {id:"2", description: "Do some amazing stuff", start: "3/1/2017", end: "3/31/2017", who: {id:"own1", name: "Dave"}},
      {id:"3", description: "Do some cool stuff", start: "4/1/2017", end: "4/30/2017", who: {id:"own1", name: "Dustin"}},
      {id:"4", description: "Do some awesome stuff", start: "4/1/2017", end: "5/31/2017", who: {id:"own1", name: "Nick"}}
    ];
  }

  getGoals() : Promise<Goal[]> {
    return Promise.resolve(this.goals)
  }
}
