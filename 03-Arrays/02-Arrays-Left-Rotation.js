// Complete the rotLeft function below.
function rotLeft(a, d) {
    const res = a;
    for (let i = 0; i < d; i++) {
        res.push(res.shift());
    }
    return res;
}