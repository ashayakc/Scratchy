import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CardComponent } from './card/card.component';
import { CardOptionsComponent } from './card-options/card-options.component';
import { PayOptionComponent } from './pay-option/pay-option.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path :'card-options', component: CardOptionsComponent},
  { path :'pay-option', component: PayOptionComponent},
  { path: 'card', component: CardComponent },
  { path: '', component: CustomerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
