
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "What's Eating You?" })
};
exports.illness = function(req, res){
  res.render('illness', { title: "What's Eating You?" })
};
exports.gmos = function(req, res){
  res.render('gmos', { title: "What's Eating You?" })
};
exports.dehydration = function(req, res){
  res.render('dehydration', { title: "What's Eating You?" })
};
exports.irradiation = function(req, res){
  res.render('irradiation', { title: "What's Eating You?" })
};
exports.context = function(req, res){
  res.render('context', { title: "What's Eating You?" })
};
exports.fermentation = function(req, res){
  res.render('fermentation', { title: "What's Eating You?" })
};
exports.pasteurization = function(req, res){
  res.render('pasteurization', { title: "What's Eating You?" })
};
exports.preservatives = function(req, res){
  res.render('preservatives', { title: "What's Eating You?" })
};
exports.refrigeration = function(req, res){
  res.render('refrigeration', { title: "What's Eating You?" })
};



