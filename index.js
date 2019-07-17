const request = require('request')
const fs = require('fs');

function fairu() {return "For documents please visit Website: https://docs.fairu.site Discord: https://discord.gg/nnRAPxv"}

fairu.post = function (File, callback) {
    if (!File) throw Error('File is not selected.');
    if (fs.statSync(File).isFile()) {
		if (!fs.existsSync(File)) throw Error('Invalid file not exist');
		var data = fs.createReadStream(File);
	} else  {
        throw Error('Invalid path')
    }
    request.post({
        url: 'https://fairu.site/upload',
        formData: {
            file: data
        }
    }, (error, response, body) => {
        var data = JSON.parse(body);
        if (data.error) data.error = Error(data.error);
        callback(data.result, data.error);
    });
}

module.exports = fairu
module.exports.documents = "For documents please visit Website: https://docs.fairu.site Discord: https://discord.gg/nnRAPxv"