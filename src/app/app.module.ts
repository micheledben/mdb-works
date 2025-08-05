import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProjectsModule } from './feature/projects/projects.module';
import { HomepageModule } from './feature/homepage/homepage.module';
import { AboutMeModule } from './feature/about-me/homepage.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HomepageModule,
    AboutMeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
