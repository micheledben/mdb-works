import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  openWhatsApp() {
    const phoneNumber = '3463161502'; // Sostituisci con il tuo numero
    const message = 'Ciao, ho visto il tuo sito web, vorrei saperne di più.'; // Messaggio opzionale
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  }
}
