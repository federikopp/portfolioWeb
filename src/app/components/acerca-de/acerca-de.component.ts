import { Component, OnInit } from '@angular/core';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent  {}/*implements OnInit {

  AcercaDe: any;

  constructor(private acercaDeService: AcercaDeService) { }

  ngOnInit(): void {
    this.acercaDeService.getAcercaDe().subscribe(data => {
      this.acercaDeService = data;
    });
  }
}*/
