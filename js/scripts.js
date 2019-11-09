 function Pizzas(toppings, size) {
   this.toppings = [],
   this.size = size,
   this.price = 0;
 }

Pizzas.prototype.calculate = function () {
  console.log("I EXIST LOOK AT ME");
  this.toppings.forEach(function(topping) {
    this.price +=1;
  })
console.log("I Also EXIST LOOK AT ME");
  if(this.size == "small") {
    this.price += 4;
    console.log("I EXIST LOOK AT ME TOO", price);
  }
  else if (this.size == "med" ) {
    this.price += 6;
  }
  else if (this.size == "lg" ) {
    this.price += 14;
  }
  else if (this.size == "xl" ) {
    this.price += 20;
  }
  else if (this.size == "super" ) {
    this.price += 40;
  }
  else if (this.size == "Homer" ) {
    this.price += 120;
  }
  return this.price;
};
console.log("AAAAAAAAAAAAAGH");
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();


    var q1sm = $("#q1sm").val();
    var q1m = $("#q1m").val();
    var q1lg = $("#q1l").val();
    var q1Xlg = $("#q1xl").val();
    var q1S = $("#q1S").val();
    var q1H = $("#q1H").val();
    var yerSize = $("#yerSizes").val();
    let toppingsArray = [];

    $("input[name='topping']:checked").each(function() {
      var physics = toppingsArray.push($(this).val());
    });
    // array that deals with types of toppings as a category that sets their value to a specific number
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    var yerZa = new Pizzas(toppingsArray, yerSize)
    let yerPrice = yerZa.calculate();
    console.log("WILL YOU PLEASE CALCULATE MY PRICES WHY DO YOU DO THIS EVERY SINGLE TIME OH MY GOD.");

    $("#output").html("You have selected: " + yerSize +  toppingsArray +  "Your total is: $" + yerPrice);
    console.log("WHAT IS MY ZA??!!!!", yerZa);
  });
});






// var q1 = $("#q1sm").val();
// var q1 = $("#q1sm").val();
// var q1 = $("#q1sm").val();
