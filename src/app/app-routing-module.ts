import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Appointment } from './pages/appointment/appointment';
import { Inventory } from './pages/inventory/inventory';
import { CarInspection } from './pages/car-inspection/car-inspection';
import { CarImport } from './pages/car-import/car-import';
import { CarDocumentation } from './pages/car-documentation/car-documentation';
import { InvestmentOpportunity } from './pages/investment-opportunity/investment-opportunity';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'appointment', component: Appointment },
  { path: 'inventory', component: Inventory },
  { path: 'car-inspection', component: CarInspection },
  { path: 'car-import', component: CarImport },
  { path: 'car-documentation', component: CarDocumentation },
  { path: 'investment-opportunity', component: InvestmentOpportunity },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
