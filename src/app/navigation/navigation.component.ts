import {
  Component,
  OnInit,
  DoCheck,
  Inject,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Food Cart';
  userLoggedIn = false;
  showFiller = false;
  searchForm: FormGroup;
  cartCount = 0;
  dialogRef = null;
  products: any;
  userId = null;
  notificationCount = 0;
  navigation$: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private store: Store<{ navigation: any }>
  ) {
    store.pipe(select('navigation')).subscribe((data) => {
      this.navigation$ = data;
    });
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngDoCheck(): void {
  }

  logout() {
    window.sessionStorage.clear();
    this.userId = null;
    this.userLoggedIn = null;
    window.localStorage.removeItem('cart');
    window.localStorage.removeItem('notifications');
    this.router.navigate(['/login']);
  }

  search(): void {
    this.products = null;
    if (this.searchForm.get('searchCriteria').value) {
      // To Do
    }
  }
}

