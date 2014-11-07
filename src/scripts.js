var fs = require('fs');
var path = require('path');

function processOneScript(scriptPath, includeName) {
  // TODO: Add code to complain if a file does not exist.
  var contents = "/*\n * Included File: " + includeName + "\n */\n";
  contents += fs.readFileSync(scriptPath, {"encoding": "utf-8"});
  contents += "\n";

  return contents;
}

function processScripts(projectPath, files, options) {
  var contents = "";

  if (files.length > 0) {
    files.forEach(function(fileName) {
      contents += processOneScript(path.join(projectPath, fileName), fileName, options);
    });
  }

  return contents;
}

module.exports = {
  "process": processScripts
};