import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'operadores';

  constructor() {
    //Recorre el array y realiza cualquier operación devuelve un array
    const testMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2);
    console.log(testMap);

    //Recorre el arrray pero no devuelve valor
    const testForeach = [1, 2, 3, 4, 5, 6].forEach((item) => item);
    console.log(testForeach);

    //encuentra un item del array
    const testFind = [1, 2, 3, 4, 5, 6].find((item) => item === 4);
    console.log(testFind);

    //pares del vector
    const testFilter = [1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 0);
    console.log(testFilter);

    //Busca la posición del array
    const testFindIndex = [90, 2, 300, 4, 5, 6].findIndex(
      (item) => item === 300
    );
    console.log(testFindIndex);

    //Busca una posición y devuelve el objeto que se esta buscando
    const testIndexOf = [90, 2, 300, 4, 5, 6].indexOf(300);
    console.log(testIndexOf);

    //IndexOf también funciona con cadenas de chart
    const testIndexOf2 = 'CINOS'.indexOf('N');
    console.log(testIndexOf2);

    //un array lo convierte en cadena
    const testJoin = [1, 2, 3, 4, 5, 6].join(',');
    console.log(testJoin);

    //cadena lo convierte a array
    const testSplit = '1,2,3,4,5,6'.split('');
    console.log(testSplit);

    //A partir de una posición quita un número de elemntos
    const testSplice = [1, 2, 3, 4, 5, 6].splice(1, 2);
    console.log(testSplice); // separa esos lugares del array

    const testSpliceB = [10, 20, 30, 40, 50, 60];
    console.log(testSpliceB.splice(0, 1)); //si se ejecuta al array elimina ese lugar

    console.log(testSplice, testSpliceB); //El resultado de ambos casos

    //Operaciones con array donde acc:= acumulador
    const testReduce = [1, 2, 3, 4, 5, 6].reduce((acc, value) => acc + value);
    console.log(testReduce);

    //
    const testEntries = { value: 'CINOS', key: 'RPC' };
    console.log('aaaa', Object.entries(testEntries)); //devuelve el array completo
    console.log('bbbb', Object.keys(testEntries)); //devuelve los valores
    console.log('cccc', Object.values(testEntries)); //devuelve los campos dentro del json

    //Spread oeration
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];
    
    //base de datos
    const per1 = { name: 'a', age: 12 };
    const per2 = { date: 'J', ...per1 };
    
    console.log('Spread', array2, per2);

    const per3 = { name: 'Cinos', age:12, phone:123, extra: 123, Response:200};
    
    //tomar un dato de la base de datos
    const{name}= per3;
    console.log('name:', name);
    
    //EJERCICIO 1.
    //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los números pares
    const a= {1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'};
    //keys saca los números del array
    const b = Object.keys(a).map(n=>parseInt(n)) .reduce((acc,value)=>{ //convierte a número el array con map
      if(value %2 === 0 ){
        acc = acc + value;
      }
      return acc;

    }, 0); //iniciando el acc en 0 
    console.log('Vector de numeros',Object.keys(a))
    console.log('suma de pares:',b)

    //EJERCICIO 2.
    //[1,2,3,4,5,6] filtrar los números impares y mostrarlos como cadena
    console.log('impares',[1,2,3,4,5,6] .filter(s=> s %2 !==0).join('-'))
       

  }
}

(name: string) => {
  return 'hola' + name;
};

() => 'hola';
