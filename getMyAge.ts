type AgeInput = number | string | Date;

function getMyAge(input: AgeInput): number {
    if(!input) throw new Error("Argument is missing.");
  
    let parsedValue: number = 0;
    let actualYear: number = new Date().getFullYear();
    switch(true) {
      case typeof input === 'number':
        if(typeof input === 'number') {
            if(isNaN(input)) throw new Error("Input should be a number."); 
            parsedValue = input;
        }
        break;
  
      case (typeof input === 'string'):
        if((typeof input === 'string')) {
            if(!(input.length > 0)) throw new Error("Empty string.");
            parsedValue = +input;
        }
        break;
  
      case (input instanceof Date): 
        if(input instanceof Date) {
            if(isNaN(input.getTime())) throw new Error("Invalid date.");
            parsedValue = input.getFullYear();
        }
        break;
    }
    
    if(parsedValue < 1900) throw new Error("You are probably dead.");
    if(parsedValue > actualYear) throw new Error("You are not born yet.");
    
    
    return actualYear - parsedValue;
  }

console.log(getMyAge(new Date(2020, 4, 3)));
console.log(getMyAge(1901));
console.log(getMyAge('1989'));