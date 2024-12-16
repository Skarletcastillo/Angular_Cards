import { Component } from '@angular/core';
import {Housinglocation} from '../components/housinglocation'
import {HousingLocationComponent} from '../housing-location/housing-location.component';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
   readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation:Housinglocation = { 
    id: 11111,
    name: 'Test home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 23134123,
    wifi: true,
    laundry: false
  };
}
