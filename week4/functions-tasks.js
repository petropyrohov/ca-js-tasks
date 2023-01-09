console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{ 
 function strReverse(str) { 
   //  const stringArray = str.split("");
    // console.log("stringArray", stringArray);
    // const reversedArray = stringArray.reverse();
    // console.log("reversedArray",reversedArray);

     // return reversedArray.join("");

    return str.split("").reverse().join("");

  }
  // console.log('---');
  // strReverse('viens du trys');
  // strReverse('as tave myliu');
  // strReverse('Bairis seniuk');
  // console.log('---');
  console.log("strReverse call", strReverse("abc"));
  console.log("strReverse call", strReverse("viens du trys"));
  console.log("strReverse call", strReverse("vas tave myliu"));
  console.log("strReverse call", strReverse("Bairis seniuk"));
}
// console.log("strReverse", strReverse("zalupa"));
console.groupEnd();
console.log();



// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {


    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str[i] !== str[k]) return false;
      i++;
      k--;
    }
    return true;
  }
  // console.log('---');
  // console.log({
  //   'mama': isPalyndrome('mama'),
  //   'mamam': isPalyndrome('mamam'),
  //   '123321': isPalyndrome('123321'),
  //   '123456': isPalyndrome('123456'),
  // })
  // console.log('---');
  

}
console.groupEnd();
console.log();


//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{


}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
    function splitSentence(sentence) {
        return sentence.split(' ');
    }
    console.log('---');
    console.log({
        'Labas aš Petro': splitSentence('Labas aš Petro'),
        'Viskis nera gerai': splitSentence('Viskis nera gerai'),
    })
    console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
    
}
console.groupEnd();
console.log();

const array1 = [5, 12, 8, 130, 44];
const GetBack = array1.at(-1);
console.log(GetBack)
