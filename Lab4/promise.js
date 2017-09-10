function getPizza(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> resolve(100),500);
    })
};

const call = getPizza()
    //.then((result)=> console.log(result))
    .then((price)=> price + price*0.1)
    .then((total)=> console.log("total is " + total))
    .catch((e)=> console.log(e));

console.log("Yey pizza is coming");