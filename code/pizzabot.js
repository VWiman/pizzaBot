// Pizza variables
const vegetarian = "<strong class='green pizza'>Vegetarian Pizza</strong>";
const hawaiian = "<strong class='orange pizza'>Hawaiian Pizza</strong>";
const pepperoni = "<strong class='red pizza'>Pepperoni Pizza</strong>";

const pizzaPrice = 80;

// Order variables
let orderName = "pizza";
let orderQuantity;
let orderTotal;

// Order functions
function checkOrderName(n) {
  if (n === vegetarian || n === hawaiian || n == pepperoni) {
    orderName = n;
    printQtwo(n);
    return true;
  } else return false;
}

const totalCost = (p, q) => p * q;

function cookingTime(q) {
  if (q != 0 && q <= 2) {
    return "The pizzas will take <strong>10 minutes</strong>.";
  } else if (q > 2 && q < 6) {
    return "The pizzas will take <strong>15 minutes</strong>.";
  } else if (q >= 6) {
    return "The pizzas will take <strong>20 minutes</strong>.";
  } else return "You did not order a pizza.";
}

// Greeting
document.getElementById(
  "greetingText"
).innerHTML = `<h4>Hey!</h4><p>Happy to serve your pizza.</p><p><strong>On our menu we have:</strong></p><p>${vegetarian}, ${hawaiian} and ${pepperoni}!</p>`;

// Options
document.getElementById("pizzaOneLabel").innerHTML = vegetarian;
document.getElementById("pizzaTwoLabel").innerHTML = hawaiian;
document.getElementById("pizzaThreeLabel").innerHTML = pepperoni;

// Question 1
document.getElementById("select").innerHTML =
  "Select the type of pizza you want to order today:";
checkOrderName(orderName);

// Question 2 (function)
const printQtwo = () => {
  document.getElementById("amountLabel").innerHTML =
    orderQuantity = `How many of ${orderName} do you want?`;
};

// Order function
function order() {
  orderQuantity = document.getElementById("amount").value;
  if (orderQuantity >= 1 && orderQuantity <= 999) {
    document.getElementById(
      "greetingText"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost <strong>${(orderTotal =
      totalCost(pizzaPrice, orderQuantity))} kr</strong>. ${cookingTime(
      orderQuantity
    )}`;
  } else
    document.getElementById(
      "greetingText"
    ).innerHTML = `You need to select how many ${orderName} you want.`;
}
