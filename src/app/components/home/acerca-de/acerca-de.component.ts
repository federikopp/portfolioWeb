//import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { AcercaDe } from 'src/app/model/acercaDe'
import { AcercaDeService } from 'src/app/service/acerca-de.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  acercaDe: any; 

  constructor(public acercaDeService: AcercaDeService){}

  ngOnInit(): void  {
    this.acercaDeService.getPersonaLista()
    .subscribe(data => this.acercaDe = data);
  }
}