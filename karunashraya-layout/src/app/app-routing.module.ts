import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'lhsnav/:id',component:SidebarComponent,outlet:'sbar'},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
