const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);



// dynamic port for heroku production environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);