import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name = 'João';
  idade = 30;
  hobbies = ['correr', 'estudade', 'jogar'];
  car = {
    name: 'Celta',
    cor: 'Braco',
    ano: '2016',
  };
}
