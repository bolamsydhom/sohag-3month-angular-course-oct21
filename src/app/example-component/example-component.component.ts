import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';

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
  divName = 'hady';
  gender = 'Hamada';
  number = 30;

  subscribtion!: Subscription;
  ngOnInit() {
    // const myPromise = new Promise((resolve, reject) => {
    //   alert('hi');
    //   const x = 5;
    //   const y = 6;
    //   reject('Error Happened');
    //   resolve(5 + 6);
    // });

    // myPromise
    //   .then((value) => {
    //     alert(value);
    //   })
    //   .catch((reson) => {
    //     alert(reson);
    //   });

    // this.myPromiseFunction(1, 0)
    //   .then((value) => {
    //     alert(value);
    //   })
    //   .catch((reson) => alert(reson));

      const obj = new Observable((subscriber) => {
        const x = 10 / 10;
        alert('test Observable')
        if (x == 6) {
          subscriber.next('hello form observable');
        } else {
          subscriber.error('Error Happened');
        }
        subscriber.complete();
      });


      const sub = new Subject();
      sub.next('hamada');
      sub.error('hamda has errorr');


      sub.subscribe(
        (res)=>{console.log(res);
        },
        (err)=>{console.error(err);
        },
        ()=>{},
      )

    //  this.subscribtion = obj.subscribe(
    //     (value) => {
    //       alert(value);
    //     },
    //     (error) => {
    //       alert(error);
    //     },
    //     () => {
    //       alert('completed');
    //     }
    //   );

    // const test = interval(2000);
    // test.subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {},
    //   () => {}
    // );


    const newInterval = this.myInterval(2000);
    newInterval.subscribe(
      (res)=>{console.log(res);
      },
      (err)=>{console.error(err);
      },
      ()=>{}
    )
  }

  // myPromiseFunction(no1: number, no2: number): Promise<number> {
  //   const myPromise2 = new Promise<number>((resolve, reject) => {
  //     if (no2 == 0) {
  //       reject('Cannot Divide by Zero');
  //     } else {
  //       resolve(no1 / no2);
  //     }
  //   });

  //   return myPromise2;
  // }

  myInterval(period: number): Observable<number>{
    let num = 0;
    return new Observable<number>((subscriber)=> {
      setInterval( ()=> {
        subscriber.next(num++)
      }, period)
    })

  }



  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
