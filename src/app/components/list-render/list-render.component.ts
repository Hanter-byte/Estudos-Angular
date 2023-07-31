import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}

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
  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
