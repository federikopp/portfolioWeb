import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/home/top-menu/top-menu.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AcercaDeComponent } from './components/home/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/home/educacion/educacion.component';
import { ExpLaboralComponent } from './components/home/exp-laboral/exp-laboral.component';
import { ProyectosComponent } from './components/home/proyectos/proyectos.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HardSoftSkillsComponent } from './components/home/hard-soft-skills/hard-soft-skills.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    AppComponent ,
    TopMenuComponent ,
    HeaderComponent ,
    AcercaDeComponent ,
    EducacionComponent ,
    ExpLaboralComponent ,
    ProyectosComponent ,
    FooterComponent ,
    HardSoftSkillsComponent ,
    LoginComponent ,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
