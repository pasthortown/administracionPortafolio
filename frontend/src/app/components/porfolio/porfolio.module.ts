import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioComponent } from './porfolio.component';
import { FormsModule } from '@angular/forms';
import { PorfoliocostModule } from '../porfoliocost/porfoliocost.module';
import { PorfolioitemModule } from '../porfolioitem/porfolioitem.module';



@NgModule({
  declarations: [PorfolioComponent],
  imports: [
    CommonModule,
    PorfoliocostModule,
    PorfolioitemModule,
    FormsModule
  ],
  exports: [PorfolioComponent]
})
export class PorfolioModule { }
