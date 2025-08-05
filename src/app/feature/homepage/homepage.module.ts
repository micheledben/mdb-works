import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HomepageComponent } from './homepage.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MyservicesComponent } from './components/myservices/myservices.component';

@NgModule({
  declarations: [
    HomepageComponent,
    IntroComponent,
    SkillsComponent,
    MyservicesComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class HomepageModule {}
