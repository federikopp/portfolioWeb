import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AcercaDeComponent } from './components/home/acerca-de/acerca-de.component';
import { ExpLaboralComponent } from './components/home/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './components/home/educacion/educacion.component';
import { HardSoftSkillsComponent } from './components/home/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/home/proyectos/proyectos.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'experiencias', component: ExpLaboralComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'skills', component: HardSoftSkillsComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
