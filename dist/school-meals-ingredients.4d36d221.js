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
})({"js/school-meals-ingredients.js":[function(require,module,exports) {
"use strict";

var ing = {
  "сәбіз": {
    name: "сәбіз",
    calory: 32
  },
  "пияз": {
    name: "пияз",
    calory: 41
  },
  "өсімдік_майы": {
    name: "өсімдік майы",
    calory: 899
  },
  "қызанақ_пастасы": {
    name: "қызанақ пастасы",
    calory: 20
  },
  "құнарландырылған_бидай_ұны": {
    name: "құнарландырылған бидай ұны",
    calory: 342
  },
  "ақ_қауданды_қырыққабат": {
    name: "ақ қауданды қырыққабат",
    calory: 30
  },
  "концентраттан_кисель": {
    name: "концентраттан кисель",
    calory: 53
  },
  "қант": {
    name: "қант",
    calory: 398
  },
  "лимон_қышқылы": {
    name: "лимон қышқылы",
    calory: 0
  },
  "су": {
    name: "су",
    calory: 0
  },
  "С_дәрумен_ұнтағы": {
    name: "С дәрумен ұнтағы",
    calory: 50
  },
  "алмұрт": {
    name: "алмұрт",
    calory: 42
  },
  "қара_бидай_наны": {
    name: "қара бидай наны",
    calory: 165
  },
  "жұмыртқа": {
    name: "жұмыртқа",
    calory: 157
  },
  "йодталған_тұз": {
    name: "йодталған тұз",
    calory: 0
  },
  "сары_май": {
    name: "сары май",
    calory: 748
  },
  "сорпа": {
    name: "сорпа",
    calory: 43
  },
  "сиыр_еті": {
    name: "сиыр еті",
    calory: 187
  },
  "күріш_жармасы": {
    name: "күріш жармасы",
    calory: 344
  },
  "ара_балы": {
    name: "ара балы",
    calory: 304
  },
  "сүзбеше": {
    name: "сүзбеше",
    calory: 402
  },
  "сүт": {
    name: "сүт",
    calory: 42
  },
  "картоп": {
    name: "картоп",
    calory: 80
  },
  "көк_бұршақ_консервіленген": {
    name: "көк бұршақ консервіленген",
    calory: 55
  },
  "сүт_қатығы": {
    name: "сүт қатығы",
    calory: 24
  },
  "сорпа_немесе_су": {
    name: "сорпа немесе су",
    calory: 0
  },
  "шабдалы_шырыны": {
    name: "шабдалы шырыны",
    calory: 40
  },
  "алма": {
    name: "алма",
    calory: 47
  },
  "үрме_бұршақ": {
    name: "үрме бұршақ",
    calory: 57
  },
  "салат_жапырағы": {
    name: "салат жапырағы",
    calory: 16
  },
  "балғын_қияр": {
    name: "балғын қияр",
    calory: 15
  },
  "көксерке_балығы": {
    name: "көксерке балығы",
    calory: 82
  },
  "ақжелкен": {
    name: "ақжелкен",
    calory: 47
  },
  "қызылша": {
    name: "қызылша",
    calory: 40
  },
  "арпа_жармасы": {
    name: "арпа жармасы",
    calory: 324
  },
  "айран": {
    name: "айран",
    calory: 24
  },
  "сиыр_еті_(котлетке_арналған_ет)": {
    name: "сиыр еті",
    calory: 187
  },
  "кептірілген_нан": {
    name: "кептірілген нан",
    calory: 331
  },
  "күріш": {
    name: "күріш",
    calory: 344
  },
  "тәтті_бұрыш": {
    name: "тәтті бұрыш",
    calory: 25
  },
  "қызанақ_тұздығы": {
    name: "қызанақ тұздығы",
    calory: 80
  },
  "балғын_алма": {
    name: "балғын алма",
    calory: 47
  },
  "балғын_қызанақ": {
    name: "балғын қызанақ",
    calory: 20
  },
  "лимон_шырын_үшін": {
    name: "лимон шырын үшін",
    calory: 16
  },
  "кептірілген_итмұрын_жемісі": {
    name: "кептірілген итмұрын жемісі",
    calory: 110
  },
  "картоп_крахмалы": {
    name: "картоп крахмалы",
    calory: 300
  },
  "бидай_наны": {
    name: "бидай наны",
    calory: 242
  },
  "тұздалған_қияр": {
    name: "тұздалған қияр",
    calory: 11
  },
  "тұздық": {
    name: "тұздық",
    calory: 80
  },
  "қаймақ": {
    name: "қаймақ",
    calory: 11.50
  },
  "кептірілген_жеміс_(өрік,_мейіз)": {
    name: "кептірілген жеміс",
    calory: 41
  },
  "вермишель": {
    name: "вермишель",
    calory: 254
  },
  "ет_(котлетке_арналған_ет)": {
    name: "котлетке арналған ет",
    calory: 187
  },
  "қарақұмық_жармасы": {
    name: "қарақұмық жармасы",
    calory: 132
  },
  "жүмыртқа": {
    name: "жүмыртқа",
    calory: 157
  },
  "көк_жуа": {
    name: "көк жуа",
    calory: 19
  },
  "тәтті_бүрыш": {
    name: "тәтті бүрыш",
    calory: 26
  },
  "сүт_немесе_су": {
    name: "сүт немесе су",
    calory: 35
  },
  "сұлы_жармасы": {
    name: "сұлы жармасы",
    calory: 350
  },
  "бидай_ұны": {
    name: "бидай ұны",
    calory: 342
  },
  "тауық_еті": {
    name: "тауық еті",
    calory: 239
  },
  "банан": {
    name: "банан",
    calory: 105
  },
  "концентраттанған_кисель": {
    name: "концентраттанған кисель",
    calory: 50
  }
};
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/school-meals-ingredients.js"], null)
//# sourceMappingURL=/school-meals-ingredients.4d36d221.js.map