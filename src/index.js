import { getBalance } from "./app/getBalance.ts";

console.log("App is running")
let balance = document.getElementById("balance");
balance.innerHTML = getBalance().toString();


