
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "What's Eating You?" })
};
exports.illness = function(req, res){
  res.render('illness', { title: "What's Eating You?" })
};