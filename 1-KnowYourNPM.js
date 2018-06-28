// Installing express package directly from Github (last commit of master branch)
npm i expressjs/express
npm i expressjs/express#4.14.0    // particular version
npm ls express
--> express@4.14.0   (git://github.com/expressjs/express.git#commitusedblabla)

// See installed top-level packages (not dependencies)
npm ls -g --depth=0
npm ll -g --depth=0  // ll command gives more description/info about each package
npm ls -g --depth=0 --json  // parse output to JSON

// Creating node_modules in home directory
mkdir .%HOMEPATH%\node_modules

// Typical package.json file:
{
    "name": "hello-npm",
    "version": "1.0.0",
    "dependencies": {
        "request": "^2.79.0"
    },
    "devDependencies": {
        // installing with npm i -D (or --save-dev)
        "babel-cli": "^6.18.0"
    },
    "optionalDependencies": {
        // installing with npm i -O (or --save-optional)
        "nodemon": "^1.11.0"
    }
}

// Different versions
npm update  // install and update all packages according to version range in package.json
npm i npm -g  // update NPM CLI itself
npm outdated  // check if any packages are outdated
"2.9.0"     // equivalent to = by default =2.9.0
"<2.9.0"    // less than version 2.9.0 (can also use <=)
"2.9.x"     // cover whole range for that level (can also use * or not specifying level e.g. 2.9)
"~2.9.3"    // 2.9.x for all x>=3
"^1.2.3"    // allows changes that do not modify the left-most non-zero digit

// Checking different NPM config options
npm config list -l
npm config set init-author-name "Samer Buna"
npm config delete init-author-name

// Search NPM registry
npm search lint
npm help shrinkwrap   // used for locking down dependency versions so everyone gets same packages

// Other NPM tricks
npm home lodash   // open home page of NPM package
npm repo lodash   // open repo page of NPM package
npm prune   // if some packages are installed that are not saved to package.json, cleans up