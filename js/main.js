const words = ["Beachball", "Rodeo", "Angel",
"Aardvark", "Xylophone", "November", "Chocolate",
"Papaya", "Uniform", "Joker", "Clover", "Bali"];

const longWords = words.filter(w => w.length > 6);
const longSentence = longWords.join(" ");

console.log(longSentence);