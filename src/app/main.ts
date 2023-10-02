import { getBalance } from "./getBalance.js";

console.log("App is running")
let balance = document.getElementById("balance");
balance!.innerHTML = getBalance().toString();


