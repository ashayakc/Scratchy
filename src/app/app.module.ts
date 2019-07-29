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
import { ConfigService } from './service';

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
    DialogModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
