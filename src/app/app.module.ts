import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { HeaderComponent } from './feature/header/header.component';
import { IntroComponent } from './feature/homepage/components/intro/intro.component';
import { SkillsComponent } from './feature/homepage/components/skills/skills.component';
import { MyservicesComponent } from './feature/homepage/components/myservices/myservices.component';
import { AboutMeComponent } from './feature/homepage/components/about-me/about-me.component';
import { ProjectsModule } from './feature/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent,
    HeaderComponent,
    IntroComponent,
    SkillsComponent,
    MyservicesComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
