// Function to update the total price
function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
}

// Event listeners for quantity buttons
document.querySelectorAll('.cart-item .plus').forEach(button => {
    button.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.cart-item').querySelector('.quantity');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotal();
    });
});

document.querySelectorAll('.cart-item .minus').forEach(button => {
    button.addEventListener('click', (event) => {
        const quantityElement = event.target.closest('.cart-item').querySelector('.quantity');
        if (parseInt(quantityElement.textContent) > 1) {
            quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            updateTotal();
        }
    });
});

// Event listener for delete buttons
document.querySelectorAll('.cart-item .delete').forEach(button => {
    button.addEventListener('click', (event) => {
        const cartItem = event.target.closest('.cart-item');
        cartItem.remove();
        updateTotal();
    });
});

// Event listener for like buttons
document.querySelectorAll('.cart-item .like').forEach(button => {
    button.addEventListener('click', (event) => {
        const likeButton = event.target;
        likeButton.classList.toggle('liked');
    });
});

// Initial total update
updateTotal();
