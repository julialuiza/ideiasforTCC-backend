module.exports = function parseStringAsArray(arrayAsString){
	return arrayAsString.split(',').map(area => area.trim());
}
