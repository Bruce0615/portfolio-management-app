import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockSearchRoutingModule } from './stock-search-routing.module';
import { StockSearchComponent } from './stock-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockSearchRoutingModule
  ],
  declarations: [StockSearchComponent]
})
export class StockSearchModule { }
