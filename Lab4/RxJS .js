// npm install @reactivex/rxjs --save

var Rx = require('@reactivex/rxjs');
 
Rx.Observable.of(1,2,3).map(
    (n)=> n+3
).subscribe(
    (x)=> console.log(x), 
    null, 
    ()=> console.log('done')
);

var myObservable = Rx.Observable.create(observer => {
  observer.next('CS572');
  setTimeout(() => observer.next('Best course ever!'), 1000);
});
myObservable.subscribe(value => console.log(value));