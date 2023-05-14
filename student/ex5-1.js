
// console.log(x);
// let x;

var x = 'global_x';
function foo() {
    var x = 'local_x';
    boo();
}

function boo() { console.log(x);}

foo();