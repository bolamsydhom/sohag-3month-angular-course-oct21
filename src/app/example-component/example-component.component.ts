import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-example-component',
//     template: `
//     <div> hamada from new component </div>`,
//     styles:['div {background-color: red}']
// })

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss'],
})
export class ExampleComponent implements OnInit {
    divName = 'hady'
    gender = 'Hamada';
    number = 30;
  ngOnInit() {
    

 
//    const div = document.getElementById('div') as HTMLElement;
//    div.innerText = this.divName;

// class car{
//   color,
//   YOM,
//   model
// }

// BMW = new car()
// BMW. color = red;

// MG = new car();
// MG.color = green
  }
  calculateAge(){

  }
}
