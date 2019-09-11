function size(arr) {
    let num = 0
    while ( arr[ num ] ) {
        num++
    }
    return num
}

function trim( string ) {
    let arr = string.split('')

    trimStart(arr)
    trimEnd(arr)

    return arr
}

function trimStart(arr) {
    while (arr[0] === ' ') {
        arr.shift()
    }
}

function trimEnd(arr) {
    let endOfArr = arr.length - 1
    while (arr[ endOfArr ] === ' ') {
        arr.pop()
        endOfArr--
    }
}

console.log( trim('       majid       '))

// Java/Javascript pass by refrence
// C Pointer