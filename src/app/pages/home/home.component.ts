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
  public contract: Contract;
  public priceWithVat: number;
  public priceWithoutVat: number;
  public apiURL: string;
  constructor( private dataService: DataService ) {
    this.priceWithoutVat = 0;
    this.priceWithVat = 0;
    this.apiURL = environment.app.apiURL;
  }

  ngOnInit(): void {
    // Obtener la información del contrato
    this.getContractData();
  }

  getContractData(): void {
    this.dataService.getContractData('76bde480-70de-484b-4b87-c993642d8130-008c').subscribe(contract => {
      this.contract = contract;
      console.log(this.contract);
      this.priceWithVat = this.contract.total_amount + (this.contract.total_amount * this.contract.vat);
      this.priceWithoutVat = this.contract.total_amount;
    }, error => {
      console.log(error.error);
    });
  }

}
