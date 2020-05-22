let s1 = "hello"
let s2 = "world"

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let splitStr1 = s1.split('');
    let splitStr2 = s2.split('');
    let res = false;

    splitStr1.map(el => {
        if (splitStr2.find(el)) res = true;
    })
}

console.log(twoStrings(s1, s2));