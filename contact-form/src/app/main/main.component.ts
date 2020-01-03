import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { Subscription } from 'rxjs/internal/Subscription';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subscriptionDialog: Subscription;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openContactForm() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '100%',
      height: '100%',
    });
    this.subscriptionDialog = dialogRef.afterClosed().subscribe((form) => {
      console.log(form);
    });
  }
}
