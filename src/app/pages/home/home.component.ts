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
  constructor( private dataService: DataService ) {
    this.apiURL = environment.app.apiURL;
  }

  ngOnInit(): void {

  }



}
