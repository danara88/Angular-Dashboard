import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';
import {ContractItem} from '../../models/contract-item.interfaces';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [
  ]
})
export class TablesComponent implements OnInit {
  public apiURL: string;
  public contractItems: ContractItem[]
  constructor( private dataService: DataService ) {
    this.apiURL = environment.app.apiURL;
  }

  ngOnInit(): void {
    this.getContractItems();
  }

  getContractItems(): void {
    this.dataService.getContractItems('76bde480-70de-484b-4b87-c993642d8130-008c', '772f25c98a804fb29a7c3a69f8b9a4b5')
      .subscribe(contractItems => {
        this.contractItems = contractItems;
        console.log(this.contractItems);
      }, error => {
        console.log(error);
      });
  }

}
