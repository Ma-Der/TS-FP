let result: [string, number];
export function findPhraseInArray(array: string[], phrase: string): Array<typeof result> | string {
    if(!(phrase.length > 2)) throw new Error("Phrase must be more than 2 letters.");
  
    const found = array.reduce((acc, currentValue, index) => {
      if (currentValue.toLowerCase().includes(phrase.toLowerCase())) {
        result = [currentValue, index];
        acc.push(result);
      }
      return acc;
    }, Array<typeof result>());
    if (found.length === 0) return ('Nothing found.');
    return found; 
} 

  const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
    ' '
  );

  //console.log(`findPhrase: ${findPhraseInArray(inputData, 'piotr')}`);