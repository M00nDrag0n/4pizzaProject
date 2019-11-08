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

    let 




  });
});
