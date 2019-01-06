import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationService } from './services/application.service';
import { PagerService } from './services/pager.service';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InstitutionsComponent,
    DashboardComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApplicationService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
