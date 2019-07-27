const requestSYNC = require('sync-request');
const fs = require('fs');
var postSync = function (File) {
    if (!File) throw Error('File is not selected.');
    if (fs.statSync(File).isFile()) {
		if (!fs.existsSync(File)) throw Error('Invalid file not exist');
	} else  {
        throw Error('Invalid path');
    }
    const fdSync = new requestSYNC.FormData();
    fdSync.append('file', fs.readFileSync(File), File);
    var res = requestSYNC('POST', 'https://fairu.site/upload', {form: fdSync});
    var response = JSON.parse(res.getBody('utf8'));
    if (response.result.includes('rate limited')) throw Error(data.result);
    var result = `https://cdn.fairu.site/${response.result}`;
    return result;
}

module.exports = postSync;