


function ceaser(word, key){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = "";
    let string = word.toLowerCase();

    for (let i = 0; i < word.length; i++){
        if (string[i] !== " "){
            let index = alphabet.indexOf(string[i]);
            result += alphabet[(index + key) % 26];
        }else{
            return false;
        }
        
    }
    return result;
}

module.exports = ceaser;