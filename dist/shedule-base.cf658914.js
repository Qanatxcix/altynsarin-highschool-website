// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/shedule-base.js":[function(require,module,exports) {
"use strict";

var subjectkz = {
  primarySchool: {
    sauatAshu: 'Сауат ашу',
    kaz: 'Қазақ тілі',
    kazLiter: 'Әдебиеттік оқу',
    rus: 'Орыс тілі',
    english: 'Ағылшын тілі',
    math: 'Математика',
    physCulture: 'Дене шынықтыру',
    nature: 'Жаратылыстану',
    worldview: 'Дүниетану',
    rusEng: 'Орыс тілі/Ағылшын тілі'
  },
  highSchool: {
    kaz: 'Қазақ тілі',
    kazLiter: 'Қазақ әдебиеті',
    rus: 'Орыс тілі',
    rusLiter: 'Орыс әдебиеті',
    rusEng: 'орыс тілі/ағылшын тілі',
    history: 'Қазақстан тарихы',
    math: 'Математика',
    DJT: 'ДЖТ',
    physCulture: 'Дене шыныктыру',
    nature: 'Жаратылыстану',
    algebra: 'Алгебра',
    biology: 'Биология',
    phys: 'Физика',
    english: 'Ағылшын',
    geometry: 'Геометрия',
    chemis: 'Химия',
    geograph: 'География',
    basicsoflaw: 'Құқық негіздері'
  }
};
var shedule = {
  class1: [{
    //monday
    classA: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.english, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.nature, '', ''],
    classB: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.rus, '', '']
  }, {
    //tuesday
    classA: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.rus, '', ''],
    classB: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.english, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.nature, '', '']
  }, {
    classA: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, subjectkz.primarySchool.nature, '', ''],
    classB: [subjectkz.primarySchool.physCulture, subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, subjectkz.primarySchool.nature, '', '']
  }, {
    classA: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, subjectkz.primarySchool.rus, '', ''],
    classB: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.math, subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, '', '']
  }, {
    classA: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, subjectkz.primarySchool.math, '', ''],
    classB: [subjectkz.primarySchool.sauatAshu, subjectkz.primarySchool.rus, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, '', '']
  }],
  class2: [{
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.rus, '', ''],
    classB: [subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.rus, subjectkz.primarySchool.kaz, '', '']
  }, {
    classA: [subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.kaz, subjectkz.primarySchool.nature, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, subjectkz.primarySchool.nature, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, '', ''],
    classB: [subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, subjectkz.primarySchool.kazLiter, '', '']
  }, {
    classA: [subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.worldview, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.worldview, '', '']
  }],
  class3: [{
    classA: [subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.rusEng, subjectkz.primarySchool.rusEng, subjectkz.primarySchool.math, subjectkz.primarySchool.worldview, ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.nature, subjectkz.primarySchool.physCulture, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.rus, subjectkz.primarySchool.math, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kazLiter, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kazLiter, '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.rusEng, subjectkz.primarySchool.rusEng, subjectkz.primarySchool.nature, ''],
    classB: [subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.math, subjectkz.primarySchool.kaz, subjectkz.primarySchool.worldview, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.physCulture, '', ''],
    classB: [subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, subjectkz.primarySchool.rus, subjectkz.primarySchool.english, '']
  }],
  class4: [{
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.english, subjectkz.primarySchool.kazLiter, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, subjectkz.primarySchool.nature, subjectkz.primarySchool.rus, ''],
    classB: [subjectkz.primarySchool.physCulture, subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.rus, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, '', '']
  }, {
    classA: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.english, '', ''],
    classB: [subjectkz.primarySchool.kaz, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, subjectkz.primarySchool.english, '']
  }, {
    classA: [subjectkz.primarySchool.physCulture, subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.nature, subjectkz.rus, ''],
    classB: [subjectkz.primarySchool.math, subjectkz.primarySchool.kazLiter, subjectkz.primarySchool.physCulture, subjectkz.primarySchool.nature, subjectkz.primarySchool.rus, '']
  }],
  class5: [{
    classA: [subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.history, subjectkz.highSchool.math, subjectkz.highSchool.kaz, ''],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.rus, subjectkz.highSchool.math, subjectkz.highSchool.history, subjectkz.highSchool.kaz, '']
  }, {
    classA: [subjectkz.highSchool.kazLiter, subjectkz.highSchool.DJT, subjectkz.highSchool.math, subjectkz.highSchool.physCulture, '', ''],
    classB: [subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter, subjectkz.highSchool.math, subjectkz.highSchool.DJT, '', '']
  }, {
    classA: [subjectkz.highSchool.math, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.physCulture, subjectkz.highSchool.kaz, ''],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.rus, subjectkz.highSchool.math, subjectkz.highSchool.kaz, subjectkz.highSchool.physCulture, '']
  }, {
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.math, subjectkz.highSchool.nature, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.nature, subjectkz.highSchool.history, subjectkz.highSchool.math, subjectkz.highSchool.rus, subjectkz.highSchool.kazLiter, '']
  }, {
    classA: [subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.math, subjectkz.highSchool.kaz, subjectkz.highSchool.nature, ''],
    classB: [subjectkz.highSchool.kaz, subjectkz.highSchool.math, subjectkz.highSchool.nature, subjectkz.highSchool.english, subjectkz.highSchool.physCulture, '']
  }],
  class6: [{
    classA: [subjectkz.highSchool.rus, subjectkz.highSchool.math, subjectkz.highSchool.kaz, subjectkz.highSchool.history, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.math, subjectkz.highSchool.rus, subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.physCulture, '']
  }, {
    classA: [subjectkz.highSchool.nature, subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, subjectkz.highSchool.math, '', ''],
    classB: [subjectkz.highSchool.kazLiter, subjectkz.highSchool.nature, subjectkz.highSchool.math, subjectkz.highSchool.english, subjectkz.highSchool.physCulture, '']
  }, {
    classA: [subjectkz.highSchool.kaz, subjectkz.highSchool.english, subjectkz.highSchool.DJT, subjectkz.highSchool.math, '', ''],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.kaz, subjectkz.highSchool.math, subjectkz.highSchool.DJT, subjectkz.highSchool.rus, '']
  }, {
    classA: [subjectkz.highSchool.kazLiter, subjectkz.highSchool.nature, subjectkz.highSchool.math, subjectkz.highSchool.history, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.nature, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture, subjectkz.highSchool.math, subjectkz.highSchool.history, '']
  }, {
    classA: [subjectkz.highSchool.math, subjectkz.highSchool.rus, subjectkz.highSchool.rus, subjectkz.highSchool.kaz, subjectkz.highSchool.physCulture, subjectkz.highSchool.english],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.math, subjectkz.highSchool.kaz, subjectkz.highSchool.rus, '', '']
  }],
  class7: [{
    classA: [subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.phys, subjectkz.highSchool.physCulture, subjectkz.highSchool.kaz, subjectkz.highSchool.english],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.kaz, subjectkz.highSchool.english, subjectkz.highSchool.physCulture]
  }, {
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.rus, subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.rus, subjectkz.highSchool.geometry, subjectkz.highSchool.history, subjectkz.highSchool.english, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture]
  }, {
    classA: [subjectkz.highSchool.phys, subjectkz.highSchool.chemis, subjectkz.highSchool.algebra, subjectkz.highSchool.kaz, subjectkz.highSchool.biology, subjectkz.highSchool.geograph],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.algebra, subjectkz.highSchool.geograph, subjectkz.highSchool.biology, subjectkz.highSchool.kaz, subjectkz.highSchool.chemis]
  }, {
    classA: [subjectkz.highSchool.geometry, subjectkz.highSchool.rus, subjectkz.highSchool.DJT, subjectkz.highSchool.geograph, subjectkz.highSchool.kazLiter, ''],
    classB: [subjectkz.highSchool.rus, subjectkz.highSchool.DJT, subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geograph, '']
  }, {
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.english, subjectkz.highSchool.algebra, subjectkz.highSchool.rus, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.rus, subjectkz.highSchool.history, subjectkz.highSchool.physCulture]
  }],
  class8: [{
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.algebra, subjectkz.highSchool.geograph, subjectkz.highSchool.kaz],
    classB: [subjectkz.highSchool.algebra, subjectkz.highSchool.kaz, subjectkz.highSchool.history, subjectkz.highSchool.geograph, subjectkz.highSchool.rus, subjectkz.highSchool.physCulture]
  }, {
    classA: [subjectkz.highSchool.phys, subjectkz.highSchool.DJT, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.biology, subjectkz.highSchool.chemis, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english]
  }, {
    classA: [subjectkz.highSchool.algebra, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.chemis, subjectkz.highSchool.geograph, subjectkz.highSchool.kaz],
    classB: [subjectkz.highSchool.geograph, subjectkz.highSchool.algebra, subjectkz.highSchool.kaz, subjectkz.highSchool.rus, subjectkz.highSchool.DJT, subjectkz.highSchool.english]
  }, {
    classA: [subjectkz.highSchool.kazLiter, subjectkz.highSchool.history, subjectkz.highSchool.geometry, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, subjectkz.highSchool.rus, subjectkz.highSchool.phys, subjectkz.highSchool.history, subjectkz.highSchool.physCulture]
  }, {
    classA: [subjectkz.highSchool.phys, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, subjectkz.highSchool.algebra, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.chemis, subjectkz.highSchool.kazLiter, subjectkz.highSchool.algebra, subjectkz.highSchool.physCulture, subjectkz.highSchool.biology, subjectkz.highSchool.english]
  }],
  class9: [{
    classA: [subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.history, subjectkz.highSchool.geograph, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.history, subjectkz.highSchool.chemis, subjectkz.highSchool.physCulture]
  }, {
    classA: [subjectkz.highSchool.geometry, subjectkz.highSchool.geograph, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, subjectkz.highSchool.DJT, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.geometry, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, subjectkz.highSchool.DJT, subjectkz.highSchool.physCulture, subjectkz.highSchool.rus]
  }, {
    classA: [subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.phys, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.algebra, subjectkz.highSchool.chemis, subjectkz.highSchool.kaz, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture, subjectkz.highSchool.english]
  }, {
    classA: [subjectkz.highSchool.geometry, subjectkz.highSchool.chemis, subjectkz.highSchool.history, subjectkz.highSchool.phys, subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter],
    classB: [subjectkz.highSchool.history, subjectkz.highSchool.english, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.geograph, subjectkz.highSchool.rus]
  }, {
    classA: [subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.chemis, subjectkz.highSchool.rusEng, subjectkz.highSchool.rusEng, subjectkz.highSchool.kazLiter],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.algebra, subjectkz.highSchool.english, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geograph, subjectkz.highSchool.rus]
  }],
  class10: [{
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.phys, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.physCulture, subjectkz.highSchool.history, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.phys, subjectkz.highSchool.DJT]
  }, {
    classA: [subjectkz.highSchool.english, subjectkz.highSchool.rus, subjectkz.highSchool.phys, subjectkz.highSchool.geometry, subjectkz.highSchool.kazLiter, ''],
    classB: [subjectkz.highSchool.geometry, subjectkz.highSchool.DJT, subjectkz.highSchool.rus, subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, '']
  }, {
    classA: [subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.phys, subjectkz.highSchool.history, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.history, subjectkz.highSchool.algebra, subjectkz.highSchool.DJT, subjectkz.highSchool.basicsoflaw]
  }, {
    classA: [subjectkz.highSchool.phys, subjectkz.highSchool.rus, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english],
    classB: [subjectkz.highSchool.physCulture, subjectkz.highSchool.kazLiter, subjectkz.highSchool.rus, subjectkz.highSchool.algebra, subjectkz.highSchool.english, subjectkz.highSchool.basicsoflaw]
  }, {
    classA: [subjectkz.highSchool.algebra, subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.english, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.physCulture, subjectkz.highSchool.basicsoflaw, subjectkz.highSchool.english, subjectkz.highSchool.kazLiter, '', '']
  }],
  class11: [{
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.algebra, subjectkz.highSchool.kazLiter, subjectkz.highSchool.english, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture],
    classB: [subjectkz.highSchool.chemis, subjectkz.highSchool.history, subjectkz.highSchool.basicsoflaw, subjectkz.highSchool.kazLiter, subjectkz.highSchool.algebra, '']
  }, {
    classA: [subjectkz.highSchool.geometry, subjectkz.highSchool.phys, subjectkz.highSchool.rus, subjectkz.highSchool.biology, subjectkz.highSchool.kazLiter, ''],
    classB: [subjectkz.highSchool.kazLiter, subjectkz.highSchool.geometry, subjectkz.highSchool.english, subjectkz.highSchool.basicsoflaw, subjectkz.highSchool.rus, subjectkz.highSchool.DJT]
  }, {
    classA: [subjectkz.highSchool.phys, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, subjectkz.highSchool.algebra, subjectkz.highSchool.physCulture, ''],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.history, subjectkz.highSchool.physCulture, subjectkz.highSchool.kaz, subjectkz.highSchool.algebra, '']
  }, {
    classA: [subjectkz.highSchool.geometry, subjectkz.highSchool.phys, subjectkz.highSchool.english, subjectkz.highSchool.biology, subjectkz.highSchool.rus, ''],
    classB: [subjectkz.highSchool.english, subjectkz.highSchool.algebra, subjectkz.highSchool.rus, subjectkz.highSchool.kazLiter, subjectkz.highSchool.physCulture, subjectkz.highSchool.DJT]
  }, {
    classA: [subjectkz.highSchool.history, subjectkz.highSchool.algebra, subjectkz.highSchool.biology, subjectkz.highSchool.physCulture, subjectkz.highSchool.phys, subjectkz.highSchool.english],
    classB: [subjectkz.highSchool.physCulture, subjectkz.highSchool.phys, subjectkz.highSchool.basicsoflaw, subjectkz.highSchool.DJT, subjectkz.highSchool.kaz, '']
  }]
}; // function getCurrentDayShedule(thisWeekDay) {
//       for (let indx in thisWeekDay) {
//            console.log(thisWeekDay[indx]);
//       }
// }
// getCurrentDayShedule(shedule.Monday);

