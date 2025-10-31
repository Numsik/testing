const caesar = require('./caesarCipher')


test('Hello with key 2 should be', () =>{
    expect(caesar('hello')).toBe('jgnnq')
});

test('WORKING with key 5 should be', () =>{
    expect(caesar('WORKING')).toBe('btwpnsl')
});

test('zyzz with key 4 should be', () =>{
    expect(caesar('zyzz')).toBe('dcdd')
});