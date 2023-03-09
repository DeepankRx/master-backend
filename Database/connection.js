const mongoose = require('mongoose');
const URI = 'mongodb+srv://deepank:passwordforbot@cluster0.wopim.mongodb.net/Master?retryWrites=true&w=majority';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err));
