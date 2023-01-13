// 1.1 and 1.2
const fC = `Real Madrid`;
let players = 24;
let isLoveFootball = true;
let kids = null;
let sponsor;

 // 1.3
 const footballClub = {
    name: 'Real Madrid',
    isFootballIsOneLove: true,
    players: 24,
    someplayers: {
        first: 'Thibaut Courtois',
        second: 'Rodrygo',
        third: 'Luka Modric'
    }
 }
//  console.log(footballClub);

footballClub.captain = 'Karim Benzema';
// console.log(footballClub);

delete footballClub.someplayers
delete footballClub['captain'];
console.log(footballClub);


// 2.1
const vehicle = {};

//2.2
vehicle.brandName = 'BMW';

//2.3
vehicle.model = 'X5';

//2.4
vehicle.model = 'M1';

//2.5
delete vehicle.model // or vehicle['model']
console.log(vehicle);


//3.1
let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}

//3.2
for (let sal in salaries) {
    console.log(`Total salaries are equal to ${salaries.Aroo + salaries.Dalida + salaries.Samat}`)
}
