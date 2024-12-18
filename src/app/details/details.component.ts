import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../components/housing.service';
import { Housinglocation } from '../components/housinglocation';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  //los datos y los dos metodos 
  housingService = inject(HousingService);
  hosinglocation: Housinglocation | undefined;

  constructor (){
    const hosinglocationId = Number (this.route.snapshot.params['id']);
    this.hosinglocation = this.housingService.getHousingLocationById(hosinglocationId)
  }

}
