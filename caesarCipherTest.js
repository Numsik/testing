const caesar = require('./caesarCipher')


test('Hello with key 2 should be', () =>{
    expect(caesar('hello', 2)).toBe('jgnnq')
});

test('WORKING with key 5 should be', () =>{
    expect(caesar('WORKING', 5)).toBe('btwpnsl')
});

test('zyzz with key 5 should be', () =>{
    expect(caesar('zyzz', 1)).toBe('azaa')
});