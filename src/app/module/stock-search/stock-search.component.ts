import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SwalManagerService } from '../../service/swal-manager.service';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  searchText: any = "";

  constructor(
    public dataService : DataService,
    public transactionService: TransactionService,
    public swalManager: SwalManagerService
  ) { }

  ngOnInit() {
  }

  searchStock() {
    this.dataService.getStocksData(this.searchText);
  }

  get stocksData() {
    return this.dataService.stocksData;
  }

  buyStock(i) {    
    this.swalManager.confirmInput("", "Input Count", "number").then((result) => {
      if(result.value > 0){
        let cost = result.value * this.stocksData[i].value;
        if ( this.dataService.balance > cost){
          this.dataService.setBalance(this.dataService.balance - cost);          
          const stockData = {name: this.stocksData[i].name, ticker: this.stocksData[i].ticker, price: this.stocksData[i].value, count: result.value, date: new Date()};
          this.dataService.setOwnStocksData(stockData,"insert");
          const transaction = { action: 'Buy', debit: cost, credit: 0, date: new Date()};
          this.transactionService.addTransaction(transaction); 
          this.swalManager.success("Buy Successfully");
        } else {
          this.swalManager.error("No Suffient Balance");
        }        
      }
    });
  }

  addToWatchlist(i) {
    this.swalManager.confirm("", "Are you sure to add this stock to your watchlist").then((result) => {
      if(result.value) {
        this.dataService.setWatchlist(this.stocksData[i], "insert");
      }
    });
  }

  isInWatchlist(obj: any) {
    this.dataService.watchlist = this.dataService.watchlist || [];
    if(this.dataService.watchlist.find( element => element.ticker === obj.ticker)) {
      return true;
    }
    return false; 

  }

}
