import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animalDetails = '';
  animals: Animal[] = [
    {
      name: 'Turca',
      type: 'Dog',
      age: 4,
    },
    {
      name: 'Tom',
      type: 'Cat',
      age: 10,
    },
    {
      name: 'Luna',
      type: 'Dog',
      age: 15,
    },
    {
      name: 'Whiskers',
      type: 'Cat',
      age: 2,
    },
    {
      name: 'Max',
      type: 'Dog',
      age: 3,
    },
  ];
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
