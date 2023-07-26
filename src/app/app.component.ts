import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'João';
  userData = {
    email: 'jp663687@gmail.com',
    telefone: 4499799784,
    role: 'Admin',
  };
  title = 'projeto-angular';
}
