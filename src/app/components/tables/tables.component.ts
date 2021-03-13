import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';
import { ContractItem } from '../../models/contract-item.interfaces';
import { Contract } from '../../models/contract.interfaces';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [
  ]
})
export class TablesComponent implements OnInit {
  public apiURL: string;
  public contractItems: ContractItem[];

  // Propiedades de totales de cada columna de la tabla
  public subtotals: number[];
  public ivaQuantities: number[];
  public totals: number[];

  @Input() public contract: Contract;
  constructor( private dataService: DataService ) {
    this.apiURL = environment.app.apiURL;
    this.subtotals = [];
    this.contractItems = [];
    this.ivaQuantities = [];
    this.totals = [];
  }

  ngOnInit(): void {
    this.getContractItems();
    console.log(this.contract.down_payment * this.contract.total_amount);
  }

  get percentPorgressbar(): number {
    return Math.ceil(this.contract.total_amount / this.printTotalsTable('estimate'));
  }

  printTotalsTable(field: string): number {
    let result = 0;
    switch (field) {
      case 'subtotal':
        this.subtotals.forEach(item => {
          result += item;
        });
        return  result;
        break;
      case 'iva':
        this.ivaQuantities.forEach(item => {
          result += item;
        });
        return  result;
        break;
      case 'total':
        this.totals.forEach(item => {
          result += item;
        });
        return  result;
        break;
      default:
        this.contractItems.forEach(item => {
          result += item[field];
        });
        return  result;
    }

  }


  getContractItems(): void {
    this.dataService.getContractItems('76bde480-70de-484b-4b87-c993642d8130-008c', '772f25c98a804fb29a7c3a69f8b9a4b5')
      .subscribe(contractItems => {
        this.contractItems = contractItems;
        // Obtener las cantidades totales de cada columna de la tabla
        this.getTableTotals();
      }, error => {
        console.log(error);
      });
  }

  getTableTotals(): void {
    // Recorrer cada item del contrato y sacar el subtotal
    this.contractItems.forEach(({down_payment, estimate, guarantee_fund}) => {

      // Obtener el subtotal de cada elemento
      const result = estimate + down_payment + guarantee_fund;
      this.subtotals.push(result);

      // Obtener la cantidad de IVA por cada elemento
      const ivaQuantity = result * this.contract.vat;
      this.ivaQuantities.push(ivaQuantity);

      // Obtener el total de cada elemento
      const total = result + ivaQuantity;
      this.totals.push(total);

    });

  }



}
