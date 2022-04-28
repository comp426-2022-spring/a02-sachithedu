// Import statements
import { coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";

// Make guess
const myArg = (minimist)(process.argv.slice(2))
let call = myArg["call"] || null;
if (call == null || call == undefined || (call != "heads" && call != "tails")) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
    } else {
    console.log(flipACoin(call));
}