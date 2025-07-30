import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { DetailComponent } from './feature/projects/components/cards/detail/detail.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: DetailComponent},

  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: '**', redirectTo: 'homepage', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
