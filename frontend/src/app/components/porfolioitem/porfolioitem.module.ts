import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioitemComponent } from './porfolioitem.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PorfolioitemComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [PorfolioitemComponent]
})
export class PorfolioitemModule { }
