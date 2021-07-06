const WordPOS = require('wordpos');
const emojiFromWord = require('emoji-from-word');
const Sentiment = require('sentiment');
const weights = require('./weights.json');
const { forbidden } = require('./forbidden.json');
const { emojis: sentimentEmojis } = require('./sentimentEmojis.json');

const sentiment = new Sentiment();
const wordpos = new WordPOS();

module.exports = async function generate(message) {
  const pos = await wordpos.getPOS(message);
  const words = Object.keys(pos).map((key) => (
    pos[key].map((word) => ({
      word,
      weight: weights[key],
    }))
  )).flat();

  let bestMatch = words.map(({ word, weight }) => {
    // eslint-disable-next-line camelcase
    const { emoji, emoji_name, score } = emojiFromWord(word);
    console.log(word, emoji, score);

    if (!emoji || forbidden.includes(emoji_name)) return { score: 0 };

    return {
      emoji: emoji.char,
      score: weight * score,
    };
  }).reduce((a, b) => (a.score > b.score ? a : b));

  if (bestMatch.score < weights.sentiment) {
    const { comparative } = sentiment.analyze(message);
    bestMatch = sentimentEmojis
      .filter(({ threshold }) => (comparative + 1) / 2 > threshold)
      .reduce((a, b) => (a.threshold > b.threshold ? a : b));
  }

  return `${bestMatch.emoji} ${message}`;
};
