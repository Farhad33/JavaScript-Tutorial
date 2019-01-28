var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

let result = inventory.find(element => {
    return element.name === 'bananas'
})

console.log(result);
