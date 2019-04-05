import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-paymentmodal',
  templateUrl: './paymentmodal.component.html',
  styleUrls: ['./paymentmodal.component.css']
})
export class PaymentmodalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PaymentmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
