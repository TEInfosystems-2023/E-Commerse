const sampleData = require('../data');

exports.hello = (req, res) => {
  res.json({
    message: 'Hello from the e-commerce backend!',
    sampleData
  });
};
