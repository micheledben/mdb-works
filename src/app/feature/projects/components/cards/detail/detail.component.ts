import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { Project } from '../../../interfaces/project.interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public cardService: CardService){}

  ngOnInit(): void {
    this.openDetailProduct();
  }

  projectName: number | undefined;
  project: Project | any;

  openDetailProduct(){
    this.projectName = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : undefined;
    console.log(this.projectName);
    if (this.projectName) {
      this.project = this.cardService.cards[this.projectName - 1]
      console.log(this.project)
    }
  }
}
