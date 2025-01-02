import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../components/housing.service';
import { Housinglocation } from '../components/housinglocation';
import { CommonModule } from '@angular/common';
import{FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  //los datos y los dos metodos 
  housingService = inject(HousingService);
  hosinglocation: Housinglocation | undefined;



  //campos que luego se llaman en details (FormGroup es una libreria de java)
formAngular = new FormGroup({
  //SE INSTANCIA Y SE INICIALIZA VACIO DE TIPO FormControl
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
});

  //definir formulario                                                                                                                                                                  

  constructor (){
    const hosinglocationId = Number (this.route.snapshot.params['id']);
    this.hosinglocation = this.housingService.getHousingLocationById(hosinglocationId)
  }

  //funcion para '' DEVUELVE UN VALOR PREDETENRMINADO EN CASO DE QUE lo que se encuentra del lado izquierdo del operador ?? sea nulo

  onsubmit(){
    this.housingService.submitApplication(
      this.formAngular.value.firstName ?? '',
      this.formAngular.value.lastName ?? '',
      this.formAngular.value.email ?? ''

    )
  }

}

