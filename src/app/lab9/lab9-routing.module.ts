import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab9Page } from './lab9.page';

const routes: Routes = [
  {
    path: '',
    component: Lab9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab9PageRoutingModule {}
