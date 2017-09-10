const Rx = require('@reactivex/rxjs');
var source = Rx.Observable.create(function(observer){
    observer.next("this is next");
    observer.error("we got a problem");
    observer.complete();
})

var subscription = source.subscribe(
    (data) => console.log('next data is : ' + data),
    (error) => console.error('error data is : ' + error),
    () => console.info("complete!")
);

subscription.unsubscribe();