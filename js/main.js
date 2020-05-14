// /*----- constants -----*/
let baskets = [
    {name: 'a',
    value: 0,},
    { name: 'b',
    value: 0,},
    { name: 'c',
    value: 0,},
    { name: 'd',
    value: 0,},
    { name: 'e',
    value: 0,},
    { name: 'f',
    value: 0,},
    { name: 'p1Points',
    value: 0,},
    { name: 'g',
    value: 0,},
    { name: 'h',
    value: 0,},
    { name: 'i',
    value: 0,},
    { name: 'j',
    value: 0,},
    { name: 'k',
    value: 0,},
    { name: 'l',
    value: 0,},
    { name: 'p2Points',
    value: 0, },
];
let players = [
    { name: 'p1',
    turn: '1', },
    { name: 'p2',
    turn: '-1', },
];

// /*----- app's state (variables) -----*/
let winner;
let turn;

// /*----- cached DOM references -----*/
const startBtnEl = document.getElementById('go');
const basketEls = document.getElementById('board');
const msgEl = document.getElementById('msg');
const win = document.getElementById('win');

// /*----- event listeners -----*/
startBtnEl.addEventListener('click', init);
basketEls.addEventListener('click', handleBasket);

// /*----- functions -----*/
function init() {
    turn = 1;
    baskets.forEach(function(basket) {
        basket.value = 4; ///// -------------- set basket value here
    });
    baskets[13].value = 0;
    baskets[6].value = 0;
    render();
};
init();

function render() {
    renderBaskets();
    msgEl.innerText = turn === 1 ? 'Player 1 Turn' : 'Player 2 Turn'; 
};

function renderBaskets() {
    baskets.forEach(function(basket) {
        let div = document.querySelector(`.${basket.name}`);
        div.innerText = basket.value;
    });
};

function handleBasket(evt) {
    let clickedBasket = baskets.find(function(basket) {
        return evt.target.className === basket.name;
    });
    let basketIdx = Array.from(evt.target.parentNode.children).indexOf(evt.target);
    if (clickedBasket.name === 'p1Points' || clickedBasket.name === 'p2Points') return;
    if (clickedBasket.value < 1) return;
    spreadStones(clickedBasket, basketIdx);
    render();
    baskets[6].value + baskets[13].value === 48 ? getWinner() : turn *= -1; //----------------set final basket number here
};

function spreadStones(startBasket, basketIdx) {
    let numStones = startBasket.value;
    let index = baskets.indexOf(startBasket) + 1; 
    while (numStones > 0) {
        if(turn === 1 && index === 13) {
            index = 0;
        } else if(turn === -1 && index === 6) {
            index = 7;
        };
        numStones--; 
        baskets[index].value++;
        index >= baskets.length - 1 ? index = 0 : index++;
    }; 
    startBasket.value = 0;
};

function getWinner() {
console.log(baskets[6].value, baskets[13].value);
   if(baskets[6].value > baskets[13].value) {
       win.innerText = 'Player 1 Wins!';
   } else if(baskets[13].value > baskets[6].value) {
       win.innerText = 'Player 2 Wins!';
   } else if(baskets[6].value === baskets[13].value) {
       win.innerText = 'You tied! Play again?'
   };
   
msgEl.innerText = '';
};