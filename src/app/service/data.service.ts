import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  
  stocksData: any = [];
  ownStocksData: any = [];
  watchlist: any = [];
  balance: number;

  constructor(private http: Http) { }

  getStocksData(searchText) {
    if (searchText == '') {
      this.stocksData = this.stocksData || [];
    } else {
      this.http.get(environment.stockModelUrl)   
      .subscribe((res) => {
        let data : any = {};
        let result = res.text();      
        data = JSON.parse(result);       
        this.stocksData = data.stocks.filter(item => 
          item.name.toUpperCase().includes(searchText.toUpperCase()) || item.ticker.toUpperCase().includes(searchText.toUpperCase())) || [];   
      }) 
    }
  }

  getOwnStocksData() {
    this.ownStocksData = JSON.parse(localStorage.getItem("ownstockdata")) || [];
    return this.ownStocksData;
  }

  setOwnStocksData(obj: any, action="") {
    this.ownStocksData = this.ownStocksData || []; 
    if(action == 'insert'){
      this.ownStocksData.push(obj);
    } 
    localStorage.setItem("ownstockdata", JSON.stringify(this.ownStocksData));   
  }  

  getBalance() {
    this.balance = Number(window.localStorage.getItem('balance'));
    return this.balance;
  }

  setBalance(balance) {
    window.localStorage.setItem('balance', balance);   
  }

  getWatchlist() {
    this.watchlist = JSON.parse(window.localStorage.getItem("watchlist")) || [];
    return this.watchlist;
  }

  setWatchlist(obj: any, action="") {
    this.watchlist = this.watchlist || [];
    if(action == "insert") {
      this.watchlist.push(obj);
    }
    localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
  }

}
