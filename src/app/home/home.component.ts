import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Grant } from '../grant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'mshpGrantNumber', 'nickName', 'component','createBy','grantName','division','remainingBal'];
data: Grant[] = [];
isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getGrants()
    .subscribe(res =>
      {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }  

}
