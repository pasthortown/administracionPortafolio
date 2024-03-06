import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfoliocostComponent } from './porfoliocost.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PorfoliocostComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PorfoliocostComponent]
})
export class PorfoliocostModule { }
