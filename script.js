// selectors
const checkbox = document.querySelector('.sale');
const productContainer = document.querySelector('.products');
const products = document.querySelectorAll('.product');
const select = document.querySelector('.order');


// Discounted product checkbox
checkbox.addEventListener('click', () => {
  products.forEach(product => {
    if (checkbox.checked) {
      if (product.querySelectorAll('.product-old-price').length === 0) {
        product.style.display = "none";
      }
    } else {
      product.style.display = "inline-block";
    }
  });
})

// Sort
function setOrder() {
  if (select.value == 0) { // Növekvő ár
    [...productContainer.children]
    .sort((a, b) => a.querySelectorAll('.product-price')[0].innerText.split(" ")[0] - b.querySelectorAll('.product-price')[0].innerText.split(' ')[0])
      .forEach(product => productContainer.appendChild(product));
  } else if (select.value == 1) { // csökkenő ár
    [...productContainer.children]
    .sort((a, b) => a.querySelectorAll('.product-price')[0].innerText.split(" ")[0] - b.querySelectorAll('.product-price')[0].innerText.split(' ')[0]).reverse()
      .forEach(product => productContainer.appendChild(product));
  } else if (select.value == 2) { // ABC növekvő
    [...productContainer.children]
    //.sort((a, b) => a.querySelectorAll('.product-name')[0].innerText.toUpperCase() > b.querySelectorAll('.product-name')[0].innerText.toUpperCase() ? 1 : -1)
    .sort((a, b) => a.querySelectorAll('.product-name')[0].innerText.localeCompare(b.querySelectorAll('.product-name')[0].innerText))
      .forEach(product => productContainer.appendChild(product));
  } else if (select.value == 3) { // ABC csökkenő
    [...productContainer.children]
    //.sort((a, b) => a.querySelectorAll('.product-name')[0].innerText.toUpperCase() > b.querySelectorAll('.product-name')[0].innerText.toUpperCase() ? 1 : -1).reverse()
    .sort((a, b) => a.querySelectorAll('.product-name')[0].innerText.localeCompare(b.querySelectorAll('.product-name')[0].innerText)).reverse()
      .forEach(product => productContainer.appendChild(product));
  }
}

setOrder() // Ha esetleg az oldal betöltésekor nem sorba lennének betöltve az adatbázisból a termékek
select.addEventListener("change", () => setOrder())