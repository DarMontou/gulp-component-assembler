Update History
==============

###1.1.0 - Jan 2, 2015
Some changes were breaking so I updated the minor number. 
* Changed license to MIT
* Updated main README.md
* Added README.md in the plugins folder to describe plug-ins, how to write them, and what plug-ins are currently available.  
* Added `assemblyFileName` as an option sent into all plug-ins.
* Updated ./plugins/README.md to include `FILE_PRE`, `FILE_POST`, `INLINE_PRE`, and `INLINE_POST` . Added and corrected examples.
* Fixed the calling of plug-ins to be at the correct times.
* Created new plug-in: `fileNameProvider.js`to solve Issue #2.
* Removed `assembly.assemblies` and replaced with `assembly.subs` (*Breaking from version 1.0.4*).
* Created new plug-in: `oldSubAssemblies.js`to provide backwards compatibility with version 1.0.4.
* Corrected the output path so `gulp.dest()` will work correctly.
* Updated ./plugins/PLUGINLIST.MD to include new file `fileNameProvider.js` and `oldSubAssemblies.js` plug-ins.
* Spelling correction in main README.md
* Removed non-used and empty test files.
* Added tests for assemblies,js, globArray.js and plugin.js
* Linted and corrected all the testdata files.
* Added a clear function to the plugin.js file.
* Added "assemblyFileName" to the params sent to all plug-ins
* Added version information to my plug-ins
* Renamed the `testdata/main/sub1/local` folder to `testdata/main/sub1/locale`
* Updating License file to include 2014 and 2015.
* Updated docs for option `exposeLang` and added option `globalObj` with description.
* Alphabetized my plug-in list.
* Added comments into assemblies.js and moved the code to process POST plug-ins to the correct place (Before sub-assemblies)
* Changed the default global object used when exposing the assembly lang object to `globalObj` with the default of `window.components`
* Fixed test data to match what is correctly generated.


###1.0.4
* Updated main README.md
* Added assemble option `useStrict`.
* Changed `iifeParams` from a string to an object with `use` and `pass` parameters.
* Added globby paths for the `files` and `templates` properties.
```js
{
  "files": [
    "**/*.js"
  ],
  "templates": [
    "**/*.html"
  ]
}
```