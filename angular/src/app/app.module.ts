import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { CompaniesComponent } from './companies/companies.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    NewspaperComponent,
    CompaniesComponent,
    OwnerDetailComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
