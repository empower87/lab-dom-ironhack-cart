
document.querySelector('#calculate').onclick = function() {
  let allProducts = document.querySelectorAll('.product')
  let total = 0
  for (let i = 0; i < allProducts.length; i++) {
    let eachProduct = allProducts[i]
    let price = eachProduct.querySelector('.price span').innerHTML
    let value = eachProduct.querySelector('.quantity input').value
    let subTotal  = price * value
    eachProduct.querySelector('.subtotal span').innerHtml = subTotal
    total += subTotal
  }
  document.querySelector('#total-value span').innerText = total
  console.log(total)
}

//outputs subtotal upon adding units to cart
let selectQuantity = document.querySelectorAll('.product')
for (let i = 0; i < selectQuantity.length; i++) {
  let ep = selectQuantity[i]
  let newSub = ep.querySelector('.subtotal span')
  let input = ep.querySelector('input')
  let unitPrice = parseInt(ep.querySelector('.price span').innerText)
  input.oninput = function() {
    newSub.innerText = unitPrice * input.value
    console.log(newSub)
  }
}
//removes products but doesn't update total 
let removeProduct = document.querySelectorAll('.product')
for (let i = 0; i < removeProduct.length; i++) {
  let rem = removeProduct[i]
  let remButton = rem.querySelector('.action')

  remButton.onclick = function() {
    rem.remove()
    let currentProd = remButton.parentNode
    let currentSub = currentProd.querySelector('.subtotal span').innerText
  }
}

let aprod = document.querySelector('.product')
let cloneProduct = aprod.cloneNode(true)

document.querySelector('#get-prod').onchange = function() {
  let prodInputVal = document.querySelector("#get-prod").value
  cloneProduct.querySelector('.name span').innerText = prodInputVal
}
document.querySelector('#get-price').onchange = function() {
  let priceInputVal = document.querySelector('#get-price').value
  cloneProduct.querySelector('.price span').innerText = priceInputVal
  console.log(priceInputVal)
  console.log(cloneProduct.querySelector('.price span').innerText)
}

// create new product
document.querySelector('#create').onclick = function() {
  document.querySelector('tbody').appendChild(cloneProduct)
  // create eventlisteners for input text and number and store
  // in a variable
  
  //take input in .create-product store in .name 
  // of new .product class. Do same for number input
  //append a .product class to the end of the table
}
















































// function wireUpRemove() {
  // let removeButtons = document.querySelectorAll('.btn-remove.btn')
  // for (let i =0; i < removeButtons.length; i++) {
    // let removeButtons = removeButtonsp[i]
    // removeButtons.onClick = function(event) {
      // this.parentNode.parentNode.remove()
    // }
  // }
//}