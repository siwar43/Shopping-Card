var items = document.querySelectorAll('.Item');
var totalPriceInput = document.getElementById('finalPrice');

// Stockage des prix unitaires
var unitPrices = [];
for (var i = 0; i < items.length; i++) {
    var priceElement = items[i].querySelector('.price');
    unitPrices[i] = parseFloat(priceElement.textContent.trim()) || 0;
}

// Fonction pour mettre à jour les prix
function updatePrices() {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        var quantityInput = items[i].querySelector('.Quant');
        var priceElement = items[i].querySelector('.price');
        var quantity = parseInt(quantityInput.value.trim()) || 0;
        var itemPrice = quantity * unitPrices[i];
        priceElement.textContent = itemPrice.toFixed(2);
        total += itemPrice;
    }
    totalPriceInput.value = total.toFixed(2);
}

// Gestion des boutons cœur
for (var i = 0; i < items.length; i++) {
    var heartButton = items[i].querySelector('.like');
    heartButton.addEventListener('click', function() {
        var icon = this.querySelector('i');
        icon.style.color = icon.style.color === 'red' ? 'black' : 'red';
    });
}

// Gestion des boutons plus
for (var i = 0; i < items.length; i++) {
    var plusButton = items[i].querySelector('.plus-btn');
    plusButton.addEventListener('click', function() {
        var quantityInput = this.parentElement.querySelector('.Quant');
        var quantity = parseInt(quantityInput.value.trim()) || 0;
        quantity++;
        quantityInput.value = quantity;
        updatePrices();
    });
}

// Gestion des boutons moins
for (var i = 0; i < items.length; i++) {
    var minusButton = items[i].querySelector('.minus-btn');
    minusButton.addEventListener('click', function() {
        var quantityInput = this.parentElement.querySelector('.Quant');
        var quantity = parseInt(quantityInput.value.trim()) || 0;
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
        updatePrices();
    });
}

updatePrices();