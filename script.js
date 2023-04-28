// Get all elements with the "add-to-cart" class
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through all the buttons and add an event listener to each
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Item added to cart');
  });
});
