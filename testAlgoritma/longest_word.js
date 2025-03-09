
function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = words.reduce((a, b) => a.length > b.length ? a : b);
    return `${longest}: ${longest.length} characters`;
}

// Test cases
console.log(longestWord("Saya sangat senang mengerjakan soal algoritma")); 
console.log(longestWord("Pemrograman adalah seni")); 
console.log(longestWord("Belajar JavaScript itu menyenangkan")); 
