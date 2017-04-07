//*--Business Logic--*//

// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

function Pizza () {
  this.size = [];
  this.topping = [];
  this.cost = 0;
}

// Pizza.prototype.finalCost = function (finalCost) {
//   this.size += this.topping;
// }



//*--User Interface--*//
$(document).ready(function() {
  //new order//
  var topping = 0
  var size = 0
  var newOrder = new Pizza();

  //get customer name//
  $("form.customer-name").submit(function(event) {
    event.preventDefault();
    var customerName = $("input#name").val();
    $(".name-receipt").text(customerName);
  });

  //submit function, create new Pizza//
  $("form.pizza-order").submit(function(event) {
    event.preventDefault();
    var newOrder = new Pizza();

    //size//
    var pizzaSize = parseInt($("select#size").val());
    console.log(pizzaSize);
    newOrder.size.push(pizzaSize);

    //topping//
    $("input:checkbox[name=topping]:checked").each(function(){
       var allTopping = $(this).val();
    //push both to Pizza cosnstructor//
    newOrder.topping.push(allTopping)
    });
console.log(newOrder.topping);
console.log(newOrder.size);
  });

  });
