// object literal
const user = {
    firstName : "Durgesh",
    lastName : "Gupta",
    age : 23,
    gender : "Male",

    getUserDetail : function(){
        console.log(`Displaying user details\nName :  ${this.firstName}\nSurname : ${this.lastName}`);
        console.log(this);
    }

}

//console.log(user.firstName);
// console.log(user.gender);
// console.log(user.age);
//user.getUserDetail()
// console.log(this);

// constructor function

/* 
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.
*/
function Player(name,matchesPlayed,matchesWon,matchesLost,sport)  {
    this.name = name,
    this.matchesPlayed = matchesPlayed,
    this.matchesWon = matchesWon,
    this.matchesLost = matchesLost,
    this.sport = sport;
    
}

const playerOne = new Player('Sachin Tendulkar',500,299,201,'cricket')
const playerTwo = new Player('Brock Lesnar',434,312,114,'professional wrestling(WWE)')

//console.log(playerOne);
console.log(playerTwo);




