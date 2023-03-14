let phoneNumber = [9, 8 ,7, 4, 5, 1, 4, 1, 4, 1]

function generator(arr) {
    let number = "("
    for (let i = 0; i < 3; i++) {
        number += arr[i]
    }
    number += ") "
    for (let i = 3; i < 6; i++) {
        number += arr[i]
    }
    number += "-"
    for (let i = 6; i < 10; i++) {
        number += arr[i]
    }
    return number
}

console.log(generator(phoneNumber))