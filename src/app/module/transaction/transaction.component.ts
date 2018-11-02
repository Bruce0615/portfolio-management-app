import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    public transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getTransaction();
  }

  get transactionsData() {
    return this.transactionService.transactionHistory;
  }

}
