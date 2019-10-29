import {Deputy, Faction} from './model'
import {Users} from './Users'

const ROZUMKOV = new Deputy(82, 172, 'Rozumkov', 'Dmytro', 45, false, 0, 0 ,0);
const STEFANCHUK = new Deputy(75, 180, 'Stefanchuk', 'Ruslan', 23, false, 0, 0, 0);
const VENEDICTOVA = new Deputy(55, 160, 'Venedictova', 'Iryna', 34, true, 1000000, 50000, 1000000);
const VAKARCHUK = new Deputy(69, 170, 'Vakarchuk', 'Svyatoslav', 49, true, 10000, 5000, 100000);
const RAHMANIN = new Deputy(65, 170, 'Rahmanin', 'Sergiy', 35, true, 60000, 25000, 55000);
const POROSHENKO = new Deputy(55, 175, 'Poroshenko', 'Petro', 50, true, 89000, 15000, 75000);
const PARUBIY = new Deputy(50, 168, 'Parubiy', 'Andriy', 28, true, 56000, 5000, 500000);
const GERASYMOV = new Deputy(70, 175, 'Gerasymov', 'Artur', 28, false, 0, 0, 0);

const SERVANT_OF_THE_PEOPLE = new Faction([]);
SERVANT_OF_THE_PEOPLE.addDeputy(ROZUMKOV);
SERVANT_OF_THE_PEOPLE.addDeputy(STEFANCHUK);
SERVANT_OF_THE_PEOPLE.addDeputy(VENEDICTOVA);

const THE_VOICE = new Faction([]);
THE_VOICE.addDeputy(VAKARCHUK);
THE_VOICE.addDeputy(RAHMANIN);


const EUROPEAN_SOLIDARITY = new Faction([]);
EUROPEAN_SOLIDARITY.addDeputy(POROSHENKO);
EUROPEAN_SOLIDARITY.addDeputy(PARUBIY);
EUROPEAN_SOLIDARITY.addDeputy(GERASYMOV);

