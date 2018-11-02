import { Injectable } from '@angular/core';

@Injectable()
export class TransactionService {
  transactionHistory: any = [];  

  constructor() { }

  addTransaction(obj: any){
    this.transactionHistory = this.transactionHistory || [];
    this.transactionHistory.push(obj);
    localStorage.setItem("transaction", JSON.stringify(this.transactionHistory));
  }

  getTransaction() {
    this.transactionHistory = JSON.parse(localStorage.getItem("transaction")) || [];
    return this.transactionHistory;
  }

}
