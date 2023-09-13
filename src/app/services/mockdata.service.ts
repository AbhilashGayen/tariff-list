import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {
  private url = 'assets/mockdata.json';

  constructor(private http: HttpClient) { }

  getMockdata(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.url);
  }
}
