import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { LoginComponent } from './comps/login/login.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { TaskComponent } from './comps/task/task.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardService]},
  {path:'task',component:TaskComponent},
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
