Array.prototype.even = function(){
    let temp = new Array();
    for(let item of this){
        if(item%2== 0){
            temp.push(item);
        }
    }

    console.log(temp);
};

Array.prototype.odd = function(){
    let temp = new Array();
    for(let item of this){
        if(item%2== 1){
            temp.push(item);
        }
    }

    console.log(temp);
};

[1,2,3,4,5,6,7,8].even(); // [2,4,6,8]
[1,2,3,4,5,6,7,8].odd(); // [1,3,5,7]