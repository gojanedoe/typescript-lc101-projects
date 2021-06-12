// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Import statement
import { SpaceLocation } from './SpaceLocation';

// Variables
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursAway: number = milesAway / this.speedMph;
        let daysAway: number = hoursAway / 24;

        return daysAway;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

// Instance of Class
let spaceShuttle = new Spacecraft('Determination', 17500);

// Print days to Mars and Moon
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));