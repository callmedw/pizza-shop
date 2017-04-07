//*--Business Logic--*//

function Pizza (size) {
  this.size = size;
  this.topping = [];
  this.cost = 10;
}

Pizza.prototype.finalCost = function() {
  return total = parseFloat(this.cost) + parseFloat(this.size) + parseFloat(this.topping.length);
};

//*--User Interface--*//
$(document).ready(function() {
//new order variables//
  var topping = 0
  var size = 0
  var newOrder = new Pizza(size);

//submit function, create new Pizza//
  $("form.pizza-order").submit(function(e) {
    e.preventDefault();
    var newOrder = new Pizza(size);

//name//
    var customerName = $("input#name").val();
    $(".name-receipt").text(customerName.charAt(0).toUpperCase() + customerName.slice(1));

//size//
    newOrder.size = $("select#size").val();
    // newOrder.size.push(pizzaSize);

//topping//
    $("input:checkbox[name=topping]:checked").each(function(){
      var allTopping = $(this).val();

//push both to Pizza cosnstructor//
      newOrder.topping.push(allTopping);
    });

//get final cost of order & show receipt//
    $("span.order-total-receipt").text(newOrder.finalCost());
    $(".receipt").show();
    $("#input, #order-submit").hide();

console.log(newOrder.finalCost());
  });
});
