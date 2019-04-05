import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderfoodService } from '../services/orderfood.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.css']
})
export class OrderfoodComponent implements OnInit {

  orderFoodForm: FormGroup;
  loadingData = true;
  dcList: any;
  fcList: any;
  vendorList: any;
  navigationExtras: NavigationExtras;

  constructor(private fb: FormBuilder, private orderfoodService: OrderfoodService, private router: Router) { }

  ngOnInit() {

    this.orderfoodService.getDCList().subscribe(
      res => {
        this.dcList = res;
        this.loadingData = false;
      },
      err => {
        console.log(err);
        this.loadingData = false;
      }
    );

    this.orderFoodForm = this.fb.group({
      dc_id: ['', Validators.required],
      fc_id: ['', Validators.required],
      vendor_id: ['', Validators.required]
    });
  }

  dcChanged() {
    this.fcList ? this.fcList.length = 0 : null;
    this.vendorList ? this.vendorList.length = 0 : null;
    this.orderFoodForm.patchValue({
      vendor_id: null,
      fc_id: null
    });
    this.loadingData = true;
    this.orderfoodService.getFcCList(this.orderFoodForm.get('dc_id').value).subscribe(
      res => {
        this.fcList = res;
        this.loadingData = false;
      }, err => {
        console.log(err);
        this.loadingData = false;
      }
    );
  }

  fcChanged() {
    this.vendorList ? this.vendorList.length = 0 : null;
    this.loadingData = true;
    this.orderFoodForm.patchValue({
      vendor_id: null,
    });

    this.orderfoodService.getVendorList(this.orderFoodForm.get('fc_id').value).subscribe(
      res => {
        this.vendorList = res;
        this.loadingData = false;
      }, err => {
        console.log(err);
        this.loadingData = false;
      }
    );
  }

  processForm() {
    console.log(this.orderFoodForm.value);
    this.navigationExtras = {
      queryParams: this.orderFoodForm.value
    };
  }

}
