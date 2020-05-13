// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const res = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            res.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
        }
    }
    return Math.max(...res);
}