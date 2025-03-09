
function reverseString(str) {
    let letters = str.slice(0, -1).split('').reverse().join('');
    return letters + str.slice(-1);
}

// Test cases
console.log(reverseString("NEGIE1")); 
console.log(reverseString("HELLO2")); 
console.log(reverseString("WORLD3")); 
