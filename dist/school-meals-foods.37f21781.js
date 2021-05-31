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
})({"js/school-meals-foods.js":[function(require,module,exports) {
"use strict";

var foods = {
  "Борщ": {
    name: "Борщ",
    ingredients: [ing.қызылша.name, ing.ақ_қауданды_қырыққабат.name, ing.қызанақ_пастасы.name, ing.сәбіз.name, ing.ақжелкен.name, ing.пияз.name, ing.йодталған_тұз.name, ing.өсімдік_майы.name, ing.қант.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Борщь.jpg'
  },
  "Пісірілген_тауық_еті": {
    name: "Пісірілген тауық еті",
    ingredients: [ing.тауық_еті.name, ing.пияз.name],
    img: 'images/resource/foods/Вареная курица.jpg'
  },
  "Балғын_қиярдан_салат": {
    name: "Балғын қиярдан салат",
    ingredients: [ing.балғын_қияр.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балғын қиярдан салат.jpg'
  },
  "Күрішпен_тартылған_ет_салынған_бұрыш": {
    name: "Күрішпен тартылған ет салынған бұрыш",
    ingredients: [ing.тәтті_бұрыш.name, ing["сиыр_еті_(котлетке_арналған_ет)"].name, ing.күріш_жармасы.name, ing.пияз.name, ing.өсімдік_майы.name, ing.кептірілген_нан.name, ing.қызанақ_тұздығы.name, ing.сорпа.name, ing.құнарландырылған_бидай_ұны.name, ing.сәбіз.name, ing.пияз.name, ing.қызанақ_пастасы.name, ing.қант.name],
    img: 'images/resource/foods/Күрішпен тартылған ет салынған бұрыш.jpg'
  },
  "Бұқтырылған_ет": {
    name: "Бұқтырылған ет (сиыр еті)",
    ingredients: [ing.сиыр_еті.name, ing.сәбіз.name, ing.пияз.name, ing.өсімдік_майы.name, ing.қызанақ_пастасы.name, ing.бидай_ұны.name],
    img: 'images/resource/foods/Бұқтырылған ет.jpg'
  },
  "Гарнир_бұқтырылған_қырыққабат": {
    name: "Гарнир: бұқтырылған қырыққабат",
    ingredients: [ing.ақ_қауданды_қырыққабат.name, ing.өсімдік_майы.name, ing.сәбіз.name, ing.пияз.name, ing.қызанақ_пастасы.name, ing.құнарландырылған_бидай_ұны.name, ing.қант.name],
    img: 'images/resource/foods/Гарнир  бұқтырылған қырыққабат.jpg'
  },
  "Үй_кеспе_көжесі": {
    name: "Үй кеспе көжесі",
    ingredients: [ing.құнарландырылған_бидай_ұны.name, ing.жұмыртқа.name, ing.су.name, ing.йодталған_тұз.name, ing.пияз.name, ing.сары_май.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Үй кеспе көжесі.jpg'
  },
  "Балғын_қызанақ_және_тәтті_бұрыштан_салат": {
    name: "Балғын қызанақ және тәтті бұрыштан салат",
    ingredients: [ing.балғын_қызанақ.name, ing.көк_жуа.name, ing.тәтті_бұрыш.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балғын қызанақ және тәтті бұрыштан салат.jpg'
  },
  "Балық_котлеті": {
    name: "Балық котлеті",
    ingredients: [ing.көксерке_балығы.name, ing.бидай_наны.name, ing.сүт_немесе_су.name, ing.кептірілген_нан.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балық котлеті.jpg'
  },
  "Гарнир_сүт_қосылған_көкөніс": {
    name: "Гарнир: сүт қосылған көкөніс",
    ingredients: [ing.сәбіз.name, ing.картоп.name, ing.көк_бұршақ_консервіленген.name, ing.ақ_қауданды_қырыққабат.name, ing.сүт_қатығы.name, ing.сүт.name, ing.сары_май.name, ing.құнарландырылған_бидай_ұны.name, ing.сорпа_немесе_су.name, ing.қант.name],
    img: 'images/resource/foods/Гарнир сүт қосылған көкөніс.jpg'
  },
  "Балғын_қырыққабаттан_щи": {
    name: "Балғын қырыққабаттан щи",
    ingredients: [ing.ақ_қауданды_қырыққабат.name, ing.сәбіз.name, ing.ақжелкен.name, ing.пияз.name, ing.қызанақ_пастасы.name, ing.құнарландырылған_бидай_ұны.name, ing.өсімдік_майы.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Балғын қырыққабаттан щи.jpg'
  },
  "Палау": {
    name: "Палау (сиыр еті)",
    ingredients: [ing.сиыр_еті.name, ing.күріш_жармасы.name, ing.өсімдік_майы.name, ing.пияз.name, ing.пияз.name, ing.сәбіз.name, ing.қызанақ_пастасы.name],
    img: 'images/resource/foods/Палау.JPG'
  },
  "Гуляш": {
    name: "Гуляш",
    ingredients: [ing.сиыр_еті.name, ing.өсімдік_майы.name, ing.пияз.name, ing.қызанақ_пастасы.name, ing.құнарландырылған_бидай_ұны.name],
    img: 'images/resource/foods/Гуляш.jpg'
  },
  "Гарнир_арпа_жармасы": {
    name: "Гарнир: арпа жармасы",
    ingredients: [ing.арпа_жармасы.name, ing.сары_май.name, ing.сорпа.name],
    img: 'images/resource/foods/Гарнир  арпа жармасы.jpg'
  },
  "Рагу_сиыр_етінен": {
    name: "Рагу (сиыр етінен)",
    ingredients: [ing.сиыр_еті.name, ing.өсімдік_майы.name, ing.картоп.name, ing.сәбіз.name, ing.пияз.name, ing.құнарландырылған_бидай_ұны.name],
    img: 'images/resource/foods/Рагу.jpg'
  },
  "Сәбіз_бен_алмадан_салат": {
    name: "Сәбіз бен алмадан салат",
    ingredients: [ing.сәбіз.name, ing.балғын_алма.name, ing.қант.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Сәбіз бен алмадан салат.jpg'
  },
  "Голубцы_етпен_және_күрішпен": {
    name: "Голубцы етпен және күрішпен",
    ingredients: [ing.ақ_қауданды_қырыққабат.name, ing["сиыр_еті_(котлетке_арналған_ет)"].name, ing.күріш_жармасы.name, ing.пияз.name, ing.өсімдік_майы.name, ing.тұздық.name, ing.қаймақ.name, ing.құнарландырылған_бидай_ұны.name, ing.сорпа.name],
    img: 'images/resource/foods/Голубцы етпен және күрішпен.JPG'
  },
  "Кептірілген_жемістен_компот": {
    name: "Кептірілген жемістен компот",
    ingredients: [ing["кептірілген_жеміс_(өрік,_мейіз)"].name, ing.қант.name],
    img: 'images/resource/foods/Кептірілген жемістен компот.jpg'
  },
  "Вермишель_салынған_көже": {
    name: "Вермишель салынған көже",
    ingredients: [ing.вермишель.name, ing.сәбіз.name, ing.пияз.name, ing.өсімдік_майы.name, ing.қызанақ_пастасы.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Вермишель салынған көже.jpg'
  },
  "Ет_тефтелиі": {
    name: "Ет тефтелиі",
    ingredients: [ing["ет_(котлетке_арналған_ет)"].name, ing.бидай_наны.name, ing.сүт.name, ing.пияз.name, ing.өсімдік_майы.name, ing.құнарландырылған_бидай_ұны.name, ing.сары_май.name],
    img: 'images/resource/foods/Ет тефтелиі.jpg'
  },
  "Гарнир_бытырап_піскен_қарақұмық": {
    name: "Гарнир: бытырап піскен қарақұмық",
    ingredients: [ing.қарақұмық_жармасы.name, ing.сары_май.name],
    img: 'images/resource/foods/Гарнир: бытырап піскен қарақұмық.jpg'
  },
  "Балғын_көкөніс_салаты": {
    name: "Балғын көкөніс салаты",
    ingredients: [ing.балғын_қызанақ.name, ing.балғын_қияр.name, ing.ақ_қауданды_қырыққабат.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балғын көкөніс салаты.jpeg'
  },
  "С_дәрумені_кисель": {
    name: "С дәрумені кисель",
    ingredients: [ing.концентраттан_кисель.name, ing.қант.name, ing.лимон_қышқылы.name, ing.су.name, ing.С_дәрумен_ұнтағы.name],
    img: 'images/resource/foods/С дәрумені кисель.jpg'
  },
  "Рассольник_тұздықты_көже": {
    name: "Рассольник (тұздықты көже)",
    ingredients: [ing.картоп.name, ing.пияз.name, ing.тұздалған_қияр.name, ing.өсімдік_майы.name, ing.сорпа_немесе_су.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Рассольник.jpg'
  },
  "Турама_зразылар": {
    name: "Турама зразылар",
    ingredients: [ing["сиыр_еті_(котлетке_арналған_ет)"].name, ing.бидай_наны.name, ing.сүт.name, ing.пияз.name, ing.өсімдік_майы.name, ing.жұмыртқа.name, ing.кептірілген_нан.name, ing.ақжелкен],
    img: 'images/resource/foods/Турама зразылар.jpg'
  },
  "Балғын_қызанақтан_салат": {
    name: "Балғын қызанақтан салат",
    ingredients: [ing.балғын_қызанақ.name, ing.көк_жуа.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балғын қызанақтан салат.jpg'
  },
  "Гарнир_Пісірілген_макарон": {
    name: "Гарнир: Пісірілген макарон",
    ingredients: [ing.вермишель.name, ing.сары_май.name],
    img: 'images/resource/foods/Гарнир Пісірілген макарон.jpg'
  },
  "Харчо_көжесі": {
    name: "Харчо көжесі",
    ingredients: [ing.күріш_жармасы.name, ing.пияз.name, ing.сары_май.name, ing.ақжелкен.name, ing.қызанақ_пастасы.name, ing.йодталған_тұз.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Харчо көжесі.jpg'
  },
  "Гарнир_картоп_езбесі": {
    name: "Гарнир: картоп езбесі",
    ingredients: [ing.картоп.name, ing.сүт.name, ing.сары_май.name],
    img: 'images/resource/foods/Гарнир картоп езбесі.jpg'
  },
  "Тәтті_бұрыш_пен_шөптесіннен_салат": {
    name: "Тәтті бұрыш пен шөптесіннен салат",
    ingredients: [ing.тәтті_бұрыш.name, ing.көк_жуа.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Тәтті бұрыш пен шөптесіннен салат.jpg'
  },
  "Банан": {
    name: "Банан",
    ingredients: [ing.банан.name],
    img: 'images/resource/foods/Банан.jpg'
  },
  "Айран": {
    name: "Айран",
    ingredients: [ing.айран.name],
    img: 'images/resource/foods/Айран.jpg'
  },
  "Балғын_қызанақ_пен_қиярдан_салат": {
    name: "Балғын қызанақ пен қиярдан салат",
    ingredients: [ing.балғын_қияр.name, ing.балғын_қызанақ.name, ing.көк_жуа.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Балғын қызанақ пен қиярдан салат.jpg'
  },
  "Көксерке_балғын_тефтелиі": {
    name: "Көксерке балғын тефтелиі",
    ingredients: [ing.көксерке_балығы.name, ing.бидай_наны.name, ing.сүт.name, ing.пияз.name, ing.құнарландырылған_бидай_ұны.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Көксерке балғын тефтелиі.JPG'
  },
  "Алма": {
    name: "Алма",
    ingredients: [ing.алма.name],
    img: 'images/resource/foods/Алма.jpg'
  },
  "Тартылған_ет_пен_күріш_салынған_бұрыш": {
    name: "Тартылған ет пен күріш салынған бұрыш",
    ingredients: [ing.тәтті_бұрыш.name, ing.сиыр_еті.name, ing.күріш_жармасы.name, ing.пияз.name, ing.өсімдік_майы.name, ing.кептірілген_нан.name, ing.қызанақ_тұздығы.name, ing.сорпа.name, ing.құнарландырылған_бидай_ұны.name, ing.сәбіз.name, ing.пияз.name, ing.қызанақ_пастасы.name, ing.қант.name],
    img: 'images/resource/foods/Тартылған ет пен күріш салынған бұрыш.jpeg'
  },
  "Дәруменді_салат": {
    name: "Дәруменді салат",
    ingredients: [ing.балғын_алма.name, ing.балғын_қызанақ.name, ing.балғын_қияр.name, ing.сәбіз.name, ing.лимон_шырын_үшін.name, ing.қант.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Дәруменді салат.jpg'
  },
  "Итмұрын_жемісінен_кисель": {
    name: "Итмұрын жемісінен кисель",
    ingredients: [ing.кептірілген_итмұрын_жемісі.name, ing.қант.name, ing.картоп_крахмалы.name, ing.лимон_қышқылы.name, ing.су.name],
    img: 'images/resource/foods/Итмұрын жемісінен кисель.jpg'
  },
  "Көкөніс_көжесі": {
    name: "Көкөніс көжесі",
    ingredients: [ing.ақ_қауданды_қырыққабат.name, ing.картоп.name, ing.сәбіз.name, ing.пияз.name, ing.көк_бұршақ_консервіленген.name, ing.өсімдік_майы.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Көкөніс көжесі.JPG'
  },
  "Ет_биточкілері": {
    name: "Ет биточкілері",
    ingredients: [ing.сиыр_еті.name, ing.бидай_наны.name, ing.сүт.name, ing.кептірілген_нан.name, ing.өсімдік_майы.name, ing.сары_май.name],
    img: 'images/resource/foods/Ет биточкілері.jpg'
  },
  "Гарнир_бөктірілген_күріш": {
    name: "Гарнир : бөктірілген күріш",
    ingredients: [ing.күріш.name, ing.сары_май.name, ing.сорпа.name],
    img: 'images/resource/foods/Гарнир бөктірілген күріш.jpg'
  },
  "Ақ_қауданды_қырыққабаттан_салат": {
    name: "Ақ қауданды қырыққабаттан салат",
    ingredients: [ing.ақ_қауданды_қырыққабат.name, ing.сәбіз.name, ing.қант.name, ing.өсімдік_майы.name],
    img: 'images/resource/foods/Ақ қауданды қырыққабаттан салат.jpeg'
  },
  "Балғын_жемістен_компот": {
    name: "Балғын жемістен компот",
    ingredients: [ing.алма.name, ing.алмұрт.name, ing.қант.name],
    img: 'images/resource/foods/Балғын жемістен компот.jpg'
  },
  "Сүзбеше": {
    name: "Сүзбеше",
    ingredients: [ing.сүзбеше.name],
    img: 'images/resource/foods/Сүзбеше.jpg'
  },
  "Бұршақ_көжесі": {
    name: "Бұршақ көжесі",
    ingredients: [ing.үрме_бұршақ.name, ing.картоп.name, ing.сәбіз.name, ing.пияз.name, ing.өсімдік_майы.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Бұршақ көжесі.jpg'
  },
  "Қияр_мен_шөптесіннен_салат": {
    name: "Қияр мен шөптесіннен салат",
    ingredients: [ing.салат_жапырағы.name, ing.балғын_қияр.name, ing.өсімдік_майы],
    img: 'images/resource/foods/Қияр мен шөптесіннен салат.jpg'
  },
  "Бөктірілген_көксерке_балығы": {
    name: "Бөктірілген көксерке балығы",
    ingredients: [ing.көксерке_балығы.name, ing.пияз.name, ing.ақжелкен.name, ing.сорпа.name, ing.сары_май.name, ing.құнарландырылған_бидай_ұны.name, ing.пияз.name],
    img: 'images/resource/foods/Бөктірілген көксерке балығы.jpg'
  },
  "Шабдалы_шырыны": {
    name: "Шабдалы шырыны",
    ingredients: [ing.шабдалы_шырыны.name],
    img: 'images/resource/foods/Шабдалы шырыны.jpg'
  },
  "Ара_балы": {
    name: "Ара балы",
    ingredients: [ing.ара_балы.name],
    img: 'images/resource/foods/Ара балы.jpg'
  },
  "Сүт": {
    name: "Cүт",
    ingredients: [ing.сүт.name],
    img: 'images/resource/foods/Cүт.jpeg'
  },
  "Қара_бидай_наны": {
    name: "Қара бидай наны",
    ingredients: [ing.қара_бидай_наны.name],
    img: 'images/resource/foods/Қара бидай наны.jpg'
  },
  "Жарма_салынған_көже": {
    name: "Жарма салынған көже",
    ingredients: [ing.сұлы_жармасы.name, ing.сәбіз.name, ing.пияз.name, ing.өсімдік_майы.name, ing.сорпа.name, ing.сиыр_еті.name],
    img: 'images/resource/foods/Жарма салынған көже.jpg'
  },
  Алмурт: {
    name: "Алмұрт",
    ingredients: [ing.алмұрт.name],
    img: 'images/resource/foods/Алмұрт.jpg'
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/school-meals-foods.js"], null)
//# sourceMappingURL=/school-meals-foods.37f21781.js.map