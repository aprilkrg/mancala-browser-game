// /*----- constants -----*/
let baskets = [
    {name: 'a',
    value: null,},
    { name: 'b',
    value: null,},
    { name: 'c',
    value: null,},
    { name: 'd',
    value: null,},
    { name: 'e',
    value: null,},
    { name: 'f',
    value: null,},
    { name: 'p1Points',
    value: null,},
    { name: 'g',
    value: null,},
    { name: 'h',
    value: null,},
    { name: 'i',
    value: null,},
    { name: 'j',
    value: null,},
    { name: 'k',
    value: null,},
    { name: 'l',
    value: null,},
    { name: 'p2Points',
    value: null, },
  ];
//  console.log(baskets[1].name) ////expected output 'b'
players = [
    {   name: 'p1',
        turn: '1',
        path: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6], baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
        mySide: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5] ],
    },
    {   name: 'p2',
        turn: '-1',
        path: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12], baskets[13], baskets[14], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6] ],
        mySide: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
    },
];
//console.log(players[0].path[2]) ////output 'name: 'c' '




// /*----- app's state (variables) -----*/
let winner;
let turn;




// /*----- cached DOM references -----*/
const startBtnEl = document.getElementById('go');
//console.log('btn', startBtnEl); //output identifies correct btn
const mancalas = Array.from(document.querySelectorAll('mancala'));
//console.log(mancalas); //output is switched, player2 mancala = mancalas[0]
const basketEls = document.getElementById('board');
//console.log(basketEls); //output is a list of divs





// /*----- event listeners -----*/
startBtnEl.addEventListener('click', init);
//console.log('testing', startBtnEl); ////output <button id="go">htmltext</button>

basketEls.addEventListener('click', workTheClick);
//console.log('testing baskets', basketEls); ///output basketEls.addEventListner is not a function

// document.getElementById('myside')
//     .addEventListener('click', turn); //// [start new turn]




// /*----- functions -----*/
function init() {
    baskets.value = 0;
   let turn = 1;
};
init();
// console.log('before render', baskets[0].value); //outcome null
// console.log('before render', baskets[6].value); //outcome null

function render() {
    winner = getWinner();
    renderBaskets();
};
// console.log('after render', baskets[0].value); //output null
// console.log('after render', baskets[6].value); //output null

function renderBaskets() {
    baskets.forEach(function(baskets) {
        baskets.value--;
        baskets.value = baskets.value < 1 ? 4 : baskets.value;
    }) 

};
renderBaskets();
//console.log('after renderbaskets', baskets[0].value); //output 4 
//console.log('after renderbaskets', baskets[6].value); //output 4 //DESIRED OUTPUT null
          
function workTheClick(target) {
console.log('div selected:', target.toElement); //output <div class="{different letters}"></div>
console.log(this);
};






// function turn() {
//         for (i = 0, i < 12, i++);
    
//     };

// function getWinner() {

// };
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