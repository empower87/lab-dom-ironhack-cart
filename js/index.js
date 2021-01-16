document.querySelector('#calculate').onclick = function() {
  let allProducts = document.querySelectorAll('.product')
  let total = 0
  for (let i = 0; i < allProducts.length; i++) {
    let eachProduct = allProducts[i]
    let price = eachProduct.querySelector('.price span').innerHTML
    let value = eachProduct.querySelector('.quantity input').value
    let subTotal = price * value
    eachProduct.querySelector('.subtotal span').innerHtml = subTotal
    total += subTotal
  }
  document.querySelector('#total-value span').innerText = total
  console.log(total)
}


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

//   let input = document.querySelector('input')

  // unitValue.addEventListener('input', function (event) {
  //   newSub = unitPrice * unitValue
  // })
//   input.oninput = function() {
//     console.log("click")
//     newSub = unitPrice * input.value
//     console.log(newSub)
//   }
// }


// let selectQuantity = document.querySelectorAll('.product')

// selectQuantity.forEach(item => {
//   item.addEventListener('input', event => {
//     console.log(item)
//     let newSub = document.querySelector('.subtotal')
//     let unitPrice = parseInt(document.querySelector('.price span').innerText)
//     let input = document.querySelector('input')
//     newSub = unitPrice * input.value
//     console.log("click")
//     console.log(newSub)
//   })
// })


// selectQuantity.oninput = function() {
//   console.log("click")


// function wireUpRemove() {
  // let removeButtons = document.querySelectorAll('.btn-remove.btn')
  // for (let i =0; i < removeButtons.length; i++) {
    // let removeButtons = removeButtonsp[i]
    // removeButtons.onClick = function(event) {
      // this.parentNode.parentNode.remove()
    // }
  // }
//}