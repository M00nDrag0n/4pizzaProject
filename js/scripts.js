 function Pizza(toppings, size) {
   this.toppings = [],
   this.size = size,
   price = 0,
 }


Pizza.prototype.calculate = function () {
  this.toppings.forEach(function(oneTopping) {
    this.price +=1;
  })

  if(this.size == "small") {
    this.price += 4;
  } else {
    this.price += 20;
  }
  return this.price;
};

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    // let

    var q1sm = $("#q1sm").val();
    var q1m = $("#q1m").val();
    var q1lg = $("#q1l").val();
    var q1Xlg = $("#q1xl").val();
    var q1S = $("#q1S").val();
    var q1H = $("#q1H").val();

    var yerZa = new Pizza([^^], this.size)
    let price = yerZa.calculate();

    $("#output").text("You have selected: " + yerZa.size +  [arrayforToppings] +  "Your total is: $" + price);
  });
});






// var q1 = $("#q1sm").val();
// var q1 = $("#q1sm").val();
// var q1 = $("#q1sm").val();
