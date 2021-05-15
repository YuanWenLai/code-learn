// 12. 整数转罗马数字


// 解法一：硬编码

var intToRoman1 = function(num) {
    let thousands = ["", "M", "MM", "MMM"]
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    return thousands[Math.floor(num/1000) ] + hundreds[Math.floor(num % 1000/ 100)] +tens[Math.floor(num%100/10)] + ones[num%10]
};


var intToRoman2 = function(num) {
    const values =  [1000, 900,500,400,100,90,50,40,10,9,5,4,1]
    const valueSymbols = new Map()
    valueSymbols.set(1000,"M")
    valueSymbols.set(900,"CM")
    valueSymbols.set(500,"D")
    valueSymbols.set(400,"CD")
    valueSymbols.set(100,"C")
    valueSymbols.set(90,"XC")
    valueSymbols.set(50,"L")
    valueSymbols.set(40,"XL")
    valueSymbols.set(10,"X")
    valueSymbols.set(9,"IX")
    valueSymbols.set(5,"V")
    valueSymbols.set(4,"IV")
    valueSymbols.set(1,"I")

    const intoRomenArr = []
    
    for(const value of values) {
        const symbol = valueSymbols.get(value)
        while(num >= value) {
            num -= value
            intoRomenArr.push(symbol)
        }
        if(num === 0) break
    }
    
    return intoRomenArr.join('')
};