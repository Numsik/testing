function analyzeArray(array){
    return {
        min: min(array),
        max: max(array),
        length: length(array),
        average: average(array)
    }
}

function min(arr){
    return Math.min(...arr)
}


function max(arr){
    return Math.max(...arr)
}



function length(arr){
    return arr.length
}

function average(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]

    }
    let average = Math.floor(sum / arr.length);

    return average;
}


module.exports = analyzeArray;
