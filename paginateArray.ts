const dataPagination = 'Lorem Ipsum has been the industrys standard dummy text ever since the There are many variations of passages of Lorem Ipsum available All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary It uses a dictionary of over 200 Latin words'.split(
  ' '
);

interface Settings {
  paginateArrayIdx: number;
  entriesOnPage: number;
}

export function paginateArray(dataEntries: string[], settings: Settings): string[] {
  
    if(dataEntries.length === 0) throw new Error("Array is empty, nothing to paginate.");
   
    const { paginateArrayIdx, entriesOnPage } = settings;
    
    if(isNaN(paginateArrayIdx) || isNaN(entriesOnPage)){
      throw new Error("Both settings must be numbers.");
    }
    if (!(paginateArrayIdx > 0 && entriesOnPage > 0)) throw new Error('Both settings variables must be > 0');
  
    const areAvailableEntriesOnPage = Math.ceil(dataEntries.length / entriesOnPage) >= paginateArrayIdx;
    if (!areAvailableEntriesOnPage) throw new Error('You only can paginate into maximum of ' + Math.ceil(dataEntries.length / entriesOnPage) +
    ' pages.'); 
          
    const indexOfLastPosition = paginateArrayIdx * entriesOnPage;
    const indexOfFirstPosition = indexOfLastPosition - entriesOnPage;
    const entriesOnSelectedPage = dataEntries.slice(indexOfFirstPosition, indexOfLastPosition);
  
    return entriesOnSelectedPage;      
  }
  
const settings = { entriesOnPage: 4, paginateArrayIdx: 5 };
//console.log(paginateArray(dataPagination, settings));