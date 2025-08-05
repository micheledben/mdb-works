import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailComponent } from './components/cards/detail/detail.component';
import { AppRoutingModule } from '../../app-routing.module';
@NgModule({
  declarations: [ProjectsComponent, CardsComponent, DetailComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ProjectsModule {}
