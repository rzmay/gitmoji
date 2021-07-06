const WordPOS = require('wordpos');
const emojiFromWord = require('emoji-from-word');
const weights = require('./weights.json');

const wordpos = new WordPOS();

module.exports = async function generate(message) {
  const pos = await wordpos.getPOS(message);
  const words = Object.keys(pos).map((key) => (
    pos[key].map((word) => ({
      word,
      weight: weights[key],
    }))
  )).flat();

  return words.map(({ word, weight }) => {
    const { emoji, score } = emojiFromWord(word);

    return {
      emoji: emoji.char,
      score: weight * score,
    };
  }).reduce((a, b) => (a.score > b.score ? a : b));
};
