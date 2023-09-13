import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {
  private url = 'assets/mockdata.json';

  constructor(private http: HttpClient) { }

  getMockdata(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
