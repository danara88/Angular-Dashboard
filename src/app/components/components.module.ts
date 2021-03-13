import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [LateralMenuComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LateralMenuComponent,
    CardsComponent
  ]
})
export class ComponentsModule { }
