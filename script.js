let firstCard = generateRandomCard() 
let secondCard = generateRandomCard()
let cards = [firstCard , secondCard]
const sum = firstCard + secondCard 
console.log(sum)
let hasBlackJack = false
let isAlive = true

let message = ""
let messagePrinted = document.getElementById("messageGame")
console.log(messagePrinted)


function generateRandomCard() {
    randomCard = parseInt(Math.floor(Math.random() * (13-1) + 1)) 
    if(randomCard === 1){
        return 11
    }else if(randomCard >= 11 && randomCard <= 13){
        return 10
    } else 
    return randomCard
}

function startGame(){
//Render First Card and Second Card
     cardsRender = document.getElementById("cardsRender")
cardsRender.innerHTML = "Your Cards : <br></br> First Card is " + cards[0] + "<br><br/> Second Card is " + cards[1]
console.log(cardsRender.innerHTML)

var sumRender = document.getElementById("sumRender")
sumRender.innerHTML = "Your Total Sum = " + sum
//Conditions of BlackJack
    if(sum <= 20){
message = "Do you wnat to draw another Card?"

}else if(sum === 21){
message = "Wohoo! You got a BlackJack! Congratulations"
hasBlackJack = true

}else{
message = "Next Time, Loser"
isAlive = false
}

messagePrinted.innerHTML = message

let player = {
    name : "Abdullah",
    money : 500
    }
    
    let playerInfo = document.getElementById("playerInfo")
    playerInfo.innerHTML = player.name + " : $" + player.money
}
function newCard(){

    console.log("New Card Added")
    
let newCard = generateRandomCard()

cards.push(newCard) 
console.log(cards)

//Render out New Card
let newCardsRender = document.getElementById("cardsRender")
console.log(newCardsRender)

 newCardsRender.innerHTML = "Your Cards : <br></br> First Card is " + cards[0] + "<br><br/> Second Card is " + cards[1] + " <br></br> You New Card is " + cards[cards.length - 1] + " <br></br> Record of cards : "
// cards[cards.lenght - 1 ] is for the latest cards in the array
 for( let i=0; i<cards.length; i++){
     newCardsRender.innerHTML += cards[i]
 }


// Sum all the elements in the array
let totalSum = cards.reduce((acc, curr) => acc + curr, 0)
console.log(cards.reduce((acc, curr) => acc + curr, 0))
console.log(totalSum)
//Reder out New Sum
let newSumRender = document.getElementById("sumRender")
let newSum = totalSum
newSumRender.innerHTML = "You New Sum = " + newSum
console.log(newCardsRender)

if(newSum <= 20){
    message = "Do you wnat to draw another Card?"
    
    }else if(newSum === 21){
    message = "Wohoo! You got a BlackJack! Congratulations"
    hasBlackJack = true
    
    }else{
    message = "Next Time, Loser"
    isAlive = false
    let disableButtton = document.getElementById("newCard")
    disableButtton.disabled = true;
    disableButtton.innerHTML = "Disabled"
}
    
    messagePrinted.innerHTML = message

}

function startOver() {
    location.reload()
}