import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { SwalManagerService } from '../../../service/swal-manager.service';
import { TransactionService } from '../../../service/transaction.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {  
  depositAmount: number = 0;
  withdrawAmount: number = 0;

  constructor(
    public dataServcie: DataService,
    public transactionServcie: TransactionService,
    public swalManager: SwalManagerService

  ) { }

  ngOnInit() {
    this.dataServcie.getBalance();
  }

  get balance() {
    return this.dataServcie.getBalance();
  }

  set balance(value) {
    this.dataServcie.setBalance(value);
  }

  deposit (){
    this.swalManager.confirm("","Are you sure to deposit into account? ").then((result) => {
      if(result.value) {
        this.dataServcie.setBalance(Number(this.depositAmount) + Number(this.balance)); 
        const transaction = { action: 'Deposit', debit: 0, credit: this.depositAmount, date: new Date()};
        this.transactionServcie.addTransaction(transaction);  
        this.swalManager.success("Deposit Successfully");  
        this.depositAmount = 0;
   
      }
    })
  }

  withdraw (){
    this.swalManager.confirm("","Are you sure to widthdraw from account? ").then((result) => {
      if(result.value) {
        if(Number(this.balance) >= Number(this.withdrawAmount))
        {
          this.dataServcie.setBalance(Number(this.balance) - Number(this.withdrawAmount));
          const transaction = { action: 'Withdraw', debit: this.withdrawAmount, credit: 0, date: new Date()};
          this.transactionServcie.addTransaction(transaction);  
          this.swalManager.success("Withdraw Successfully"); 
        } else {
          this.swalManager.error("No Suffient Balance");
        }
        this.withdrawAmount = 0;  
      }
    })
  }
}
