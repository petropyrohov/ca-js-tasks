console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');
console.log('About me')

const Name = "Petro";
const Surename = "Pyrohov"; 
const age = "32";
const city = "Vilnius"
const happy = "true"

console.table({Name,Surename,age,city,happy})

//console.log(Name)
//console.log(Surename)
//console.log(age)
//console.logcity)
//console.log(happy)

console.groupEnd();


console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');

if (happy) {
    console.log("Happy Day");
    
}
else{
    console.log("good bye");
}

console.groupEnd();


console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');

const awake = true;
const sleepy=true;
const tired=true

console.groupEnd();
