// module.exports = function toReadable (number) {
//     const arr3 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     const arr2 = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
//     const arr1 = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
//     let value = number.toString();
//     value = value.split("").map((elem) => +elem);
//     let result = arr1[value[0]] + arr2[value[1]] + arr3[value[2]];
//     return result;
// };

module.exports = function toReadable (number) {
    const arr3 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const arr = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const arr2 = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    const arr1 = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
    // const arrN = ["", "", ""];
    const value = number.toString().split("").map(Number);
    if (value.length == 2) value.unshift("");
    if (value.length == 1) value.unshift("", "");
    const result = (arr1[value[0]] + arr2[value[1]] + (arr3[value[2]] == "zero"? "" : arr3[value[2]])).trim();
    // if (number >= 110 && number <= 119) {
    //     arr4.splice(0,10, "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen")

    // }
    console.log(value);
    return result;
};