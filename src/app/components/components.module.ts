import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeaderComponent, MaincontentComponent, CalculatorComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    MaincontentComponent,
    SignUpComponent
  ]
})
export class ComponentsModule { }
