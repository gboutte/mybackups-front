import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './Pages/ConfigurationComponent/configuration.component';
import { DashboardComponent } from './Pages/DashboardComponent/dashboard.component';
import { PageNotFoundComponent } from './Pages/PageNotFoundComponent/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
