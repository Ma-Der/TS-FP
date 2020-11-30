function mapFnR<T>(array: T[], callback: Function): T[] {
  
    return array.reduce((newArray: T[], element, index, arr) => {
        return [...newArray, callback(element, index, arr)];
    }, []);
}
  
function filterFnR<T>(array: T[], callback: Function): T[] {
  
    return array.reduce((newArray: T[], element, index, arr) =>{
          if(callback(element, index, arr)) {
            return newArray.concat(element);
          }
          return newArray;
      }, []);
}
  
function everyFnR<T>(array: T[], callback: Function): boolean {
  
    return [...array].reduce((accumulator: boolean, currElement, index, arr) => {
      
      if (!callback(currElement, index, arr)) {
        arr.splice(index);
        return false;
      }
      
      return true;
    }, true);
}
  
function someFnR<T>(array: T[], callback: Function): boolean {
  
    return [...array].reduce((accumulator: boolean, currElement, index, arr) => {
      if (callback(accumulator, index, arr)) {
        arr.splice(index);
        return true;
      } 
      
      return false;
    }, false);
}
  