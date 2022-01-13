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
        img: 'memory/images/icecream.jpeg'
    },
    {
        name: 'lift',
        img: 'memory/images/lift.jpeg'
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

const grid = document.querySelector('.grid')
// create your board
// use for loop to loop through each element and create a card

function createBoard() {
for (let i = 0; i < cardArray.length; i++){
    var card = document.createElement('img')
    // linking it to relative path image 'blank'
    card.setAttribute('src', '/Users/kistb/Documents/js-vanilla-minis/memory/images/fpastel.jpeg')
    // give each image a data-id
    card.setAttribute('data-id', i)
    // card.addEventListener('click', flipcard)
    grid.appendChild(card)
}
}

createBoard()
})
