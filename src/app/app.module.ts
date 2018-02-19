import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ItemServiceService } from './item-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [EditFormComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
