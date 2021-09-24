const express = require('express');
const path = require('path');

const app = express();

// logging
app.use('/', (req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
});

// Init middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/summoner', require('./routes/summoner'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
