function findPhraseInArray(array: string[], phrase: string): string[][] {
    if(!(phrase.length > 2)) throw new Error("Phrase must be more than 2 letters.");
  
    
    const found = array.reduce((acc: string[][], currentValue: string, index: number) => {
      if (currentValue.toLowerCase().includes(phrase.toLowerCase())) {
        acc.push([`Value: ${currentValue}`, ` index: , ${index}`]);
      }
      return acc;
    }, []);
    if (found.length === 0) throw new Error('Nothing found.');
    return found; 
} 

  const inputData = 'Koniec astronomicznych wakacji stał się faktem ale to nie koniec atrakcji w naszym pięknym kurorcie'.split(
    ' '
  );

  console.log(`findPhrase: ${findPhraseInArray(inputData, 'wak')}`);