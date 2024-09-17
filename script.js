let selectedProduct = '';

function selectProduct(product) {
  selectedProduct = product;
  alert({product});
}

function proceedToCheckout() {
  if (selectedProduct === '') {
    alert('Please select a product first');
  } else {
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.style.display = 'block';
  }
}