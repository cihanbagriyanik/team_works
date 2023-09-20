//asya=>yasa
//kacmak=>cakmal

const str1="listen";
const str2="silent";

const areAnagrams=(str1,str2)=>{

return str1.split("").sort().join("")===str2.split("").sort().join("") ? "anagram":"anagram degildir"

}


console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false


















