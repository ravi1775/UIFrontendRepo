

const countOccurence = (string, word) => {
    let stringLC = string.toLowerCase();
    let wordLC = word.toLowerCase();
    // console.log(wordLC.length)
    // console.log(stringLC.split(wordLC))
    // console.log(stringLC.split(wordLC).length)
    let count = stringLC.split(wordLC).length - 1;
    return count
};
console.log(countOccurence("abcdefabcdeabghituedeaabcbgbcdghi","abc"))