const fs = require('fs');
const zlib = require('zlib');


//let zip a file first
const gzip = zlib.createGzip();
var file = fs.createReadStream(__dirname + '/Chicago.jpg');
var zipFile = fs.createWriteStream(__dirname + '/zipFile.jpg.gz');

file.pipe(gzip).pipe(zipFile);

//read from a zip file
const gUnzip = zlib.createGunzip();
var zipFile2 = fs.createReadStream(__dirname + '/zipFile.jpg.gz');
var unzipFile =  fs.createWriteStream(__dirname + '/fileUnzip.jpg');
zipFile2.pipe(gUnzip).pipe(unzipFile);