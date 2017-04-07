/*--Business Logic--*/

Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

function Pizza (size, topping, subtotal) {
  this.size = size;
  this.topping = topping;
  this.cost = 0;
  this.subtotal = subtotal;
}

Pizza.prototype.finalCost = function (finalCost) {
  this.size += this.topping;
}



/*--User Interface--*/
$(document).ready(function() {
});
