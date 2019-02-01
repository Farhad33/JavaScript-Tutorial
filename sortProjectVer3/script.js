class Fruits {
    createBasketOfFruits(fruits) {
        return `
            <div id="fruits">
                ${fruits.reduce((sum, fruit) => (
                    sum + this.createFruit(fruit)
                ), '') }
            </div>
        `
    }

    createFruit(fruit) {
        return `
            <div class="fruit">
                <h1>${fruit.name}</h1>
                <p>${fruit.quantity}</p>
            </div>
        `
    }
}

class SortFactory {
    swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    sortFruits(arr, key, operator) {
        for (let i = 0; i < arr.length -1; i++) {
            for (let j = 0; j < arr.length -1; j++){
                let a = arr[j][key];
                let b = arr[j + 1][key];
                switch (operator) {
                    case "Asc":
                        a > b? this.swap(arr, j, j + 1): '';
                        break;
                    case 'Dsc':
                        a < b? this.swap(arr, j, j + 1): '';
                        break;
                }
            }
        }
    }
}

class SortPage {
    constructor(fruits) {
        this.fruits = fruits;
        this.sort = new SortFactory;
        this.root = document.getElementById('root');
    }

    createButton(title, key, operator) {
        let button = document.createElement('button');
        button.innerHTML = title;
        button.onclick = () => {
            this.sort.sortFruits(this.fruits, key, operator);
            this.removeFruitsFromPage();
            this.addFruitsToPage();
        }
        return button;
    }

    createPage() {
        let nameAsc = this.createButton('Sort by name Asc', 'name', 'Asc');
        let nameDsc = this.createButton('Sort by name Dsc', 'name', 'Dsc');
        let quantityAsc = this.createButton('Sort by quantity Asc', 'quantity', 'Asc');
        let quantityDsc = this.createButton('Sort by quantity Dsc', 'quantity', 'Dsc');
        this.root.appendChild(nameAsc);
        this.root.appendChild(nameDsc);
        this.root.appendChild(quantityAsc);
        this.root.appendChild(quantityDsc);
        this.addFruitsToPage()
    }
    
    addFruitsToPage() {
        let newFruits = new Fruits;
        let fruitsString = newFruits.createBasketOfFruits(this.fruits);
        this.root.insertAdjacentHTML('beforeend', fruitsString);
    }

    removeFruitsFromPage() {
        let fruits = document.getElementById('fruits');
        this.root.removeChild(fruits);
    }
}

function test() {
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
    const page = new SortPage(fruits);
    page.createPage();
}
test();