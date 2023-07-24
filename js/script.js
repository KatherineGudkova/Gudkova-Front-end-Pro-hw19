class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
        } else {
        console.log('Cannot add more apartments. Maximum capacity reached.');
        }
    }
}

const house = new House(2);

const apartmentOne = new Apartment();
const apartmentTwo = new Apartment();

house.addApartment(apartmentOne);
house.addApartment(apartmentTwo);

const personOne = new Person('Kateryna Gudkova', 'female');
const personTwo = new Person('Vitaly Parhomenko', 'male');
const personThree = new Person('The third Person', 'female');

apartmentOne.addResident(personOne);

apartmentTwo.addResident(personTwo);
apartmentTwo.addResident(personThree);

console.log(house);