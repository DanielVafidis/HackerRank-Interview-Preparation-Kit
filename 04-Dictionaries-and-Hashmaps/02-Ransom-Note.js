// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    // we use a Hash table to store the words / wordcounts because every word in the note is unique.
    let words = {};
    let exists = "Yes";

    // we create the key or increment it if it already exists
    magazine.map(el => words[el] = words[el] ? words[el] + 1 : 1);

    //map the note an set "No" if a word doesn't exist
    note.map(el => {
        if (words[el] > 0) words[el]--;
        else {
            exists = "No";
        }
    });

    console.log(exists);
}