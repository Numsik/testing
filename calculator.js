const isnumber = (a, b) =>{
    if (typeof a !== 'number' || typeof b !== 'number'){
        return false;
    }else{
        return true;
    }


}

const multiply = (a, b)=>{
    if (isnumber(a, b)){
        return a * b;
    }
}

const add = (a, b) =>{
    if (isnumber(a, b)){
        return a + b;
    }
};

const subtract = (a, b) =>{
    if (isnumber(a, b)){
        return a - b;
    }
};
const divide = (a, b) => {
    if (isnumber(a, b)){
        return a / b
    }
}
const calculator = {
    add,
    subtract,
    multiply,
    divide
}


module.exports = calculator;