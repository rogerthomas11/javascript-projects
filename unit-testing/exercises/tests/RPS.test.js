const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test("takes player1 choice of 'rock' and player2 choice of 'rock' and returns TIE!", function(){
        let output = whoWon('rock', 'rock');
        expect(output).toBe('TIE!')
    });
    test("takes player1 choise of rock and player2 choice of paper and returns 'Player 2 wins!'", function(){
        let output = whoWon('rock', 'paper');
        expect(output).toBe('Player 2 wins!')
    });
    test("takes player1 choice of paper and player2 choice of scissors and returns 'Player 2 wins!'", function(){
        let output = whoWon('paper', 'scissors');
        expect(output).toBe('Player 2 wins!')
    });
    test("takes player1 choise of scissors and player2 choice of rock and returns 'Player 2 wins!'", function(){
        let output = whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!')
    });
    test("takes player1 choise of paper and player2 choice of rock and returns 'Player 1 wins!", function(){
        let output = whoWon('paper', 'rock');
        expect(output).toBe('Player 1 wins!')
    });
    test("takes player1 choice of scissors and player2 choice of paper and returns 'Player 1 wins!'", function(){
        let output = whoWon('scissors', 'paper');
        expect(output).toBe('Player 1 wins!')
    });
    test("takes player1 choise of rock and player2 choice of scissors and returns 'Player 1 wins!'", function(){
        let output = whoWon('rock', 'scissors');
        expect(output).toBe('Player 1 wins!')
    });
})