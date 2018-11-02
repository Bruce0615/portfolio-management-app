import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { AccountComponent } from './account/account.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent, AccountComponent, StockComponent]
})
export class PortfolioModule { }
