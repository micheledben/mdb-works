import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { DetailComponent } from './feature/projects/components/cards/detail/detail.component';
import { AboutMeComponent } from './feature/about-me/about-me.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: DetailComponent },
  { path: 'about-me', component: AboutMeComponent },

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
