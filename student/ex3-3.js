const obj = {
    value : 'obj.value',
    foo () {
        console.log("foo:", this.constructor);
        function boo () { console.log("boo:", this.constructor); }
        boo();
    }
}

obj.foo();