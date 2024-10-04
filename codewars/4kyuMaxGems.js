import { assertDeepEquals } from "./testModule.js";
import { MinHeap } from "./minheap.js";
/**
 * Calculates the maximum number of gems that can be purchased within a given budget.
 * 
 * @param {number[]} costs - An array of numbers representing the cost of each gem.
 * @param {number} budget - The total budget available to purchase gems.
 * @returns {number} The maximum number of gems that can be purchased without exceeding the budget.
 * 
 * sort costs into min heap binary tree, ignoring any cost over budget
 * bt node will have a counter property that tracks occurences of number
 * traverse down tree adding each node value to total cost and 
 * incrementing count of coins until the total cost would exceed budget or there are no more gems
 * */

function maxGems(costs, budget) {
    const costsHeap = new MinHeap()
    console.log(costs)
    costs.forEach((cost) => {
        if(cost <= budget) costsHeap.add(cost);
        console.log(costsHeap)
    })
    let amountSpent = 0;
    let coinCount = 0;
    let nextCoinCost = 0;
    console.log(budget)
    
    while(costsHeap.peek() && coinCount !== budget){
        nextCoinCost = costsHeap.remove()
        
        if(nextCoinCost + amountSpent <= budget){            
            amountSpent += nextCoinCost;
            coinCount++;
            console.log(`count: ${coinCount} amountSpent: ${amountSpent}`)
        } else return coinCount;
    }
    return coinCount
}
 
assertDeepEquals(maxGems([1, 3, 2, 4, 1], 7), 4)
assertDeepEquals(maxGems([10, 6, 8, 7, 7, 8], 5), 0);
assertDeepEquals(maxGems([10,6,8,7,7,8], 20), 3);
console.log(maxGems([10, 6, 8, 7, 7, 8], 5))




 