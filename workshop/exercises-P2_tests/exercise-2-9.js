// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  // Place solution here
  if (typeof str !== 'string') return undefined;
  let arr = str.split(' ');
  let longest = arr[0];
  arr.forEach(word => {
    if (word.length >= longest.length) longest = word;
  })
  return longest;
}

expect(longestWord("hey hello morning"), 'morning');
expect(longestWord("morning"), 'morning');
expect(longestWord(""), '');
expect(longestWord("hey foo bar"), 'bar');
expect(longestWord(3), undefined);

// We need 5 test cases

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
