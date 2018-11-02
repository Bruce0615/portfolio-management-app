import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockSearchComponent } from './stock-search.component';

const routes: Routes = [
  {
    path: '',
    component: StockSearchComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockSearchRoutingModule { }
