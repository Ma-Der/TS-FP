type MapCallback<T> = (currentEl: T, i: number, array: T[]) => T
// mapFn
export function mapFn<T>(arr: T[], callback: MapCallback<T>): T[] {
    
      const newArray: T[] = [];
      for (let i = 0; i < arr.length; i++) {
        let newElement: T = callback(arr[i], i, arr);
        newArray.push(newElement);
      }
      return newArray;
  }

  console.log(`mapFn: ${mapFn([7, 8, 9, 10, 12, 34, 2], a => a - 2)}`);
  
  // filterFn
  type BooleanCallback<T> = (currentEl: T, i: number, arr: T[]) => boolean;
  export function filterFn<T>(arr: T[], callback: BooleanCallback<T>): T[] {
    
    const filteredArray: T[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

  console.log(`filterFn: ${filterFn([11,23,45,56,67,87,90], p => p > 50)}`);
  
  // everyFn
  
  export function everyFn<T>(arr: T[], callback: BooleanCallback<T>): boolean {
  
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        return false
      }
    }
    return true;
  }

  console.log(`everyFn: ${everyFn([1, 2, 3, 4, 5, 6], t => t === 5)}`);
  
  // reduceFn
  
type ReduceCallback<T> = ( prevVal: T, currentVal: T, i: number, arr: T[]) => T;

  export function reduceFn<T>(arr: T[], callback: ReduceCallback<T>, initial ?: T): T {
      let prevVal: T;
  
      if (typeof initial !== 'undefined') {
  
        prevVal = initial;
  
        if (arr.length == 0) {
          return prevVal;
        }
  
        for (let i = 0; i < arr.length; i++) {
          prevVal = callback(prevVal, arr[i], i, arr);
        }
        return prevVal;
  
      } else {
  
        if (arr.length == 0) {
          throw TypeError('Array is empty.');
        }
  
        prevVal=arr[0];
  
        for (let i = 1; i < arr.length; i++) {
          prevVal = callback(prevVal, arr[i], i, arr);
        }
  
        return prevVal;
      }
  }

  console.log(`reduceFn: ${reduceFn([1,2,3,4,5,6,7,8,9], (d, e) => d = d + e)}`)
  
  // reduceRightFn
  
  export function reduceRightFn<T>(arr: T[], callback: ReduceCallback<T>, initial ?: T): T {
  const reversedArray: T[] = arr.reverse();
  return reduceFn(reversedArray, callback, initial);
  }

  console.log(`reduceRightFn: ${reduceRightFn([1,2,3,4,5,6,7,8,9], (d, e) => d = d - e)}`)
  
  // someFn
  
  export function someFn<T>(arr: T[], callback: BooleanCallback<T>): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }

  console.log(`someFn: ${someFn([1,2,3,4,5,6,7,8,9], p => typeof p === 'number')}`)
  