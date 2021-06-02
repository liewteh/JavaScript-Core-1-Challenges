// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    return Array.from(str.toLowerCase()).filter(vowel => 'aeiou'.includes(vowel)).length;
};
