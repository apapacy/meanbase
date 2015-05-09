var fs = require('fs');
var config = require('../config/environment');

module.exports = function() {
	console.log('checking for extensions...');
	var Extension = require('../api/extension/extension.model');
	var extensionsFolderUrl = 'client/extensions/';

	// Loop through themes in extensionsFolderUrl and get the extension.json file out of the root of each one
	var extensionsFolder = fs.readdirSync(extensionsFolderUrl);
	var extensionsJSONS = [];
	for(var ii = 0; ii < extensionsFolder.length; ii++) {
		if(extensionsFolder[ii][0] !== '.') {
			var stat = fs.statSync(extensionsFolderUrl + extensionsFolder[ii]);
			if(stat.isDirectory()) {
				try {
					var extensionJSON = JSON.parse(fs.readFileSync(extensionsFolderUrl + extensionsFolder[ii] + '/extension.json', 'utf8'));
					extensionJSON.html = fs.readFileSync(extensionsFolderUrl + extensionsFolder[ii] + '/index.html', 'utf8');
					extensionsJSONS.push(extensionJSON);
				} catch(error) {
					console.log('Could not parse extension.json in root of extension', error);
				}
			}
		}
	} //for

	GLOBAL.meanbaseGlobals.extensions = extensionsJSONS;

	// Remove all found Extensions
	// Extension.remove(function(err) {
 // 		if(err) { return handleError(err); }
	// });

	
	if(extensionsJSONS.length > 0) {
		// Find all extensions in database
		Extension.find(function (err, extensions) {
		  if(err) { return handleError(err); }
		  if(extensions.length > 0) { return false; }

		  // If no extensions exist create them
	  	Extension.create(extensionsJSONS, function(err, extensions) {
			  if(err) { return handleError(err); }
			  console.log('Extensions initialized');
			});
		});
	}
	

	function handleError(err) {
	  return console.log('Initializing extensions error: ', err);
	}
};