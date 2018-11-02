import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './/app-routing.module';
import { PortfolioModule } from './module/portfolio/portfolio.module';
import { WatchlistModule } from './module/watchlist/watchlist.module';
import { TransactionModule } from './module/transaction/transaction.module'; 

import { DataService } from './service/data.service';
import { TransactionService } from './service/transaction.service';
import { SwalManagerService } from './service/swal-manager.service';
import { StockSearchModule } from './module/stock-search/stock-search.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PortfolioModule,
    WatchlistModule,
    TransactionModule,
    StockSearchModule
  ],
  providers: [
    DataService,
    TransactionService,
    SwalManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
