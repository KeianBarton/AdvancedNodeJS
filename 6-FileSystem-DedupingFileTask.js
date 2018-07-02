// files in this directory accidentally have their contents doubled
// task: dedupe using file system
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');  // folder 'files' in this dir

const files = fs.readdirSync(dirname);

files.forEach(file => {
    const filePath = path.join(dirname, file);  // platform agnostic path join
    fs.stat(filePath, (err, stats) => {   // used to get stats about a file (rather than content)
        if (err) throw err;

        fs.truncate(filePath, stats.size/2, (err) => {
            if (err) throw err;
        });
    });
});