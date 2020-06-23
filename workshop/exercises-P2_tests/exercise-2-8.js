// Exercise 2-8
// ------------

// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  if (typeof str !== 'string') return undefined;
  let rts = '';
  for (i = str.length-1; i >= 0; i--) {
    rts += str.charAt(i);
  }
  return rts;
}

expect(reverse('hello'), 'olleh');
expect(reverse("how are you"), "uoy era woh");
expect(reverse(''), '');
expect(reverse(2), undefined);
expect(reverse('e'), 'e');

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
