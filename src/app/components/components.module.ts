import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';



@NgModule({
  declarations: [LateralMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LateralMenuComponent
  ]
})
export class ComponentsModule { }
