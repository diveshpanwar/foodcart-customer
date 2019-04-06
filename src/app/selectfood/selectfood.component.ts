import { Component, OnInit } from '@angular/core';
import { OrderfoodService } from '../services/orderfood.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PaymentmodalComponent } from '../paymentmodal/paymentmodal.component';

@Component({
  selector: 'app-selectfood',
  templateUrl: './selectfood.component.html',
  styleUrls: ['./selectfood.component.css']
})
export class SelectfoodComponent implements OnInit {

  loadingData = true;
  dcId: any; fcId: any; vendorId: any; counterId: any; menuType: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  items: any;
  selectedItems = [];
  total = 0;
  selectedCount = 0;
  finalForm: any;
  constructor(
    private orderfoodService: OrderfoodService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) { }
  ngOnInit() {
    this.total = 0;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.route.queryParams.subscribe(params => {
      if (params == null || params.dcId == null || params.fcId == null || params.vendorId == null || params.counterId == null || params.menuType == null) {
        this.router.navigate(['']);
      }
      this.dcId = params.dcId;
      this.fcId = params.fcId;
      this.vendorId = params.vendorId;
      this.menuType = params.menuType;
      this.counterId = params.counterId;
      this.orderfoodService.getItemList(this.dcId, this.fcId, this.menuType, this.vendorId, this.counterId).subscribe(
        res => {
          this.items = res['items'];
          let newItems = this.items.map((item) => {
            item.selected = false;
            item.quantity = 0;
            return item;
          });
          this.items = newItems;
          this.loadingData = false;

        }, err => {
          console.log(err);
          this.loadingData = false;
        }
      );
    });
  }

  itemClicked(item) {
    console.log(item);
    let items = this.items.map((entry) => {
      if (item.mealName === entry.mealName) {
        entry.selected = !entry.selected;
        if (!entry.selected) {
          entry.quantity = 0;
        } else {
          entry.quantity = 1;
        }
      }
      return entry;
    });
    this.items = items;
    this.claculateTotal();
  }

  increaseQuantity(item) {
    console.log(item);
    let items = this.items.map((entry) => {
      if (item.mealName === entry.mealName) {
        if (entry.selected) {
          entry.quantity = Number(entry.quantity) + 1;
          this.total = this.total + (Number(entry.quantity) * Number(entry.price));
        }
      }
      return entry;
    });
    this.items = items;
    this.claculateTotal();
  }


  decreaseQuantity(item) {
    console.log(item);
    let items = this.items.map((entry) => {
      if (item.mealName === entry.mealName) {
        if (entry.selected) {
          Number(entry.quantity) == 1 ? entry.quantity = entry.quantity : entry.quantity = Number(entry.quantity) - 1;
        }
      }
      return entry;
    });
    this.items = items;
    this.claculateTotal();
  }


  claculateTotal() {
    this.total = 0;
    this.selectedCount = 0;
    this.items.forEach(item => {
      if (item.selected) {
        this.total = this.total + (Number(item.quantity) * Number(item.price));
        this.selectedCount++;
      }
    });

    if (this.selectedCount > 0) {
      this.firstFormGroup.patchValue({
        firstCtrl: true
      });
    } else {
      this.firstFormGroup.patchValue({
        firstCtrl: null
      });
    }

  }

  makePayment(): void {
    const itemsSelected = this.items.forEach(element => {
      if (element.selected) {
        return element;
      }
    });

    this.finalForm = {
      dcId: this.dcId, fcId: this.fcId, vendorId: this.vendorId, counterId: this.counterId, menuType: this.menuType, items: itemsSelected,
      userId: '1'
    }
    const dialogRef = this.dialog.open(PaymentmodalComponent, {
      width: '90%',
      data: { message: 'Payment Received Successfully', messageType: 'success' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['']);
    });
  }
}
