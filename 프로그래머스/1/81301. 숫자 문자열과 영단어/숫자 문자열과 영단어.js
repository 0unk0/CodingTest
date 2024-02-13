function solution(s) {
    const word = [{"one" : 1}, {"two" : 2}, {"three" : 3}, 
                 {"four" : 4}, {"five" : 5}, {"six" : 6}, 
                 {"seven" : 7}, {"eight" : 8}, {"nine" : 9}, {"zero" : 0}];
    for(let i = 0; i < 10; i++) {
        s = s.replaceAll(Object.keys(word[i])[0], Object.values(word[i])[0]); 
    }

    return parseInt(s);
}