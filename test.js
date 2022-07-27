function charCount(str) {
    result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    console.log(result);
    return result;
}


charCount("Hello");