import {Deputy} from "./Deputy.model";

export class Faction {
    memberOfFaction: Array<Deputy> = [];

    constructor(memberOfFaction: Array<Deputy> = []) {
        this.memberOfFaction = memberOfFaction;
    }


    // add deputy to Faction 
    addDeputy(obj: Deputy) {
        this.memberOfFaction.push(obj)
    }

    // delete deputy with Faction
    deleteDeputy(deputyToDelete: Deputy) {
        const indexToDelete = this.memberOfFaction.findIndex((dep: Deputy) => {
            return  deputyToDelete.surname === dep.surname && deputyToDelete.name === dep.name
        });

        this.memberOfFaction.splice(indexToDelete, 1);
    }

// sort and then delete bribe takers
    deleteAllBriberTakers() {
        const servantOfThePeople = this.memberOfFaction.filter((dep: Deputy) => !dep.bribeTaker);

        this.memberOfFaction.splice(0, this.memberOfFaction.length);

        this.memberOfFaction = [...servantOfThePeople];
    }

    // sort by sizeBribe and find biggestBribeTaker
    showTheBiggestBriberDeputy() {
        const [biggestBribeTaker] = this.memberOfFaction.sort((dep1: Deputy, dep2: Deputy) => {
            return dep2.sizeBribery - dep1.sizeBribery;
        });

        console.log(biggestBribeTaker);
    }

    // show all deputy
    showAllDeputies() {
        this.memberOfFaction.forEach((dep: Deputy) => {
            console.log(dep)
        })
    }

    //shaw all briber takers
    showAllBriberDeputies(){
        const briberDeputies = this.memberOfFaction.filter((dep: Deputy) => dep.bribeTaker);

        briberDeputies.forEach( dep => {
            console.log(dep);
        })
    }

    // delete all members of faction
    deleteAllDeputies() {
        this.memberOfFaction.splice(0, this.memberOfFaction.length);
    }

    //
    showTheTotalAmountOfBribes() {
        const totalAmount = this.memberOfFaction.reduce((previousValue: number, currentItem: Deputy) => {
            return previousValue + currentItem.sizeBribery
        }, 0);

        console.log(totalAmount);
    }
}