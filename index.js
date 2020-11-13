const moment = require('moment');

class Forex {
    constructor(base = 'USD') {
        // console.table(forex.rates)
        // success: true,
        // timestamp: 
        // base: 'EUR',
        // date: 
        this.data = require('./forex.json');
        if (!this.data.success) {
            console.error("ERROR!!! Something is wrong!")
        }
        this.base = base
        this.rates = this.data.rates
    }
    ratio(base = this.base) {
        return this.rates[this.data.base] / this.rates[base]
    }
    get date() {
        return this.data.date;
    }
    get updated() {
        return moment.duration(this.data.timestamp, "epoch").humanize();
    }
    convert(currency) {
        // npr to usd
        return this.ratio() * currency
    }
}
const forex = new Forex()


console.log(forex.updated, forex.date, forex.base);
console.log(forex.convert(1000), forex.ratio())
