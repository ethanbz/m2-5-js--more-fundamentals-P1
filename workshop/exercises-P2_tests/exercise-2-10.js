// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong


function makeIntoTitle(sentence) {
  // Your code here
  if (typeof sentence !== 'string') return undefined;
  if (sentence === '') return '';

  let words = sentence.split(' ');
  title = words.map(word => {
    word = word.toLowerCase();
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    return word;
  })
  return title.join(' ');
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('the'),
  'The'
);
expect(
  makeIntoTitle(''),
  ''
);
expect(
  makeIntoTitle('2'),
  '2'
);
expect(
  makeIntoTitle(2),
  undefined
);
expect(
  makeIntoTitle("ALL YOUR BASE ARE BELONG"),
  'All Your Base Are Belong'
);

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
