// Here we're using a CommonJS module pattern to define a function named render() which we'll then later use to require this module and use its function.

exports.render = function(req, res){
	res.send("Howdy");
};