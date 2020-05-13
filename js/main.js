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
    turn: '1',
   // path: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6], baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
    mySide: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5] ],
    },
    { name: 'p2',
    turn: '-1',
   // path: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12], baskets[13], baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5] ],
    mySide: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
    },
];


// /*----- app's state (variables) -----*/
let winner;
let turn;


// /*----- cached DOM references -----*/
const startBtnEl = document.getElementById('go');
const basketEls = document.getElementById('board');
const msgEl = document.getElementById('msg');

// /*----- event listeners -----*/
startBtnEl.addEventListener('click', init);

basketEls.addEventListener('click', handleBasket);

// document.getElementById('myside')
//     .addEventListener('click', turn); //// [start new turn]


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
    msgEl.innerText = turn === 1 ? 'Player 1 Turn' : 'PLayer 2 Turn'; 
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
    turn *= -1;
    winner = getWinner(); //-------------------- turn on winner
    render();
};

function spreadStones(startBasket, basketIdx) {
    let numStones = startBasket.value;
//console.log('sb value',startBasket.value); //output {div name, div value}
//console.log('sb index', baskets.indexOf(startBasket)); //output undefined ------------------------ is this the issue?
    // let index = basketIdx + 1;
//console.log('index', basketIdx); //output div index as expected, a=0 b=1
    const stoneRoad = [baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6], baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12], baskets[13]];
//console.log(stoneRoad); //output array of objects as expected
    let index = baskets.indexOf(startBasket) + 1; 
    while (numStones > 0) {
        numStones--; 
//console.log('index', index, baskets[index]);
        baskets[index].value++;
        if (index >= baskets.length - 1) {
            index = 0;
        } else {
            index++;
        };
    }; //if statement > ternery ????
    startBasket.value = 0;
};

function getWinner() {
//console.log('value', baskets.value); //output undefined
//console.log('bEls',basketEls); // output <div id"board">
console.log('side1', players[0].mySide, 'side2', players[1].mySide);
//console.log('side',baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5]);
    while (baskets.value > 0) return;
    if (baskets[6].value > baskets[13].value) {
        msgEl.innerHTML = "Player 1 Wins!";
    };
    if (baskets[13].value > baskets[6].value) {
        msgEl.innerHTML = "Player 2 wins!";
    };
    if (baskets[6].value === baskets[13].value) {
        'You tied! Want to play again?';
    };
};

////------------------STILL NEED FOR MVP----------------////

// FIX THE ARRAY THAT THE STONES RUN THROUGH
        //then work on !including 6 & 13 

// WINNER LOGIC & MESSAGES
    // WHEN THE ARRAY OF BASKETS IS < 1
    // COMPARE POINT TOTALS
    //BIGGER POINTS WIN
// while p1 my side > 0 || p2 my side > 0; return
//if p1 points > p2, p1 wins!









    //render 4 elements [stones] in each array [basket] 
    //player turn:
    //highlight arrays [baskets] whose length > 0
    //these are the selectable arrays [mySide]
    //select array [basket]
    //event listener for click 
    //remove elements [stones] from array [basket]  
    //cache elements [stones] in dynamic variable [hand] 
    //add 1 element [stone] to each array [basket] starting with the next closest array [basket] 
    //follow the players path until the cached array [hand] < 1
    ////if player1's last element [stone] populates a previously empty array [basket](only on mySide!)
    ////if there are elements [stones] in the array [basket] visually accross the board [player2 mySide]
        ////move those elements to player1 cached array [mancala]  
        //change turns
        //repeat for player 2 turn
        
    //ending the game:
    //when either players sum of the arrays [mySide] is < 1
    //the game is over
    //move any remaining elements [stones] in array [mySide] to cached array [mancala]
    //compare the total of each players final array [mancala]
    //if player1 total > player2 total
    //player1 wins
    //else player2 wins
    










    //------------------pseudocode that's been moved around----------//
    //2 cached arrays [mancalas] for totalling points 
    // const movingBasket = Array.from(document.getElementById('board'));
    //1 cached array [hand] representing the array [basket] selected by the player 
    // things access multiple times : mancalas, baskets, hand(function?), each players array for their turn
    
    //player array [mancala] length [point total]
    //array [basket] selected
    //array length [basket totals] after element [stone] is added
    //48 elements [stones]
    //let stoneEls;
    
    
    
    
    //////-------------taken from function render baskets ---------------//
    // basketEls.forEach(function(basketEl)) {
        //     basketEls[value].innerHTML(display);
        // }
   
        // for (let basket in baskets) {
            //     mancalas[basket].value = null;
        // }  
        
        
        //how do i exclude class id "mancala" from this?
        //baskets.value = baskets.getElementsById(!"mancala").value < 1 ? 4 : baskets.value;
        // baskets.querySelectorAll('mancala').value(value, null);
    // baskets.querySelectorAll('mancala').value = 0;
    // baskets.forEach(function(baskets) {
        //     if (baskets.getElementsById('mancala')) {
            //         baskets.value = baskets.value > 0 ? 0 : baskets.value;
            //     } 
            //     else if (baskets.getElementsById('board')) {
                //         baskets.value = baskets.value > 0 ? 4 : baskets.value;
                //     } return;
                // });
                                        //     baskets.forEach(function(basket) {
                                        //         if (basket.name === evt.target.classList.value) {
                                        // //console.log('basket in if',basket); //output {name: {divname}, value: 4}
                                        //         const hand = basket.value;
                                        //             basket.value = 0;
                                        // console.log('hand value', hand); //output 4 
                                        //             //console.log('baskets value', baskets.value); //output 0, when a is clicked first
                                        //             //console.log('basket current value', (evt.target.value)); //output undefined
                                        //             //console.log('baskets all', baskets[evt.target].value);
                                        //             //console.log(evt.target); // output <div class="{div name}></div>"
                                        // console.log('inner text', evt.target.innerText); //output 0 //DESIRED 4
                                        //             evt.target.innerText = baskets.value;
                                        //         }
                                        //     });