const WordPOS = require('wordpos');

const wordpos = new WordPOS();

function generate(message) {
  wordpos.getPOS(message, (pos) => {
    const words = [
      ...(pos.nouns.map((word) => ({
        word,
        weight: 1.0,
      }))),
      ...(pos.verbs.map((word) => ({
        word,
        weight: 0.85,
      }))),
      ...(pos.adjectives.map((word) => ({
        word,
        weight: 0.75,
      }))),
      ...(pos.adverbs.map((word) => ({
        word,
        weight: 0.65,
      }))),
      ...(pos.rest.map((word) => ({
        word,
        weight: 0.5,
      }))),
    ];

    // Add emojis to words, multiply weight by score, return emoji with highest weight
  });
}
