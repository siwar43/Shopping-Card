document.addEventListener('DOMContentLoaded', () => {
    const heartButtons = document.querySelectorAll('.like');
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');
    const totalPriceInput = document.getElementById('finalPrice');

    const items = document.querySelectorAll('.Item');
    const unitPrices = Array.from(items).map(item => {
        const priceElement = item.querySelector('.price');
        return parseFloat(priceElement.textContent.trim()) || 0;
    });

    // Function to update the prices
    function updatePrices() {
        let total = 0;
        items.forEach((item, index) => {
            const quantityInput = item.querySelector('.Quant');
            const priceElement = item.querySelector('.price');
            const quantity = parseInt(quantityInput.value.trim()) || 0;
            const itemPrice = quantity * unitPrices[index];
            priceElement.textContent = itemPrice.toFixed(2);
            total += itemPrice;
        });
        totalPriceInput.value = total.toFixed(2);
    }

    // Heart button 
    heartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const icon = button.querySelector('i');
            if (icon.style.color === 'red') {
                icon.style.color = 'black';
            } else {
                icon.style.color = 'red';
            }
        });
    });

    // Plus button 
    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.Quant');
            let quantity = parseInt(quantityInput.value.trim()) || 0;
            quantity++;
            quantityInput.value = quantity;
            updatePrices();
        });
    });

    // Minus button
    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.Quant');
            let quantity = parseInt(quantityInput.value.trim()) || 0;
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
            updatePrices();
        });
    });

    updatePrices();
});