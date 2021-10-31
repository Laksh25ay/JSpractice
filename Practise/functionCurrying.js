let sum = (a) => {
    return inner = (b) => {
        return a+b;
    }
}

console.log(sum(2)(3));
