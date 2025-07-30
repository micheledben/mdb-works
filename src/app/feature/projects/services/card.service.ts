import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  cards = [
    {
      id: 1,
      name: 'BagsCrochet 2',
      description: 'Ecommerce grafica di borse da donna.',
      coding: 'HTML, SCSS, ANGULAR',
      images: [
        '/assets/bags/pc-home.png',
        '/assets/bags/pc-product.png',
        '/assets/bags/pc-cart.png',
        '/assets/bags/tablet-home.png',
        '/assets/bags/tablet-product.png',
        '/assets/bags/tablet-cart.png',
        '/assets/bags/cell-home.png',
        '/assets/bags/cell-product.png',
        '/assets/bags/cell-cart.png',
      ],
      descriptionProject: 'Sito web per la visualizzazione di borse da donna, con possibilità di aggiunta al carrello',

    },
    {
      id: 2,
      name: 'Siti web',
      description:
        'Mi occupo di creare il tuo sito web, da una semplice landing page per arrivare a pagine reattive e più complesse.',
      coding: 'HTML, SCSS, ANGULAR',
      images: [
        '/assets/bags/pc-home.png',
        '/assets/bags/pc-product.png',
        '/assets/bags/pc-cart.png',
        '/assets/bags/tablet-home.png',
        '/assets/bags/tablet-product.png',
        '/assets/bags/tablet-cart.png',
        '/assets/bags/cell-home.png',
        '/assets/bags/cell-product.png',
        '/assets/bags/cell-cart.png',
      ],
    },
    {
      id: 3,
      name: 'Deploy',
      description: 'Pubblicheremo la tua idea finalmente online.',
      coding: 'HTML, SCSS, ANGULAR',
      images: [
        '/assets/bags/pc-home.png',
        '/assets/bags/pc-product.png',
        '/assets/bags/pc-cart.png',
        '/assets/bags/tablet-home.png',
        '/assets/bags/tablet-product.png',
        '/assets/bags/tablet-cart.png',
        '/assets/bags/cell-home.png',
        '/assets/bags/cell-product.png',
        '/assets/bags/cell-cart.png',
      ],
    },
  ];
}
