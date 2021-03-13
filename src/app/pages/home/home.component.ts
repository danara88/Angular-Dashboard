import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

import { Contract } from '../../models/contract.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public apiURL: string;
  public contract: Contract;
  constructor( private dataService: DataService ) {
    this.apiURL = environment.app.apiURL;
  }

  ngOnInit(): void {
    this.getContractData();
  }

  getContractData(): void {
    this.dataService.getContractData('76bde480-70de-484b-4b87-c993642d8130-008c').subscribe(contract => {
      this.contract = contract;
    }, error => {
      console.log(error.error);
    });
  }



}
