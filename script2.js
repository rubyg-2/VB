let cart = [];
let currentItem = null;
let total = 0;

// Drink Data
const drinks = {
    "Our 6th summer": {
        price: 6.25,
        description: "Inspired by Plave's 1st mini Album, this Creamy matcha with coconut hints — is a summer dream.",
        image: "drinks/6thsummer.png",
        options: ["matcha", "coconut", "milk", "ice", "size-choice"]
    },
    "La Vida Loca": {
        price: 4.25,
        description: "Inspired by Watch Me Woo, this vibrant red-pink tea is infused with a bold blend of strawberry and pomegranate, creating an irresistible taste in every sip.",
        image: "drinks/berry.png",
        options: ["ice", "tea", "size-choice"]
    },
    "Moonlit Dreams": {
        price: 4.25,
        description: "Inspired by Chroma Drift, Midnight Dreams is a blend of dragonfruit and blackberry tea, capturing the essence of a mysterious encounter on a dreamy night beneath a sea of stars.",
        image: "drinks/MoonlitDreams.png",
        options: ["ice", "tea", "size-choice"]
    },
    "Pink Crush": {
        price: 5.25,
        description: "A smooth and sweet Strawberry lemonade with a pink cotton candy deer, and a sugary RIZZ heart on the top.",
        image: "drinks/rizzB.png",
        options: ["ice", "size-choice"]
    },
    "Crimson Rush": {
        price: 5.25,
        description: "A bold raspberry lemonade with a red cotton candy wolf, and a sugary RIZZ heart on the top.",
        image: "drinks/rizzE.png",
        options: ["ice", "size-choice"]
    },
    "Fates Disguised": {
        price: 5.25,
        description: "A mysterious and rich blackberry lemonade with a black cotton candy cat, and a sugary RIZZ heart on the top.",
        image: "drinks/rizzH.png",
        options: ["ice", "size-choice"]
    },
    "Violet Kiss": {
        price: 5.25,
        description: "A sweet and velvety grape lemonade, with a purple cotton candy alpaca, and a sugary RIZZ heart on the top.",
        image: "drinks/rizzN.png",
        options: ["ice", "size-choice"]
    },
    "Blue Bliss": {
        price: 5.25,
        description: "A refreshing and light blueberry lemonade with a blue cotton candy dolphin, and a sugary RIZZ heart on the top.",
        image: "drinks/rizzY.png",
        options: ["ice", "size-choice"]
    },
    "MEYMU Cookie": {
        price: 1,
        description: "A warm, freshly baked cookie inspired by Meymu, the son of our Leader, Yejun.",
        image: "cookies/MEYMU.png",
        options: [] // No options
    },
    "MEOWMI Cookie": {
        price: 1,
        description: "A warm, freshly baked cookie inspired by Meowmi, the son of our Maknae, Hamin.",
        image: "cookies/MEOWMI.png",
        options: [] // No options
    },
    "MIIMU Cookie": {
        price: 1,
        description: "A warm, freshly baked cookie inspired by Miimu, the son of our Main Dancer Bamby.",
        image: "cookies/MIIMU.png",
        options: [] // No options
    },
    "MOI Cookie": {
        price: 1,
        description: "A warm, freshly baked cookie inspired by Moi, the son of our Main Vocalist Noah.",
        image: "cookies/MOI.png",
        options: [] // No options
    },
    "MUHMO Cookie": {
        price: 1,
        description: "A warm, freshly baked cookie inspired by Muhmo, the son of our Main Rapper Eunho.",
        image: "cookies/MUHMO.png",
        options: [] // No options
    }
};



// Open Modal
function openModal(drinkName) {
    currentItem = drinks[drinkName];
    currentItem.name = drinkName;

    document.getElementById("modal-title").innerText = drinkName;
    document.getElementById("modal-description").innerText = currentItem.description;
    document.getElementById("modal-image").src = currentItem.image;

    // Show/Hide customization options based on drink
    const optionsArea = document.getElementById("custom-options");
    optionsArea.innerHTML = ""; // Clear previous options

    if (currentItem.options.includes("matcha")) {
        optionsArea.innerHTML += `
            <label><input type="checkbox" id="extra-matcha"> Extra Matcha (+$1)</label><br>
        `;
    }
    if (currentItem.options.includes("coconut")) {
        optionsArea.innerHTML += `
            <label><input type="checkbox" id="extra-coconut"> Extra Coconut (+$0.75)</label>
            <label><input type="checkbox" id="no-coconut"> No Coconut</label><br>
        `;
    }
    if (currentItem.options.includes("milk")) {
        optionsArea.innerHTML += `
            <label>Milk Choice:
                <select id="milk-choice">
                    <option value="Whole Milk">Whole Milk</option>
                    <option value="Oat Milk">Oat Milk (+$0.50)</option>
                    <option value="Almond Milk">Almond Milk (+$0.50)</option>
                </select>
            </label><br>
        `;
    }
    if (currentItem.options.includes("size-choice") && !currentItem.image.includes("cookies")) {
        optionsArea.innerHTML += `
            <label>Size:
                <select id="size-choice">
                    <option value="Byte">Byte 12oz (−$0.30)</option>
                    <option value="Megabyte" selected>Megabyte 16 oz (base price)</option>
                    <option value="Gigabyte">Gigabyte 24oz (+$0.50)</option>
                </select>
            </label><br>
        `;
    }


    // Show Modal
    document.getElementById("modal").style.display = "block";
    // Hide Cart Summary
    document.getElementById("cart-summary").style.display = "none";
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
    // Show Cart Summary Again
    document.getElementById("cart-summary").style.display = "block";
}




function addToCart() {
    let finalPrice = currentItem.price;

    // Handle additional customizations based on options
    if (document.getElementById("extra-matcha")?.checked) finalPrice += 1;
    if (document.getElementById("extra-coconut")?.checked) finalPrice += 0.75;

    // Handle milk choice customization
    if (document.getElementById("milk-choice")) {
        const milk = document.getElementById("milk-choice").value;
        if (milk === "Oat Milk" || milk === "Almond Milk") finalPrice += 0.5;
    }

    // Handle size choice and adjust price accordingly
    let size = "Megabyte"; // default
    const sizeChoiceElement = document.getElementById("size-choice");
    if (sizeChoiceElement) {
        size = sizeChoiceElement.value;
        if (size === "Byte") finalPrice -= 0.30;
        else if (size === "Gigabyte") finalPrice += 0.50;
    }

    if (currentItem.image.includes("cookies")){
        size ="";
    }
    // Add item to cart
    cart.push({ name: `${currentItem.name}${size ? ' (' + size + ')' : ''}`, price: finalPrice });
    total += finalPrice;

    updateCart();
    closeModal();  // Close modal after adding to cart
}


// Toggle Sidebar for Cart
function toggleSidebar() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "300px";
    } else {
        sidebar.style.width = "0";
    }
}

// Close Sidebar
function closeSidebar() {
    document.getElementById("cart-sidebar").style.width = "0";
}

// Update Cart Display in Sidebar
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = ""; // Clear previous cart items

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items to your order.");
        return;
    }

    alert("Your order has been placed! Thank you for shopping.");
    cart = [];
    total = 0;
    updateCart();
    closeSidebar();
}




// JavaScript to trigger fade-in effect
video.addEventListener('ended', function() {
    document.getElementById('preloader').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    setTimeout(function() {
        mainContent.classList.add('show');
    }, 100);
});
