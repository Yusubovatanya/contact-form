import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  formErrors = {
    userName: '',
    userEmail: '',
    userPhone: '',
  };

  validationMessages = {
    userName: {
      required: 'Name is required!',
    },
    userEmail: {
      required: 'Email is required',
      email: 'Value has to be a valid email address!',
    },
    userPhone: {
      pattern: 'Value has to be a number!',
    },
  };

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuild.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', [ Validators.pattern(/^[\+]{0,1}380([0-9]{9})$/)]],
      userCompany: ['', []],
      message: ['', []],
    });
  }

  getErr(element): string {
    this.formErrors[element] = '';
    const controlElement = this.contactForm.get(element);
    const message = this.validationMessages[element];
    for (const key of Object.keys(controlElement.errors)) {
      this.formErrors[element] += message[key] + ' ';
    }
    return this.formErrors[element];
  }

  exit(): void {
    this.dialogRef.close();
  }
 }
