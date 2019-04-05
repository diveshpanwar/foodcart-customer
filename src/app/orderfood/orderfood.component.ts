import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderfoodService } from '../services/orderfood.service';

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

  constructor(private fb: FormBuilder, private orderfoodService: OrderfoodService) { }

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
      fc_id: ['', Validators.required]
    });
  }

  dcChanged() {
    this.loadingData = true;
    this.orderfoodService.getFcCList(this.orderFoodForm.get('dc_id').value).subscribe(
      res => {
        this.fcList = res;
        console.log(this.fcList);
        this.loadingData = false;
      }, err => {
        console.log(err);
        this.loadingData = false;
      }
    );
  }

  processForm() {
    console.log(this.orderFoodForm.value);
  }

}
