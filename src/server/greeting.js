const os = require('os');
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = (name) => {
    //console.dir(os);
    let hour = currentDate.getHours();
    //let user = new User('Konstantin', 'Evlampiev', 47, '+7-983-221-0274');
    //let name = os.userInfo().username;
    //let name=os.userInfo.name;
    if (hour > 18) {
        return `Good evening, ${name}`
    } else if (hour > 12) {
        return `Good afternoon, ${name}! `
    } else {
        return `Godd morning, ${name}`;
    }


}