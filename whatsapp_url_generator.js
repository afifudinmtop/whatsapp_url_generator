// api function
const generate = (phone, words) => {
  let words_encoded = encodeURIComponent(words);

  let result = `https://api.whatsapp.com/send/?phone=${phone}&text=${words_encoded}`;

  return result;
};

module.exports = { generate };
