// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const colors = {}
    let pairs = 0;

    ar.map(color => {
        //if the color exists in our object > set to 0 and incrment pairs
        if (colors[color]) {
            colors[color] = 0
            pairs++;
        }
        //if color isn't in the object, add it (and set to 1)
        else colors[color] = 1
    });

    return pairs;
}