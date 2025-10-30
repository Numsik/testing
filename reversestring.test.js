const reversestring = require('./reversestring');


test('hello should be olleh', ()=>{
    expect(reversestring('hello')).toBe('olleh')
})

test('"what about spaces" becomes "secaps tuoba tahw"', () => {
  expect(reversestring('what about spaces')).toBe('secaps tuoba tahw');
});
test('"12345" becomes "54321"', () => {
  expect(reversestring('12345')).toBe('54321');
});
test('12345 becomes "not a string"', () => {
  expect(reversestring(12345)).toBe('this shiit is not a string');
});

