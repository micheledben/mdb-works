import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailComponent } from './components/cards/detail/detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    CardsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
})
export class ProjectsModule {}
