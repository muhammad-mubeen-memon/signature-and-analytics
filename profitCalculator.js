/**
 * Calculates profit and revenue from sales and cost price
 * @param {number} salesPrice - The selling price per unit
 * @param {number} costPrice - The cost price per unit
 * @param {number} quantity - The quantity sold (default: 1)
 * @returns {Object} An object containing revenue, totalCost, and profit
 */
function calculateProfitAndRevenue(salesPrice, costPrice, quantity = 1) {
    // Validate inputs
    if (typeof salesPrice !== 'number' || typeof costPrice !== 'number' || typeof quantity !== 'number') {
        throw new Error('All parameters must be numbers');
    }
    
    if (salesPrice < 0 || costPrice < 0 || quantity < 0) {
        throw new Error('Prices and quantity must be non-negative');
    }
    
    // Calculate revenue (total sales)
    const revenue = salesPrice * quantity;
    
    // Calculate total cost
    const totalCost = costPrice * quantity;
    
    // Calculate profit (revenue - cost)
    const profit = revenue - totalCost;
    
    // Calculate profit margin percentage
    const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;
    
    return {
        revenue: revenue,
        totalCost: totalCost,
        profit: profit,
        profitMargin: profitMargin.toFixed(2) + '%',
        quantity: quantity
    };
}

// Example usage
console.log('Example 1: Single item');
console.log(calculateProfitAndRevenue(100, 60, 1));
// Output: { revenue: 100, totalCost: 60, profit: 40, profitMargin: '40.00%', quantity: 1 }

console.log('\nExample 2: Multiple items');
console.log(calculateProfitAndRevenue(50, 30, 10));
// Output: { revenue: 500, totalCost: 300, profit: 200, profitMargin: '40.00%', quantity: 10 }

console.log('\nExample 3: Default quantity (1)');
console.log(calculateProfitAndRevenue(75, 50));
// Output: { revenue: 75, totalCost: 50, profit: 25, profitMargin: '33.33%', quantity: 1 }

module.exports = calculateProfitAndRevenue;
