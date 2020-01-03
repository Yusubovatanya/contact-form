import { NgModule } from '@angular/core';
import { SectionsComponent } from './sections.component';
import { SectionsRoutingModule } from './sections-routing.module';
import { MaterialModule } from '../material/material.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    SectionsRoutingModule,
    MaterialModule,
    MiscellaneousModule,
    HeaderModule,
  ],
  declarations: [
    SectionsComponent,
  ],
})
export class SectionsModule { }
