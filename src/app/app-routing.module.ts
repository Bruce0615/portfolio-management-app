import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const ROUTES: Routes = [
  {
    path: 'portfolio',
    loadChildren: './module/portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'watchlist',
    loadChildren: './module/watchlist/watchlist.module#WatchlistModule'
  },
  {
    path: 'stocksearch',
    loadChildren: './module/stock-search/stock-search.module#StockSearchModule'
  },
  {
    path: 'transaction',
    loadChildren: './module/transaction/transaction.module#TransactionModule'
  },
  {
    path: '', redirectTo: '/portfolio', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
