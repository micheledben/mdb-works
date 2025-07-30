import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  constructor(public cardService: CardService){}
}
