// const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/3342a96d/icecream_shop/json/icecreams.json";
// var infos = [];
// fetch(endpoint) 
// .then(obj => obj.json())
// .then(data => infos.push(...data));

// $(function() { 
// 	products = document.querySelector('.products');
// 	var html = products.innerHTML;
// 	info_customer.cart.forEach(function(product) {
// 		html += '<li class="product" data-id="' + product.id + '"> <div class="col info-product">' +
// 		'<div class="img-product"><img src="' + product.img + '" alt="' + product.name + '" class="img-responsive"></div>' +
// 		'<div class="info-detail">' + product.name + '</div></div>' +
// 		'<div class="col col-price"><span class="price">' + (product.total/product.count) + '</span> VND </div>' + 
// 		'<div class="col"><input type="number" class="form-control" name="quantity" value="' + product.count + '" min="0" title="Quantity" onChange="changeCount(this)"></div>' +
// 		'<div class="col"><span class="total">' + product.total + '</span> VND</div>' +
// 		'<div class="remove"><button onclick="removeProduct(this)" class="btn btn-remove"><i class="fas fa-times"></i></button></div></li>';
// 	});
// 	products.innerHTML = html;
// 	document.getElementById('subtotal').innerHTML = info_customer.subtotal;
// 	document.getElementById('total').innerHTML = info_customer.total;
// });

// function removeProduct(button) {
// 	var id = button.parentNode.parentNode.dataset.id;
// 	var total = info_customer.total;
// 	info_customer.cart.forEach(function(product, i) {
// 		if (product.id == id) {
// 			total -= product.total;
// 			var delete_item = document.querySelector(`li[data-id="${id}"]`);
// 			delete_item.parentNode.removeChild(delete_item);
// 			info_customer.cart.splice(i, 1);
// 			info_customer.subtotal = total;
// 			info_customer.total = total;
// 			document.getElementById('subtotal').innerHTML = total;
// 			document.getElementById('total').innerHTML = total;
// 			DB.setData("info_customer", info_customer);
// 			document.querySelector('.count-item').innerHTML = info_customer.cart.length;
// 		}
// 	});
// }

// function changeCount(input) {
// 	var id = input.parentNode.parentNode.dataset.id;
// 	var total = info_customer.total;
// 	info_customer.cart.forEach(function(product, i) {
// 		if (product.id == id) {
// 			total -= product.total;
// 			if (input.value != 0) {
// 				product.total = (product.total/product.count) * input.value;
// 				total += product.total;
// 				console.log(total);
// 				product.count = input.value;
// 				input.parentNode.parentNode.querySelector('.total').innerHTML = product.total;
// 			} else {
// 				removeProduct(input.parentNode.parentNode.querySelector('.btn-remove'));
// 				return;
// 			}
// 			document.getElementById('subtotal').innerHTML = total;
// 			document.getElementById('total').innerHTML = total;
// 			info_customer.subtotal = total;
// 			info_customer.total = total;
// 			DB.setData("info_customer", info_customer);
// 		}
// 	});
// }


$(document).ready(function() {
 
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 0.01; 
var fadeTime = 300;
 
 
/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});
 
$('.product-removal button').click( function() {
  removeItem(this);
});
 
 
/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
   
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
   
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = subtotal * shippingRate;
  var total = subtotal + tax + shipping;
   
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html((subtotal.toFixed(6)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,"."));
    $('#cart-tax').html((tax.toFixed(6)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,"."));
    $('#cart-shipping').html((shipping.toFixed(6)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,"."));
    $('#cart-total').html((total.toFixed(6)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,"."));

    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}
 
 
/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
   
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text((linePrice.toFixed(6)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,"."));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}
 
 
/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
 
});