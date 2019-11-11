class User {
    constructor(aName, aSurname, aAge, aPhone) {
        this.name = aName;
        this.surName = aSurname;
        this.age = aAge;
        this.phone = aPhone;
    }

    get fullName() {
        return this.name + ' ' + this.surName;
    }

    set fullName(aValue) {
        let aa = String(aValue).split(" ");
        this.name = aa[0];
        this.surName = aa[1];
    }

    showInfo() {
        return `\n name: ${this.name}
                surname: ${this.surName}
                age: ${this.age}
                phone: ${this.phone}`;
    }
}

//let user = new User('Konstantin', 'Evlampiev', 47, '+7-983-221-0274');

module.exports = User