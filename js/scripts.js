//*--Business Logic--*//

// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

function Pizza (size) {
  this.size = size;
  this.topping = [];
  this.cost = 0;
}

Pizza.prototype.finalCost = function (finalCost) {
  this.cost = (this.size += parseInt(this.topping));
}



//*--User Interface--*//
$(document).ready(function() {
//new order variables//
  var topping = 0
  var size = 0
  var newOrder = new Pizza(size);

//submit function, create new Pizza//
  $("form.pizza-order").submit(function(event) {
    event.preventDefault();
    var newOrder = new Pizza(size);

//name//
    var customerName = $("input#name").val();
    $(".name-receipt").text(customerName);

//size//
    newOrder.size = $("select#size").val();
    // newOrder.size.push(pizzaSize);
console.log(newOrder.size);

//topping//
    $("input:checkbox[name=topping]:checked").each(function(){
      var allTopping = $(this).val();
console.log(allTopping);

//push both to Pizza cosnstructor//
      newOrder.topping.push(allTopping);
    });

//get final cost of order//
    $("span.order-total-receipt").text(newOrder.finalCost());

console.log(newOrder.topping);
console.log(newOrder.size);
console.log(newOrder.finalCost());
  });
});
