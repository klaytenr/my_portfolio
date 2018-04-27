import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'about-me',component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'skills',component: SkillsComponent },
  { path: 'projects',component: ProjectsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }