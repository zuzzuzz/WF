
function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deepDish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]); 
console.log(pizza1); 

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]); 
console.log(pizza2); 

var pizza3 = pizzaOven("thin crust", "white Sauce", ["parmesan"], ["sausage", "chicken",]); 
console.log(pizza3); 

var pizza4 = pizzaOven("Cheese Filled","bbQ sauce", ["mozzarella"], ["steak", "onions"]); 
console.log(pizza4); 

var crustTypes = [
    "hand tossed", 
    "thin crust", 
    "cheese filled" 
]; 

var sauceTypes = [
    "traditional", 
    "white sauce", 
    "bbQ", 
    "marinara" 

]; 

var cheeses = [
    "mozzarella", 
    "feta", 
    "parmesan" 

]; 
var toppings = [
    "pepperoni", 
    "sausage", 
    "mushrooms", 
    "olives", 
    "onions", 
    "chicken", 
    "steak"
]; 

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min; 
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];  
}
function randomPizza() {
    var pizza = {}; 
    pizza.crustType = randomPick(crustTypes); 
    pizza.sauceType = randomPick(sauceTypes); 
    pizza.cheeses = []; 
    pizza.toppings = []; 
    for(var i=0; i<randomRange(5, 1); i++ ) {
        pizza.cheeses.push(randomPick(cheeses))
    }
    for(var i=0; i<randomRange(4, 0); i++ ) {
        pizza.toppings.push(randomPick(toppings)); 
    }
    return pizza; 
}

console.log(randomPizza()); 
