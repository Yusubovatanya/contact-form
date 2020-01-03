import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule {
}
