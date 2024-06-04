// Function to generate a unique order token
function generateOrderToken() {
    let orderCounter = 1;  // Initialize order counter

    // Return a function that increments the order counter and generates the token
    return function () {
        return orderCounter++;
    };
}

// Create an instance of the order token generator
const getOrderToken = generateOrderToken();

// When a new order is placed, call getOrderToken() to get the unique token number
const tokenNumber = getOrderToken();

// Display the token number in the greeting message
contentContainer.innerHTML += `<p>Your order has been received, ${user.username}! Your token number is: ${tokenNumber}</p>`;
contentContainer.innerHTML += '<p>Ordered Items:</p>';
