const WordPOS = require('wordpos');
const weights = require('./weights.json');

const wordpos = new WordPOS();

function generate(message) {
  wordpos.getPOS(message, (pos) => {
    const words = Object.keys(pos).map((key) => (
      pos[key].map((word) => ({
        word,
        weight: weights[key],
      }))
    )).flat();

    // Add emojis to words, multiply weight by score, return emoji with highest weight
  });
}