var dayAIDs = ['dayA1', 'dayA2', 'dayA3', 'dayA4', 'dayA5'];
var dayBIDs = ['dayB1', 'dayB2', 'dayB3', 'dayB4', 'dayB5']; // for (let indx = 0; indx < shedule.Monday.length; indx++ ) {
//       for (let indxIn = 0; indxIn < shedule.Monday[indx].classA.length; indxIn++ ){
//             console.log(shedule.Monday[indx].classA[indxIn].toString());
//       }
// }
// shedule.Monday.forEach((currDay, i) => {
//       currDay.classA.forEach(item => {
//       });          
// });

function showCurrentAClassShedule(currClass) {
  currClass.forEach(function (currDay, i) {
    var thisLiContent = '';
    currDay.classA.forEach(function (item) {
      thisLiContent += "<li class=\"list-group-item d-flex d-xl-flex justify-content-center align-items-center \n                        justify-content-xl-center align-items-xl-center\" \n                        style=\"padding: 8px 20px;width: 200px;\n                        padding-right: 0px;padding-left: 0px;padding-top: 4px;\n                        padding-bottom: 4px;height: 34px;\">\n                  <span style=\"font-size: 14px;\">".concat(item, "</span>\n                  </li>");
    });
    document.getElementById("".concat(dayAIDs[i])).innerHTML = thisLiContent;
  });
}

