import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Goal } from './goal';

@Injectable()
export class GoalService {
  private goalServiceUrl : string = 'http://localhost:8080/';

  constructor(private http: Http) {
  }

  getGoals() : Observable<Goal[]> {
    return this.http.get(`${this.goalServiceUrl}goals`)
              .map(res => res.json())
              .catch(error => Observable.throw(error.json().error || 'Server error'));
  }

  getGoal(id : string) : Observable<Goal> {
    return this.http.get(`${this.goalServiceUrl}goal/${id}`)
              .map(res => res.json())
              .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
}