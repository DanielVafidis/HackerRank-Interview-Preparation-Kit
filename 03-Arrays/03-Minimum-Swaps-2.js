// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    console.log(arr);
    let cpt = 0;
    for (i = 0; i < arr.length; i++) {
        //what we know: 

        //value (at index i) = arr[i]
        let value = arr[i];

        //value here should be = i+1
        let targetValue = i + 1;

        //resolution:
        //value should be on index: targetIndex
        let targetIndex;
        for (let j = cpt; j < arr.length; j++) {
            if (arr[j] === targetValue) {
                targetIndex = j;
                break;
            }
        }
        //if value isn't on index i+1
        if (value !== i + 1) {
            //swap value on index i with the value on index value-1
            console.log("swapped: ", value, targetValue);
            arr[i] = targetValue;
            arr[targetIndex] = value;
            console.log(arr);
            cpt++;
        }
    }
    return (cpt);
}