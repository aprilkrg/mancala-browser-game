// /*----- constants -----*/
let baskets = [
    {
    name: 'a',
    value: null,
    },
    {
    name: 'b',
    value: null,
    },
    {
    name: 'c',
    value: null,
    },
    {
    name: 'd',
    value: null,
    },
    {
    name: 'e',
    value: null,
    },
    {
    name: 'f',
    value: null,
    },
    {
    name: 'p1Points',
    value: null,
    },
    {
    name: 'g',
    value: null,
    },
    {
    name: 'h',
    value: null,
    },
    {
    name: 'i',
    value: null,
    },
    {
    name: 'j',
    value: null,
    },
    {
    name: 'k',
    value: null,
    },
    {
    name: 'l',
    value: null,
    },
    {
    name: 'p2Points',
    value: null,
    }
  ];
//  console.log(baskets[1].name) ////expected output 'b'
players = [
    {
        name: 'p1',
        turn: '1',
        path: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6], baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
        mySide: [ baskets[0], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5] ],
    },
    {
        name: 'p2',
        turn: '-1',
        path: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12], baskets[13], baskets[14], baskets[1], baskets[2], baskets[3], baskets[4], baskets[5], baskets[6] ],
        mySide: [ baskets[7], baskets[8], baskets[9], baskets[10], baskets[11], baskets[12] ],
    }
];
//console.log(players[0].path[2]) ////expected output 'name: 'c' '

// /*----- app's state (variables) -----*/
let playerTurn;
//player array [mancala] length [point total]
//array [basket] selected
//array length [basket totals] after element [stone] is added
//48 elements [stones]
//let stoneEls;

// /*----- cached DOM references -----*/
//2 cached arrays [mancalas] for totalling points 

//1 cached array [hand] representing the array [basket] selected by the player 
//const hand = Array.from(document)

// /*----- event listeners -----*/
document.getElementById('go')
    .addEventListener('click', init); //// [start new game]
document.getElementById('board')
    .addEventListener('click', playerTurn); //// [start new turn]


// /*----- functions -----*/
//starting the game:
function init() {
    baskets.forEach(function(baskets) {
        baskets.value--;
        baskets.value = baskets.value < 1 ? 4 : baskets.value;
        //baskets.value = baskets.getElementsById(!"mancala").value < 1 ? 4 : baskets.value;
        //how do i exclude class id "mancala" from this?
    });
   // baskets.value = baskets.getElementById('mancala').value > 0 ? null : baskets.value;
    console.log(baskets[1].value); //expected output 4
    console.log(baskets[6].value); //expected output null
    let playerTurn = 1;
};
init();


// function playerTurn() {
    
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
