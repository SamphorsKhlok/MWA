function foo() {
    console.error('foo');
}
//process.nextTick(foo);
//console.error('bar');

// gave the same result as above
setTimeout(foo, 0);
console.log('bar');