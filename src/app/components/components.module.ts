import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [HeaderComponent, MaincontentComponent, CalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MaincontentComponent
  ]
})
export class ComponentsModule { }
