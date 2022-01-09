import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './comps/dash-board/dash-board.component';
import { LoginComponent } from './comps/login/login.component';
import { RegistrationComponent } from './comps/registration/registration.component';
import { UserProfileComponent } from './comps/user-profile/user-profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
