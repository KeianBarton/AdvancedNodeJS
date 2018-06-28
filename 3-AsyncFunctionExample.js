const fs = require('fs');

async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddCount = numbers.filter(number => number % 2 === 1).length;
        console.log('odd numbers count:', oddCount);
    } catch(err) {
        console.log(err);
    }
}

countOdd();