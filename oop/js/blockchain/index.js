const {Block, Blockchain} = require("./blockchain.js");

const test = new Blockchain();
test.addBlock(new Block(Date.now().toString(), {from: "Hoach", to: 'Elvira Rajapovna', amount: 124483}));
test.addBlock(new Block(Date.now().toString(), {from: "Google", to: 'Gazprom', amount: 457483}));
test.addBlock(new Block(Date.now().toString(), {from: "Apple", to: 'Sber', amount: 983464}));

console.log(test.chain)