import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistComponent } from './watchlist.component';

@NgModule({
  imports: [
    CommonModule,
    WatchlistRoutingModule
  ],
  declarations: [WatchlistComponent]
})
export class WatchlistModule { }
