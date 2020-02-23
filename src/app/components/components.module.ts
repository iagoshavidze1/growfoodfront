import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, MaincontentComponent, CalculatorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MaincontentComponent
  ]
})
export class ComponentsModule { }
