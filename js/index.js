import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingMachine.js";

const colaGenerator = new ColaGenerator();
const vendingMachine = new Vendingmachine();

await colaGenerator.setup();
vendingMachine.setup();
