import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CardOptionsComponent } from './card-options/card-options.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog , MatDialogRef } from  '@angular/material/dialog';
import { MatInputModule,MatProgressSpinnerModule,MatButtonModule } from '@angular/material';
import { PayOptionComponent } from './pay-option/pay-option.component';
import { CustomerListService } from './customer-list/customer-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomerListComponent,
    CardOptionsComponent,
    PayOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
		MatInputModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		FormsModule
  ],
  providers: [MatDialog,{provide: MatDialogRef, useValue: {}},CustomerListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
