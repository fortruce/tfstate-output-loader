module.exports = function(content) {
	this.cacheable && this.cacheable();
	content = JSON.parse(content);
	if (content.modules && content.modules.length && content.modules[0].outputs) {
		return "module.exports = " + JSON.stringify(content.modules[0].outputs);
	}
	return JSON.stringify({});
}
