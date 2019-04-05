import { Component, OnInit } from '@angular/core';
import { OrderfoodService } from '../services/orderfood.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selectfood',
  templateUrl: './selectfood.component.html',
  styleUrls: ['./selectfood.component.css']
})
export class SelectfoodComponent implements OnInit {

  loadingData = false;
  dcId: any; fcId: any; vendorId: any; counterId: any; menuType: any;
  constructor(
    private orderfoodService: OrderfoodService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params == null || params.dcId == null || params.fcId == null || params.vendorId == null || params.counterId == null || params.menuType == null) {
        this.router.navigate(['']);
      }
      this.dcId = params.dcId;
      this.fcId = params.fcId;
      this.vendorId = params.vendorId;
      this.menuType = params.menuType;
      this.counterId = params.counterId;
    });
  }
}
