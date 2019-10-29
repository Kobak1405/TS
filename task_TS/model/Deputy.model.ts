import {Human} from "./Human.model";

export class Deputy extends Human {
    surname: string;
    name: string;
    age: number;
    bribeTaker: boolean;
    sizeBribery?: number;
    maxBribery?: number;
    minBribery?: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number,
                bribeTaker: boolean, sizeBribery: number, maxBribery: number, minBribery: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.sizeBribery = sizeBribery;
        this.minBribery = minBribery;
        this.maxBribery = minBribery;
    }

    giveBribe(bribe: number): void {
        if (this.bribeTaker === false) {
            console.log('No');
            return;
        } else {
            if (bribe < this.minBribery || bribe > this.maxBribery) {
                console.log('No');
                return;
            } else{
                this.sizeBribery += bribe;
            }
        }
    }
}