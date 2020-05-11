// Complete the countingValleys function below.
function countingValleys(n, s) {
    //set up variables for calculation
    let altitude = 0;
    let valley = 0;

    //split string into array
    const arr = s.split('');

    //map the array and do the math (if uphill to zero means valley complete)
    arr.map(el => {
        if (el === 'D') altitude--;
        if (el === 'U') {
            altitude++;
            if (altitude === 0) valley++;
        }
    });

    return valley
}