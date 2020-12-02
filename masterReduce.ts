type MapCallback<T> = (currentEl: T, i: number, array: T[]) => T

function mapFnR<T>(array: T[], callback: MapCallback<T>): T[] {
  
    return array.reduce((newArray: T[], element, index, arr) => {
        return [...newArray, callback(element, index, arr)];
    }, []);
}
 
type BooleanCallback<T> = (currentEl: T, i: number, arr: T[]) => boolean;

function filterFnR<T>(array: T[], callback: BooleanCallback<T>): T[] {
  
    return array.reduce((newArray: T[], element, index, arr) =>{
          if(callback(element, index, arr)) {
            return newArray.concat(element);
          }
          return newArray;
      }, []);
}
  
function everyFnR<T>(array: T[], callback: BooleanCallback<T>): boolean {
  
    const result = [...array].reduce((acc, currElement, index, arr) => {
      
      if (!callback(currElement, index, arr)) {
        arr.splice(index);
        return false;
      }
      
      return true;
    }, false);

    return result;
}
  
function someFnR<T>(array: T[], callback: BooleanCallback<T>): boolean {
  
    const result = [...array].reduce((acc, currElement, index, arr) => {
      if (callback(currElement, index, arr)) {
        arr.splice(index);
        return true;
      } 
      
      return false;
    }, true);

    return result;
}
  