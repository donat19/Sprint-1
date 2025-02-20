const express = require('express');
const app = express();

// Serve static files from the "pages" directory
app.use(express.static('pages'));

// Redirect to menu.html at root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pges/menu/menu.html');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/pges/menu/menu.html');
});
