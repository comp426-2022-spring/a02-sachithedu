import {flipACoin} from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const argv = require('minimist')(process.argv.slice(2));
const call = argv.call;

if (call == "heads" | call == "tails"){
    console.log(flipACoin(call)); 
}
else { 
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}