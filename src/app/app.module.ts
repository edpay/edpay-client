import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationService } from './services/application.service';
import { PagerService } from './services/pager.service';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InstitutionsComponent,
    DashboardComponent,
    ApplicationDetailComponent,
    ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApplicationService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
