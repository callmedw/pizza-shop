//*--Business Logic--*//

// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

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
// unction Pizza (size){
//   this.size = size;
//   this.toppings = [];
// }
//
// Pizza.prototype.sizePrice=function(){
//   return 10 + this.size + this.toppings.length;
// }
//
// $(function(){
//   $("form#pizza-choices").submit(function(event){
//     event.preventDefault();
//
//     var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
//     var newPizza = new Pizza(pizzaSize);
//
//     $("input:checkbox[name=topping]:checked").each(function(){
//       var inputToppings = $(this).val();
//       newPizza.toppings.push(inputToppings);
//     });
//
//     newPizza.toppings.forEach(function(topping){
//       $("ul.output-list").append("<li>" + topping + "</li>");
//     });
//
//     $("#price").text(newPizza.sizePrice());
//     $("#result").show();
//     $("button#order").hide();
//     $("button#order-again").show();
//   });
//
//   $("button#order-again").click(function() {
//     $("form")[0].reset();
//     $("ul.output-list").empty();
//     $("button#order").show();
//     $("#result").hide();
//     $("button#order-again").hide();
//   });
// });
