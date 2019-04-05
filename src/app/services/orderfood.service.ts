import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL, localURL } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class OrderfoodService {

  constructor(private http: HttpClient) { }

  getDCList() {
    return this.http.get(apiURL + '/getAllDC');
  }

  getFcCList(dcId) {
    return this.http.post(apiURL + '/getFCList', { dcId });
  }

  getVendorList(dcId, fcId, menuType) {
    return this.http.post(apiURL + '/getMenuFC', { dcId, fcId, menuType });
  }

  getItemList(dcId, fcId, menuType, vendorId, counterId) {
    return this.http.post(apiURL + '/getItemList', { dcId, fcId, menuType, vendorId, counterId });
  }
}
