import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioComponent } from './porfolio.component';
import { FormsModule } from '@angular/forms';
import { PorfoliocostsModule } from '../porfoliocosts/porfoliocosts.module';

@NgModule({
  declarations: [PorfolioComponent],
  imports: [
    CommonModule,
    PorfoliocostsModule,
    FormsModule
  ],
  exports: [PorfolioComponent]
})
export class PorfolioModule { }
