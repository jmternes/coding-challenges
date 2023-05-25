// initialize most words, iterate over each sentence, break the sentence into an array of words, get the number of words in the sentence, compare the number of words in each sentence, and update numWords into mostWords if a sentence has more. 

var mostWordsFound = function(sentences) {
    let mostWords = 0;

    for (i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' ');
        const numWords = words.length;

        if (numWords > mostWords) {
            mostWords = numWords;
        }
    }
    return mostWords;
};