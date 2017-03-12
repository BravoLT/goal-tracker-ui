import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Goal } from './goal';

@Injectable()
export class GoalService {
  private goalServiceUrl ='http://localhost:8080/goals'

  constructor(private http: Http) { 
  }

  getGoals() : Observable<Goal[]> {
    return this.http.get(this.goalServiceUrl)
              .map(res => res.json())
              .catch(error => Observable.throw(error.json().error || 'Server error'));

  }
}