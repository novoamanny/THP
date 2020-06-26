const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json({urlencoded: false}));
app.use(cors())

app.use('/api/rates', require('./routes/api/rates'));

const PORT = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


app.listen(PORT, () =>{
    console.log(`Server Running on port: ${PORT}`);
});