const createBox = (fruit) => (
    `
        <div class='fruit'>
            <h1>${fruit.name}</h1>
            <p>${fruit.quantity}</p>
        </div>
    `
);

const boxContainer = (boxes) => {
    let fruits = '';
    let container = document.createElement('div');
    container.className = 'fruits';
    boxes.forEach(box => {
        fruits += createBox(box);
    });
    container.innerHTML = fruits;
    return container;
}

const nameSortButton = (boxes) => {
    let button = document.createElement('button');
    button.innerHTML = "sort by name";
    button.className = 'sort-button';
    button.addEventListener('click', () => {
        let x = boxes.sort(function (a, b) {
            return b.name - a.name;
        });
        boxes.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        factory(boxes);
    })
    return button;
}

const quantitySortButton = (boxes) => {
    let button = document.createElement('button');
    button.innerHTML = "sort by quantity";
    button.className = 'sort-button';
    button.addEventListener('click', () => {
        boxes.sort((a, b) => { 
            return a.quantity - b.quantity 
        })
        factory(boxes);
    })
    return button;
}

const factory = (boxes) => {
    let root = document.getElementById('root');
    let container = document.getElementsByClassName('fruits');
    root.removeChild(container[0]);
    let fruits = boxContainer(boxes);
    root.appendChild(fruits);
}

const run = () => {
    let allBoxes = [
        {'name': 'Banana', 'quantity': 8},
        {'name': 'Apple', 'quantity': 5},
        {'name': 'Orange', 'quantity': 7},
        {'name': 'Cherry', 'quantity': 20},
        {'name': 'Coconut', 'quantity': 2},
        {'name': 'Mango', 'quantity': 9},
        {'name': 'Lime', 'quantity': 1},
        {'name': 'Lemon', 'quantity': 0},
        {'name': 'Cucumber', 'quantity': 5},
        {'name': 'Strawberry', 'quantity': 4}
    ];
    let root = document.getElementById('root');
    let fruits = boxContainer(allBoxes);
    root.appendChild(quantitySortButton(allBoxes));
    root.appendChild(nameSortButton(allBoxes));
    root.appendChild(fruits);
}
run();