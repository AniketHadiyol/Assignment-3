// JavaScript for Smoothie Order Form

// Event listener for the order button
document.getElementById('orderButton').addEventListener('click', function() {
    if (!validateForm()) {
        alert("Please fill out all required fields.");
        return;
    }

    const customerName = document.getElementById('customerName').value;
    const size = document.getElementById('size').value;
    const fruits = getCheckedValues('fruit');
    const addProtein = document.getElementById('addProtein').checked;
    
    const smoothie = new Smoothie(customerName, size, fruits, addProtein);
    document.getElementById('orderSummary').innerHTML = smoothie.describe();
    updatePriceDisplay(smoothie.calculatePrice());
    updateSmoothieImage(smoothie.fruits);
});

// Helper function to get checked values from checkboxes
function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

// Form validation
function validateForm() {
    return document.getElementById('customerName').value !== '';
}

// Smoothie class
class Smoothie {
    constructor(name, size, fruits, protein) {
        this.name = name;
        this.size = size;
        this.fruits = fruits;
        this.protein = protein;
    }

    describe() {
        return `<h2>Order Summary</h2>
                <p>Name: ${this.name}</p>
                <p>Size: ${this.size}</p>
                <p>Fruits: ${this.fruits.join(', ')}</p>
                <p>Protein: ${this.protein ? 'Yes' : 'No'}</p>`;
    }

    calculatePrice() {
        let price = this.size === 'large' ? 7 : this.size === 'medium' ? 5 : 3;
        price += this.fruits.length * 0.5;
        if (this.protein) price += 1;
        return price;
    }
}

// Update price display
function updatePriceDisplay(price) {
    document.getElementById('priceDisplay').innerText = `Total Price: $${price.toFixed(2)}`;
}

// Update smoothie image
function updateSmoothieImage(fruits) {
    // Logic to change the smoothie image based on selected fruits
    // For example, setting different images for different fruit combinations
}
