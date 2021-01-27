import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from "./Login/login/login.component";
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
                      { path:'', component: LoginComponent, pathMatch: 'full' },
                      { path: 'login', component: LoginComponent },
                      { path: 'register', component: RegistrationComponent },
                      { path: 'details', component: DetailsComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
