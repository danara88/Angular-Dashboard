import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { CardsComponent } from './cards/cards.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [LateralMenuComponent, CardsComponent, TablesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LateralMenuComponent,
    CardsComponent,
    TablesComponent
  ]
})
export class ComponentsModule { }
