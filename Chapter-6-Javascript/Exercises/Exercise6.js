// Here are the functions to calculate the total cost of petrol
document.getElementById('calculate').addEventListener('click', function() {

// Here it gets the values that we input in out html file
const costPerLiter = parseFloat(document.getElementById('cost').value);
const LitersPurchased =parseFloat(document.getElementById('liters').value);

// Now we need to calculate the total cost 
const totalCost = costPerLiter *LitersPurchased;

// Now that we have the calculate total cost we need the display function

const TotalCostElement = document.getElementById('total-cost');
TotalCostElement.textContent = `Total Cost: USD ${totalCost.toFixed(2)}`;




});

