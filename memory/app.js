document.addEventListener('DOMContentLoaded', () => {

// Card options
// card Array 
const cardArray = [
    {
        name: 'fish',
        img: 'memory/images/fish.png'
    },
    {
        name: 'icecream',
        img: 'memory/images/icecream.png'
    },
    {
        name: 'lift',
        img: 'memory/images/lift.png'
    },
    {
        name: 'lolipop',
        img: 'memory/images/lolipop.png'
    },
    {
        name: 'peach',
        img: 'memory/images/peach.jpeg'
    },
    {
        name: 'squish',
        img: 'memory/images/squish.jpeg'
    },
    {
        name: 'uwu',
        img: 'memory/images/uwu.png'
    },
    {
        name: 'wfish',
        img: '/Users/kistb/Documents/js-vanilla-minis/memory/images/wfish.jpeg'
    },
]

cardArray.sort(()=> .5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

// creating empty array for cardsChosen, cardsChosenId, cardsWon and will push an element
// into the array
let cardsChosen =  []
let cardsChosenId = []
let cardsWon = []

// create your board
// use for loop to loop through each element and create a card
function createBoard() {
for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img')
    // linking it to relative path image 'blank'
    card.setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/memory/images/fpastel.jpeg')
    // give each image a data-id
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
}
}

// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        // if cards match
        alert('you found a match')
        cards[optionOneId].setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/meory/images/empty.png')
        cards[optionTwoId].setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/memory/images/empty.png')
        cardsWon.push(cardsChosen)
    // if no match
    } else{
        cards[optionOneId].setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/memory/images/fpastel.jpeg')
        cards[optionTwoId].setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/memory/images/fpastel.jpeg')
        alert('Not a match, try again!')
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all :D'
    }
}


function flipCard() {
    // retrieving the data attribute
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    // the setAttribute will 
    // let add an image to that square based on the cardId it holds

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        // allows the choosing of two cards
        // and gives the player 500 miliseconds to do so.
        setTimeout(checkForMatch, 500)
    }
}

// calls the creation of the board
createBoard()

})
