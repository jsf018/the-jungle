const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------
// Middleware
// ---------------------
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------
// Page Routes
// ---------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/nationalities', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'nationalities.html'));
});

// ---------------------
// API Routes (for future use)
// ---------------------
// Example: app.get('/api/rosters', (req, res) => { ... });
// Example: app.get('/api/stats/:playerId', (req, res) => { ... });

// Serve league roster data
app.get('/api/rosters', (req, res) => {
  const rosters = require('./data/rosters.json');
  res.json(rosters);
});

// ---------------------
// 404 fallback
// ---------------------
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// ---------------------
// Start
// ---------------------
app.listen(PORT, () => {
  console.log(`Fantasy League site running on port ${PORT}`);
});
