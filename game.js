
let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=true

let  cardsEl= document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let popEl=document.getElementById("pop-up")

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    if(randomCard>10){
        return 11
    }else if(randomCard===1){
        return 11
    }else{
        return randomCard
    }
    
}

function startGame(){
    
    cardsEl.textContent="cards: "
    let card1=getRandomCard()
    let card2=getRandomCard()
    let cards=[card1,card2]
    sum=card1+card2
    cardsEl.textContent += card1+", "+card2
        
     renderGame()
    
    
}

function renderGame(){
    sumEl.textContent="sum: "+sum
    if (sum===21){
        message="You have won ♠️ BLACKJACK ♠️"
        hasBlackjack=true
    }else if(sum<21){
        message="Draw a new card"
    }else{
        message="You are out of the game"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard(){

    if (hasBlackjack===false && isAlive===true){
        let card=getRandomCard()
        cards.push(cards)
        sum+=card
        cardsEl.textContent +=", "+ card

        renderGame()
    }else{
        popEl.textContent="You can't draw a new card"
    }
    
}

function newGame(){
    messageEl.textContent="Want to play a round?"
    popEl.textContent=""
    isAlive=true
    cardsEl.textContent="Cards: "
    sumEl.textContent="sum: "

    
}

