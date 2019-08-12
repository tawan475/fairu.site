const request = require('request');
const fs = require('fs');
var post = function (File, callback) {
    if (!File) throw Error('File is not selected.');
    if (!callback) throw Error('No callback');
    if (fs.statSync(File).isFile()) {
		if (!fs.existsSync(File)) throw Error('Invalid file not exist');
		var data = fs.createReadStream(File);
	} else  {
        throw Error('Invalid path');
    }
    request.post({url: 'https://fairu.site/api/upload', formData: {file: data}}, (error, response, body) => {
        if (typeof body !== 'string') throw Error("Couldn't reach Fairu.site please try again later.")
        if (body.includes('413 Request Entity Too Large')) throw Error('File too big!');
        var data = JSON.parse(body);
        if (data.result.includes('rate limited')) throw Error(data.result);
        var result = `https://cdn.fairu.site/${data.result}`;
        callback(result);
    });
}

module.exports = post;