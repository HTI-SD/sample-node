module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/equipment', function(req, res) {
    res.render('equipment');
  });

  app.get('/labour', function(req, res) {
    res.render('labour');
  });

  app.get('/consultation', function(req, res) {
    res.render('consultation');
  });

  app.get('/disease', function(req, res) {
    res.render('disease');
  });

  app.get('/weather', function(req, res) {
    res.render('weather');
  });

  app.get('/group-booking', function(req, res) {
    res.render('group-booking');
  });
};
