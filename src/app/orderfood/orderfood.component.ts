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
  counterList: any;
  menus = [
    'breakfast',
    'lunch',
    'dinner'
  ];
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
      dcId: ['', Validators.required],
      fcId: ['', Validators.required],
      vendorId: ['', Validators.required],
      menuType: ['', Validators.required],
      counterId: ['', Validators.required]
    });
  }

  dcChanged() {
    this.fcList ? this.fcList.length = 0 : null;
    this.vendorList ? this.vendorList.length = 0 : null;
    this.orderFoodForm.patchValue({
      vendorId: null,
      fcId: null
    });
    this.loadingData = true;
    this.orderfoodService.getFcCList(this.orderFoodForm.get('dcId').value).subscribe(
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
    this.loadingData = true;
    this.vendorList ? this.vendorList.length = 0 : null;
    this.counterList ? this.counterList = null : null;
    this.orderFoodForm.patchValue({
      menuType: null,
      vendorId: null,
      counterId: null
    });
    this.orderFoodForm.patchValue({
      vendorId: null,
      menuType: null
    });
    this.loadingData = false;
  }

  menuChanged() {
    this.loadingData = true;
    this.counterList ? this.counterList.length = 0 : null;
    this.vendorList ? this.vendorList.length = 0 : null;
    this.orderFoodForm.patchValue({
      counterId: null,
      vendorId: null
    });
    this.orderfoodService.getVendorList(
      this.orderFoodForm.get('dcId').value,
      this.orderFoodForm.get('fcId').value,
      this.orderFoodForm.get('menuType').value).subscribe(
        res => {
          this.vendorList = res;
          this.loadingData = false;
        }, err => {
          console.log(err);
          this.loadingData = false;
        }
      );
  }

  vendorChanged(vendor) {
    this.loadingData = true;
    this.counterList ? this.counterList.length = 0 : null;
    this.orderFoodForm.patchValue({
      counterId: null
    });
    this.counterList = vendor.menu;
    this.loadingData = false;
  }

  processForm() {
    this.navigationExtras = {
      queryParams: this.orderFoodForm.value
    };
    this.router.navigate(['selectFood'], this.navigationExtras);
  }

}
