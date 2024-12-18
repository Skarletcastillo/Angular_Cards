import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDotIcon } from './location-dot/location-dot.icon';
import { CarIcon } from './car/car.icon';

let icons = [
  CarIcon,
  LocationDotIcon,
]

@NgModule({
  declarations: icons,
  exports: [
    ...icons
  ],
  imports: [
    CommonModule
  ],
})
export class IconsModule { }
