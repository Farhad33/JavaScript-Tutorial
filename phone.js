function phoneFormated(numbers) {
    let result = '('
    let str = numbers.toString()
    for (let i = 0; str.length > i; i++) {
        if (i <= 2) {
            result += str[i]
        } else if (i === 3) {
            result += ')' + str[i]
        } else if (i <= 5) {
            result += str[i]
        } else if (i === 6) {
            result += '-' + str[i]
        } else {
            result += str[i]
        }
        
    }
    

    return result
}


// let phone = 4152655659    // (415)265-5659
// console.log(
//     phoneFormated(phone)
// )

let phone = '(415)265-5659'

function unFormatPhoneNumer(phone) {
    let result = ''

    for ( let i = 0; phone.length > i; i++) {
        if (Number(phone[i])) {
            result += phone[i]
        }
    }
    return result
}

console.log(
    unFormatPhoneNumer(phone)
);
