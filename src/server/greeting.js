let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = (name) => {
    let hour = currentDate.getHours();
    if (hour > 18) {
        return `Good evening, ${name}`
    } else if (hour > 12) {
        return `Good afternoon, ${name}! `
    } else {
        return `Godd morning, ${name}`;
    }
}