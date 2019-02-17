const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/auth/google', function(req, res) {
  res.render('auth', {
    user: {
      name: "Krzysztof"
    }
  });
});

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send("I'm sorry, we couldn't find what you were looking for!")
});
