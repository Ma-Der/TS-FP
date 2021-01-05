export function isRectangularTriangle(x1: number, x2: number , x3: number): boolean {

    if (isNaN(x1*x2*x3)) throw new Error('One of the variables is not a number.');
    
    const sides: number[] = [x1, x2, x3];
    const [a, b, c] = sides.sort((a, b) => a-b);
  
    if (!(a > 0)) throw new Error('All variables must be greater than zero.'); 
  
    if (a + b <= c) throw new Error("You can't build triangle with these sides.");
   
    const isRectangular: boolean = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    return isRectangular;       
  }