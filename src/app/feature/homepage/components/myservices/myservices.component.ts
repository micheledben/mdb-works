import { Component } from '@angular/core';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrl: './myservices.component.scss',
})
export class MyservicesComponent {
  services = [
    {
      id: 1,
      name: 'UI, UX design',
      description:
        'Progettiamo insieme il design della tua pagina, ottimizzandolo per smartphone, tablet o pc.',
      image: '/assets/logos/idea.png',
    },
    {
      id: 2,
      name: 'Siti web',
      description:
        'Mi occupo di creare il tuo sito web, da una semplice landing page per arrivare a pagine reattive e più complesse.',
      image: '/assets/logos/front-end.png',
    },
    {
      id: 3,
      name: 'Deploy',
      description: 'Pubblicheremo la tua idea finalmente online.',
      image: '/assets/logos/programming.png',
    },
  ];
}
