import {v4 as uuidv4 } from 'uuid';

const surnames = 'Nowak Olejniczak Pająk Matuszewski Romanowski Kasprzak Świątek Wilczyński Ratajczak Kurowski Michalik Owczarek Orzechowski Grzelak Łukasik Olejnik Sobolewski Rogowski Mazurkiewicz Barański Bukowski Matusiak Sroka Kosiński Kędzierski Skowroński Marcinkowski Sobczyk Kozieł Marszałek Zych Chrzanowski Bednarski Rybak Lisowski Bednarz Janiszewski Pluta Kasprzyk Muszyński Kwiecień Kuczyński Świderski Paluch Morawski Białek Grzybowski Witek Turek Marczak Jędrzejewski Osiński Marzec Chmiel Czajka Kaczor Małek Kubicki Krzemiński Żukowski Piekarski Michałowski Szczęsny Szydłowski Biernacki Śliwa Janowski Stefaniak Lech Przybysz Lewicki Gołębiewski Murawski Dębski Kulesza Popławski Staniszewski'.split(
    ' '
  );
  const names = 'Ada, Adela, Adelajda, Adrianna, Agata, Agnieszka, Aldona, Aleksandra, Alicja, Alina, Amanda, Amelia, Anastazja, Andżelika, Aneta, Anita, Anna, Antonina, Adam, Adolf, Adrian, Albert, Aleksander, Aleksy, Alfred, Amadeusz, Andrzej, Antoni, Arkadiusz, Arnold, Artur'.split(
    ', '
  );
  const countries = ['PL', 'UK', 'USA'];

  interface Human {
    id: string; 
    name: string; 
    surname: string; 
    email: string; 
    age: number; 
    phoneNr: string; 
    country: string;
  }
  
  export function generateHuman(): Human {
    
    function randomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function randomPhoneNumber(arr: number[]): string {
      for (let i = 0; i < 9; i++) {
        arr.push(randomNumber(0, 9));
      }
      return arr.join('');
    }
  
    const getRandomElementFromArray = (arr: string[]): string => {
      let num: number = randomNumber(0, arr.length - 1);
      return arr[num];
    };
  
    const name: string = getRandomElementFromArray(names)
    const surname: string = getRandomElementFromArray(surnames)
  
    const human: Human = {
      id: uuidv4(),
      name,
      surname,
      email: `${name.toLowerCase()}.${surname.toLowerCase()}@mail.com`,
      age: randomNumber(18, 85),
      phoneNr: randomPhoneNumber([]),
      country: getRandomElementFromArray(countries),
    };
    return human;
  }
  
  //console.log(`generateHuman: ${JSON.stringify(generateHuman())}`);