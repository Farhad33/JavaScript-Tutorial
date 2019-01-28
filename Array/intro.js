// How to make a new array
    // new Array
    // []       0         1      2  3   4    5
// var fruits = ['Apple', 'Banana', 8, 1 , 4, "Neda"];
// console.log(fruits.length);

// clasic for loop       6           6
// for(let index = 0; fruits.length > index; index++) {
//     if (fruits[index] === "Neda") {
//         console.log("we found Neda");
//     } else if (fruits[index] === "Apple") {
//         console.log("we found Apple");
//     } else if (fruits[index] === 4) {
//         console.log(fruits[index]);
//     }
// }

// while - do while
    // let index = 0;
    // while (fruits.length > 6) {
    //     console.log(fruits[index]);
    //     index++;
    // }

    // in do while loop the statment will run at least one time
    // do {
    //     console.log(fruits[index]);
    //     index++;
    // } while (fruits.length > 6)


    // let names = ["majid", "neda"]
    // forEach
    // fruits.forEach(element => {
        //     console.log(element);
        // });
        // let newArray = numbers.forEach(num => {
            //     return num * 2;
            // })
            
            // console.log(newArray);
            
            
    // map will return a new Array
        // let numbers = [1, 2, 3, 4];
        // let newArray = numbers.map(num => {
        //     return num * 2;
        // })

        // let newNames = names.map(name => {
        //     if (name === "majid") {
        //         return 'Mr ' + name;
        //     } else if (name === "neda") {
        //         return 'Miss ' + name;
        //     }
        // })
        // console.log(newNames);

        // console.log(newArray);




// write a function that takes an array of names and add
// the work "welcome" to the beginning of all names

// function welcomeNames(names) {
//     return names.map(name => {
//         return 'welcome ' + name;
//     });
// }

// let names = ['Majid', 'Neda'];

// welcomeNames(names) === ['welcome Majid', 'welcome Neda'];
// let result = welcomeNames(names);
// console.log(result);



// let numbers = [1, 2, 3, 4];
// // push
// numbers.push(5)
// // pop
// numbers.pop()
// // unshift
// numbers.unshift(0)
// // shift
// numbers.shift()

// console.log(numbers);
