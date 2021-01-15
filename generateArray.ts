export function generateArrayWithRandomNumbers(howManyNumbers: number = 10, min: number = 1, max: number = 10): number[] {

    const argumentsMultiply = howManyNumbers * min * max;
    if (isNaN(argumentsMultiply)) throw new Error("All arguments must be numbers.");
    if(!Number.isInteger(min)) throw new Error("Min value must be an integer.");
    if(!Number.isInteger(max)) throw new Error("Max value must be an integer.");
    if(!(howManyNumbers > 0)) throw new Error("1st parameter must be more than zero.");
    if(!(min < max)) {
      let temp: null | number = null;
      temp = max;
      max = min;
      min = temp;
}
  
      const newArray: number[] = new Array(howManyNumbers).fill(null).map(() => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      });
      return newArray;
  }
  
export function generateArrayOfArrays(howManyArrays: number = 10, howManyNumbers: number = 10, min: number = 1, max: number = 10) {
    
    if(isNaN(howManyArrays)) throw new Error('All arguments must be numbers.');
    if(!(howManyArrays > 0)) throw new Error("1st parameter must be more than zero.");
     
    const newArray: Array<number[]> = new Array(howManyArrays).fill(null).map(() => generateArrayWithRandomNumbers(howManyNumbers, min, max));
    return newArray;
}

//console.log(`generateArrayWithRandomNumbers: ${generateArrayWithRandomNumbers(5, 5, 100)}`);
//console.log(`generateArrayOfArrays: ${generateArrayOfArrays(2, 5, 5, 100)}`);

//console.log(generateArrayOfArrays(5, 5, 2.7, 1))