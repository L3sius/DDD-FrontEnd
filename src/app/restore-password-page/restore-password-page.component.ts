import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  //TODO: Maybe present some data?
}

@Component({
  selector: 'app-restore-password-page',
  templateUrl: './restore-password-page.component.html',
  styleUrls: ['./restore-password-page.component.css'],
})
export class RestorePasswordPageComponent implements OnInit {
  restorePasswordForm: FormGroup;
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.restorePasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.restorePasswordForm.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(DialogRestorePasswordOverview, {
      width: '300px',
      data: {},
    });
    console.log(this.restorePasswordForm.value);
    // this.authService.register(this.restorePasswordForm.value).pipe(
    //   map(user => this.router.navigate(['login-page']))
    // ).subscribe();
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog.html',
})
export class DialogRestorePasswordOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogRestorePasswordOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
