import { Component, inject } from '@angular/core';
import {Housinglocation} from '../components/housinglocation'
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../components/housing.service';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  //son propiedades, atributos o miembros de la clase homecomponent valores que pertecen a la instancia de la clase y cada que se crean pertecen a esa instancia 
  housingLocationLits:Housinglocation [] = [];
  housingService:HousingService = inject(HousingService); 

  constructor(){
    //this se refiere a la propiedad de una clase y no a una global
    this.housingLocationLits = this.housingService.getAllHousingLocations();
  }
    
}
