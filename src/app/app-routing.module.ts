import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalListComponent } from './goal-list/goal-list.component'
import { GoalComponent } from './goal/goal.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/goals',
    pathMatch: 'full'
  },
  {
    path: 'goals',
    component: GoalListComponent
  },
  {
    path: 'goal/:id',
    component: GoalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
