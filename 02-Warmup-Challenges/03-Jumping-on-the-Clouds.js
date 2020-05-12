// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jump = 0;
  for (let i = 0; i < c.length - 1; i++) {
    //if we're 2steps from the end of the array or a cloud => jump 1
    if (i + 2 === c.length || c[i + 2] === 1) jump++;
    //else => leap 2
    else { i++; jump++; }
  }
  return jump;
}