import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SwalManagerService } from '../../service/swal-manager.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public swalManager: SwalManagerService
  ) { }

  ngOnInit() {
    this.dataService.getWatchlist();
    }

  get watchlistData() {
    return this.dataService.watchlist;
  }

  removeWatchlist(i) {
    this.swalManager.confirm("", "Are you sure to remove this stock from wathlist").then((result)=>{
      if(result.value)
      {
        this.watchlistData.splice(i, 1);
        this.dataService.setWatchlist(this.watchlistData, "remove");
        this.swalManager.success("Remove Successfully");
      }
    });    
  }


}
