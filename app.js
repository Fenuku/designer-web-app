const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRoutes = require('./designer-app/routes/index');

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
