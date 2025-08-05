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
      coding: 'ANGULAR',
      repository: 'https://github.com/micheledben/E-commerce-bag',
      images: [
        '/assets/bags/tablet-home.png',
        '/assets/bags/tablet-home.png',
        '/assets/bags/tablet-product.png',
        '/assets/bags/cell-home.png',
        '/assets/bags/cell-product.png',
      ],
      descriptionProject:
        'Sito web per la visualizzazione di borse da donna, con possibilità di aggiunta al carrello',
    },
    {
      id: 2,
      name: 'Contact App',
      description: 'Dashboard semplice per creazione di contatti.',
      coding: 'ANGULAR',
      repository: 'https://github.com/micheledben/Dashboard-Contacts',
      images: [
        '/assets/contact/contact-login-pc.png',
        '/assets/contact/contact-home-pc.png',
        '/assets/contact/contact-contact-pc.png',
        '/assets/contact/contact-home-cell.png',
        '/assets/contact/contact-contact-cell.png',
      ],
      descriptionProject:
        'App che consente di creare, visualizzare e eliminare, completa di authentication con firebase.',
    },
  ];
}
