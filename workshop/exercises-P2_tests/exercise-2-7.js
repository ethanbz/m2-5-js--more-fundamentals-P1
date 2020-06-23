// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  // Your code here
  if (arr.length !== 2 || typeof arr[1] !== 'number') return undefined;
  if (arr[1] < 1) return '';
  if (arr[0] !== 'string') arr[0] = String(arr[0]);
  let str = '';
  for (i = 0; i < arr[1]; i++) {
    str += arr[0];
  }
  return str;
  
}

expect(repeat(['foo', 6]), 'foofoofoofoofoofoo');
expect(repeat(['fo', 1]), 'fo');
expect(repeat(['foo', 0]), '');
expect(repeat(['foo', -1]), '');
expect(repeat(['foo', 'foo']), undefined);
expect(repeat(['foo', 2, 3]), undefined);
expect(repeat(['', 2]), '');
expect(repeat([2, 2]), '22');

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
