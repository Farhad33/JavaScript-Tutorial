function main(func) {
    let name = func();
    console.log(name);
}

function printName() {
    return 'Majid';
}

main(printName)