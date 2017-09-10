String.prototype.filter = function(arr){
    let temp = this.toString();
    for(let word of arr){
        temp = temp.replace(word,'***');
    }

    return temp;
}

console.log("This house is nice!".filter(['house', 'nice']));
//"This *** is ***!"
