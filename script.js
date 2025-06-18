let likeBtn = document.getElementsByClassName("like");
let plusBtn = document.getElementsByClassName("plus-btn");
let minusBtn = document.getElementsByClassName("minus-btn");
let deleteBtns = document.getElementsByClassName("delete");

// Heart button click event
for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
        if (likeBtn[i].firstChild.style.color === "red") {
            likeBtn[i].firstChild.style.color = "black"; // Passing from red to black 
        } else {
            likeBtn[i].firstChild.style.color = "red"; // Passing from black to red
        }
    });
}

// function for updating price
function updateTotal() {
    let items = document.getElementsByClassName("Item");
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        let priceElement = items[i].querySelector(".price");
        let quantityElement = items[i].querySelector(".Quant");
        
        let initialPrice = parseFloat(priceElement.getAttribute("data-base-price") || priceElement.textContent);
        if (!priceElement.getAttribute("data-base-price")) {
            priceElement.setAttribute("data-base-price", initialPrice.toFixed(2));
        }
        
        let quantity = parseInt(quantityElement.value);
        let itemPrice = initialPrice * quantity; // Calculate article price
        priceElement.textContent = itemPrice.toFixed(2);
        // Adding to the total
        total += itemPrice;
    }
    // Updating the total price 
    document.getElementById("finalPrice").value = total.toFixed(2);
}

// Plus button click event
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function () {
        plusBtn[i].previousElementSibling.value++;
        updateTotal(); 
    });
}

// Minus button click event
for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener("click", function () {
        let input = minusBtn[i].nextElementSibling;
        if (parseInt(input.value) > 1) { // empêche la valeur de passer en dessous de 1
            input.value = parseInt(input.value) - 1;
            updateTotal();
        }
    });
}

// Remove button click event 
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        let item = deleteBtns[i].parentElement;
        item.remove();
        updateTotal(); // Mettre à jour le total après suppression
    });
}

// Appeler updateTotal au chargement initial
document.addEventListener("DOMContentLoaded", updateTotal);