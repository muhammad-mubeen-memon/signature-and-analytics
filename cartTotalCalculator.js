/**
 * Calculates the total amount of products available in the cart
 * @param {Array} cartItems - Array of cart items, each containing price and quantity
 * @param {number} cartItems[].price - The price per unit of the product
 * @param {number} cartItems[].quantity - The quantity of the product in the cart
 * @returns {Object} An object containing totalAmount, itemCount, and itemDetails
 */
function calculateCartTotal(cartItems) {
    // Validate input
    if (!Array.isArray(cartItems)) {
        throw new Error('Cart items must be an array');
    }
    
    if (cartItems.length === 0) {
        return {
            totalAmount: 0,
            itemCount: 0,
            itemDetails: []
        };
    }
    
    let totalAmount = 0;
    let itemCount = 0;
    const itemDetails = [];
    
    // Process each cart item
    cartItems.forEach((item, index) => {
        // Validate item structure
        if (!item || typeof item !== 'object') {
            throw new Error(`Item at index ${index} must be an object`);
        }
        
        const price = item.price;
        const quantity = item.quantity !== undefined ? item.quantity : 1;
        
        // Validate price and quantity
        if (typeof price !== 'number' || isNaN(price)) {
            throw new Error(`Item at index ${index} must have a valid numeric price`);
        }
        
        if (typeof quantity !== 'number' || isNaN(quantity)) {
            throw new Error(`Item at index ${index} must have a valid numeric quantity`);
        }
        
        if (price < 0) {
            throw new Error(`Item at index ${index} price cannot be negative`);
        }
        
        if (quantity < 0) {
            throw new Error(`Item at index ${index} quantity cannot be negative`);
        }
        
        // Calculate item total
        const itemTotal = price * quantity;
        totalAmount += itemTotal;
        itemCount += quantity;
        
        // Store item details
        itemDetails.push({
            index: index,
            price: price,
            quantity: quantity,
            itemTotal: itemTotal,
            productName: item.name || item.productName || `Product ${index + 1}`
        });
    });
    
    return {
        totalAmount: Math.round(totalAmount * 100) / 100, // Round to 2 decimal places
        itemCount: itemCount,
        itemDetails: itemDetails
    };
}

// Example usage
console.log('HC Change: Example 1: Cart with multiple items');
const cart1 = [
    { name: 'Laptop', price: 999.99, quantity: 1 },
    { name: 'Mouse', price: 29.99, quantity: 2 },
    { name: 'Keyboard', price: 79.99, quantity: 1 }
];
console.log(calculateCartTotal(cart1));
// Output: { totalAmount: 1139.96, itemCount: 4, itemDetails: [...] }

console.log('HC Change: \nExample 2: Cart with single item');
const cart2 = [
    { name: 'Phone', price: 599.99, quantity: 1 }
];
console.log(calculateCartTotal(cart2));
// Output: { totalAmount: 599.99, itemCount: 1, itemDetails: [...] }

console.log('HC Change: \nExample 3: Empty cart');
console.log(calculateCartTotal([]));
// Output: { totalAmount: 0, itemCount: 0, itemDetails: [] }

console.log('HC Change: \nExample 4: Cart with items without explicit quantity (defaults to 1)');
const cart4 = [
    { name: 'Book', price: 19.99 },
    { name: 'Pen', price: 2.99, quantity: 3 }
];
console.log(calculateCartTotal(cart4));
// Output: { totalAmount: 28.96, itemCount: 4, itemDetails: [...] }

module.exports = calculateCartTotal;
