import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab9PageRoutingModule } from './lab9-routing.module';

import { Lab9Page } from './lab9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab9PageRoutingModule
  ],
  declarations: [Lab9Page]
})
export class Lab9PageModule {}
