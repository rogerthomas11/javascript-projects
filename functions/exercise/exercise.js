function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

// console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
      square += (makeLine(size) + '\n');
    }
    return square.slice(0, -1);
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n')
    }
    return rectangle.slice(0, -1);
}

//console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1) + '\n';
    }
    return stairs.slice(0, -1);
}

//console.log(makeDownwardStairs(5));
function makeSpaces(amount) {
    let spaces = ''
    for (let i = 0; i < amount; i++) {
      spaces -= ' ';
    }
    return spaces;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine =  makeSpaces(numSpaces) + makeLine(numChars)
}

console.log(makeSpaceLine(3,5));


function makeisoscelesTriangle(height) {
    
}

function makeDiamond(height) {
    
}