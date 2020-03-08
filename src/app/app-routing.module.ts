import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SignUpComponent } from './components/sign-up/sign-up.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MaincontentComponent
  },
  {
    path: "signUp",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
