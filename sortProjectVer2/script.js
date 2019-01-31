let root = document.getElementById('root');
let fruitsContainer = document.createElement('div');

function sort(arr, key, operator) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let a = arr[j][key];
            let b = arr[j + 1][key];
            switch (operator) {
                case 'Ascending':
                    a > b ? swap(arr, j, j + 1) : '';
                    break;
                case 'Descending':
                    a < b ? swap(arr, j, j + 1) : '';
                    break;
            }
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const box = (fruit) => {
    return `
        <div class="fruit">
            <h1>${fruit.name}</h1>
            <p>${fruit.quantity}</p>
        </div>
    `;
}

const allBoxes = (fruits) => {
    let all = fruits.reduce((accumulator, fruit) => (
        accumulator + box(fruit)
    ), '');
    fruitsContainer.setAttribute('id', 'fruits');
    fruitsContainer.innerHTML = all;
    return fruitsContainer
}

const sortButton = (arr, title, key, operator) => {
    let button = document.createElement('button');
    button.innerHTML = title;
    button.addEventListener('click', () => {
        sort(arr, key, operator);
        addAndRemove(arr);
    })
    return button;    
}

const addAndRemove = (arr) => {
    fruitsContainer.parentNode.removeChild(fruitsContainer);
    root.appendChild(allBoxes(arr))
}

const run = () => {
    let fruits = [
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
    let all = allBoxes(fruits);

    let AButtonName = sortButton(fruits, "Ascending Name", "name", "Ascending");
    let AButtonQuantity = sortButton(fruits, "Ascending Quantity", "quantity", "Ascending")
    let DButtonName = sortButton(fruits, "Descending Name", "name", "Descending");
    let DButtonQuantity = sortButton(fruits, "Descending Quantity", "quantity", "Descending")

    root.appendChild(AButtonName);
    root.appendChild(DButtonName);
    root.appendChild(AButtonQuantity);
    root.appendChild(DButtonQuantity);
    root.appendChild(all);
}

run()













// const ascendingButtonName = (arr) => {
//     let button = document.createElement('button');
//     button.innerHTML = "Ascending Name";
//     button.addEventListener('click', () => {
//         sort(arr, 'name', 'Ascending');
//         addAndRemove(arr);
//     })
//     return button;    
// }

// const ascendingButtonQuantity = (arr) => {
//     let button = document.createElement('button');
//     button.innerHTML = "Ascending Quantity";
//     button.addEventListener('click', () => {
//         sort(arr, 'quantity', 'Ascending');
//         addAndRemove(arr);
//     })
//     return button;    
// }

// const descendingButtonQuantity = (arr) => {
//     let button = document.createElement('button');
//     button.innerHTML = "Descending Quantity";
//     button.addEventListener('click', () => {
//         sort(arr, 'quantity', 'Descending');
//         addAndRemove(arr);
//     })
//     return button;
// }

// const descendingButtonName = (arr) => {
//     let button = document.createElement('button');
//     button.innerHTML = "Descending Name";
//     button.addEventListener('click', () => {
//         sort(arr, 'name', 'Descending');
//         addAndRemove(arr);
//     })
//     return button;    
// }