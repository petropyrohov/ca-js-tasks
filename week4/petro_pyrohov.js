const apartmentsData = [
    { street: 'Savanorių g. 10', city: 'vilnius', type: 'flat', price: 90000, rooms: [24, 31] },
    { street: 'Verkių g. 10', city: 'Vilnius', type: 'house', price: 150000, rooms: [24, 16, 14, 12] },
    { street: 'Jaunimo g. 17', city: 'Vilnius', type: 'cottage', price: 120000, rooms: [10, 10, 16, 14, 12] },
    { street: 'Veidrodžių g. 75', city: 'Vilnius', type: 'house', price: 220000, rooms: [24, 16, 16, 14, 12] },
    { street: 'Gedimino pr. 18', city: 'Vilnius', type: 'flat', price: 370000, rooms: [24, 32, 31] },
    { street: 'Jonavos g. 17', city: 'Kaunas', type: 'house', price: 90000, rooms: [18, 20, 12, 60] },
    { street: 'Savanorių pr. 21a', city: 'kaunas', type: 'flat', price: 60000, rooms: [24, 30] },
    { street: 'Partizanų g. 55', city: 'Kaunas', type: 'flat', price: 75000, rooms: [20, 30, 16] },
    { street: 'Krantų pr. 18', city: 'Klaipėda', type: 'house', price: 77000, rooms: [17, 12, 10, 5] },
];

class Apartment {
    #street;
    #city;
    #type;
    #price;
    #rooms;

    constructor( street, city, type, price, rooms ) {
        this.street = street;
        this.city = city;
        this.type = type;
        this.price = price;
        this.rooms = rooms;
    }

    get address() {
        return `${this.street}, ${this.city}`
    }
}

const apartmentsObjects = apartmentsData.map(({street, city, type, price, rooms}) => new Apartment(street, city, type, price, rooms));

console.group("1. Sukurkite klasę <Apartment> pagal visas <apartmentsData> objektų savybes");
{
    console.dir(Apartment)
}
console.groupEnd();

console.group("2. Naudodami <apartmentsData> kintamojo duomenis, sukurkite masyvą sudarytą iš Apartment klasės objektų.");
{
    const apartmentsObjects = apartmentsData.map(({street, city, type, price, rooms}) => new Apartment(street, city, type, price, rooms));
    console.log(apartmentsObjects);
}
console.groupEnd();

console.group("3. Klasėje Apartment sukurkite get'erį <address> kuris grąžintų pilną būsto adresą, formatu: '<GATVĖ>, <MIESTAS>.'");
// '<GATVĖ>, <MIESTAS>.'
// 'Savanorių g. 10, Vilnius.'
// 'Gedimino pr. 18, Vilnius.'
{
    const currentApartment = apartmentsObjects.map(apartment => apartment.adrdess);
        console.log(currentApartment);
}
console.groupEnd();

console.group("4. Klasėje Apartment sukurkite get'erį <squares> kuris grąžina visą būsto kvadratūrą.");
{
    const totalSquare = apartmentsObjects.reduce((cum, {rooms}) => cum + rooms.reduce((cum2, meters) => cum2 + meters, 0), 0)
    console.log(totalSquare);
}
console.groupEnd();

console.group("5. Inkapsuliuokite savybę <type>, jog ji galėtų būti tik viena iš 3 reikšmių: 'flat', 'house' arba 'cottage'. Pavaizduokite nekorektiškus inkapsuliuotos savybės <type> priskyrimus. Inkapsuliacija turi veikti ir kuriant naujus <Apartment> objektus.");
{
}
console.groupEnd();

console.group("6. Atrinkite visus būstus iš Vilniaus, kurių tipas yra 'flat'");
{
    const flats = apartmentsData.filter(apart => apart.type === "flat" && apart.city.toLowerCase() === "vilnius");
    console.log(flats);
}
console.groupEnd();

console.group("7. Suskaičiuokite visų būstų iš Kauno bendrą kainą");
{
    const kaunasFlats = apartmentsData.filter(apart => apart.city.toLocaleLowerCase() === "kaunas");
    const totalPrice = kaunasFlats.reduce((cum, {price}) => cum + price, 0);
    console.log(totalPrice);
}
console.groupEnd();

console.group("8. Išrikiuokite visus būstus pagal kainą, nuo brangiausio iki pigiausio, nepažeidžiant pradinių duomenų.");
{
}
console.groupEnd();

console.group("9. Sugrupuokite visus būstus pagal miestą. Grupių pavadinimai - miestai iš mažųjų raidžių.");
/*
  kaunas: (3) [Apartment, Apartment, Apartment]
  klaipėda: [Apartment]
  vilnius: (5) [Apartment, Apartment, Apartment, Apartment, Apartment]
*/
{
}
console.groupEnd();


console.group('10. Suformuokite naują masyvą iš <Apartment> masyvo duomenų, pagal formatą komentaruose.');
/*
Result object:
{
  address,     String
  price,       Number
  roomCount,   Number
  squares,     Number
  type,        'flat' | 'house' | 'cottage'       
}
 
pvz1:
{
  address: "Savanorių g. 10, vilnius.",
  price: 90000,
  roomCount: 2,
  squares: 55,
  type: "flat",
}
 
pvz2:
{
  address: "Krantų pr. 18, Klaipėda.",
  price: 77000,
  roomCount: 4,
  squares: 44,
  type: "house",
}
*/
{
}
console.groupEnd();
