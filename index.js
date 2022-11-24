const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generatePass = document.getElementById('generatePass')
const passwordOne = document.querySelector('.passwordOne')
const passwordTwo = document.querySelector('.passwordTwo')

let passLenght = document.querySelector('input')

function generatChart(){
    let randomNr = Math.floor(Math.random() * characters.length)
    return characters[randomNr]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passLenght.value; i++) {
        randomPassword += generatChart()         
    }
    return randomPassword
}

generatePass.addEventListener('click', function(){
    let passOne = generateRandomPassword()
    let passtow = generateRandomPassword()
    passwordOne.innerHTML = passOne
    passwordTwo.innerHTML = passtow
})


function copyPassword(e) {
 navigator.clipboard.writeText(e);
 alert("Password copied:" + e)
}