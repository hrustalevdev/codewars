/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 *
 * @param {string} str
 * @returns {string}
 */
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
  // return str.replace(/\w+/g, (match) => `${match.slice(1)}${match[0]}ay`);
}

console.log(pigIt('Pig latin is cool'));
