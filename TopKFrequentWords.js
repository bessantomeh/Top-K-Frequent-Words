// pseudo Code
/*  
FUNCTION findTopKFrequent(words, k):
CREATE a map to count how often each word appears
    
FOR each word in the list:
    INCREASE the count for that word in the map

SORT the words by their frequency (highest to lowest)
IF two words have the same frequency, sort them alphabetically

RETURN the first k words from the sorted list
*/

function findTopKFrequentWords(words, k) {
    // Step 1: Create a frequency map
    let wordFrequencyMap = new Map();

    // Step 2: Count the frequency of each word
    for (let word of words) {
        wordFrequencyMap.set(word, (wordFrequencyMap.get(word) || 0) + 1);
    }

    // Step 3: Convert map to an array of words and sort them
    let sortedWords = Array.from(wordFrequencyMap.keys()).sort((wordA, wordB) => {
        let frequencyComparison = wordFrequencyMap.get(wordB) - wordFrequencyMap.get(wordA);
        if (frequencyComparison === 0) {
            return wordA.localeCompare(wordB); // Sort alphabetically if frequencies are equal
        }
        return frequencyComparison;
    });

    // Step 4: Return the top k words
    return sortedWords.slice(0, k);
}

const wordsArray = ["i", "love", "leetcode", "i", "love", "coding"];
const k = 2;
const result = findTopKFrequentWords(wordsArray, k);
console.log(result); // Output: ["i", "love"]


