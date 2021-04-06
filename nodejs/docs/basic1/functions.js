function c() {
    console.log('c');
    return;
}

function b() {
    console.log('b');
    return c();
}

function a() {
    b();
    console.log('a');
    return;
}

a();
