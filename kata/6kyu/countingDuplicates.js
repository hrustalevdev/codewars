/**
 * Counting Duplicates
 *
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
 * that occur more than once in the input string. The input string can be assumed to contain only alphabets (both
 * uppercase and lowercase) and numeric digits.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 *
 * @param {string} text
 * @returns {number}
 */
function duplicateCount(text){
  return text.toLocaleLowerCase().split('').reduce((res, char) => {
    res.charMap[char] = res.charMap[char] ? ++res.charMap[char] : 1;
    res.countSet = res.charMap[char] >= 2 ? res.countSet.add(char) : res.countSet;

    return res;
  }, {
    countSet: new Set(),
    charMap: {},
  }).countSet.size;
}

function duplicateCountRegExp(text){
  /* ([a-z\d])\1 - скобочная группа запоминает сопоставление, а `\1` говорит движку найти то же самое,
  что и в скобочной группе #1 */
  return (text.toLowerCase().split('').sort().join('').match(/([a-z\d])\1+/g) || []).length;
}

console.time('duplicateCount')
console.log(duplicateCount('Indivisibilities'));
console.timeEnd('duplicateCount')

console.time('duplicateCountRegExp')
console.log(duplicateCountRegExp('Indivisibilities'));
console.timeEnd('duplicateCountRegExp')


