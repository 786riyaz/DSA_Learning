
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    console.log("Input Statement ::",sentences);
    let maxWordCount = 0;
    sentences.forEach(function(sentence) {
        console.log("Sentence ::",sentence);
        let wordCount = sentence.split(" ").length;
        console.log("Word Count ::",wordCount);
        if (wordCount > maxWordCount) {
            maxWordCount = wordCount;
        }
    });
    return maxWordCount;
};


console.log(mostWordsFound(["you are doing great", "keep it up", "keep on working hard"]));
