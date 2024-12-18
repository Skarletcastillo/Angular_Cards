import { Component, Input } from '@angular/core';
import { Housinglocation } from '../components/housinglocation';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../shared/components/icons/icons.module';


@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, IconsModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})

export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;

}

