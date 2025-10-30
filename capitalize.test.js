const capitalize = require('./capitalize');

test('First letter of string should be Upper case', () =>{
  expect(capitalize('word')).toBe('Word');
})
test('"TEST" should become "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('"three word test" should become "Three word test"', () => {
  expect(capitalize('three word test')).toBe('Three word test');
});
