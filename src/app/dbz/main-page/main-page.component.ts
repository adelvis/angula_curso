import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo:Personaje ={
    nombre: 'trunk',
    poder: 10000
  }

 

  constructor (private dbzService:DbzService){
   
  }

}
