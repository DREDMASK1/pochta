// let letter1 = 'Оповещение'

// let letter2 = 'Письмо'

// let letter3 = 'Квитанция'

// let missBox = ['Письмо','Письмо','Письмо']

// let comleteDelivery = ['Оповещение','Письмо','Квитанция']

// let count = 6

// let comlete = 5

// let miss = 3

// // console.log(comleteDelivery)

// missBox.push("Квитанция")

// // console.log(missBox)

// missBox.pop()

// console.log(missBox)

let sortis = document.querySelector('#sortik')

let findMail = document.querySelector('.trackNumber')

let mailNumber = document.querySelector('#tyu')

function sortLetters() {
    // let a = 2500
    // let b = 4
    // let c = 243 + a + b
    console.log("Friday")
    let mathAort = Math.random()
    if(mathAort > 0.2){
    return true
    }
    return false
}

sortis.addEventListener("click",sortLetters)