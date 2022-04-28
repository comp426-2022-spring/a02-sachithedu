
import minimist from 'minimist';
import {coinFlips, countFlips} from './modules/coin.mjs';

console.log("In flips.js")
console.log(process.argv)
const args = minimist(process.argv.slice(2))

if (args.number == undefined) {
    args.number = 1;
}

let array = coinFlips(args.number);

if (args.number == 1) {
    if (countFlips(array).heads != 0) {
        console.log("['heads'] {heads: " + countFlips(array).heads + "}")
    } else {
        console.log("['tails'] {tails: " + countFlips(array).tails + "}")
    }
} else {
    console.log(array);
    console.log(countFlips(array));
}