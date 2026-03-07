import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ExtraWrap } from './components/extra-wrap/extra-wrap';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Appointment } from './pages/appointment/appointment';
import { Inventory } from './pages/inventory/inventory';
import { CarInspection } from './pages/car-inspection/car-inspection';
import { CarImport } from './pages/car-import/car-import';
import { CarDocumentation } from './pages/car-documentation/car-documentation';
import { InvestmentOpportunity } from './pages/investment-opportunity/investment-opportunity';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ExtraWrap,
    Home,
    About,
    Contact,
    Appointment,
    Inventory,
    CarInspection,
    CarImport,
    CarDocumentation,
    InvestmentOpportunity,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [App],
})
export class AppModule {}
