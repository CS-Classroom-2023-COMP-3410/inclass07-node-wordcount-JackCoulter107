// TODO: Import required modules
// Hint: You will need the 'fs' module for reading the file and the 'chalk' library for coloring the words.

const fs = require('fs'); // For reading files
const chalk = require('chalk'); // For coloring text in the console

/**
 * Synchronously reads the content of 'declaration.txt'.
 * @returns {string} The content of the file.
 */

// TODO: Use the 'fs' module to synchronously read the content of 'declaration.txt' and return it.
function readFileContent() {
    const fs = require('fs'); // Ensure fs is imported

    try {
        // Read the file synchronously and return its content as a string
        return fs.readFileSync('declaration.txt', 'utf-8');
    } catch (error) {
        console.error('Error reading file:', error.message);
        return ''; // Return an empty string in case of an error
    }
}

/**
 * Gets the word count from the content.
 * @param {string} content The file content.
 * @returns {Object} An object with words as keys and their occurrences as values.
 */

// TODO: Implement a function to count occurrences of each word in the content.
// Hint: Consider splitting the content into words and then tallying the counts.
function getWordCounts(content) {
    const wordCount = {};

    // Normalize text by converting to lowercase and splitting into words
    const words = content.toLowerCase().split(/\W+/).filter(Boolean);

    // Count occurrences of each word
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return wordCount;
}

/**
 * Colors a word based on its frequency.
 * @param {string} word The word to be colored.
 * @param {number} count The frequency of the word.
 * @returns {string} The colored word.
 */

// TODO: Return the word colored based on its frequency using the 'chalk' library.
// For example: 
// - Words that occur once can be blue
// - Words that occur between 2 and 5 times can be green
// - Words that occur more than 5 times can be red
function colorWord(word, count) {
    if (count === 1) {
        return chalk.blue(word); // Blue for words that occur once
    } else if (count >= 2 && count <= 5) {
        return chalk.green(word); // Green for words that occur between 2 and 5 times
    } else {
        return chalk.red(word); // Red for words that occur more than 5 times
    }
}

/**
 * Prints the first 15 lines of the content with colored words.
 * @param {string} content The file content.
 * @param {Object} wordCount The word occurrences.
 */

function printColoredLines(content, wordCount) {
    const lines = content.split('\n').slice(0, 15);

    for (const line of lines) {
        const coloredLine = line.split(/\W+/).map(word => {
            return word ? colorWord(word, wordCount[word.toLowerCase()] || 0) : '';
        }).join(' ');

        console.log(coloredLine);
    }
}

/**
 * Main function to read the file, count the word occurrences and print the colored lines.
 */
function processFile() {
    const content = readFileContent();
    const wordCount = getWordCounts(content);
    printColoredLines(content, wordCount);
}

if (require.main === module) {
    // This will execute only if the file is run directly.
    processFile();
}

// TODO: Export the functions for testing
// Hint: You can use the 'module.exports' syntax.
module.exports = {
    readFileContent,
    getWordCounts,
    colorWord,
    printColoredLines,
    processFile
};
