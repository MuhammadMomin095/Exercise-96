function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumlator,current) => accumlator + current, 0);
}


const numbers: number[] = [1, 2, 3, 4, 5];

console.log(calculateSum(numbers));