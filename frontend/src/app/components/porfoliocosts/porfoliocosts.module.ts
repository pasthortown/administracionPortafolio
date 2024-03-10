import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfoliocostsComponent } from './porfoliocosts.component';



@NgModule({
  declarations: [
    PorfoliocostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ PorfoliocostsComponent ]
})
export class PorfoliocostsModule { }
