if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	let removeCartItemButtons = document.getElementsByClassName('btn-danger')
	for (let i = 0; i < removeCartItemButtons.length; i++) {
		const button = removeCartItemButtons[i];
		button.addEventListener('click', removeCartItem)
	}
	let quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (let i = 0; i < quantityInputs.length; i++) {
		let input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}
	let addToCartButtons = document.getElementsByClassName('shop-item-button')
	for (let i = 0; i < addToCartButtons.length; i++) {
		let button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}
	document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
	alert('Merci pour votre achat')
	const cartItems = document.getElementsByClassName('cart-items')[0];
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild)
	}
	updateCartTotal()
}

function removeCartItem(event) {
	const buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove()
	updateCartTotal()
}

function quantityChanged(event) {
	const input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}

function addToCartClicked(event) {
	let button = event.target,
		 shopItem = button.parentElement.parentElement,
		 title = shopItem.getElementsByClassName('shop-item-title')[0].innerText,
		 price = shopItem.getElementsByClassName('shop-item-price')[0].innerText,
		 imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
	
	addItemToCart(title, price, imageSrc)
	updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
	let cartRow = document.createElement('div'),
		 cartItems = document.getElementsByClassName('cart-items')[0],
		 cartItemNames = cartItems.getElementsByClassName('cart-item-title');
	
	cartRow.classList.add('cart-row')
	for (let i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText === title) {
			alert('Cet article est déjà ajouté au panier')
			return
		}
	}
	cartRow.innerHTML = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100" alt="">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="store-btn btn-danger" type="button">REMOVE</button>
        </div>`
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
	let cartItemContainer = document.getElementsByClassName('cart-items')[0],
		 cartRows = cartItemContainer.getElementsByClassName('cart-row'),
		 total = 0;
	
	for (let i = 0; i < cartRows.length; i++) {
		let cartRow = cartRows[i],
			 priceElement = cartRow.getElementsByClassName('cart-price')[0],
			 quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0],
			 price = parseFloat(priceElement.innerText.replace('$', '')),
			 quantity = quantityElement.value;
		
		total = total + (price * quantity)
	}
	total = Math.round(total * 100) / 100
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}