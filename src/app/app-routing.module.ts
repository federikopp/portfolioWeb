import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'experiencias', component: ExpLaboralComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'skills', component: HardSoftSkillsComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
