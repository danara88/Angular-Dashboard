import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Contract } from '../models/contract.interfaces';
import { ContractItem } from '../models/contract-item.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiBase: string;
  constructor( private http: HttpClient ) {
    this.apiBase = environment.apiURL;
  }

  getContractData( projectId: string ): Observable<Contract> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Contract>(`${ this.apiBase }/projects/${ projectId }/contracts`)
      .pipe( map((resp: any) => resp.results[0]) );
  }
}
