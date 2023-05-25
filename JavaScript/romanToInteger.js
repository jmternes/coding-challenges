// Given a roman numeral, convert it to an integer.

// Map roman numeral symbols to values, then iterate through each character in the input string. Add roman numeral logic, such as: If the current character is less than the next character, subtract the current character from the next character and add that value to the result. Otherwise, add the value of the current character to the result. Return the result.

var romanToInt = function(s) {
    var result = 0;
    var roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    for (var i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i+1]]) {
            result += roman[s[i+1]] - roman[s[i]];
            i++;
        } else {
            result += roman[s[i]];
        }
    }
    return result;
};
