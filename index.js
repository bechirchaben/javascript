function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalized = "";
    
    for (let i = 0; i < words.length; i++) {
        capitalized += words[i][0].toUpperCase() + words[i].slice(1) + " ";
    }

    return capitalized.trim();
}
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function filterArray(arr, condition) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true;
}
function fibonacci(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0); // First term
        } else if (i === 1) {
            sequence.push(1); // Second term
        } else {
            // Sum 
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}