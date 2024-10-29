const passwordBox = document.getElementById("Password")
const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = "~@!#$%^&*()_+=-<>?/{}[]"

const allchars = upperCase + lowerCase + number + symbols

function createpassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * symbols.length)]
    }
    passwordBox.value = password
}

function copypassword(){
    passwordBox.select()
    document.execCommand("copy")
}

