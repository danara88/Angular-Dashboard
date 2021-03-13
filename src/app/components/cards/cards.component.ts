import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

import { Contract } from '../../models/contract.interfaces';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {
  public priceWithVat: number;
  public priceWithoutVat: number;
  public apiURL: string;
  @Input() public contract: Contract;
  constructor( private dataService: DataService ) {
    this.priceWithoutVat = 0;
    this.priceWithVat = 0;
    this.apiURL = environment.app.apiURL;
  }

  ngOnInit(): void {
    // Cargar el precio con IVA y sin IVA
    this.priceWithVat = this.contract.total_amount + (this.contract.total_amount * this.contract.vat);
    this.priceWithoutVat = this.contract.total_amount;
  }


}
