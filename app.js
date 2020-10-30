let myCar = {
    make: 'Maybach',
    model: 'Exelero',
    year: '2005',
    speed: 178,
    getMyCarData: function () {
        return this.make + ', ' + this.model + ', ' + this.year + ', ' + this.speed
    },
    getTimeForDistance: function (x) {
        if (isNaN(x) || x < 0) {
            return 'enter please correct distance'
        }
        let t = x / this.speed;
        let relax = 0;
        t = Math.trunc(t) + (((t - (Math.trunc(t))) * 60) / 100)
        for (let hour = 1; hour <= t; hour++) {
            if (hour % 5 == 0) {
                relax++;
                t++;
            }
        }

        t = t.toFixed(2).split(".");
        if (relax === 0) {
            return `You need ${t[0]}h. ${t[1]}m.`
        } else {
            return `You need ${t[0]}h. ${t[1]}m. including ${relax}h. relax`
        }
    }
};


console.log(myCar.getMyCarData());
console.log(myCar.getTimeForDistance(1000));

let myFractions = {

    getFractionsValue: function (a, b, c, d) {
        return `${a}/${b}, ${c}/${d}`
    },

    getFractionsSum: function (a, b, c, d) {
        return (((a * d + c * b) / (b * d)).toFixed(2))
    },

    getFractionsDifference: function (a, b, c, d) {
        return (((a * d - c * b) / (b * d)).toFixed(2))
    },

    getFractionsMultiply: function (a, b, c, d) {
        return (((a * c) / (b * d)).toFixed(2))
    },

    getFractionsDivide: function (a, b, c, d) {
        return (((a / b) * (d / c)).toFixed(2))
    },

    getFractionsReduce: function (m, n) {
        var M = m, N = n
        for (var i = 2; i <= m; i++) {
            if (m % i === 0 && n % i === 0)
                M = m / i, N = n / i;
        }
        return `${M}/${N}`
    }

}

console.log(myFractions.getFractionsValue(1, 2, 1, 2));
console.log(myFractions.getFractionsSum(1, 2, 1, 2));
console.log(myFractions.getFractionsDifference(1, 2, 1, 4));
console.log(myFractions.getFractionsMultiply(2, 7, 1, 3));
console.log(myFractions.getFractionsDivide(2, 7, 1, 3));
console.log(myFractions.getFractionsReduce(24, 30));

let myDate = new Date();

document.write(Date(myDate));

let myDateS = myDate;
myDateS.setSeconds(myDateS.getSeconds() + 0);
console.log(myDateS);

let myDateM = myDate;
myDateM.setMinutes(myDateM.getMinutes() + 0);
console.log(myDateM);

let myDateH = myDate;
myDateH.setHours(myDateH.getHours() + 10);
console.log(myDateH);