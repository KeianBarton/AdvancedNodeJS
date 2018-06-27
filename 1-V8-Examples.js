// Commands to be run in CMD

// Staged V8 features enabled
node --harmony -p "'ExampleString'.padEnd(15, '*')"

// In progress V8 features enabled
node --v8-options | findstr /c:"in progress"

// List all V8 options (you can filter a search for a behaviour/feature as above)
node --v8-options

