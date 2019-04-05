import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class OrderfoodService {

  constructor(private http: HttpClient) { }

  getDCList() {
    return this.http.get(apiURL + '/getAllDC');
  }
}
