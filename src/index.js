module.exports = function toReadable (number) {
    const arr3 = ["zero ", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine "];
    const arr2 = ["", "", "twenty ", "thirty ", "fourty ", "fivety ", "sixty ", "seventy ", "eighty ", "ninety "];
    const arr1 = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
    let result = number.toString();
    result = result.split("").map((elem) => +elem);
    let fullResult = arr1[result[0]] + arr2[result[1]] + arr3[result[2]];
    return fullResult;
};