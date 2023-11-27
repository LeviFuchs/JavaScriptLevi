// Get the command-line arguments excluding the first two elements
const numbers = process.argv.slice(2);

// Calculate the sum of numbers
const sum = numbers.reduce((acc, num) => acc + Number(num), 0);

// Print the sum to the console
console.log(sum);