function showCurrentBClassShedule(currClass) {
  currClass.forEach(function (currDay, i) {
    var thisLiContent = '';
    currDay.classB.forEach(function (item) {
      thisLiContent += "<li class=\"list-group-item d-flex d-xl-flex justify-content-center align-items-center \n                        justify-content-xl-center align-items-xl-center\" \n                        style=\"padding: 8px 20px;width: 200px;\n                        padding-right: 0px;padding-left: 0px;padding-top: 4px;\n                        padding-bottom: 4px;height: 34px;\">\n                  <span style=\"font-size: 14px;\">".concat(item, "</span>\n                  </li>");
    });
    document.getElementById("".concat(dayBIDs[i])).innerHTML = thisLiContent;
  });
}

function currAClassParagraph(currClass) {
  document.getElementById('currAclassParagraph').innerHTML = "<p style=\"font-size: 16px\">".concat(currClass, " A \u0441\u044B\u043D\u044B\u043F \u043E\u049B\u0443\u0448\u044B\u043B\u0430\u0440\u044B\u043D\u044B\u04A3 \u0441\u0430\u0431\u0430\u049B \u043A\u0435\u0441\u0442\u0435\u0441\u0456</p>");
}

function currBClassParagraph(currClass) {
  document.getElementById('currBclassParagraph').innerHTML = "<p style=\"font-size: 16px\">".concat(currClass, " B \u0441\u044B\u043D\u044B\u043F \u043E\u049B\u0443\u0448\u044B\u043B\u0430\u0440\u044B\u043D\u044B\u04A3 \u0441\u0430\u0431\u0430\u049B \u043A\u0435\u0441\u0442\u0435\u0441\u0456</p>");
}

showCurrentAClassShedule(shedule.class1);
showCurrentBClassShedule(shedule.class1);
currAClassParagraph(1);
currBClassParagraph(1);
console.log(document.getElementById('day1').innerHTML);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45053" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/shedule-base.js"], null)
//# sourceMappingURL=/shedule-base.cf658914.js.map