const fs = require('fs');
const zlib = require('zlib');

//read from a zip file
const gUnzip = zlib.createGunzip();
var zipFile = fs.createReadStream(__dirname + '/zipFile.jpg.gz');
var unzipFile =  fs.createWriteStream(__dirname + '/fileUnzip.jpg');
zipFile.pipe(gUnzip).pipe(unzipFile);