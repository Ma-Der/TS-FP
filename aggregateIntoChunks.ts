const randomNumber = (a: number, b: number): number => {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}



function aggregateIntoChunks<T>(array: T[]): Array<T[]> {
  
    const inputClone: T[] = [...array];
  
    let newArray: Array<T[]> = [];
    let size = randomNumber(4, 7);
  
    while(inputClone.length > 0) {
      newArray.push(inputClone.splice(0, size));
      size = randomNumber(4, 7);
    }
    
    const lastElemLength: number = newArray[newArray.length - 1].length;
    if( lastElemLength >= 4 && lastElemLength <=7) {
      return newArray;
    } else return aggregateIntoChunks(array);
  }


  const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
  console.log(aggregateIntoChunks(alphabet));