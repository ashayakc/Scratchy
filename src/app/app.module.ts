import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CardOptionsComponent } from './card-options/card-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomerListComponent,
    CardOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
