const palindromes = function (word) {
   const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
   const cleanedstring=word
   .toLowerCase()
   .split('')
   .filter((character) => alphanumerical.includes(character))
   .join('');
   const reversedstring=cleanedstring.split('').reverse().join('');
   return(reversedstring === cleanedstring);
};

module.exports = palindromes;

