const capitalize = require('./capitalize');

test('First letter of string should be Upper case', () =>{
  expect(capitalize('word')).toBe('Word');
})