import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styles: [
  ]
})
export class LateralMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(): void {
    const menuLayer = document.querySelector('#menu-layer');
    const lateralMenu = document.querySelector('#lateral-menu');
    const menuOptions = document.querySelector('#menu-options');
    const btnToggleOpen = document.querySelector('#btn-toggle-open');

    // Escondemos/mostramos las opciones del menu lateral con animación
    menuOptions.classList.toggle('menu-options--hide');

    // Ejecutamos la animación para encoger el menu lateral
    menuLayer.classList.toggle('animation-menu-smaller');
    lateralMenu.classList.toggle('lateral-menu__extra-layer--smaller');

    // Esconder/mostrar el botón de mostrar menu en el sidebar
    btnToggleOpen.classList.toggle('circle-data--hide');
  }

}
