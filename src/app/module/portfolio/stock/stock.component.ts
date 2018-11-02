import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { SwalManagerService } from '../../../service/swal-manager.service';
import { TransactionService } from '../../../service/transaction.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  constructor(
    public dataService: DataService,
    public transactionService: TransactionService,
    public swalManager: SwalManagerService
  ) { }

  ngOnInit() {
    this.dataService.getOwnStocksData();    
  }

  get ownStocksData() {
    return this.dataService.ownStocksData;
  }

  set ownStocksData(value) {
    this.dataService.ownStocksData = value;
  }

  get stocksData() {
    return this.dataService.getStocksData;
  }
  sellStock(i) {
    this.swalManager.confirmInput("", "Input Count", "number").then((result) => { 
      if(result.value) {
        if(Number(result.value) < Number(this.ownStocksData[i].count)) {
          let count = this.ownStocksData[i].count - result.value;
          this.ownStocksData[i].count = count;
          //update
          this.dataService.setOwnStocksData(this.ownStocksData, "update");
          this.dataService.setBalance(Number(this.dataService.balance) + Number(this.ownStocksData[i].price * result.value));
          const transaction = {action: 'Sell', debit: 0, credit: Number(this.ownStocksData[i].price) * Number(result.value), date: new Date()};
          this.transactionService.addTransaction(transaction);
        } else if (Number(result.value) === Number(this.ownStocksData[i].count)) {
          //remove
          this.ownStocksData.splice(i, 1);
          this.dataService.setOwnStocksData(this.ownStocksData,"remove");
          this.dataService.setBalance(this.dataService.balance + this.ownStocksData[i].price * result.value);
          const transaction = {action: 'Sell', debit: 0, credit: this.ownStocksData[i].price * result.value, date: new Date()};
          this.transactionService.addTransaction(transaction);
        } else {
          this.swalManager.error("no enough stocks to sell");
        }
      }     

    });
    
  }

}
