const wink = document.querySelector('.closed');
const coy = document.querySelector('.open');

// Adding eventlistener w/ arrow function
wink.addEventListener('click', () => {
    if (coy.classList.contains('open')) {
        // displays the open coy face now 
        coy.classList.add('active');
        wink.classList.remove('active');
    }
})
coy.addEventListener('click', () => {
    if (wink.classList.contains('closed')) {
        wink.classList.add('active');
        coy.classList.remove('active');
    }
})


