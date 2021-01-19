let products = document.querySelectorAll('.product')
let oneProduct = document.querySelector('.product')
let cloneProduct = oneProduct.cloneNode(true)

/* creates listeners for Unit Price and Quantity that onchange updates
   cloneProduct */
document.querySelector('#get-prod').onchange = function() {
  let prodInputVal = document.querySelector("#get-prod").value
  cloneProduct.querySelector('.name span').innerText = prodInputVal
}
document.querySelector('#get-price').onchange = function() {
  let priceInputVal = document.querySelector('#get-price').value
  cloneProduct.querySelector('.price span').innerText = priceInputVal
}

//create #create button listener and upon click creates new .product
document.querySelector('#create').onclick = function(event) {
  document.querySelector('tbody').appendChild(cloneProduct)
}

//calculates total from all products 
document.querySelector('#calculate').addEventListener('click', function() {
  let total = 0
  for (let i = 0; i < products.length; i++) {
    let eachProduct = products[i]
    let prodPrice = eachProduct.querySelector('.price span').innerHTML
    let prodQuantity = eachProduct.querySelector('.quantity input').value
    let subTotal  = prodPrice * prodQuantity
    eachProduct.querySelector('.subtotal span').innerHtml = subTotal
    total += subTotal
  }
  document.querySelector('#total-value span').innerText = total
  console.log(total)
})

//updates .subtotal based on .quantity input from user
document.querySelectorAll('.quantity').forEach(item => {
  item.addEventListener('input', function() {
    let newSub = item.parentNode.querySelector('.subtotal span')
    let quantityInput = item.parentNode.querySelector('input')
    let unitPrice = parseInt(item.parentNode.querySelector('.price span').innerText)
    newSub.innerText = unitPrice * quantityInput.value
    console.log(newSub)
  })
})

//removes .products but doesn't update #calculate total 
document.querySelectorAll('.btn-remove').forEach(item => {
  item.addEventListener('click', function() {
    item.parentNode.parentNode.remove()
  })
})
