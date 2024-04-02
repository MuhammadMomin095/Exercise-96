function calculateSum(numbers) {
    return numbers.reduce(function (accumlator, current) { return accumlator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
