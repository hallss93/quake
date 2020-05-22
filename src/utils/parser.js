import fs from 'fs';
import path from 'path';
import Parser from '../models/Parser';

const parser = new Parser();

const PATH = path.join(__dirname, '../', '../', '/files/');

function readAllFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            fs.readFile(dirname + filename, 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, content);
                parser.readFile(dirname + filename);
            });
        });
    });
}

var data = {};
readAllFiles(PATH, function (filename, content) {
    data[filename] = content;
}, function (err) {
    throw err;
});

export default parser;


