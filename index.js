const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());


// Enable CORS so React can access this API


// Vocabulary data (from your image)
const vocabulary = [
  { word: "about", meaning: "के बारे में" },
  { word: "abroad", meaning: "विदेश से" },
  { word: "absent minded", meaning: "विचलित मस्तिष्क वाला" },
  { word: "absorb", meaning: "सोख लेना, समाहित कर लेना" },
  { word: "abuse", meaning: "गाली देना, निंदा करना" },
  { word: "accept", meaning: "स्वीकार करना" },
  { word: "access", meaning: "प्रयोग करने का अधिकार" },
  { word: "accompany", meaning: "साथ जाना" },
  { word: "accomplish", meaning: "पूरा करना" },
  { word: "according to", meaning: "के अनुसार" },
  { word: "accurate", meaning: "सही" },
  { word: "accused", meaning: "अपराधी" },
  { word: "ached", meaning: "दर्द होना" },
  { word: "achieve", meaning: "प्राप्त करना" },
  { word: "acknowledge", meaning: "मानना, स्वीकार करना" },
  { word: "activity", meaning: "कार्यकलाप" },
  { word: "acquaintance", meaning: "परिचित, जानकार" },
  { word: "a bit", meaning: "थोड़ा सा" },
  { word: "a day off", meaning: "एक दिन की छुट्टी" },
  { word: "a loaf of bread", meaning: "एक रोटी का टुकड़ा" },
  { word: "acquire", meaning: "प्राप्त करना" },
  { word: "adage", meaning: "सूक्ति, कहावत" },
  { word: "adapt", meaning: "अनुकूल बनना, परिस्थितियों के अनुसार बदल जाना" },
  { word: "add", meaning: "जोड़, सम्मिलित करना" },
  { word: "addition", meaning: "अतिरिक्त" },
  { word: "address", meaning: "पता" },
  { word: "adequate", meaning: "पर्याप्त" },
  { word: "adjoining", meaning: "साथ वाला" },
  { word: "adjourn", meaning: "स्थगित करना, टालना" },
  { word: "adjust", meaning: "ठीक करना" },
  { word: "administration", meaning: "प्रशासन" },
  { word: "admire", meaning: "प्रशंसा करना" },
  { word: "admit", meaning: "स्वीकार करना" },
  { word: "adopt", meaning: "अनुकूलित करना, स्वीकार करना" },
  { word: "advance", meaning: "आगे बढ़ना, पेशगी" },
];

// Function to shuffle array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


// Get all vocab
app.get("/vocab/all", (req, res) => {
  res.json(vocabulary);
});

// API endpoint: Get random vocabularies
app.get("/vocab/random", (req, res) => {
  let count = parseInt(req.query.count) || vocabulary.length; // default all words
  const shuffled = shuffleArray([...vocabulary]);

  // Limit by count
  const result = shuffled.slice(0, count);
  res.json(result);
});

// Add new vocabulary (in-memory)
app.post("/vocab/add", (req, res) => {
  const { word, meaning } = req.body;

  if (!word || !meaning) {
    return res.status(400).json({ error: "word and meaning are required" });
  }

  // Check duplicate
  const exists = vocabulary.find(v => v.word.toLowerCase() === word.toLowerCase());
  if (exists) {
    return res.status(400).json({ error: "word already exists" });
  }

  // Add new word
  vocabulary.push({ word, meaning });
  res.json({ message: "Word added successfully",  word, meaning });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
