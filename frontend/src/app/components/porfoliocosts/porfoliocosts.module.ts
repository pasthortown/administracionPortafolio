import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfoliocostsComponent } from './porfoliocosts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PorfoliocostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ PorfoliocostsComponent ]
})
export class PorfoliocostsModule { }
