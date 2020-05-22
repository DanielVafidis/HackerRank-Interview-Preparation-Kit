// Complete the twoStrings function below.
function twoStrings(s1, s2) {

    //initialize a result variable and split the strings into arrays (like substrings)
    let found = 'NO';
    let split1 = s1.split('');
    let split2 = s2.split('');

    //make hashtable  for faster lookup
    let dico = {}
    split1.map(el => dico[el] = dico[el] ? dico[el] + 1 : 1);

    //if the element exists in the table => YES
    split2.map(el => {
        if (dico[el]) found = 'YES';
    });

    return found;
}