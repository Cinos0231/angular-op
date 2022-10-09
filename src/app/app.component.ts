import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'operadores';

  constructor() {
    const testMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2);
    console.log(testMap);

    const testForeach = [1, 2, 3, 4, 5, 6].forEach((item) => item);
    console.log(testForeach);

    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4);
    console.log(testFind);
  }
}

(name: string) => {
  return 'hola' + name;
};

() => 'hola';
