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
})({"js/school-staff.js":[function(require,module,exports) {
"use strict";

var subjects = {
  английский: 'Ағылшын тілі пәні мұғалімі',
  дш: 'Дене шынықтыру пәні мұғалімі',
  бейімдікғылымизауч: 'Ғылыми бейімділік орынбасары',
  жүйелікәкімші: 'Жүйелік әкімші',
  технология: 'Технология пәні мұғалімі',
  сызу: 'Сызу пәні мұғалімі',
  орыстілі: 'Орыс тілі және әдебиеті пәні мұғалімі',
  зауч: 'Орыбасар',
  Физика: 'Физика пәні мұғалімі',
  қазақтіліменәдебиетіпәнініңмұғалімі: 'Қазақ тілі және әдебиеті пәні мұғалімі',
  завучғылымиістержөніндегі: 'Ғылыми істер жөніндегі орынбасары',
  Окузавучы: 'Оқу орынбасары',
  сыныпмұғалімі: 'Сынып мұғалімі',
  бастауышсыныпмұғалімі: 'Бастауыш сынып мұғалімі',
  тарбиезавучы: 'Тәрбие орынбасары',
  психолог: 'Психолог',
  социолог: 'Социолог',
  құқық: 'Құқық пәні мұғалімі',
  физика: 'Физика пәні мұғалімі',
  мектепалдыдаярлықмугалими: 'Мектеп алды даярлық мұғалімі',
  биология: 'Биология пәні мұғалімі',
  химия: 'Химия пәні мұғалімі',
  алгебражәнегеометрия: 'Алгебра пәні мұғалімі',
  тарих: 'Қазақстан тарихы пәні мұғалімі',
  иодиректора: 'Директордың м.а. ',
  орыстіліжанетература: 'Орыс тілі және әдебиеті мұғалімі',
  кітапханашы: 'Кітапханашы',
  география: 'География',
  информатика: 'Информатика',
  математика: 'Математика пәні мұғалімі',
  аәд: 'АӘД',
  музыка: 'Музыка пәні мұғалімі',
  мад: 'МАД'
};
var personal = [{
  fullname: 'Абаканов Даурен Есимханулы',
  status: 'teacher',
  subj: subjects.английский,
  phoneNumber: 870234565434,
  email: 'daurend@gmail.com'
}, {
  fullname: 'Адамбекова Акерке Сембаевна',
  status: 'teacher',
  subj: subjects.дш,
  phoneNumber: 870788765647,
  email: 'akerke@mail.ru'
}, {
  fullname: 'Алимкулова Арайлым Махмутгазиевна',
  status: 'deputy',
  subj: subjects.бейімдікғылымизауч,
  phoneNumber: 870244858458,
  email: 'araily@gmail.com'
}, {
  fullname: 'Алимкулова Жанерке Кенжегазиевна',
  status: 'teacher',
  subj: subjects.английский,
  phoneNumber: 87018683454,
  email: 'jan_erke@gmail.com'
}, {
  fullname: 'Амангелдиев Қошемет Қайратұлы',
  status: 'deputy',
  subj: subjects.жүйелікәкімші,
  phoneNumber: 87026849435,
  email: 'qoshemet@gmail.com'
}, {
  fullname: 'Амантаев Марат Жолдыбаевич',
  status: 'teacher',
  subj: [subjects.технология, subjects.сызу],
  phoneNumber: 87015469484,
  email: 'marattt@gmail.com'
}, {
  fullname: 'Амирова Анара Жанеркеевна',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87025698443,
  email: 'anaratt@gmail.com'
}, {
  fullname: 'Амирова Разия Хихметовна',
  status: 'teacher',
  subj: subjects.орыстілі,
  phoneNumber: 87015869485,
  email: 'razzy_name@gmail.com'
}, {
  fullname: 'Асылбекова Жанар Мухаммедовна',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87074649849,
  email: 'jannara@gmail@gmail.com'
}, {
  fullname: 'Асылбекова Жанила Абдрашовна',
  status: 'teacher',
  subj: subjects.Физика,
  phoneNumber: 87024586494,
  email: 'jannylla@gmail.com'
}, {
  fullname: 'Ахметжанова Нургуль Зекенкызы',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87014789574,
  email: 'nurflower@mail.ru'
}, {
  fullname: 'Базылова Алтынай Еркиновна',
  status: 'teacher',
  subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
  phoneNumber: 87025669569,
  email: 'goldmoon@gmail.com'
}, {
  fullname: 'Байкенова Молдир Болаткызы',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87014569485,
  email: 'clearryy@gmail.com'
}, {
  fullname: 'Байтанасова Гульвира Медетовна',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87025969495,
  email: 'flow_vira@gmail.com'
}, {
  fullname: 'Бакаев Дат Бактыгалиевич',
  status: 'deputy',
  subj: subjects.завучғылымиістержөніндегі,
  phoneNumber: 87015468949,
  email: 'dottaa123@gmail.com'
}, {
  fullname: 'Бекишева Рауана Онгарбековна',
  status: 'deputy',
  subj: [subjects.зауч, subjects.психолог],
  phoneNumber: 87075674747,
  email: 'rauanna@gmail.com'
}, {
  fullname: 'Бижанова Бахытгуль Кадыкеновна',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87024656454,
  email: 'happyflower@gmail.com'
}, {
  fullname: 'Бокенова Жулдызай Жанатовна',
  status: 'teacher',
  subj: subjects.биология,
  phoneNumber: 87014747483,
  email: 'moonstar@mail.ru'
}, {
  fullname: 'Болтекеева Фариза Шакишевна',
  status: 'teacher',
  subj: subjects.дш,
  phoneNumber: 87075674758,
  email: 'farizok@gmail.com'
}, {
  fullname: 'Бөлкенбаев Ануар Жұмагелдиевич',
  status: 'deputy',
  subj: subjects.тарбиезавучы,
  phoneNumber: 87025645784,
  email: 'anvarrr@gmail.com'
}, {
  fullname: 'Даткина Арайлым Абдрахманкызы',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87012343435,
  email: 'arailymnd@gmail.com'
}, {
  fullname: 'Елубаева Айжан Муканкызы',
  status: 'deputy',
  subj: [subjects.тарбиезавучы, subjects.тарих],
  phoneNumber: 87024584845,
  email: 'moonsoul@gmail.com'
}, {
  fullname: 'Ерикова Мадина Ерикқызы',
  status: 'psycho',
  subj: subjects.психолог,
  phoneNumber: 87024758484,
  email: 'madin@gmail.com'
}, {
  fullname: 'Жақсыбекова Ардақ Кенжеқызы',
  status: 'teacher',
  subj: subjects.бастауышсыныпмұғалімі,
  phoneNumber: 87045848584,
  email: 'areduck@gmail.com'
}, {
  fullname: 'Жанарбек Меруерт Жанарбекқызы',
  status: 'teacher',
  subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
  phoneNumber: 87035867589,
  email: 'meruertta@gmail.com'
}, {
  fullname: 'Жексенбекова Жанар Тлеукаримовна',
  status: 'teacher',
  subj: subjects.алгебражәнегеометрия,
  phoneNumber: 87057454744,
  email: 'janar@gmail.com'
}, {
  fullname: 'Исатаева Алмагуль Сериковна',
  status: 'social',
  subj: subjects.социолог,
  phoneNumber: 87027548584,
  email: 'anappleflower@gmail.com'
}, {
  fullname: 'Калимбетова Толкын Кожабергеновна',
  status: 'teacher',
  subj: [subjects.тарих, subjects.құқық],
  phoneNumber: 87014756457,
  email: 'tolqyn@mail.ru'
}, {
  fullname: 'Кантарбеков Казкен Кабдырович',
  status: 'teacher',
  subj: [subjects.психолог, subjects.бастауышсыныпмұғалімі],
  phoneNumber: 87024354555,
  email: 'qazken@gmail.com'
}, {
  fullname: 'Косыбаева Айжанат Ерболовна',
  status: 'teacher',
  subj: subjects.английский,
  phoneNumber: 87773454556,
  email: 'aijannat@gmail.com'
}, {
  fullname: 'Куанышбекова Панар Мейрамбековна',
  status: 'teacher',
  subj: subjects.Физика,
  phoneNumber: 87776655453,
  email: 'panare@mail.ru'
}, {
  fullname: 'Кузембай Жазира Егинтайкызы',
  status: 'teacher',
  subj: subjects.дш,
  phoneNumber: 87773454543,
  email: 'jazyra@gmail.com'
}, {
  fullname: 'Қосыбаев Құрмет Қайратұлы',
  status: 'teacher',
  subj: subjects.мектепалдыдаярлықмугалими,
  phoneNumber: 87763455633,
  email: 'qurmetti@gmail.com'
}, {
  fullname: 'Малтабарова Айгерім Ерденқызы',
  status: 'teacher',
  subj: subjects.биология,
  phoneNumber: 87764534567,
  email: 'aigera@gmail.com'
}, {
  fullname: 'Мейрманова Бакытгул Байызкызы',
  status: 'teacher',
  subj: [subjects.тарих, subjects.құқық],
  phoneNumber: 87024565744,
  email: 'gulhappiness@gmail.com'
}, {
  fullname: 'Мустафина Гулбагила Ыкыласовна',
  status: 'teacher',
  subj: subjects.химия,
  phoneNumber: 87027574573,
  email: 'bugilla@gmail.com'
}, {
  fullname: 'Мыкышева Жумакуль Карибеккызы',
  status: 'teacher',
  subj: subjects.дш,
  phoneNumber: 87676567475,
  email: 'friflowe@gmail.com'
}, {
  fullname: 'Нокин Еркебулан Берикович',
  status: 'teacher',
  subj: subjects.алгебражәнегеометрия,
  phoneNumber: 87754345654,
  email: 'erkebull_an@gmail.com'
}, {
  fullname: 'Омашева Дарибала Койбагаровна',
  status: 'teacher',
  subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
  phoneNumber: 87755065054,
  email: 'acidboy'
}, {
  fullname: 'Рашитова Жанна Елеуовна',
  status: 'teacher',
  subj: subjects.тарих,
  phoneNumber: 87765433456,
  email: 'jannnaaa@mail.ru'
}, {
  fullname: 'Сагындыкова Айгерим Жангазыевна',
  status: 'teacher',
  subj: subjects.қазақтіліменәдебиетіпәнініңмұғалімі,
  phoneNumber: 87713456785,
  email: 'yougerim@gmail.com'
}, {
  fullname: 'Сағындықова Гульмира Аманқұлқызы',
  status: 'deputy',
  subj: subjects.иодиректора,
  phoneNumber: 87071235432,
  email: 'worldflower@gmail.com'
}, {
  fullname: 'Садибекова Алтын Медетбековна',
  status: 'teacher',
  subj: subjects.орыстіліжанетература,
  phoneNumber: 87773457869,
  email: 'goldy@mail.ru'
}, {
  fullname: 'Садуакас Қаламқас Жұмағалииқызы',
  status: 'teacher',
  subj: subjects.кітапханашы,
  phoneNumber: 87774534563,
  email: 'applepen@gmail.com'
}, {
  fullname: 'Серікбаева Арайлым Серікбайқызы',
  status: 'teacher',
  subj: subjects.география,
  phoneNumber: 87785674556,
  email: 'arailym26@gmail.com'
}, {
  fullname: 'Сулейменова Айнагуль Закариевна',
  status: 'teacher',
  subj: subjects.информатика,
  phoneNumber: 87024563445,
  email: 'flowerwind@gmail.com'
}, {
  fullname: 'Сыздыкова Сайранкуль Салимовна',
  status: 'teacher',
  subj: [subjects.информатика, subjects.математика],
  phoneNumber: 87026785677,
  email: 'sairanflow@gmail.com'
}, {
  fullname: 'Темирбеков Нурбек Жамантаевич',
  status: 'teacher',
  subj: [subjects.технология, subjects.сызу],
  phoneNumber: 87023456754,
  email: 'nurrbekqql@gmail.com'
}, {
  fullname: 'Тлеуберлина Гулсим Токушовна',
  status: 'teacher',
  subj: subjects.технология,
  phoneNumber: 87019087686,
  email: 'esim@gmail.com'
}, {
  fullname: 'Тоимбекова Айнагуль Казкеновна',
  status: 'teacher',
  subj: subjects.информатика,
  phoneNumber: 87074563242,
  email: 'wolflowrr@gmail.com'
}, {
  fullname: 'Тойынбеков Жанат Алгазинович',
  status: 'teacher',
  subj: subjects.аәд,
  phoneNumber: 87713454323,
  email: 'soulname@gmail.com'
}, {
  fullname: 'Толепбергенов Канат Туякбаевич',
  status: 'teacher',
  subj: subjects.музыка,
  phoneNumber: 87754566878,
  email: 'bloodname@gmail.com'
}, {
  fullname: 'Толеукенова Баян Самбетовна',
  status: 'teacher',
  subj: subjects.мад,
  phoneNumber: 877534235676,
  email: 'pianoo@gmail.com'
}, {
  fullname: 'Шайзадаев Данияр Тойкожаевич',
  status: 'teacher',
  subj: subjects.дш,
  phoneNumber: 807233443456,
  email: 'danny@gmail.com'
}];
var allTeachers = [],
    allDeputes = [];

function sorting(thisEmployee, sortingItem) {
  personal.forEach(function (item) {
    if (item.status == sortingItem) {
      thisEmployee.push(item);
    }
  });
}

sorting(allTeachers, 'teacher');
sorting(allDeputes, 'deputy');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/school-staff.js"], null)
//# sourceMappingURL=/school-staff.7281116b.js.map