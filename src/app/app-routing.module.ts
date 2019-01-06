import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';

const routes: Routes = [
  { path: '', component: InstitutionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'application-detail/:id', component: ApplicationDetailComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
