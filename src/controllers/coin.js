// Flip one coin
function flips() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
// Flip many coins
function flips(flips) {
    let array = [];
    const flip = flip()
    for (let i = 1; i <= flips; i++) {
        array.push(flip);
    }
    return array;
}
// Count coin flips
function count(array) {
    let counter = {};
    array.forEach(item => {
        if (counter[item]) {
            counter[item]++;
        } else {
            counter[item] = 1;
        }
    });
    return counter;
}
// Call a coin flip
function game(call) {
    const flip = flip();
    let result;
    if ( flip == call ) {
        result = 'win'
    } else {
        result = 'lose'
    }
    let game = {
        call: call,
        flip: flip,
        result: result
    }
    return game
}

module.exports = {
  coinFlip,coinFlips,countFlips,flipACoin 
};
