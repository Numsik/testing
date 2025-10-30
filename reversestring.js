function reversestring(str){
    if (typeof str === "string"){
        const splitstringarray = str.split('');
        const reversearray = splitstringarray.reverse();
        const newstring = reversearray.join('');
        return newstring;
    }else{
        return 'this shiit is not a string'
    }
}

module.exports = reversestring;