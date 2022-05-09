// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7mgxS":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _deviceDetectorJs = require("device-detector-js");
var _deviceDetectorJsDefault = parcelHelpers.interopDefault(_deviceDetectorJs);
var _controlUtils = require("@mediapipe/control_utils");
var _controlUtilsDefault = parcelHelpers.interopDefault(_controlUtils);
var _drawingUtils = require("@mediapipe/drawing_utils");
var _drawingUtilsDefault = parcelHelpers.interopDefault(_drawingUtils);
var _faceMesh = require("@mediapipe/face_mesh");
var _faceMeshDefault = parcelHelpers.interopDefault(_faceMesh);
// const controls = window;
// const drawingUtils = window;
// const mpFaceMesh = window;
// Usage: testSupport({client?: string, os?: string}[])
// Client and os are regular expressions.
// See: https://cdn.jsdelivr.net/npm/device-detector-js@2.2.10/README.md for
// legal values for client and os
// testSupport([
//   {client: 'Chrome'},
// ]);
function testSupport(supportedDevices) {
    const deviceDetector = new _deviceDetectorJsDefault.default();
    const detectedDevice = deviceDetector.parse(navigator.userAgent);
    let isSupported = false;
    for (const device of supportedDevices){
        if (detectedDevice.client && device.client !== undefined) {
            const re = new RegExp(`^${device.client}$`);
            if (!re.test(detectedDevice.client.name)) continue;
        }
        if (detectedDevice.os && device.os !== undefined) {
            const re = new RegExp(`^${device.os}$`);
            if (!re.test(detectedDevice.os.name)) continue;
        }
        isSupported = true;
        break;
    }
    if (!isSupported) alert(`This demo, running on ${detectedDevice.client?.name}/${detectedDevice.os?.name}, ` + `is not well supported at this time, continue at your own risk.`);
}
const config = {
    locateFile: (file)=>{
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@` + `${_faceMeshDefault.default.VERSION}/${file}`;
    }
};
// Our input frames will come from here.
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const controlsElement = document.getElementsByClassName('control-panel')[0];
const canvasCtx = canvasElement.getContext('2d');
/**
 * Solution options.
 */ const solutionOptions = {
    selfieMode: false,
    enableFaceGeometry: false,
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
};
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new _controlUtilsDefault.default.FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector('.loading');
spinner.ontransitionend = ()=>{
    spinner.style.display = 'none';
};
function onResults(results) {
    analysisData(results);
    // Hide the spinner.
    document.body.classList.add('loaded');
    // Update the frame rate.
    fpsControl.tick();
    // Draw the overlays.
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiFaceLandmarks) for (const landmarks of results.multiFaceLandmarks){
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_TESSELATION, {
            color: '#C0C0C070',
            lineWidth: 1
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_RIGHT_EYE, {
            color: '#FF3030'
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_RIGHT_EYEBROW, {
            color: '#FF3030'
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_LEFT_EYE, {
            color: '#30FF30'
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_LEFT_EYEBROW, {
            color: '#30FF30'
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_FACE_OVAL, {
            color: '#E0E0E0'
        });
        _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_LIPS, {
            color: '#E0E0E0'
        });
        if (solutionOptions.refineLandmarks) {
            _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_RIGHT_IRIS, {
                color: '#FF3030'
            });
            _drawingUtilsDefault.default.drawConnectors(canvasCtx, landmarks, _faceMeshDefault.default.FACEMESH_LEFT_IRIS, {
                color: '#30FF30'
            });
        }
    }
    canvasCtx.restore();
}
const faceMesh = new _faceMeshDefault.default.FaceMesh(config);
faceMesh.setOptions(solutionOptions);
faceMesh.onResults(onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new _controlUtilsDefault.default.ControlPanel(controlsElement, solutionOptions).add([
    //new controls.StaticText({title: 'MediaPipe Face Mesh'}),
    fpsControl,
    //new controls.Toggle({title: 'Selfie Mode', field: 'selfieMode'}),
    new _controlUtilsDefault.default.SourcePicker({
        onFrame: (input, size)=>{
            const aspect = size.height / size.width;
            let width, height;
            if (window.innerWidth > window.innerHeight) {
                height = window.innerHeight;
                width = height / aspect;
            } else {
                width = window.innerWidth;
                height = width * aspect;
            }
            canvasElement.width = width;
            canvasElement.height = height;
            return faceMesh.send({
                image: input
            });
        }
    })
]).on((x)=>{
    const options = x;
    console.log(options);
    videoElement.classList.toggle('selfie', options.selfieMode);
    faceMesh.setOptions(options);
});
// https://pythonrepo.com/repo/k-m-irfan-simplified_mediapipe_face_landmarks
var lasttime = 0;
const infoElement = document.getElementById('w3review');
function analysisData(results) {
    let now = new Date().getTime();
    if (lasttime > now) return;
    lasttime = now + 500;
    let landmarks = results.multiFaceLandmarks[0];
    if (!landmarks) return;
    let text = "";
    text += "\nleftEye = " + sPointLen(landmarks[159], landmarks[145]);
    text += "\nrightEye = " + sPointLen(landmarks[386], landmarks[374]);
    text += "\nnose = " + sPoint(landmarks[4]);
    infoElement.value = text;
// 159, 145
}
function sPointLen(a, b) {
    const len = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2));
    return len.toFixed(4);
}
function sPoint(a) {
    return `x:${a.x.toFixed(4)}, y:${a.y.toFixed(4)}, z:${a.z.toFixed(4)}`;
}

},{"@mediapipe/control_utils":"js3sp","@mediapipe/drawing_utils":"eGpaQ","@mediapipe/face_mesh":"4Binw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","device-detector-js":"7LGnM"}],"js3sp":[function(require,module,exports) {
var global = arguments[3];
(function() {
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        };
    }
    var p = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
    };
    function ba(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var b = 0; b < a.length; ++b){
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var r = ba(this);
    function t(a, b) {
        if (b) a: {
            var c = r;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var f = a[d];
                if (!(f in c)) break a;
                c = c[f];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && p(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    t("Symbol", function(a) {
        function b(g) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + f++, g);
        }
        function c(g, e) {
            this.g = g;
            p(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            });
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g;
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", f = 0;
        return b;
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for(var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++){
            var d = r[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && p(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ca(aa(this));
                }
            });
        }
        return a;
    });
    function ca(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this;
        };
        return a;
    }
    function v(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        };
    }
    function w(a) {
        if (!(a instanceof Array)) {
            a = v(a);
            for(var b, c = []; !(b = a.next()).done;)c.push(b.value);
            a = c;
        }
        return a;
    }
    var da = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b;
    }, x;
    if ("function" == typeof Object.setPrototypeOf) x = Object.setPrototypeOf;
    else {
        var y;
        a: {
            var ea = {
                a: !0
            }, fa = {};
            try {
                fa.__proto__ = ea;
                y = fa.a;
                break a;
            } catch (a) {}
            y = !1;
        }
        x = y ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
        } : null;
    }
    var z = x;
    function B() {
        this.j = !1;
        this.h = null;
        this.l = void 0;
        this.g = 1;
        this.o = 0;
        this.i = null;
    }
    function C(a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0;
    }
    B.prototype.m = function(a) {
        this.l = a;
    };
    function D(a, b) {
        a.i = {
            L: b,
            M: !0
        };
        a.g = a.o;
    }
    B.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.o;
    };
    function F(a, b, c) {
        a.g = c;
        return {
            value: b
        };
    }
    function ha(a) {
        this.g = new B;
        this.h = a;
    }
    function ia(a, b) {
        C(a.g);
        var c = a.g.h;
        if (c) return G(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            };
        }, b, a.g.return);
        a.g.return(b);
        return H(a);
    }
    function G(a, b, c, d) {
        try {
            var f = b.call(a.g.h, c);
            if (!(f instanceof Object)) throw new TypeError("Iterator result " + f + " is not an object");
            if (!f.done) return a.g.j = !1, f;
            var g = f.value;
        } catch (e) {
            return a.g.h = null, D(a.g, e), H(a);
        }
        a.g.h = null;
        d.call(a.g, g);
        return H(a);
    }
    function H(a) {
        for(; a.g.g;)try {
            var b = a.h(a.g);
            if (b) return a.g.j = !1, {
                value: b.value,
                done: !1
            };
        } catch (c) {
            a.g.l = void 0, D(a.g, c);
        }
        a.g.j = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.M) throw b.L;
            return {
                value: b.return,
                done: !0
            };
        }
        return {
            value: void 0,
            done: !0
        };
    }
    function ja(a) {
        this.next = function(b) {
            C(a.g);
            a.g.h ? b = G(a, a.g.h.next, b, a.g.m) : (a.g.m(b), b = H(a));
            return b;
        };
        this.throw = function(b) {
            C(a.g);
            a.g.h ? b = G(a, a.g.h["throw"], b, a.g.m) : (D(a.g, b), b = H(a));
            return b;
        };
        this.return = function(b) {
            return ia(a, b);
        };
        this[Symbol.iterator] = function() {
            return this;
        };
    }
    function I(a, b) {
        b = new ja(new ha(b));
        z && a.prototype && z(b, a.prototype);
        return b;
    }
    var ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for(var c = 1; c < arguments.length; c++){
            var d = arguments[c];
            if (d) for(var f in d)Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
        }
        return a;
    };
    t("Object.assign", function(a) {
        return a || ka;
    });
    t("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = !1;
            var h = this.j();
            try {
                e(h.resolve, h.reject);
            } catch (k) {
                h.reject(k);
            }
        }
        function c() {
            this.g = null;
        }
        function d(e) {
            return e instanceof b ? e : new b(function(h) {
                h(e);
            });
        }
        if (a) return a;
        c.prototype.h = function(e) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l();
                });
            }
            this.g.push(e);
        };
        var f = r.setTimeout;
        c.prototype.i = function(e) {
            f(e, 0);
        };
        c.prototype.l = function() {
            for(; this.g && this.g.length;){
                var e = this.g;
                this.g = [];
                for(var h = 0; h < e.length; ++h){
                    var k = e[h];
                    e[h] = null;
                    try {
                        k();
                    } catch (l) {
                        this.j(l);
                    }
                }
            }
            this.g = null;
        };
        c.prototype.j = function(e) {
            this.i(function() {
                throw e;
            });
        };
        b.prototype.j = function() {
            function e(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n));
                };
            }
            var h = this, k = !1;
            return {
                resolve: e(this.G),
                reject: e(this.l)
            };
        };
        b.prototype.G = function(e) {
            if (e === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.I(e);
            else {
                a: switch(typeof e){
                    case "object":
                        var h = null != e;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1;
                }
                h ? this.F(e) : this.m(e);
            }
        };
        b.prototype.F = function(e) {
            var h = void 0;
            try {
                h = e.then;
            } catch (k) {
                this.l(k);
                return;
            }
            "function" == typeof h ? this.J(h, e) : this.m(e);
        };
        b.prototype.l = function(e) {
            this.u(2, e);
        };
        b.prototype.m = function(e) {
            this.u(1, e);
        };
        b.prototype.u = function(e, h) {
            if (0 != this.h) throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.h);
            this.h = e;
            this.i = h;
            2 === this.h && this.H();
            this.A();
        };
        b.prototype.H = function() {
            var e = this;
            f(function() {
                if (e.D()) {
                    var h = r.console;
                    "undefined" !== typeof h && h.error(e.i);
                }
            }, 1);
        };
        b.prototype.D = function() {
            if (this.o) return !1;
            var e = r.CustomEvent, h = r.Event, k = r.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof e ? e = new e("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? e = new h("unhandledrejection", {
                cancelable: !0
            }) : (e = r.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
            e.promise = this;
            e.reason = this.i;
            return k(e);
        };
        b.prototype.A = function() {
            if (null != this.g) {
                for(var e = 0; e < this.g.length; ++e)g.h(this.g[e]);
                this.g = null;
            }
        };
        var g = new c;
        b.prototype.I = function(e) {
            var h = this.j();
            e.v(h.resolve, h.reject);
        };
        b.prototype.J = function(e, h) {
            var k = this.j();
            try {
                e.call(h, k.resolve, k.reject);
            } catch (l) {
                k.reject(l);
            }
        };
        b.prototype.then = function(e, h) {
            function k(m, q) {
                return "function" == typeof m ? function(E) {
                    try {
                        l(m(E));
                    } catch (A) {
                        n(A);
                    }
                } : q;
            }
            var l, n, u = new b(function(m, q) {
                l = m;
                n = q;
            });
            this.v(k(e, l), k(h, n));
            return u;
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e);
        };
        b.prototype.v = function(e, h) {
            function k() {
                switch(l.h){
                    case 1:
                        e(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.g ? g.h(k) : this.g.push(k);
            this.o = !0;
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(h, k) {
                k(e);
            });
        };
        b.race = function(e) {
            return new b(function(h, k) {
                for(var l = v(e), n = l.next(); !n.done; n = l.next())d(n.value).v(h, k);
            });
        };
        b.all = function(e) {
            var h = v(e), k = h.next();
            return k.done ? d([]) : new b(function(l, n) {
                function u(E) {
                    return function(A) {
                        m[E] = A;
                        q--;
                        0 == q && l(m);
                    };
                }
                var m = [], q = 0;
                do m.push(void 0), q++, d(k.value).v(u(m.length - 1), n), k = h.next();
                while (!k.done)
            });
        };
        return b;
    });
    t("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h;
            };
            var f = [], g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof g) {
                b = g.call(b);
                for(var e = 0; !(g = b.next()).done;)f.push(c.call(d, g.value, e++));
            } else for(g = b.length, e = 0; e < g; e++)f.push(c.call(d, b[e], e));
            return f;
        };
    });
    t("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var f = this.length || 0;
            0 > c && (c = Math.max(0, f + c));
            if (null == d || d > f) d = f;
            d = Number(d);
            0 > d && (d = Math.max(0, f + d));
            for(c = Number(c || 0); c < d; c++)this[c] = b;
            return this;
        };
    });
    function J(a) {
        return a ? a : Array.prototype.fill;
    }
    t("Int8Array.prototype.fill", J);
    t("Uint8Array.prototype.fill", J);
    t("Uint8ClampedArray.prototype.fill", J);
    t("Int16Array.prototype.fill", J);
    t("Uint16Array.prototype.fill", J);
    t("Int32Array.prototype.fill", J);
    t("Uint32Array.prototype.fill", J);
    t("Float32Array.prototype.fill", J);
    t("Float64Array.prototype.fill", J);
    function la(a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, f = {
            next: function() {
                if (!d && c < a.length) {
                    var g = c++;
                    return {
                        value: b(g, a[g]),
                        done: !1
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                };
            }
        };
        f[Symbol.iterator] = function() {
            return f;
        };
        return f;
    }
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return la(this, function(b) {
                return b;
            });
        };
    });
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for(d in b)Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c;
        };
    });
    var ma = this || self;
    function K(a, b) {
        a = a.split(".");
        var c = ma;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for(var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    }
    function L(a, b) {
        var c = void 0;
        return new (c || (c = Promise))(function(d, f) {
            function g(k) {
                try {
                    h(b.next(k));
                } catch (l) {
                    f(l);
                }
            }
            function e(k) {
                try {
                    h(b["throw"](k));
                } catch (l) {
                    f(l);
                }
            }
            function h(k) {
                k.done ? d(k.value) : new c(function(l) {
                    l(k.value);
                }).then(g, e);
            }
            h((b = b.apply(a, void 0)).next());
        });
    }
    var na = {};
    function M(a, b) {
        if (b !== na) throw Error("Bad secret");
        this.g = a;
    }
    function N() {}
    M.prototype = da(N.prototype);
    M.prototype.constructor = M;
    if (z) z(M, N);
    else for(var O in N)if ("prototype" != O) {
        if (Object.defineProperties) {
            var oa = Object.getOwnPropertyDescriptor(N, O);
            oa && Object.defineProperty(M, O, oa);
        } else M[O] = N[O];
    }
    M.prototype.toString = function() {
        return this.g;
    };
    function P(a, b, c) {
        a = document.createElement(a);
        b && a.classList.add(b);
        if (c) for(b = v(c), c = b.next(); !c.done; c = b.next())a.appendChild(c.value);
        return a;
    }
    function Q(a, b) {
        return P("div", a, b);
    }
    function R(a, b) {
        return P("span", a, b);
    }
    function S(a) {
        var b = P("img", "", void 0);
        b.src = a || "";
        return b;
    }
    function pa(a, b) {
        var c = this;
        this.g = a;
        this.i = {};
        var d, f = Q("dropdown-wrapper", [
            d = Q("dropdown", [
                Q("dropdown-trigger", [
                    this.h = R(),
                    Q("arrow")
                ]),
                this.options = Q("dropdown-options")
            ])
        ]);
        f.onclick = function() {
            a.C && a.C();
            d.classList.toggle("open");
            d.g = function() {
                a.B && a.B();
            };
        };
        for(var g = {}, e = v(a.options), h = e.next(); !h.done; g = {
            s: g.s
        }, h = e.next())g.s = h.value, h = void 0, this.options.appendChild(h = R("dropdown-option")), this.i[g.s.value] = h, h.textContent = g.s.name, g.s.prefix && h.prepend(g.s.prefix), h.setAttribute("data-value", g.s.value), h.onclick = function(k) {
            return function() {
                T(c, k.s.value);
            };
        }(g);
        window.addEventListener("click", function(k) {
            d.contains(k.target) || d.classList.remove("open");
        });
        b.appendChild(f);
    }
    function T(a, b) {
        for(var c = v(a.g.options), d = c.next(); !d.done; d = c.next()){
            d = d.value;
            var f = a.i[d.value];
            if (d.value === b && !f.classList.contains("selected")) return (b = a.options.querySelector(".selected")) && b.classList.remove("selected"), f.classList.add("selected"), a.h.textContent = f.textContent, a.g.onclick(d), !0;
        }
        return !1;
    }
    function qa(a, b) {
        var c = a.options.querySelector(".selected");
        c && (c.classList.remove("selected"), a.h.textContent = void 0 === b ? "" : b);
    }
    function U(a) {
        this.g = a;
    }
    U.prototype.create = function(a, b, c) {
        var d = this, f = c.appendChild(document.createElement("div"));
        f.classList.add("control-panel-entry");
        f.classList.add("control-panel-slider");
        c = f.appendChild(document.createElement("span"));
        c.classList.add("label");
        c.textContent = this.g.title;
        c = new pa({
            options: this.g.options.map(function(g) {
                return Object.assign(Object.assign({}, g), {
                    data: null
                });
            }),
            C: function() {
                f.style.zIndex = "1000";
            },
            onclick: function(g) {
                b[d.g.field] = g.value;
                a();
                if (d.g.onselectionchanged) d.g.onselectionchanged(g);
            },
            B: function() {
                f.style.zIndex = "100";
            }
        }, f);
        0 < this.g.options.length && T(c, this.g.options[0].value);
    };
    U.prototype.update = function() {};
    function V() {
        this.i = this.counter = 0;
        this.g = Array.from({
            length: 10
        }).fill(0);
    }
    V.prototype.create = function(a, b, c) {
        b = c.appendChild(document.createElement("div"));
        b.classList.add("control-panel-entry");
        b.classList.add("control-panel-fps");
        a = b.appendChild(document.createElement("canvas"));
        this.h = b.appendChild(document.createElement("div"));
        this.h.classList.add("fps-text");
        c = b.appendChild(document.createElement("div"));
        c.classList.add("fps-30");
        c.textContent = "30";
        b = b.appendChild(document.createElement("div"));
        b.classList.add("fps-60");
        b.textContent = "60";
        a.width = 100;
        a.height = 100;
        this.j = a.getContext("2d");
        ra(this, 0);
    };
    V.prototype.update = function() {};
    V.prototype.tick = function() {
        var a = Math.floor(performance.now() / 1E3);
        1 <= a - this.i && (ra(this, this.counter), this.i = a, this.counter = 0);
        ++this.counter;
    };
    function ra(a, b) {
        a.g.shift();
        a.g.push(b);
        var c = a.j;
        c.fillStyle = "green";
        c.clearRect(0, 0, c.canvas.width, c.canvas.height);
        for(var d = 0; 10 > d; ++d){
            var f = Math.min(100, Math.max(0, a.g[d]));
            c.fillRect(10 * d + 1, 100 - f + 1, 8, f);
        }
        c.setLineDash([
            2,
            2
        ]);
        c.strokeStyle = "#a0a0a0a0";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(0, 30);
        c.lineTo(100, 30);
        c.stroke();
        c.beginPath();
        c.moveTo(0, 60);
        c.lineTo(100, 60);
        c.stroke();
        a.h.textContent = b.toFixed(0) + " fps";
    }
    function W(a) {
        this.g = a;
    }
    W.prototype.create = function(a, b, c) {
        var d = this;
        this.options = b;
        b = this.g;
        c = c.appendChild(document.createElement("div"));
        c.classList.add("control-panel-entry");
        c.classList.add("control-panel-slider");
        var f = c.appendChild(document.createElement("span"));
        f.classList.add("label");
        (this.h = c.appendChild(document.createElement("span"))).classList.add("callout");
        var g = this.i = c.appendChild(document.createElement("input"));
        g.classList.add("value");
        g.type = "range";
        b.range ? (g.min = "" + b.range[0], g.max = "" + b.range[1], g.step = void 0 === b.step ? "any" : "" + b.step) : b.discrete && (g.min = "0", g.max = "" + (Object.keys(b.discrete).length - 1), g.step = "1");
        g.oninput = function() {
            sa(d, Number(g.value));
        };
        g.onchange = function() {
            var e = Number(g.value);
            d.g.discrete && (e = Object.keys(d.g.discrete)[e], Array.isArray(d.g.discrete) && (e = Number(e)));
            d.options[d.g.field] = e;
            a();
        };
        f.textContent = b.title;
    };
    W.prototype.update = function() {
        var a = this.options[this.g.field];
        a = this.g.discrete && !Array.isArray(this.g.discrete) ? Object.keys(this.g.discrete).indexOf(a) : a;
        this.i.value = "" + a;
        sa(this, a);
    };
    function sa(a, b) {
        b = a.g.discrete ? Object.values(a.g.discrete)[b] : b;
        a.h.textContent = "" + b;
    }
    var ta = {
        facingMode: "user",
        width: 640,
        height: 480
    }, ua = {
        allowVideo: !0,
        allowImage: !0,
        examples: {
            videos: [],
            images: []
        }
    };
    function X(a) {
        return "https://fonts.gstatic.com/s/i/googlematerialicons/" + a + "/v8/white-24dp/1x/gm_" + a + "_white_24dp.png";
    }
    function Y(a) {
        this.l = [];
        this.A = 0;
        this.j = !1;
        this.g = Object.assign(Object.assign({}, ua), a);
        this.g.cameraOptions = Object.assign(Object.assign({}, this.g.cameraOptions || {}), ta);
    }
    function va(a) {
        return L(a, function c() {
            var d, f, g, e, h;
            return I(c, function(k) {
                if (1 == k.g) return F(k, navigator.mediaDevices.getUserMedia({
                    video: !0
                }), 2);
                if (3 != k.g) return F(k, navigator.mediaDevices.enumerateDevices(), 3);
                d = k.l;
                f = [];
                g = v(d);
                for(e = g.next(); !e.done; e = g.next())h = e.value, "" !== h.label && "videoinput" === h.kind && f.push({
                    label: h.label,
                    deviceId: h.deviceId
                });
                return k.return(f);
            });
        });
    }
    function Z(a) {
        window.requestAnimationFrame(function() {
            a.tick();
        });
    }
    Y.prototype.tick = function() {
        var a = this, b = null;
        this.j && (this.video.paused || this.video.currentTime === this.A || (this.m || (wa(this, this.video.currentTime / this.video.duration), this.i.time.textContent = xa(this.video.currentTime)), this.A = this.video.currentTime, b = this.g.onFrame ? this.g.onFrame(this.video, {
            width: this.video.videoWidth,
            height: this.video.videoHeight
        }) : null), b ? b.then(function() {
            Z(a);
        }) : Z(this));
    };
    function ya(a, b) {
        a.video.srcObject = b;
        a.video.onloadedmetadata = function() {
            a.video.play();
            a.j = !0;
            Z(a);
        };
    }
    function za(a) {
        return L(a, function c() {
            var d = this, f, g, e, h;
            return I(c, function(k) {
                d.i.parent.style.display = "none";
                d.j = !1;
                if (d.m) {
                    f = d.m.getTracks();
                    g = v(f);
                    for(e = g.next(); !e.done; e = g.next())h = e.value, h.stop();
                    d.m = void 0;
                }
                k.g = 0;
            });
        });
    }
    function Aa(a) {
        return L(a, function c() {
            var d = this, f, g, e, h;
            return I(c, function(k) {
                if (1 == k.g) return f = d, F(k, va(d), 2);
                g = k.l.map(function(l) {
                    return {
                        label: l.label,
                        type: "webcam",
                        N: l,
                        start: function() {
                            return Ba(f, l);
                        }
                    };
                });
                e = d.g.examples.videos.map(function(l) {
                    return {
                        label: l.name,
                        type: "video",
                        video: f.video,
                        start: function() {
                            Ca(f, l.src);
                        }
                    };
                });
                h = d.g.examples.images.map(function(l) {
                    return {
                        label: l.name,
                        type: "image",
                        image: f.h,
                        start: function() {
                            Da(f, l.src);
                        }
                    };
                });
                return k.return([].concat(w(g), w(e), w(h)));
            });
        });
    }
    function Ea(a, b) {
        return L(a, function d() {
            var f = this;
            return I(d, function(g) {
                1 == g.g ? g = F(g, za(f), 2) : 3 != g.g ? f.g.onSourceChanged ? g = F(g, f.g.onSourceChanged(b.label, b.type), 3) : (g.g = 3, g = void 0) : g = F(g, b.start(), 0);
                return g;
            });
        });
    }
    function Fa(a, b) {
        return L(a, function d() {
            var f = this;
            return I(d, function(g) {
                f.g && f.g.onFrame ? g = F(g, f.g.onFrame(b, {
                    width: b.naturalWidth,
                    height: b.naturalHeight
                }), 0) : (g.g = 0, g = void 0);
                return g;
            });
        });
    }
    function Ga(a) {
        return L(a, function c() {
            var d = this;
            return I(c, function(f) {
                if (1 == f.g) {
                    if (!d.g || !d.g.onFrame) {
                        f.g = 0;
                        return;
                    }
                    d.i.parent.style.display = "flex";
                    wa(d, 0);
                    return F(f, d.video.play(), 3);
                }
                d.D();
                d.j = !0;
                Z(d);
                f.g = 0;
            });
        });
    }
    function Ba(a, b) {
        return L(a, function d() {
            var f = this, g, e;
            return I(d, function(h) {
                g = f;
                e = Object.assign({
                    video: {
                        deviceId: b.deviceId
                    }
                }, f.g.cameraOptions ? {
                    facingMode: f.g.cameraOptions.facingMode,
                    width: f.g.cameraOptions.width,
                    height: f.g.cameraOptions.height
                } : {});
                return h.return(navigator.mediaDevices.getUserMedia(e).then(function(k) {
                    g.m = k;
                    ya(g, k);
                }).catch(function(k) {
                    console.error("Failed to acquire camera feed: " + k);
                    alert("Failed to acquire camera feed: " + k);
                    throw k;
                }));
            });
        });
    }
    function Ha(a, b) {
        a.o = new pa({
            options: a.l.map(function(c) {
                var d = void 0;
                "image" === c.type ? d = S("https://fonts.gstatic.com/s/i/googlematerialicons/image/v12/gm_grey-24dp/1x/gm_image_gm_grey_24dp.png") : "video" === c.type && (d = S("https://fonts.gstatic.com/s/i/googlematerialicons/videocam/v12/gm_grey-24dp/1x/gm_videocam_gm_grey_24dp.png"));
                return {
                    name: c.label,
                    value: c.label,
                    data: c,
                    prefix: d
                };
            }),
            onclick: function(c) {
                a.i.parent.style.display = "none";
                c.data.start();
            },
            C: function() {
                a.u.style.zIndex = "2000";
            },
            B: function() {
                a.u.style.zIndex = "100";
            }
        }, b);
    }
    function Ia(a, b) {
        var c = b.appendChild(document.createElement("input"));
        c.type = "file";
        c.style.display = "none";
        b.appendChild(R("file-selection", [
            b = Q("", [
                S(X("file_upload"))
            ])
        ]));
        b.onclick = function() {
            c.click();
        };
        c.onchange = function() {
            return L(a, function f() {
                var g, e, h, k, l = this;
                return I(f, function(n) {
                    if ((g = c.files) && 0 < g.length) {
                        e = g[0].type.toLowerCase();
                        h = e.substring(0, e.indexOf("/"));
                        var u = g[0];
                        var m = u.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
                        if (2 !== (null === m || void 0 === m ? void 0 : m.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(m[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(m[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(m[1]))) throw Error("unsafe blob MIME type: " + u.type);
                        if (URL && URL.createObjectURL) u = new M(URL.createObjectURL(u), na);
                        else throw Error("cannot find createObjectURL");
                        k = u.toString();
                        "image" === h ? (qa(l.o, g[0].name), Da(l, k)) : "video" === h && Ca(l, k);
                    }
                    n.g = 0;
                });
            });
        };
    }
    function Da(a, b) {
        a.h.onload = function() {
            return L(a, function d() {
                var f = this, g;
                return I(d, function(e) {
                    g = f;
                    f.g.onFrame ? e = F(e, Ea(f, {
                        label: "file",
                        type: "image",
                        image: f.h,
                        start: function() {
                            return L(g, function k() {
                                var l = this;
                                return I(k, function(n) {
                                    return F(n, Fa(l, l.h), 0);
                                });
                            });
                        }
                    }), 0) : (e.g = 0, e = void 0);
                    return e;
                });
            });
        };
        a.h.src = b;
    }
    function Ca(a, b) {
        a.video.onloadedmetadata = function() {
            return L(a, function d() {
                var f = this, g;
                return I(d, function(e) {
                    g = f;
                    f.video.loop = !0;
                    f.g.onFrame ? e = F(e, Ea(f, {
                        label: "file",
                        type: "video",
                        video: f.video,
                        start: function() {
                            return Ga(g);
                        }
                    }), 0) : (e.g = 0, e = void 0);
                    return e;
                });
            });
        };
        a.video.srcObject = null;
        a.video.src = b;
    }
    Y.prototype.create = function(a, b, c) {
        var d = this, f = this.u = c.appendChild(document.createElement("div"));
        f.classList.add("control-panel-entry");
        f.classList.add("control-panel-source-picker");
        var g = Q("source-selection");
        f.append(g);
        Aa(this).then(function(e) {
            d.l = e;
            Ha(d, g);
            Ia(d, g);
            e = g.appendChild(document.createElement("div"));
            e.classList.add("inputs");
            d.video = e.appendChild(document.createElement("video"));
            d.video.setAttribute("crossorigin", "anonymous");
            d.video.setAttribute("playsinline", "true");
            d.h = e.appendChild(document.createElement("img"));
            d.h.setAttribute("crossorigin", "anonymous");
            Ja(d, f);
            0 < d.l.length && (e = d.l[0], T(d.o, e.label) || qa(d.o), e.start());
        });
    };
    function Ja(a, b) {
        var c = X("pause"), d = X("play_arrow"), f, g, e, h;
        b.append(e = Q("video-controls", [
            h = S(c),
            g = Q("video-track"),
            f = Q("video-slider-ball"),
            b = R("video-time")
        ]));
        a.i = {
            parent: e,
            K: f,
            track: g,
            time: b
        };
        b.textContent = "00:00";
        f.style.display = "inline-block";
        f.onmousedown = function(k) {
            function l() {
                k.preventDefault();
                document.removeEventListener("mousemove", n);
                u || a.video.play();
                document.removeEventListener("mouseup", l);
            }
            function n(m) {
                k.preventDefault();
                var q = e.getBoundingClientRect(), E = f.getBoundingClientRect(), A = g.getBoundingClientRect();
                m = m.clientX - q.left - E.width / 2;
                q = A.left - q.left;
                m < q ? m = q : m > q + A.width && (m = q + A.width);
                f.style.left = m + "px";
                a.video.currentTime = (m - q) / A.width * a.video.duration;
            }
            k.preventDefault();
            var u = a.video.paused;
            a.video.pause();
            document.addEventListener("mousemove", n);
            document.addEventListener("mouseup", l);
        };
        h.onclick = function() {
            a.video.paused ? (a.video.play(), h.src = c) : (a.video.pause(), h.src = d);
        };
        a.D = function() {
            a.video.paused && (h.src = d);
            h.src = c;
        };
    }
    function wa(a, b) {
        var c = a.i.K, d = a.i.track.getBoundingClientRect();
        a = a.i.parent.getBoundingClientRect();
        c.style.left = d.left - a.left + d.width * b + "px";
    }
    function xa(a) {
        var b = Math.floor(a % 60).toString();
        b = 1 === b.length ? "0" + b : b;
        a = Math.floor(a / 60).toString();
        a = 1 === a.length ? "0" + a : a;
        return a + ":" + b;
    }
    Y.prototype.update = function() {
        if (this.h && !this.j && this.g.onFrame) this.g.onFrame(this.h, {
            width: this.h.naturalWidth,
            height: this.h.naturalHeight
        });
    };
    function Ka(a) {
        this.g = a;
    }
    Ka.prototype.create = function(a, b, c) {
        a = c.appendChild(document.createElement("div"));
        a.classList.add("control-panel-entry");
        a.classList.add("control-panel-text");
        a.textContent = this.g.title;
    };
    Ka.prototype.update = function() {};
    function La(a) {
        this.h = a;
    }
    La.prototype.create = function(a, b, c) {
        var d = this;
        this.i = a;
        this.options = b;
        this.g = c.appendChild(document.createElement("div"));
        this.g.classList.add("control-panel-entry");
        this.g.classList.add("control-panel-toggle");
        this.g.onclick = function() {
            d.options[d.h.field] = !d.options[d.h.field];
            d.i();
        };
        a = this.g.appendChild(document.createElement("span"));
        a.classList.add("label");
        this.value = this.g.appendChild(document.createElement("span"));
        this.value.classList.add("value");
        a.textContent = this.h.title;
    };
    La.prototype.update = function() {
        this.options[this.h.field] ? (this.value.textContent = "Yes", this.g.classList.add("yes"), this.g.classList.remove("no")) : (this.value.textContent = "No", this.g.classList.add("no"), this.g.classList.remove("yes"));
    };
    function Ma(a, b) {
        this.parent = a;
        this.options = b;
        this.g = [];
        this.h = this.parent.appendChild(document.createElement("div"));
        this.h.classList.add("control-panel");
    }
    Ma.prototype.add = function(a) {
        var b = this;
        a = v(a);
        for(var c = a.next(); !c.done; c = a.next())c = c.value, this.g.push(c), c.create(function() {
            Na(b);
        }, this.options, this.h);
        Na(this);
        return this;
    };
    Ma.prototype.on = function(a) {
        this.i = a;
        Na(this);
        return this;
    };
    function Na(a) {
        for(var b = v(a.g), c = b.next(); !c.done; c = b.next())c.value.update();
        a.i && a.i(a.options);
    }
    K("ControlPanel", Ma);
    K("Slider", W);
    K("StaticText", Ka);
    K("Toggle", La);
    K("SourcePicker", Y);
    K("FPS", V);
    K("DropDownControl", U);
}).call(this);

},{}],"eGpaQ":[function(require,module,exports) {
var global = arguments[3];
(function() {
    function h(a) {
        var c = 0;
        return function() {
            return c < a.length ? {
                done: !1,
                value: a[c++]
            } : {
                done: !0
            };
        };
    }
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, b) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[c] = b.value;
        return a;
    };
    function m(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var c = 0; c < a.length; ++c){
            var b = a[c];
            if (b && b.Math == Math) return b;
        }
        throw Error("Cannot find global object");
    }
    var n = m(this);
    function p(a, c) {
        if (c) a: {
            var b = n;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in b)) break a;
                b = b[e];
            }
            a = a[a.length - 1];
            d = b[a];
            c = c(d);
            c != d && null != c && l(b, a, {
                configurable: !0,
                writable: !0,
                value: c
            });
        }
    }
    function q(a) {
        var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return c ? c.call(a) : {
            next: h(a)
        };
    }
    var r = "function" == typeof Object.assign ? Object.assign : function(a, c) {
        for(var b = 1; b < arguments.length; b++){
            var d = arguments[b];
            if (d) for(var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        }
        return a;
    };
    p("Object.assign", function(a) {
        return a || r;
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(c, b, d) {
            var e = this.length || 0;
            0 > b && (b = Math.max(0, e + b));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for(b = Number(b || 0); b < d; b++)this[b] = c;
            return this;
        };
    });
    function t(a) {
        return a ? a : Array.prototype.fill;
    }
    p("Int8Array.prototype.fill", t);
    p("Uint8Array.prototype.fill", t);
    p("Uint8ClampedArray.prototype.fill", t);
    p("Int16Array.prototype.fill", t);
    p("Uint16Array.prototype.fill", t);
    p("Int32Array.prototype.fill", t);
    p("Uint32Array.prototype.fill", t);
    p("Float32Array.prototype.fill", t);
    p("Float64Array.prototype.fill", t);
    var u = this || self;
    function v(a, c) {
        a = a.split(".");
        var b = u;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for(var d; a.length && (d = a.shift());)a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = b[d] : b = b[d] = {} : b[d] = c;
    }
    var w = {
        color: "white",
        lineWidth: 4,
        radius: 6,
        visibilityMin: .5
    };
    function x(a) {
        a = a || {};
        return Object.assign(Object.assign(Object.assign({}, w), {
            fillColor: a.color
        }), a);
    }
    function y(a, c) {
        return a instanceof Function ? a(c) : a;
    }
    function z(a, c, b) {
        return Math.max(Math.min(c, b), Math.min(Math.max(c, b), a));
    }
    v("clamp", z);
    v("drawLandmarks", function(a, c, b) {
        if (c) {
            b = x(b);
            a.save();
            var d = a.canvas, e = 0;
            c = q(c);
            for(var f = c.next(); !f.done; f = c.next())if (f = f.value, void 0 !== f && (void 0 === f.visibility || f.visibility > b.visibilityMin)) {
                a.fillStyle = y(b.fillColor, {
                    index: e,
                    from: f
                });
                a.strokeStyle = y(b.color, {
                    index: e,
                    from: f
                });
                a.lineWidth = y(b.lineWidth, {
                    index: e,
                    from: f
                });
                var g = new Path2D;
                g.arc(f.x * d.width, f.y * d.height, y(b.radius, {
                    index: e,
                    from: f
                }), 0, 2 * Math.PI);
                a.fill(g);
                a.stroke(g);
                ++e;
            }
            a.restore();
        }
    });
    v("drawConnectors", function(a, c, b, d) {
        if (c && b) {
            d = x(d);
            a.save();
            var e = a.canvas, f = 0;
            b = q(b);
            for(var g = b.next(); !g.done; g = b.next()){
                var k = g.value;
                a.beginPath();
                g = c[k[0]];
                k = c[k[1]];
                g && k && (void 0 === g.visibility || g.visibility > d.visibilityMin) && (void 0 === k.visibility || k.visibility > d.visibilityMin) && (a.strokeStyle = y(d.color, {
                    index: f,
                    from: g,
                    to: k
                }), a.lineWidth = y(d.lineWidth, {
                    index: f,
                    from: g,
                    to: k
                }), a.moveTo(g.x * e.width, g.y * e.height), a.lineTo(k.x * e.width, k.y * e.height));
                ++f;
                a.stroke();
            }
            a.restore();
        }
    });
    v("drawRectangle", function(a, c, b) {
        b = x(b);
        a.save();
        var d = a.canvas;
        a.beginPath();
        a.lineWidth = y(b.lineWidth, {});
        a.strokeStyle = y(b.color, {});
        a.fillStyle = y(b.fillColor, {});
        a.translate(c.xCenter * d.width, c.yCenter * d.height);
        a.rotate(c.rotation * Math.PI / 180);
        a.rect(-c.width / 2 * d.width, -c.height / 2 * d.height, c.width * d.width, c.height * d.height);
        a.translate(-c.xCenter * d.width, -c.yCenter * d.height);
        a.stroke();
        a.fill();
        a.restore();
    });
    v("lerp", function(a, c, b, d, e) {
        return z(d * (1 - (a - c) / (b - c)) + e * (1 - (b - a) / (b - c)), d, e);
    });
}).call(this);

},{}],"4Binw":[function(require,module,exports) {
var global = arguments[3];
(function() {
    var v;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        };
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
    };
    function ca(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
        ];
        for(var b = 0; b < a.length; ++b){
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var G = ca(this);
    function J(a, b) {
        if (b) a: {
            var c = G;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    J("Symbol", function(a) {
        function b(g) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + e++, g);
        }
        function c(g, f) {
            this.g = g;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            });
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g;
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", e = 0;
        return b;
    });
    J("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for(var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++){
            var d = G[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this));
                }
            });
        }
        return a;
    });
    function da(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this;
        };
        return a;
    }
    function K(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        };
    }
    function L(a) {
        if (!(a instanceof Array)) {
            a = K(a);
            for(var b, c = []; !(b = a.next()).done;)c.push(b.value);
            a = c;
        }
        return a;
    }
    var ea = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b;
    }, fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                a: !0
            }, ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a;
            } catch (a) {}
            ha = !1;
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
        } : null;
    }
    var ka = fa;
    function M(a, b) {
        a.prototype = ea(b.prototype);
        a.prototype.constructor = a;
        if (ka) ka(a, b);
        else for(var c in b)if ("prototype" != c) {
            if (Object.defineProperties) {
                var d = Object.getOwnPropertyDescriptor(b, c);
                d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
        }
        a.ea = b.prototype;
    }
    function ma() {
        this.l = !1;
        this.i = null;
        this.h = void 0;
        this.g = 1;
        this.s = this.m = 0;
        this.j = null;
    }
    function na(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0;
    }
    ma.prototype.o = function(a) {
        this.h = a;
    };
    function oa(a, b) {
        a.j = {
            U: b,
            V: !0
        };
        a.g = a.m || a.s;
    }
    ma.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.g = this.s;
    };
    function N(a, b, c) {
        a.g = c;
        return {
            value: b
        };
    }
    function pa(a) {
        this.g = new ma;
        this.h = a;
    }
    function qa(a, b) {
        na(a.g);
        var c = a.g.i;
        if (c) return ra(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            };
        }, b, a.g.return);
        a.g.return(b);
        return sa(a);
    }
    function ra(a, b, c, d) {
        try {
            var e = b.call(a.g.i, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.l = !1, e;
            var g = e.value;
        } catch (f) {
            return a.g.i = null, oa(a.g, f), sa(a);
        }
        a.g.i = null;
        d.call(a.g, g);
        return sa(a);
    }
    function sa(a) {
        for(; a.g.g;)try {
            var b = a.h(a.g);
            if (b) return a.g.l = !1, {
                value: b.value,
                done: !1
            };
        } catch (c) {
            a.g.h = void 0, oa(a.g, c);
        }
        a.g.l = !1;
        if (a.g.j) {
            b = a.g.j;
            a.g.j = null;
            if (b.V) throw b.U;
            return {
                value: b.return,
                done: !0
            };
        }
        return {
            value: void 0,
            done: !0
        };
    }
    function ta(a) {
        this.next = function(b) {
            na(a.g);
            a.g.i ? b = ra(a, a.g.i.next, b, a.g.o) : (a.g.o(b), b = sa(a));
            return b;
        };
        this.throw = function(b) {
            na(a.g);
            a.g.i ? b = ra(a, a.g.i["throw"], b, a.g.o) : (oa(a.g, b), b = sa(a));
            return b;
        };
        this.return = function(b) {
            return qa(a, b);
        };
        this[Symbol.iterator] = function() {
            return this;
        };
    }
    function O(a, b) {
        b = new ta(new pa(b));
        ka && a.prototype && ka(b, a.prototype);
        return b;
    }
    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function() {
                if (!d && c < a.length) {
                    var g = c++;
                    return {
                        value: b(g, a[g]),
                        done: !1
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                };
            }
        };
        e[Symbol.iterator] = function() {
            return e;
        };
        return e;
    }
    var va = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for(var c = 1; c < arguments.length; c++){
            var d = arguments[c];
            if (d) for(var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
        }
        return a;
    };
    J("Object.assign", function(a) {
        return a || va;
    });
    J("Promise", function(a) {
        function b(f) {
            this.h = 0;
            this.i = void 0;
            this.g = [];
            this.o = !1;
            var h = this.j();
            try {
                f(h.resolve, h.reject);
            } catch (k) {
                h.reject(k);
            }
        }
        function c() {
            this.g = null;
        }
        function d(f) {
            return f instanceof b ? f : new b(function(h) {
                h(f);
            });
        }
        if (a) return a;
        c.prototype.h = function(f) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.l();
                });
            }
            this.g.push(f);
        };
        var e = G.setTimeout;
        c.prototype.i = function(f) {
            e(f, 0);
        };
        c.prototype.l = function() {
            for(; this.g && this.g.length;){
                var f = this.g;
                this.g = [];
                for(var h = 0; h < f.length; ++h){
                    var k = f[h];
                    f[h] = null;
                    try {
                        k();
                    } catch (l) {
                        this.j(l);
                    }
                }
            }
            this.g = null;
        };
        c.prototype.j = function(f) {
            this.i(function() {
                throw f;
            });
        };
        b.prototype.j = function() {
            function f(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n));
                };
            }
            var h = this, k = !1;
            return {
                resolve: f(this.C),
                reject: f(this.l)
            };
        };
        b.prototype.C = function(f) {
            if (f === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (f instanceof b) this.F(f);
            else {
                a: switch(typeof f){
                    case "object":
                        var h = null != f;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1;
                }
                h ? this.u(f) : this.m(f);
            }
        };
        b.prototype.u = function(f) {
            var h = void 0;
            try {
                h = f.then;
            } catch (k) {
                this.l(k);
                return;
            }
            "function" == typeof h ? this.G(h, f) : this.m(f);
        };
        b.prototype.l = function(f) {
            this.s(2, f);
        };
        b.prototype.m = function(f) {
            this.s(1, f);
        };
        b.prototype.s = function(f, h) {
            if (0 != this.h) throw Error("Cannot settle(" + f + ", " + h + "): Promise already settled in state" + this.h);
            this.h = f;
            this.i = h;
            2 === this.h && this.D();
            this.A();
        };
        b.prototype.D = function() {
            var f = this;
            e(function() {
                if (f.B()) {
                    var h = G.console;
                    "undefined" !== typeof h && h.error(f.i);
                }
            }, 1);
        };
        b.prototype.B = function() {
            if (this.o) return !1;
            var f = G.CustomEvent, h = G.Event, k = G.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof f ? f = new f("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? f = new h("unhandledrejection", {
                cancelable: !0
            }) : (f = G.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f));
            f.promise = this;
            f.reason = this.i;
            return k(f);
        };
        b.prototype.A = function() {
            if (null != this.g) {
                for(var f = 0; f < this.g.length; ++f)g.h(this.g[f]);
                this.g = null;
            }
        };
        var g = new c;
        b.prototype.F = function(f) {
            var h = this.j();
            f.J(h.resolve, h.reject);
        };
        b.prototype.G = function(f, h) {
            var k = this.j();
            try {
                f.call(h, k.resolve, k.reject);
            } catch (l) {
                k.reject(l);
            }
        };
        b.prototype.then = function(f, h) {
            function k(w, r) {
                return "function" == typeof w ? function(y) {
                    try {
                        l(w(y));
                    } catch (m) {
                        n(m);
                    }
                } : r;
            }
            var l, n, u = new b(function(w, r) {
                l = w;
                n = r;
            });
            this.J(k(f, l), k(h, n));
            return u;
        };
        b.prototype.catch = function(f) {
            return this.then(void 0, f);
        };
        b.prototype.J = function(f, h) {
            function k() {
                switch(l.h){
                    case 1:
                        f(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.g ? g.h(k) : this.g.push(k);
            this.o = !0;
        };
        b.resolve = d;
        b.reject = function(f) {
            return new b(function(h, k) {
                k(f);
            });
        };
        b.race = function(f) {
            return new b(function(h, k) {
                for(var l = K(f), n = l.next(); !n.done; n = l.next())d(n.value).J(h, k);
            });
        };
        b.all = function(f) {
            var h = K(f), k = h.next();
            return k.done ? d([]) : new b(function(l, n) {
                function u(y) {
                    return function(m) {
                        w[y] = m;
                        r--;
                        0 == r && l(w);
                    };
                }
                var w = [], r = 0;
                do w.push(void 0), r++, d(k.value).J(u(w.length - 1), n), k = h.next();
                while (!k.done)
            });
        };
        return b;
    });
    J("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
    });
    J("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for(0 > c && (c = Math.max(c + e, 0)); c < e; c++){
                var g = d[c];
                if (g === b || Object.is(g, b)) return !0;
            }
            return !1;
        };
    });
    J("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== this.indexOf(b, c || 0);
        };
    });
    J("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b;
            });
        };
    });
    var wa = this || self;
    function P(a, b) {
        a = a.split(".");
        var c = wa;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for(var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    }
    function xa(a, b) {
        b = String.fromCharCode.apply(null, b);
        return null == a ? b : a + b;
    }
    var ya, za = "undefined" !== typeof TextDecoder, Aa, Ba = "undefined" !== typeof TextEncoder;
    function Ca(a) {
        if (Ba) a = (Aa || (Aa = new TextEncoder)).encode(a);
        else {
            var b = void 0;
            b = void 0 === b ? !1 : b;
            for(var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++){
                var g = a.charCodeAt(e);
                if (128 > g) d[c++] = g;
                else {
                    if (2048 > g) d[c++] = g >> 6 | 192;
                    else {
                        if (55296 <= g && 57343 >= g) {
                            if (56319 >= g && e < a.length) {
                                var f = a.charCodeAt(++e);
                                if (56320 <= f && 57343 >= f) {
                                    g = 1024 * (g - 55296) + f - 56320 + 65536;
                                    d[c++] = g >> 18 | 240;
                                    d[c++] = g >> 12 & 63 | 128;
                                    d[c++] = g >> 6 & 63 | 128;
                                    d[c++] = g & 63 | 128;
                                    continue;
                                } else e--;
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            g = 65533;
                        }
                        d[c++] = g >> 12 | 224;
                        d[c++] = g >> 6 & 63 | 128;
                    }
                    d[c++] = g & 63 | 128;
                }
            }
            a = d.subarray(0, c);
        }
        return a;
    }
    var Da = {}, Ea = null;
    function Fa(a, b) {
        void 0 === b && (b = 0);
        Ga();
        b = Da[b];
        for(var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, g = 0; e < a.length - 2; e += 3){
            var f = a[e], h = a[e + 1], k = a[e + 2], l = b[f >> 2];
            f = b[(f & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[g++] = l + f + h + k;
        }
        l = 0;
        k = d;
        switch(a.length - e){
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[g] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d;
        }
        return c.join("");
    }
    function Ha(a) {
        var b = a.length, c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c), e = 0;
        Ia(a, function(g) {
            d[e++] = g;
        });
        return d.subarray(0, e);
    }
    function Ia(a, b) {
        function c(k) {
            for(; d < a.length;){
                var l = a.charAt(d++), n = Ea[l];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k;
        }
        Ga();
        for(var d = 0;;){
            var e = c(-1), g = c(0), f = c(64), h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | g >> 4);
            64 != f && (b(g << 4 & 240 | f >> 2), 64 != h && b(f << 6 & 192 | h));
        }
    }
    function Ga() {
        if (!Ea) {
            Ea = {};
            for(var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = [
                "+/=",
                "+/",
                "-_=",
                "-_.",
                "-_"
            ], c = 0; 5 > c; c++){
                var d = a.concat(b[c].split(""));
                Da[c] = d;
                for(var e = 0; e < d.length; e++){
                    var g = d[e];
                    void 0 === Ea[g] && (Ea[g] = e);
                }
            }
        }
    }
    var Ja = "function" === typeof Uint8Array.prototype.slice, Ka;
    function La(a, b, c) {
        return b === c ? Ka || (Ka = new Uint8Array(0)) : Ja ? a.slice(b, c) : new Uint8Array(a.subarray(b, c));
    }
    var Q = 0, R = 0;
    function Ma(a, b) {
        b = void 0 === b ? {} : b;
        b = void 0 === b.v ? !1 : b.v;
        this.h = null;
        this.g = this.j = this.l = 0;
        this.m = !1;
        this.v = b;
        a && Na(this, a);
    }
    function Na(a, b) {
        b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? Ha(b) : b instanceof Uint8Array ? new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : new Uint8Array(0);
        a.h = b;
        a.l = 0;
        a.j = a.h.length;
        a.g = a.l;
    }
    Ma.prototype.reset = function() {
        this.g = this.l;
    };
    function Oa(a) {
        for(var b = 128, c = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)b = a.h[a.g++], c |= (b & 127) << 7 * e;
        128 <= b && (b = a.h[a.g++], c |= (b & 127) << 28, d |= (b & 127) >> 4);
        if (128 <= b) for(e = 0; 5 > e && 128 <= b; e++)b = a.h[a.g++], d |= (b & 127) << 7 * e + 3;
        if (128 > b) {
            a = c >>> 0;
            b = d >>> 0;
            if (d = b & 2147483648) a = ~a + 1 >>> 0, b = ~b >>> 0, 0 == a && (b = b + 1 >>> 0);
            a = 4294967296 * b + (a >>> 0);
            return d ? -a : a;
        }
        a.m = !0;
    }
    Ma.prototype.i = function() {
        var a = this.h, b = a[this.g], c = b & 127;
        if (128 > b) return this.g += 1, c;
        b = a[this.g + 1];
        c |= (b & 127) << 7;
        if (128 > b) return this.g += 2, c;
        b = a[this.g + 2];
        c |= (b & 127) << 14;
        if (128 > b) return this.g += 3, c;
        b = a[this.g + 3];
        c |= (b & 127) << 21;
        if (128 > b) return this.g += 4, c;
        b = a[this.g + 4];
        c |= (b & 15) << 28;
        if (128 > b) return this.g += 5, c >>> 0;
        this.g += 5;
        128 <= a[this.g++] && 128 <= a[this.g++] && 128 <= a[this.g++] && 128 <= a[this.g++] && this.g++;
        return c;
    };
    Ma.prototype.o = function() {
        var a = this.h[this.g], b = this.h[this.g + 1];
        var c = this.h[this.g + 2];
        var d = this.h[this.g + 3];
        this.g += 4;
        c = (a << 0 | b << 8 | c << 16 | d << 24) >>> 0;
        a = 2 * (c >> 31) + 1;
        b = c >>> 23 & 255;
        c &= 8388607;
        return 255 == b ? c ? NaN : Infinity * a : 0 == b ? a * Math.pow(2, -149) * c : a * Math.pow(2, b - 150) * (c + Math.pow(2, 23));
    };
    var Pa = [];
    function Qa() {
        this.g = new Uint8Array(64);
        this.h = 0;
    }
    Qa.prototype.push = function(a) {
        if (!(this.h + 1 < this.g.length)) {
            var b = this.g;
            this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
            this.g.set(b);
        }
        this.g[this.h++] = a;
    };
    Qa.prototype.length = function() {
        return this.h;
    };
    Qa.prototype.end = function() {
        var a = this.g, b = this.h;
        this.h = 0;
        return La(a, 0, b);
    };
    function Ra(a, b) {
        for(; 127 < b;)a.push(b & 127 | 128), b >>>= 7;
        a.push(b);
    }
    function Sa(a) {
        var b = {}, c = void 0 === b.N ? !1 : b.N;
        this.o = {
            v: void 0 === b.v ? !1 : b.v
        };
        this.N = c;
        b = this.o;
        Pa.length ? (c = Pa.pop(), b && (c.v = b.v), a && Na(c, a), a = c) : a = new Ma(a, b);
        this.g = a;
        this.m = this.g.g;
        this.h = this.i = this.l = -1;
        this.j = !1;
    }
    Sa.prototype.reset = function() {
        this.g.reset();
        this.h = this.l = -1;
    };
    function S(a) {
        var b = a.g;
        (b = b.g == b.j) || (b = a.j) || (b = a.g, b = b.m || 0 > b.g || b.g > b.j);
        if (b) return !1;
        a.m = a.g.g;
        b = a.g.i();
        var c = b & 7;
        if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.j = !0, !1;
        a.i = b;
        a.l = b >>> 3;
        a.h = c;
        return !0;
    }
    function Ta(a) {
        switch(a.h){
            case 0:
                if (0 != a.h) Ta(a);
                else {
                    for(a = a.g; a.h[a.g] & 128;)a.g++;
                    a.g++;
                }
                break;
            case 1:
                1 != a.h ? Ta(a) : (a = a.g, a.g += 8);
                break;
            case 2:
                if (2 != a.h) Ta(a);
                else {
                    var b = a.g.i();
                    a = a.g;
                    a.g += b;
                }
                break;
            case 5:
                5 != a.h ? Ta(a) : (a = a.g, a.g += 4);
                break;
            case 3:
                b = a.l;
                do {
                    if (!S(a)) {
                        a.j = !0;
                        break;
                    }
                    if (4 == a.h) {
                        a.l != b && (a.j = !0);
                        break;
                    }
                    Ta(a);
                }while (1)
                break;
            default:
                a.j = !0;
        }
    }
    function Ua(a, b, c) {
        var d = a.g.j, e = a.g.i(), g = a.g.g + e;
        a.g.j = g;
        c(b, a);
        c = g - a.g.g;
        if (0 !== c) throw Error("Message parsing ended unexpectedly. Expected to read " + e + " bytes, instead read " + (e - c) + " bytes, either the data ended unexpectedly or the message misreported its own length");
        a.g.g = g;
        a.g.j = d;
        return b;
    }
    function T(a) {
        return a.g.o();
    }
    function Va(a) {
        var b = a.g.i();
        a = a.g;
        var c = a.g;
        a.g += b;
        a = a.h;
        var d;
        if (za) (d = ya) || (d = ya = new TextDecoder("utf-8", {
            fatal: !1
        })), d = d.decode(a.subarray(c, c + b));
        else {
            b = c + b;
            for(var e = [], g = null, f, h, k; c < b;)f = a[c++], 128 > f ? e.push(f) : 224 > f ? c >= b ? e.push(65533) : (h = a[c++], 194 > f || 128 !== (h & 192) ? (c--, e.push(65533)) : e.push((f & 31) << 6 | h & 63)) : 240 > f ? c >= b - 1 ? e.push(65533) : (h = a[c++], 128 !== (h & 192) || 224 === f && 160 > h || 237 === f && 160 <= h || 128 !== ((d = a[c++]) & 192) ? (c--, e.push(65533)) : e.push((f & 15) << 12 | (h & 63) << 6 | d & 63)) : 244 >= f ? c >= b - 2 ? e.push(65533) : (h = a[c++], 128 !== (h & 192) || 0 !== (f << 28) + (h - 144) >> 30 || 128 !== ((d = a[c++]) & 192) || 128 !== ((k = a[c++]) & 192) ? (c--, e.push(65533)) : (f = (f & 7) << 18 | (h & 63) << 12 | (d & 63) << 6 | k & 63, f -= 65536, e.push((f >> 10 & 1023) + 55296, (f & 1023) + 56320))) : e.push(65533), 8192 <= e.length && (g = xa(g, e), e.length = 0);
            d = xa(g, e);
        }
        return d;
    }
    function Wa(a, b, c) {
        var d = a.g.i();
        for(d = a.g.g + d; a.g.g < d;)c.push(b.call(a.g));
    }
    function Xa(a, b) {
        2 == a.h ? Wa(a, Ma.prototype.o, b) : b.push(T(a));
    }
    function Ya() {
        this.h = [];
        this.i = 0;
        this.g = new Qa;
    }
    function Za(a, b) {
        0 !== b.length && (a.h.push(b), a.i += b.length);
    }
    function $a(a) {
        var b = a.i + a.g.length();
        if (0 === b) return new Uint8Array(0);
        b = new Uint8Array(b);
        for(var c = a.h, d = c.length, e = 0, g = 0; g < d; g++){
            var f = c[g];
            0 !== f.length && (b.set(f, e), e += f.length);
        }
        c = a.g;
        d = c.h;
        0 !== d && (b.set(c.g.subarray(0, d), e), c.h = 0);
        a.h = [
            b
        ];
        return b;
    }
    function U(a, b, c) {
        if (null != c) {
            Ra(a.g, 8 * b + 5);
            a = a.g;
            var d = c;
            d = (c = 0 > d ? 1 : 0) ? -d : d;
            0 === d ? 0 < 1 / d ? Q = R = 0 : (R = 0, Q = 2147483648) : isNaN(d) ? (R = 0, Q = 2147483647) : 3.4028234663852886E38 < d ? (R = 0, Q = (c << 31 | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), R = 0, Q = (c << 31 | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, R = 0, Q = (c << 31 | b + 127 << 23 | d & 8388607) >>> 0);
            c = Q;
            a.push(c >>> 0 & 255);
            a.push(c >>> 8 & 255);
            a.push(c >>> 16 & 255);
            a.push(c >>> 24 & 255);
        }
    }
    var ab = "function" === typeof Uint8Array;
    function bb(a, b, c) {
        if (null != a) return "object" === typeof a ? ab && a instanceof Uint8Array ? c(a) : cb(a, b, c) : b(a);
    }
    function cb(a, b, c) {
        if (Array.isArray(a)) {
            for(var d = Array(a.length), e = 0; e < a.length; e++)d[e] = bb(a[e], b, c);
            Array.isArray(a) && a.W && db(d);
            return d;
        }
        d = {};
        for(e in a)d[e] = bb(a[e], b, c);
        return d;
    }
    function eb(a) {
        return "number" === typeof a ? isFinite(a) ? a : String(a) : a;
    }
    var fb = {
        W: {
            value: !0,
            configurable: !0
        }
    };
    function db(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, fb);
        return a;
    }
    var gb;
    function V(a, b, c) {
        var d = gb;
        gb = null;
        a || (a = d);
        d = this.constructor.ca;
        a || (a = d ? [
            d
        ] : []);
        this.j = d ? 0 : -1;
        this.m = this.g = null;
        this.h = a;
        a: {
            d = this.h.length;
            a = d - 1;
            if (d && (d = this.h[a], !(null === d || "object" != typeof d || Array.isArray(d) || ab && d instanceof Uint8Array))) {
                this.l = a - this.j;
                this.i = d;
                break a;
            }
            void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
        }
        if (c) for(b = 0; b < c.length; b++)a = c[b], a < this.l ? (a += this.j, (d = this.h[a]) ? db(d) : this.h[a] = hb) : (ib(this), (d = this.i[a]) ? db(d) : this.i[a] = hb);
    }
    var hb = Object.freeze(db([]));
    function ib(a) {
        var b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {});
    }
    function W(a, b, c) {
        return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.l ? a.i ? a.i[b] : void 0 : a.h[b + a.j];
    }
    function jb(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = W(a, b, c);
        null == d && (d = hb);
        d === hb && (d = db([]), X(a, b, d, c));
        return d;
    }
    function kb(a) {
        var b = jb(a, 3);
        a.m || (a.m = {});
        if (!a.m[3]) {
            for(var c = 0; c < b.length; c++)b[c] = +b[c];
            a.m[3] = !0;
        }
        return b;
    }
    function lb(a, b, c) {
        a = W(a, b);
        return null == a ? c : a;
    }
    function Y(a, b, c) {
        a = W(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a;
    }
    function X(a, b, c, d) {
        (void 0 === d ? 0 : d) || b >= a.l ? (ib(a), a.i[b] = c) : a.h[b + a.j] = c;
    }
    function mb(a, b, c) {
        if (-1 === c) return null;
        a.g || (a.g = {});
        if (!a.g[c]) {
            var d = W(a, c, !1);
            d && (a.g[c] = new b(d));
        }
        return a.g[c];
    }
    function nb(a, b) {
        a.g || (a.g = {});
        var c = a.g[1];
        if (!c) {
            var d = jb(a, 1);
            c = [];
            for(var e = 0; e < d.length; e++)c[e] = new b(d[e]);
            a.g[1] = c;
        }
        return c;
    }
    function ob(a, b, c) {
        var d = void 0 === d ? !1 : d;
        a.g || (a.g = {});
        var e = c ? pb(c, !1) : c;
        a.g[b] = c;
        X(a, b, e, d);
    }
    function qb(a, b, c, d) {
        var e = nb(a, c);
        b = b ? b : new c;
        a = jb(a, 1);
        void 0 != d ? (e.splice(d, 0, b), a.splice(d, 0, pb(b, !1))) : (e.push(b), a.push(pb(b, !1)));
    }
    V.prototype.toJSON = function() {
        var a = pb(this, !1);
        return cb(a, eb, Fa);
    };
    function pb(a, b) {
        if (a.g) for(var c in a.g){
            var d = a.g[c];
            if (Array.isArray(d)) for(var e = 0; e < d.length; e++)d[e] && pb(d[e], b);
            else d && pb(d, b);
        }
        return a.h;
    }
    V.prototype.toString = function() {
        return pb(this, !1).toString();
    };
    function rb(a, b) {
        if (a = a.o) {
            Za(b, b.g.end());
            for(var c = 0; c < a.length; c++)Za(b, a[c]);
        }
    }
    function sb(a, b) {
        if (4 == b.h) return !1;
        var c = b.m;
        Ta(b);
        b.N || (b = La(b.g.h, c, b.g.g), (c = a.o) ? c.push(b) : a.o = [
            b
        ]);
        return !0;
    }
    function tb(a) {
        V.call(this, a, -1, ub);
    }
    M(tb, V);
    tb.prototype.getRows = function() {
        return W(this, 1);
    };
    tb.prototype.getCols = function() {
        return W(this, 2);
    };
    tb.prototype.getPackedDataList = function() {
        return kb(this);
    };
    tb.prototype.getLayout = function() {
        return lb(this, 4, 0);
    };
    function vb(a, b) {
        for(; S(b);)switch(b.i){
            case 8:
                var c = b.g.i();
                X(a, 1, c);
                break;
            case 16:
                c = b.g.i();
                X(a, 2, c);
                break;
            case 29:
            case 26:
                Xa(b, a.getPackedDataList());
                break;
            case 32:
                c = Oa(b.g);
                X(a, 4, c);
                break;
            default:
                if (!sb(a, b)) return a;
        }
        return a;
    }
    var ub = [
        3
    ];
    function Z(a, b) {
        var c = void 0;
        return new (c || (c = Promise))(function(d, e) {
            function g(k) {
                try {
                    h(b.next(k));
                } catch (l) {
                    e(l);
                }
            }
            function f(k) {
                try {
                    h(b["throw"](k));
                } catch (l) {
                    e(l);
                }
            }
            function h(k) {
                k.done ? d(k.value) : new c(function(l) {
                    l(k.value);
                }).then(g, f);
            }
            h((b = b.apply(a, void 0)).next());
        });
    }
    function wb(a) {
        V.call(this, a);
    }
    M(wb, V);
    function xb(a, b) {
        for(; S(b);)switch(b.i){
            case 8:
                var c = b.g.i();
                X(a, 1, c);
                break;
            case 21:
                c = T(b);
                X(a, 2, c);
                break;
            case 26:
                c = Va(b);
                X(a, 3, c);
                break;
            case 34:
                c = Va(b);
                X(a, 4, c);
                break;
            default:
                if (!sb(a, b)) return a;
        }
        return a;
    }
    function yb(a) {
        V.call(this, a, -1, zb);
    }
    M(yb, V);
    yb.prototype.addClassification = function(a, b) {
        qb(this, a, wb, b);
        return this;
    };
    var zb = [
        1
    ];
    function Ab(a) {
        V.call(this, a);
    }
    M(Ab, V);
    function Bb(a, b) {
        for(; S(b);)switch(b.i){
            case 13:
                var c = T(b);
                X(a, 1, c);
                break;
            case 21:
                c = T(b);
                X(a, 2, c);
                break;
            case 29:
                c = T(b);
                X(a, 3, c);
                break;
            case 37:
                c = T(b);
                X(a, 4, c);
                break;
            case 45:
                c = T(b);
                X(a, 5, c);
                break;
            default:
                if (!sb(a, b)) return a;
        }
        return a;
    }
    function Cb(a) {
        V.call(this, a, -1, Db);
    }
    M(Cb, V);
    function Eb(a) {
        a: {
            var b = new Cb;
            for(a = new Sa(a); S(a);)switch(a.i){
                case 10:
                    var c = Ua(a, new Ab, Bb);
                    qb(b, c, Ab, void 0);
                    break;
                default:
                    if (!sb(b, a)) break a;
            }
        }
        return b;
    }
    var Db = [
        1
    ];
    function Fb(a) {
        V.call(this, a);
    }
    M(Fb, V);
    function Gb(a) {
        V.call(this, a, -1, Hb);
    }
    M(Gb, V);
    Gb.prototype.getVertexType = function() {
        return lb(this, 1, 0);
    };
    Gb.prototype.getPrimitiveType = function() {
        return lb(this, 2, 0);
    };
    Gb.prototype.getVertexBufferList = function() {
        return kb(this);
    };
    Gb.prototype.getIndexBufferList = function() {
        return jb(this, 4);
    };
    function Ib(a, b) {
        for(; S(b);)switch(b.i){
            case 8:
                var c = Oa(b.g);
                X(a, 1, c);
                break;
            case 16:
                c = Oa(b.g);
                X(a, 2, c);
                break;
            case 29:
            case 26:
                Xa(b, a.getVertexBufferList());
                break;
            case 32:
            case 34:
                c = b;
                var d = a.getIndexBufferList();
                2 == c.h ? Wa(c, Ma.prototype.i, d) : d.push(c.g.i());
                break;
            default:
                if (!sb(a, b)) return a;
        }
        return a;
    }
    var Hb = [
        3,
        4
    ];
    function Jb(a) {
        V.call(this, a);
    }
    M(Jb, V);
    Jb.prototype.getMesh = function() {
        return mb(this, Gb, 1);
    };
    Jb.prototype.getPoseTransformMatrix = function() {
        return mb(this, tb, 2);
    };
    function Kb(a) {
        a: {
            var b = new Jb;
            for(a = new Sa(a); S(a);)switch(a.i){
                case 10:
                    var c = Ua(a, new Gb, Ib);
                    ob(b, 1, c);
                    break;
                case 18:
                    c = Ua(a, new tb, vb);
                    ob(b, 2, c);
                    break;
                default:
                    if (!sb(b, a)) break a;
            }
        }
        return b;
    }
    function Lb(a, b, c) {
        c = a.createShader(0 === c ? a.VERTEX_SHADER : a.FRAGMENT_SHADER);
        a.shaderSource(c, b);
        a.compileShader(c);
        if (!a.getShaderParameter(c, a.COMPILE_STATUS)) throw Error("Could not compile WebGL shader.\n\n" + a.getShaderInfoLog(c));
        return c;
    }
    function Mb(a) {
        return nb(a, wb).map(function(b) {
            return {
                index: lb(b, 1, 0),
                Y: Y(b, 2),
                label: null != W(b, 3) ? lb(b, 3, "") : void 0,
                displayName: null != W(b, 4) ? lb(b, 4, "") : void 0
            };
        });
    }
    function Nb(a) {
        return {
            x: Y(a, 1),
            y: Y(a, 2),
            z: Y(a, 3),
            visibility: null != W(a, 4) ? Y(a, 4) : void 0
        };
    }
    function Ob(a, b) {
        this.h = a;
        this.g = b;
        this.l = 0;
    }
    function Pb(a, b, c) {
        Qb(a, b);
        if ("function" === typeof a.g.canvas.transferToImageBitmap) return Promise.resolve(a.g.canvas.transferToImageBitmap());
        if (c) return Promise.resolve(a.g.canvas);
        if ("function" === typeof createImageBitmap) return createImageBitmap(a.g.canvas);
        void 0 === a.i && (a.i = document.createElement("canvas"));
        return new Promise(function(d) {
            a.i.height = a.g.canvas.height;
            a.i.width = a.g.canvas.width;
            a.i.getContext("2d", {}).drawImage(a.g.canvas, 0, 0, a.g.canvas.width, a.g.canvas.height);
            d(a.i);
        });
    }
    function Qb(a, b) {
        var c = a.g;
        if (void 0 === a.m) {
            var d = Lb(c, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", 0), e = Lb(c, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }", 1), g = c.createProgram();
            c.attachShader(g, d);
            c.attachShader(g, e);
            c.linkProgram(g);
            if (!c.getProgramParameter(g, c.LINK_STATUS)) throw Error("Could not compile WebGL program.\n\n" + c.getProgramInfoLog(g));
            d = a.m = g;
            c.useProgram(d);
            e = c.getUniformLocation(d, "sampler0");
            a.j = {
                I: c.getAttribLocation(d, "aVertex"),
                H: c.getAttribLocation(d, "aTex"),
                da: e
            };
            a.s = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.s);
            c.enableVertexAttribArray(a.j.I);
            c.vertexAttribPointer(a.j.I, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([
                -1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1
            ]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            a.o = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, a.o);
            c.enableVertexAttribArray(a.j.H);
            c.vertexAttribPointer(a.j.H, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, new Float32Array([
                0,
                1,
                0,
                0,
                1,
                0,
                1,
                1
            ]), c.STATIC_DRAW);
            c.bindBuffer(c.ARRAY_BUFFER, null);
            c.uniform1i(e, 0);
        }
        d = a.j;
        c.useProgram(a.m);
        c.canvas.width = b.width;
        c.canvas.height = b.height;
        c.viewport(0, 0, b.width, b.height);
        c.activeTexture(c.TEXTURE0);
        a.h.bindTexture2d(b.glName);
        c.enableVertexAttribArray(d.I);
        c.bindBuffer(c.ARRAY_BUFFER, a.s);
        c.vertexAttribPointer(d.I, 2, c.FLOAT, !1, 0, 0);
        c.enableVertexAttribArray(d.H);
        c.bindBuffer(c.ARRAY_BUFFER, a.o);
        c.vertexAttribPointer(d.H, 2, c.FLOAT, !1, 0, 0);
        c.bindFramebuffer(c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(c.COLOR_BUFFER_BIT);
        c.colorMask(!0, !0, !0, !0);
        c.drawArrays(c.TRIANGLE_FAN, 0, 4);
        c.disableVertexAttribArray(d.I);
        c.disableVertexAttribArray(d.H);
        c.bindBuffer(c.ARRAY_BUFFER, null);
        a.h.bindTexture2d(0);
    }
    function Rb(a) {
        this.g = a;
    }
    var Sb = new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        4,
        1,
        96,
        0,
        0,
        3,
        2,
        1,
        0,
        10,
        9,
        1,
        7,
        0,
        65,
        0,
        253,
        15,
        26,
        11
    ]);
    function Tb(a, b) {
        return b + a;
    }
    function Ub(a, b) {
        window[a] = b;
    }
    function Vb(a) {
        var b = document.createElement("script");
        b.setAttribute("src", a);
        b.setAttribute("crossorigin", "anonymous");
        return new Promise(function(c) {
            b.addEventListener("load", function() {
                c();
            }, !1);
            b.addEventListener("error", function() {
                c();
            }, !1);
            document.body.appendChild(b);
        });
    }
    function Wb() {
        return Z(this, function b() {
            return O(b, function(c) {
                switch(c.g){
                    case 1:
                        return c.m = 2, N(c, WebAssembly.instantiate(Sb), 4);
                    case 4:
                        c.g = 3;
                        c.m = 0;
                        break;
                    case 2:
                        return c.m = 0, c.j = null, c.return(!1);
                    case 3:
                        return c.return(!0);
                }
            });
        });
    }
    function Xb(a) {
        this.g = a;
        this.listeners = {};
        this.j = {};
        this.F = {};
        this.m = {};
        this.s = {};
        this.G = this.o = this.R = !0;
        this.C = Promise.resolve();
        this.P = "";
        this.B = {};
        this.locateFile = a && a.locateFile || Tb;
        if ("object" === typeof window) var b = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
        else if ("undefined" !== typeof location) b = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
        else throw Error("solutions can only be loaded on a web page or in a web worker");
        this.S = b;
        if (a.options) {
            b = K(Object.keys(a.options));
            for(var c = b.next(); !c.done; c = b.next()){
                c = c.value;
                var d = a.options[c].default;
                void 0 !== d && (this.j[c] = "function" === typeof d ? d() : d);
            }
        }
    }
    v = Xb.prototype;
    v.close = function() {
        this.i && this.i.delete();
        return Promise.resolve();
    };
    function Yb(a, b) {
        return void 0 === a.g.files ? [] : "function" === typeof a.g.files ? a.g.files(b) : a.g.files;
    }
    function Zb(a) {
        return Z(a, function c() {
            var d = this, e, g, f, h, k, l, n, u, w, r, y;
            return O(c, function(m) {
                switch(m.g){
                    case 1:
                        e = d;
                        if (!d.R) return m.return();
                        g = Yb(d, d.j);
                        return N(m, Wb(), 2);
                    case 2:
                        f = m.h;
                        if ("object" === typeof window) return Ub("createMediapipeSolutionsWasm", {
                            locateFile: d.locateFile
                        }), Ub("createMediapipeSolutionsPackedAssets", {
                            locateFile: d.locateFile
                        }), l = g.filter(function(t) {
                            return void 0 !== t.data;
                        }), n = g.filter(function(t) {
                            return void 0 === t.data;
                        }), u = Promise.all(l.map(function(t) {
                            var x = $b(e, t.url);
                            if (void 0 !== t.path) {
                                var z = t.path;
                                x = x.then(function(E) {
                                    e.overrideFile(z, E);
                                    return Promise.resolve(E);
                                });
                            }
                            return x;
                        })), w = Promise.all(n.map(function(t) {
                            return void 0 === t.simd || t.simd && f || !t.simd && !f ? Vb(e.locateFile(t.url, e.S)) : Promise.resolve();
                        })).then(function() {
                            return Z(e, function x() {
                                var z, E, F = this;
                                return O(x, function(I) {
                                    if (1 == I.g) return z = window.createMediapipeSolutionsWasm, E = window.createMediapipeSolutionsPackedAssets, N(I, z(E), 2);
                                    F.h = I.h;
                                    I.g = 0;
                                });
                            });
                        }), r = function() {
                            return Z(e, function x() {
                                var z = this;
                                return O(x, function(E) {
                                    z.g.graph && z.g.graph.url ? E = N(E, $b(z, z.g.graph.url), 0) : (E.g = 0, E = void 0);
                                    return E;
                                });
                            });
                        }(), N(m, Promise.all([
                            w,
                            u,
                            r
                        ]), 7);
                        if ("function" !== typeof importScripts) throw Error("solutions can only be loaded on a web page or in a web worker");
                        h = g.filter(function(t) {
                            return void 0 === t.simd || t.simd && f || !t.simd && !f;
                        }).map(function(t) {
                            return e.locateFile(t.url, e.S);
                        });
                        importScripts.apply(null, L(h));
                        return N(m, createMediapipeSolutionsWasm(Module), 6);
                    case 6:
                        d.h = m.h;
                        d.l = new OffscreenCanvas(1, 1);
                        d.h.canvas = d.l;
                        k = d.h.GL.createContext(d.l, {
                            antialias: !1,
                            alpha: !1,
                            ba: "undefined" !== typeof WebGL2RenderingContext ? 2 : 1
                        });
                        d.h.GL.makeContextCurrent(k);
                        m.g = 4;
                        break;
                    case 7:
                        d.l = document.createElement("canvas");
                        y = d.l.getContext("webgl2", {});
                        if (!y && (y = d.l.getContext("webgl", {}), !y)) return alert("Failed to create WebGL canvas context when passing video frame."), m.return();
                        d.D = y;
                        d.h.canvas = d.l;
                        d.h.createContext(d.l, !0, !0, {});
                    case 4:
                        d.i = new d.h.SolutionWasm, d.R = !1, m.g = 0;
                }
            });
        });
    }
    function ac(a) {
        return Z(a, function c() {
            var d = this, e, g, f, h, k, l, n, u;
            return O(c, function(w) {
                if (1 == w.g) {
                    if (d.g.graph && d.g.graph.url && d.P === d.g.graph.url) return w.return();
                    d.o = !0;
                    if (!d.g.graph || !d.g.graph.url) {
                        w.g = 2;
                        return;
                    }
                    d.P = d.g.graph.url;
                    return N(w, $b(d, d.g.graph.url), 3);
                }
                2 != w.g && (e = w.h, d.i.loadGraph(e));
                g = K(Object.keys(d.B));
                for(f = g.next(); !f.done; f = g.next())h = f.value, d.i.overrideFile(h, d.B[h]);
                d.B = {};
                if (d.g.listeners) for(k = K(d.g.listeners), l = k.next(); !l.done; l = k.next())n = l.value, bc(d, n);
                u = d.j;
                d.j = {};
                d.setOptions(u);
                w.g = 0;
            });
        });
    }
    v.reset = function() {
        return Z(this, function b() {
            var c = this;
            return O(b, function(d) {
                c.i && (c.i.reset(), c.m = {}, c.s = {});
                d.g = 0;
            });
        });
    };
    v.setOptions = function(a, b) {
        var c = this;
        if (b = b || this.g.options) {
            for(var d = [], e = [], g = {}, f = K(Object.keys(a)), h = f.next(); !h.done; g = {
                K: g.K,
                L: g.L
            }, h = f.next()){
                var k = h.value;
                k in this.j && this.j[k] === a[k] || (this.j[k] = a[k], h = b[k], void 0 !== h && (h.onChange && (g.K = h.onChange, g.L = a[k], d.push(function(l) {
                    return function() {
                        return Z(c, function u() {
                            var w, r = this;
                            return O(u, function(y) {
                                if (1 == y.g) return N(y, l.K(l.L), 2);
                                w = y.h;
                                !0 === w && (r.o = !0);
                                y.g = 0;
                            });
                        });
                    };
                }(g))), h.graphOptionXref && (k = {
                    valueNumber: 1 === h.type ? a[k] : 0,
                    valueBoolean: 0 === h.type ? a[k] : !1,
                    valueString: 2 === h.type ? a[k] : ""
                }, h = Object.assign(Object.assign(Object.assign({}, {
                    calculatorName: "",
                    calculatorIndex: 0
                }), h.graphOptionXref), k), e.push(h))));
            }
            if (0 !== d.length || 0 !== e.length) this.o = !0, this.A = (void 0 === this.A ? [] : this.A).concat(e), this.u = (void 0 === this.u ? [] : this.u).concat(d);
        }
    };
    function cc(a) {
        return Z(a, function c() {
            var d = this, e, g, f, h, k, l, n;
            return O(c, function(u) {
                switch(u.g){
                    case 1:
                        if (!d.o) return u.return();
                        if (!d.u) {
                            u.g = 2;
                            break;
                        }
                        e = K(d.u);
                        g = e.next();
                    case 3:
                        if (g.done) {
                            u.g = 5;
                            break;
                        }
                        f = g.value;
                        return N(u, f(), 4);
                    case 4:
                        g = e.next();
                        u.g = 3;
                        break;
                    case 5:
                        d.u = void 0;
                    case 2:
                        if (d.A) {
                            h = new d.h.GraphOptionChangeRequestList;
                            k = K(d.A);
                            for(l = k.next(); !l.done; l = k.next())n = l.value, h.push_back(n);
                            d.i.changeOptions(h);
                            h.delete();
                            d.A = void 0;
                        }
                        d.o = !1;
                        u.g = 0;
                }
            });
        });
    }
    v.initialize = function() {
        return Z(this, function b() {
            var c = this;
            return O(b, function(d) {
                return 1 == d.g ? N(d, Zb(c), 2) : 3 != d.g ? N(d, ac(c), 3) : N(d, cc(c), 0);
            });
        });
    };
    function $b(a, b) {
        return Z(a, function d() {
            var e = this, g, f;
            return O(d, function(h) {
                if (b in e.F) return h.return(e.F[b]);
                g = e.locateFile(b, "");
                f = fetch(g).then(function(k) {
                    return k.arrayBuffer();
                });
                e.F[b] = f;
                return h.return(f);
            });
        });
    }
    v.overrideFile = function(a, b) {
        this.i ? this.i.overrideFile(a, b) : this.B[a] = b;
    };
    v.clearOverriddenFiles = function() {
        this.B = {};
        this.i && this.i.clearOverriddenFiles();
    };
    v.send = function(a, b) {
        return Z(this, function d() {
            var e = this, g, f, h, k, l, n, u, w, r;
            return O(d, function(y) {
                switch(y.g){
                    case 1:
                        if (!e.g.inputs) return y.return();
                        g = 1E3 * (void 0 === b || null === b ? performance.now() : b);
                        return N(y, e.C, 2);
                    case 2:
                        return N(y, e.initialize(), 3);
                    case 3:
                        f = new e.h.PacketDataList;
                        h = K(Object.keys(a));
                        for(k = h.next(); !k.done; k = h.next())if (l = k.value, n = e.g.inputs[l]) {
                            a: {
                                var m = e;
                                var t = a[l];
                                switch(n.type){
                                    case "video":
                                        var x = m.m[n.stream];
                                        x || (x = new Ob(m.h, m.D), m.m[n.stream] = x);
                                        m = x;
                                        0 === m.l && (m.l = m.h.createTexture());
                                        if ("undefined" !== typeof HTMLVideoElement && t instanceof HTMLVideoElement) {
                                            var z = t.videoWidth;
                                            x = t.videoHeight;
                                        } else "undefined" !== typeof HTMLImageElement && t instanceof HTMLImageElement ? (z = t.naturalWidth, x = t.naturalHeight) : (z = t.width, x = t.height);
                                        x = {
                                            glName: m.l,
                                            width: z,
                                            height: x
                                        };
                                        z = m.g;
                                        z.canvas.width = x.width;
                                        z.canvas.height = x.height;
                                        z.activeTexture(z.TEXTURE0);
                                        m.h.bindTexture2d(m.l);
                                        z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, z.RGBA, z.UNSIGNED_BYTE, t);
                                        m.h.bindTexture2d(0);
                                        m = x;
                                        break a;
                                    case "detections":
                                        x = m.m[n.stream];
                                        x || (x = new Rb(m.h), m.m[n.stream] = x);
                                        m = x;
                                        m.data || (m.data = new m.g.DetectionListData);
                                        m.data.reset(t.length);
                                        for(x = 0; x < t.length; ++x){
                                            z = t[x];
                                            var E = m.data, F = E.setBoundingBox, I = x;
                                            var H = z.T;
                                            var p = new Fb;
                                            X(p, 1, H.Z);
                                            X(p, 2, H.$);
                                            X(p, 3, H.height);
                                            X(p, 4, H.width);
                                            X(p, 5, H.rotation);
                                            X(p, 6, H.X);
                                            var A = H = new Ya;
                                            U(A, 1, W(p, 1));
                                            U(A, 2, W(p, 2));
                                            U(A, 3, W(p, 3));
                                            U(A, 4, W(p, 4));
                                            U(A, 5, W(p, 5));
                                            var C = W(p, 6);
                                            if (null != C && null != C) {
                                                Ra(A.g, 48);
                                                var q = A.g, B = C;
                                                C = 0 > B;
                                                B = Math.abs(B);
                                                var D = B >>> 0;
                                                B = Math.floor((B - D) / 4294967296);
                                                B >>>= 0;
                                                C && (B = ~B >>> 0, D = (~D >>> 0) + 1, 4294967295 < D && (D = 0, B++, 4294967295 < B && (B = 0)));
                                                Q = D;
                                                R = B;
                                                C = Q;
                                                for(D = R; 0 < D || 127 < C;)q.push(C & 127 | 128), C = (C >>> 7 | D << 25) >>> 0, D >>>= 7;
                                                q.push(C);
                                            }
                                            rb(p, A);
                                            H = $a(H);
                                            F.call(E, I, H);
                                            if (z.O) for(E = 0; E < z.O.length; ++E)p = z.O[E], A = p.visibility ? !0 : !1, F = m.data, I = F.addNormalizedLandmark, H = x, p = Object.assign(Object.assign({}, p), {
                                                visibility: A ? p.visibility : 0
                                            }), A = new Ab, X(A, 1, p.x), X(A, 2, p.y), X(A, 3, p.z), p.visibility && X(A, 4, p.visibility), q = p = new Ya, U(q, 1, W(A, 1)), U(q, 2, W(A, 2)), U(q, 3, W(A, 3)), U(q, 4, W(A, 4)), U(q, 5, W(A, 5)), rb(A, q), p = $a(p), I.call(F, H, p);
                                            if (z.M) for(E = 0; E < z.M.length; ++E){
                                                F = m.data;
                                                I = F.addClassification;
                                                H = x;
                                                p = z.M[E];
                                                A = new wb;
                                                X(A, 2, p.Y);
                                                p.index && X(A, 1, p.index);
                                                p.label && X(A, 3, p.label);
                                                p.displayName && X(A, 4, p.displayName);
                                                q = p = new Ya;
                                                D = W(A, 1);
                                                if (null != D && null != D) {
                                                    if (Ra(q.g, 8), C = q.g, 0 <= D) Ra(C, D);
                                                    else {
                                                        for(B = 0; 9 > B; B++)C.push(D & 127 | 128), D >>= 7;
                                                        C.push(1);
                                                    }
                                                }
                                                U(q, 2, W(A, 2));
                                                C = W(A, 3);
                                                null != C && (C = Ca(C), Ra(q.g, 26), Ra(q.g, C.length), Za(q, q.g.end()), Za(q, C));
                                                C = W(A, 4);
                                                null != C && (C = Ca(C), Ra(q.g, 34), Ra(q.g, C.length), Za(q, q.g.end()), Za(q, C));
                                                rb(A, q);
                                                p = $a(p);
                                                I.call(F, H, p);
                                            }
                                        }
                                        m = m.data;
                                        break a;
                                    default:
                                        m = {};
                                }
                            }
                            u = m;
                            w = n.stream;
                            switch(n.type){
                                case "video":
                                    f.pushTexture2d(Object.assign(Object.assign({}, u), {
                                        stream: w,
                                        timestamp: g
                                    }));
                                    break;
                                case "detections":
                                    r = u;
                                    r.stream = w;
                                    r.timestamp = g;
                                    f.pushDetectionList(r);
                                    break;
                                default:
                                    throw Error("Unknown input config type: '" + n.type + "'");
                            }
                        }
                        e.i.send(f);
                        return N(y, e.C, 4);
                    case 4:
                        f.delete(), y.g = 0;
                }
            });
        });
    };
    function dc(a, b, c) {
        return Z(a, function e() {
            var g, f, h, k, l, n, u = this, w, r, y, m, t, x, z, E;
            return O(e, function(F) {
                switch(F.g){
                    case 1:
                        if (!c) return F.return(b);
                        g = {};
                        f = 0;
                        h = K(Object.keys(c));
                        for(k = h.next(); !k.done; k = h.next())l = k.value, n = c[l], "string" !== typeof n && "texture" === n.type && void 0 !== b[n.stream] && ++f;
                        1 < f && (u.G = !1);
                        w = K(Object.keys(c));
                        k = w.next();
                    case 2:
                        if (k.done) {
                            F.g = 4;
                            break;
                        }
                        r = k.value;
                        y = c[r];
                        if ("string" === typeof y) return z = g, E = r, N(F, ec(u, r, b[y]), 14);
                        m = b[y.stream];
                        if ("detection_list" === y.type) {
                            if (m) {
                                var I = m.getRectList();
                                for(var H = m.getLandmarksList(), p = m.getClassificationsList(), A = [], C = 0; C < I.size(); ++C){
                                    var q = I.get(C);
                                    a: {
                                        var B = new Fb;
                                        for(q = new Sa(q); S(q);)switch(q.i){
                                            case 13:
                                                var D = T(q);
                                                X(B, 1, D);
                                                break;
                                            case 21:
                                                D = T(q);
                                                X(B, 2, D);
                                                break;
                                            case 29:
                                                D = T(q);
                                                X(B, 3, D);
                                                break;
                                            case 37:
                                                D = T(q);
                                                X(B, 4, D);
                                                break;
                                            case 45:
                                                D = T(q);
                                                X(B, 5, D);
                                                break;
                                            case 48:
                                                D = Oa(q.g);
                                                X(B, 6, D);
                                                break;
                                            default:
                                                if (!sb(B, q)) break a;
                                        }
                                    }
                                    B = {
                                        Z: Y(B, 1),
                                        $: Y(B, 2),
                                        height: Y(B, 3),
                                        width: Y(B, 4),
                                        rotation: Y(B, 5, 0),
                                        X: lb(B, 6, 0)
                                    };
                                    q = nb(Eb(H.get(C)), Ab).map(Nb);
                                    var la = p.get(C);
                                    a: for(D = new yb, la = new Sa(la); S(la);)switch(la.i){
                                        case 10:
                                            D.addClassification(Ua(la, new wb, xb));
                                            break;
                                        default:
                                            if (!sb(D, la)) break a;
                                    }
                                    B = {
                                        T: B,
                                        O: q,
                                        M: Mb(D)
                                    };
                                    A.push(B);
                                }
                                I = A;
                            } else I = [];
                            g[r] = I;
                            F.g = 7;
                            break;
                        }
                        if ("proto_list" === y.type) {
                            if (m) {
                                I = Array(m.size());
                                for(H = 0; H < m.size(); H++)I[H] = m.get(H);
                                m.delete();
                            } else I = [];
                            g[r] = I;
                            F.g = 7;
                            break;
                        }
                        if (void 0 === m) {
                            F.g = 3;
                            break;
                        }
                        if ("float_list" === y.type) {
                            g[r] = m;
                            F.g = 7;
                            break;
                        }
                        if ("proto" === y.type) {
                            g[r] = m;
                            F.g = 7;
                            break;
                        }
                        if ("texture" !== y.type) throw Error("Unknown output config type: '" + y.type + "'");
                        t = u.s[r];
                        t || (t = new Ob(u.h, u.D), u.s[r] = t);
                        return N(F, Pb(t, m, u.G), 13);
                    case 13:
                        x = F.h, g[r] = x;
                    case 7:
                        y.transform && g[r] && (g[r] = y.transform(g[r]));
                        F.g = 3;
                        break;
                    case 14:
                        z[E] = F.h;
                    case 3:
                        k = w.next();
                        F.g = 2;
                        break;
                    case 4:
                        return F.return(g);
                }
            });
        });
    }
    function ec(a, b, c) {
        return Z(a, function e() {
            var g = this, f;
            return O(e, function(h) {
                return "number" === typeof c || c instanceof Uint8Array || c instanceof g.h.Uint8BlobList ? h.return(c) : c instanceof g.h.Texture2dDataOut ? (f = g.s[b], f || (f = new Ob(g.h, g.D), g.s[b] = f), h.return(Pb(f, c, g.G))) : h.return(void 0);
            });
        });
    }
    function bc(a, b) {
        for(var c = b.name || "$", d = [].concat(L(b.wants)), e = new a.h.StringList, g = K(b.wants), f = g.next(); !f.done; f = g.next())e.push_back(f.value);
        g = a.h.PacketListener.implement({
            onResults: function(h) {
                for(var k = {}, l = 0; l < b.wants.length; ++l)k[d[l]] = h.get(l);
                var n = a.listeners[c];
                n && (a.C = dc(a, k, b.outs).then(function(u) {
                    u = n(u);
                    for(var w = 0; w < b.wants.length; ++w){
                        var r = k[d[w]];
                        "object" === typeof r && r.hasOwnProperty && r.hasOwnProperty("delete") && r.delete();
                    }
                    u && (a.C = u);
                }));
            }
        });
        a.i.attachMultiListener(e, g);
        e.delete();
    }
    v.onResults = function(a, b) {
        this.listeners[b || "$"] = a;
    };
    P("Solution", Xb);
    P("OptionType", {
        BOOL: 0,
        NUMBER: 1,
        aa: 2,
        0: "BOOL",
        1: "NUMBER",
        2: "STRING"
    });
    function fc(a) {
        a = Kb(a);
        var b = a.getMesh();
        if (!b) return a;
        var c = new Float32Array(b.getVertexBufferList());
        b.getVertexBufferList = function() {
            return c;
        };
        var d = new Uint32Array(b.getIndexBufferList());
        b.getIndexBufferList = function() {
            return d;
        };
        return a;
    }
    var gc = {
        files: [
            {
                url: "face_mesh_solution_packed_assets_loader.js"
            },
            {
                simd: !0,
                url: "face_mesh_solution_simd_wasm_bin.js"
            },
            {
                simd: !1,
                url: "face_mesh_solution_wasm_bin.js"
            }
        ],
        graph: {
            url: "face_mesh.binarypb"
        },
        listeners: [
            {
                wants: [
                    "multi_face_geometry",
                    "image_transformed",
                    "multi_face_landmarks"
                ],
                outs: {
                    image: "image_transformed",
                    multiFaceGeometry: {
                        type: "proto_list",
                        stream: "multi_face_geometry",
                        transform: function(a) {
                            return a.map(fc);
                        }
                    },
                    multiFaceLandmarks: {
                        type: "proto_list",
                        stream: "multi_face_landmarks",
                        transform: function(a) {
                            return a.map(function(b) {
                                return nb(Eb(b), Ab).map(Nb);
                            });
                        }
                    }
                }
            }
        ],
        inputs: {
            image: {
                type: "video",
                stream: "input_frames_gpu"
            }
        },
        options: {
            useCpuInference: {
                type: 0,
                graphOptionXref: {
                    calculatorType: "InferenceCalculator",
                    fieldName: "use_cpu_inference"
                },
                default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            },
            enableFaceGeometry: {
                type: 0,
                graphOptionXref: {
                    calculatorName: "EnableFaceGeometryConstant",
                    calculatorType: "ConstantSidePacketCalculator",
                    fieldName: "bool_value"
                }
            },
            selfieMode: {
                type: 0,
                graphOptionXref: {
                    calculatorType: "GlScalerCalculator",
                    calculatorIndex: 1,
                    fieldName: "flip_horizontal"
                }
            },
            maxNumFaces: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "ConstantSidePacketCalculator",
                    calculatorName: "ConstantSidePacketCalculatorNumFaces",
                    fieldName: "int_value"
                }
            },
            refineLandmarks: {
                type: 0,
                graphOptionXref: {
                    calculatorType: "ConstantSidePacketCalculator",
                    calculatorName: "ConstantSidePacketCalculatorRefineLandmarks",
                    fieldName: "bool_value"
                }
            },
            minDetectionConfidence: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "TensorsToDetectionsCalculator",
                    calculatorName: "facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",
                    fieldName: "min_score_thresh"
                }
            },
            minTrackingConfidence: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "ThresholdingCalculator",
                    calculatorName: "facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",
                    fieldName: "threshold"
                }
            },
            cameraNear: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "FaceGeometryEnvGeneratorCalculator",
                    fieldName: "near"
                }
            },
            cameraFar: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "FaceGeometryEnvGeneratorCalculator",
                    fieldName: "far"
                }
            },
            cameraVerticalFovDegrees: {
                type: 1,
                graphOptionXref: {
                    calculatorType: "FaceGeometryEnvGeneratorCalculator",
                    fieldName: "vertical_fov_degrees"
                }
            }
        }
    };
    var hc = [
        [
            61,
            146
        ],
        [
            146,
            91
        ],
        [
            91,
            181
        ],
        [
            181,
            84
        ],
        [
            84,
            17
        ],
        [
            17,
            314
        ],
        [
            314,
            405
        ],
        [
            405,
            321
        ],
        [
            321,
            375
        ],
        [
            375,
            291
        ],
        [
            61,
            185
        ],
        [
            185,
            40
        ],
        [
            40,
            39
        ],
        [
            39,
            37
        ],
        [
            37,
            0
        ],
        [
            0,
            267
        ],
        [
            267,
            269
        ],
        [
            269,
            270
        ],
        [
            270,
            409
        ],
        [
            409,
            291
        ],
        [
            78,
            95
        ],
        [
            95,
            88
        ],
        [
            88,
            178
        ],
        [
            178,
            87
        ],
        [
            87,
            14
        ],
        [
            14,
            317
        ],
        [
            317,
            402
        ],
        [
            402,
            318
        ],
        [
            318,
            324
        ],
        [
            324,
            308
        ],
        [
            78,
            191
        ],
        [
            191,
            80
        ],
        [
            80,
            81
        ],
        [
            81,
            82
        ],
        [
            82,
            13
        ],
        [
            13,
            312
        ],
        [
            312,
            311
        ],
        [
            311,
            310
        ],
        [
            310,
            415
        ],
        [
            415,
            308
        ]
    ], ic = [
        [
            263,
            249
        ],
        [
            249,
            390
        ],
        [
            390,
            373
        ],
        [
            373,
            374
        ],
        [
            374,
            380
        ],
        [
            380,
            381
        ],
        [
            381,
            382
        ],
        [
            382,
            362
        ],
        [
            263,
            466
        ],
        [
            466,
            388
        ],
        [
            388,
            387
        ],
        [
            387,
            386
        ],
        [
            386,
            385
        ],
        [
            385,
            384
        ],
        [
            384,
            398
        ],
        [
            398,
            362
        ]
    ], jc = [
        [
            276,
            283
        ],
        [
            283,
            282
        ],
        [
            282,
            295
        ],
        [
            295,
            285
        ],
        [
            300,
            293
        ],
        [
            293,
            334
        ],
        [
            334,
            296
        ],
        [
            296,
            336
        ]
    ], kc = [
        [
            33,
            7
        ],
        [
            7,
            163
        ],
        [
            163,
            144
        ],
        [
            144,
            145
        ],
        [
            145,
            153
        ],
        [
            153,
            154
        ],
        [
            154,
            155
        ],
        [
            155,
            133
        ],
        [
            33,
            246
        ],
        [
            246,
            161
        ],
        [
            161,
            160
        ],
        [
            160,
            159
        ],
        [
            159,
            158
        ],
        [
            158,
            157
        ],
        [
            157,
            173
        ],
        [
            173,
            133
        ]
    ], lc = [
        [
            46,
            53
        ],
        [
            53,
            52
        ],
        [
            52,
            65
        ],
        [
            65,
            55
        ],
        [
            70,
            63
        ],
        [
            63,
            105
        ],
        [
            105,
            66
        ],
        [
            66,
            107
        ]
    ], mc = [
        [
            10,
            338
        ],
        [
            338,
            297
        ],
        [
            297,
            332
        ],
        [
            332,
            284
        ],
        [
            284,
            251
        ],
        [
            251,
            389
        ],
        [
            389,
            356
        ],
        [
            356,
            454
        ],
        [
            454,
            323
        ],
        [
            323,
            361
        ],
        [
            361,
            288
        ],
        [
            288,
            397
        ],
        [
            397,
            365
        ],
        [
            365,
            379
        ],
        [
            379,
            378
        ],
        [
            378,
            400
        ],
        [
            400,
            377
        ],
        [
            377,
            152
        ],
        [
            152,
            148
        ],
        [
            148,
            176
        ],
        [
            176,
            149
        ],
        [
            149,
            150
        ],
        [
            150,
            136
        ],
        [
            136,
            172
        ],
        [
            172,
            58
        ],
        [
            58,
            132
        ],
        [
            132,
            93
        ],
        [
            93,
            234
        ],
        [
            234,
            127
        ],
        [
            127,
            162
        ],
        [
            162,
            21
        ],
        [
            21,
            54
        ],
        [
            54,
            103
        ],
        [
            103,
            67
        ],
        [
            67,
            109
        ],
        [
            109,
            10
        ]
    ], nc = [].concat(L(hc), L(ic), L(jc), L(kc), L(lc), L(mc));
    function oc(a) {
        a = a || {};
        a = Object.assign(Object.assign({}, gc), a);
        this.g = new Xb(a);
    }
    v = oc.prototype;
    v.close = function() {
        this.g.close();
        return Promise.resolve();
    };
    v.onResults = function(a) {
        this.g.onResults(a);
    };
    v.initialize = function() {
        return Z(this, function b() {
            var c = this;
            return O(b, function(d) {
                return N(d, c.g.initialize(), 0);
            });
        });
    };
    v.reset = function() {
        this.g.reset();
    };
    v.send = function(a) {
        return Z(this, function c() {
            var d = this;
            return O(c, function(e) {
                return N(e, d.g.send(a), 0);
            });
        });
    };
    v.setOptions = function(a) {
        this.g.setOptions(a);
    };
    P("FACE_GEOMETRY", {
        Layout: {
            COLUMN_MAJOR: 0,
            ROW_MAJOR: 1,
            0: "COLUMN_MAJOR",
            1: "ROW_MAJOR"
        },
        PrimitiveType: {
            TRIANGLE: 0,
            0: "TRIANGLE"
        },
        VertexType: {
            VERTEX_PT: 0,
            0: "VERTEX_PT"
        },
        DEFAULT_CAMERA_PARAMS: {
            verticalFovDegrees: 63,
            near: 1,
            far: 1E4
        }
    });
    P("FaceMesh", oc);
    P("FACEMESH_LIPS", hc);
    P("FACEMESH_LEFT_EYE", ic);
    P("FACEMESH_LEFT_EYEBROW", jc);
    P("FACEMESH_LEFT_IRIS", [
        [
            474,
            475
        ],
        [
            475,
            476
        ],
        [
            476,
            477
        ],
        [
            477,
            474
        ]
    ]);
    P("FACEMESH_RIGHT_EYE", kc);
    P("FACEMESH_RIGHT_EYEBROW", lc);
    P("FACEMESH_RIGHT_IRIS", [
        [
            469,
            470
        ],
        [
            470,
            471
        ],
        [
            471,
            472
        ],
        [
            472,
            469
        ]
    ]);
    P("FACEMESH_FACE_OVAL", mc);
    P("FACEMESH_CONTOURS", nc);
    P("FACEMESH_TESSELATION", [
        [
            127,
            34
        ],
        [
            34,
            139
        ],
        [
            139,
            127
        ],
        [
            11,
            0
        ],
        [
            0,
            37
        ],
        [
            37,
            11
        ],
        [
            232,
            231
        ],
        [
            231,
            120
        ],
        [
            120,
            232
        ],
        [
            72,
            37
        ],
        [
            37,
            39
        ],
        [
            39,
            72
        ],
        [
            128,
            121
        ],
        [
            121,
            47
        ],
        [
            47,
            128
        ],
        [
            232,
            121
        ],
        [
            121,
            128
        ],
        [
            128,
            232
        ],
        [
            104,
            69
        ],
        [
            69,
            67
        ],
        [
            67,
            104
        ],
        [
            175,
            171
        ],
        [
            171,
            148
        ],
        [
            148,
            175
        ],
        [
            118,
            50
        ],
        [
            50,
            101
        ],
        [
            101,
            118
        ],
        [
            73,
            39
        ],
        [
            39,
            40
        ],
        [
            40,
            73
        ],
        [
            9,
            151
        ],
        [
            151,
            108
        ],
        [
            108,
            9
        ],
        [
            48,
            115
        ],
        [
            115,
            131
        ],
        [
            131,
            48
        ],
        [
            194,
            204
        ],
        [
            204,
            211
        ],
        [
            211,
            194
        ],
        [
            74,
            40
        ],
        [
            40,
            185
        ],
        [
            185,
            74
        ],
        [
            80,
            42
        ],
        [
            42,
            183
        ],
        [
            183,
            80
        ],
        [
            40,
            92
        ],
        [
            92,
            186
        ],
        [
            186,
            40
        ],
        [
            230,
            229
        ],
        [
            229,
            118
        ],
        [
            118,
            230
        ],
        [
            202,
            212
        ],
        [
            212,
            214
        ],
        [
            214,
            202
        ],
        [
            83,
            18
        ],
        [
            18,
            17
        ],
        [
            17,
            83
        ],
        [
            76,
            61
        ],
        [
            61,
            146
        ],
        [
            146,
            76
        ],
        [
            160,
            29
        ],
        [
            29,
            30
        ],
        [
            30,
            160
        ],
        [
            56,
            157
        ],
        [
            157,
            173
        ],
        [
            173,
            56
        ],
        [
            106,
            204
        ],
        [
            204,
            194
        ],
        [
            194,
            106
        ],
        [
            135,
            214
        ],
        [
            214,
            192
        ],
        [
            192,
            135
        ],
        [
            203,
            165
        ],
        [
            165,
            98
        ],
        [
            98,
            203
        ],
        [
            21,
            71
        ],
        [
            71,
            68
        ],
        [
            68,
            21
        ],
        [
            51,
            45
        ],
        [
            45,
            4
        ],
        [
            4,
            51
        ],
        [
            144,
            24
        ],
        [
            24,
            23
        ],
        [
            23,
            144
        ],
        [
            77,
            146
        ],
        [
            146,
            91
        ],
        [
            91,
            77
        ],
        [
            205,
            50
        ],
        [
            50,
            187
        ],
        [
            187,
            205
        ],
        [
            201,
            200
        ],
        [
            200,
            18
        ],
        [
            18,
            201
        ],
        [
            91,
            106
        ],
        [
            106,
            182
        ],
        [
            182,
            91
        ],
        [
            90,
            91
        ],
        [
            91,
            181
        ],
        [
            181,
            90
        ],
        [
            85,
            84
        ],
        [
            84,
            17
        ],
        [
            17,
            85
        ],
        [
            206,
            203
        ],
        [
            203,
            36
        ],
        [
            36,
            206
        ],
        [
            148,
            171
        ],
        [
            171,
            140
        ],
        [
            140,
            148
        ],
        [
            92,
            40
        ],
        [
            40,
            39
        ],
        [
            39,
            92
        ],
        [
            193,
            189
        ],
        [
            189,
            244
        ],
        [
            244,
            193
        ],
        [
            159,
            158
        ],
        [
            158,
            28
        ],
        [
            28,
            159
        ],
        [
            247,
            246
        ],
        [
            246,
            161
        ],
        [
            161,
            247
        ],
        [
            236,
            3
        ],
        [
            3,
            196
        ],
        [
            196,
            236
        ],
        [
            54,
            68
        ],
        [
            68,
            104
        ],
        [
            104,
            54
        ],
        [
            193,
            168
        ],
        [
            168,
            8
        ],
        [
            8,
            193
        ],
        [
            117,
            228
        ],
        [
            228,
            31
        ],
        [
            31,
            117
        ],
        [
            189,
            193
        ],
        [
            193,
            55
        ],
        [
            55,
            189
        ],
        [
            98,
            97
        ],
        [
            97,
            99
        ],
        [
            99,
            98
        ],
        [
            126,
            47
        ],
        [
            47,
            100
        ],
        [
            100,
            126
        ],
        [
            166,
            79
        ],
        [
            79,
            218
        ],
        [
            218,
            166
        ],
        [
            155,
            154
        ],
        [
            154,
            26
        ],
        [
            26,
            155
        ],
        [
            209,
            49
        ],
        [
            49,
            131
        ],
        [
            131,
            209
        ],
        [
            135,
            136
        ],
        [
            136,
            150
        ],
        [
            150,
            135
        ],
        [
            47,
            126
        ],
        [
            126,
            217
        ],
        [
            217,
            47
        ],
        [
            223,
            52
        ],
        [
            52,
            53
        ],
        [
            53,
            223
        ],
        [
            45,
            51
        ],
        [
            51,
            134
        ],
        [
            134,
            45
        ],
        [
            211,
            170
        ],
        [
            170,
            140
        ],
        [
            140,
            211
        ],
        [
            67,
            69
        ],
        [
            69,
            108
        ],
        [
            108,
            67
        ],
        [
            43,
            106
        ],
        [
            106,
            91
        ],
        [
            91,
            43
        ],
        [
            230,
            119
        ],
        [
            119,
            120
        ],
        [
            120,
            230
        ],
        [
            226,
            130
        ],
        [
            130,
            247
        ],
        [
            247,
            226
        ],
        [
            63,
            53
        ],
        [
            53,
            52
        ],
        [
            52,
            63
        ],
        [
            238,
            20
        ],
        [
            20,
            242
        ],
        [
            242,
            238
        ],
        [
            46,
            70
        ],
        [
            70,
            156
        ],
        [
            156,
            46
        ],
        [
            78,
            62
        ],
        [
            62,
            96
        ],
        [
            96,
            78
        ],
        [
            46,
            53
        ],
        [
            53,
            63
        ],
        [
            63,
            46
        ],
        [
            143,
            34
        ],
        [
            34,
            227
        ],
        [
            227,
            143
        ],
        [
            123,
            117
        ],
        [
            117,
            111
        ],
        [
            111,
            123
        ],
        [
            44,
            125
        ],
        [
            125,
            19
        ],
        [
            19,
            44
        ],
        [
            236,
            134
        ],
        [
            134,
            51
        ],
        [
            51,
            236
        ],
        [
            216,
            206
        ],
        [
            206,
            205
        ],
        [
            205,
            216
        ],
        [
            154,
            153
        ],
        [
            153,
            22
        ],
        [
            22,
            154
        ],
        [
            39,
            37
        ],
        [
            37,
            167
        ],
        [
            167,
            39
        ],
        [
            200,
            201
        ],
        [
            201,
            208
        ],
        [
            208,
            200
        ],
        [
            36,
            142
        ],
        [
            142,
            100
        ],
        [
            100,
            36
        ],
        [
            57,
            212
        ],
        [
            212,
            202
        ],
        [
            202,
            57
        ],
        [
            20,
            60
        ],
        [
            60,
            99
        ],
        [
            99,
            20
        ],
        [
            28,
            158
        ],
        [
            158,
            157
        ],
        [
            157,
            28
        ],
        [
            35,
            226
        ],
        [
            226,
            113
        ],
        [
            113,
            35
        ],
        [
            160,
            159
        ],
        [
            159,
            27
        ],
        [
            27,
            160
        ],
        [
            204,
            202
        ],
        [
            202,
            210
        ],
        [
            210,
            204
        ],
        [
            113,
            225
        ],
        [
            225,
            46
        ],
        [
            46,
            113
        ],
        [
            43,
            202
        ],
        [
            202,
            204
        ],
        [
            204,
            43
        ],
        [
            62,
            76
        ],
        [
            76,
            77
        ],
        [
            77,
            62
        ],
        [
            137,
            123
        ],
        [
            123,
            116
        ],
        [
            116,
            137
        ],
        [
            41,
            38
        ],
        [
            38,
            72
        ],
        [
            72,
            41
        ],
        [
            203,
            129
        ],
        [
            129,
            142
        ],
        [
            142,
            203
        ],
        [
            64,
            98
        ],
        [
            98,
            240
        ],
        [
            240,
            64
        ],
        [
            49,
            102
        ],
        [
            102,
            64
        ],
        [
            64,
            49
        ],
        [
            41,
            73
        ],
        [
            73,
            74
        ],
        [
            74,
            41
        ],
        [
            212,
            216
        ],
        [
            216,
            207
        ],
        [
            207,
            212
        ],
        [
            42,
            74
        ],
        [
            74,
            184
        ],
        [
            184,
            42
        ],
        [
            169,
            170
        ],
        [
            170,
            211
        ],
        [
            211,
            169
        ],
        [
            170,
            149
        ],
        [
            149,
            176
        ],
        [
            176,
            170
        ],
        [
            105,
            66
        ],
        [
            66,
            69
        ],
        [
            69,
            105
        ],
        [
            122,
            6
        ],
        [
            6,
            168
        ],
        [
            168,
            122
        ],
        [
            123,
            147
        ],
        [
            147,
            187
        ],
        [
            187,
            123
        ],
        [
            96,
            77
        ],
        [
            77,
            90
        ],
        [
            90,
            96
        ],
        [
            65,
            55
        ],
        [
            55,
            107
        ],
        [
            107,
            65
        ],
        [
            89,
            90
        ],
        [
            90,
            180
        ],
        [
            180,
            89
        ],
        [
            101,
            100
        ],
        [
            100,
            120
        ],
        [
            120,
            101
        ],
        [
            63,
            105
        ],
        [
            105,
            104
        ],
        [
            104,
            63
        ],
        [
            93,
            137
        ],
        [
            137,
            227
        ],
        [
            227,
            93
        ],
        [
            15,
            86
        ],
        [
            86,
            85
        ],
        [
            85,
            15
        ],
        [
            129,
            102
        ],
        [
            102,
            49
        ],
        [
            49,
            129
        ],
        [
            14,
            87
        ],
        [
            87,
            86
        ],
        [
            86,
            14
        ],
        [
            55,
            8
        ],
        [
            8,
            9
        ],
        [
            9,
            55
        ],
        [
            100,
            47
        ],
        [
            47,
            121
        ],
        [
            121,
            100
        ],
        [
            145,
            23
        ],
        [
            23,
            22
        ],
        [
            22,
            145
        ],
        [
            88,
            89
        ],
        [
            89,
            179
        ],
        [
            179,
            88
        ],
        [
            6,
            122
        ],
        [
            122,
            196
        ],
        [
            196,
            6
        ],
        [
            88,
            95
        ],
        [
            95,
            96
        ],
        [
            96,
            88
        ],
        [
            138,
            172
        ],
        [
            172,
            136
        ],
        [
            136,
            138
        ],
        [
            215,
            58
        ],
        [
            58,
            172
        ],
        [
            172,
            215
        ],
        [
            115,
            48
        ],
        [
            48,
            219
        ],
        [
            219,
            115
        ],
        [
            42,
            80
        ],
        [
            80,
            81
        ],
        [
            81,
            42
        ],
        [
            195,
            3
        ],
        [
            3,
            51
        ],
        [
            51,
            195
        ],
        [
            43,
            146
        ],
        [
            146,
            61
        ],
        [
            61,
            43
        ],
        [
            171,
            175
        ],
        [
            175,
            199
        ],
        [
            199,
            171
        ],
        [
            81,
            82
        ],
        [
            82,
            38
        ],
        [
            38,
            81
        ],
        [
            53,
            46
        ],
        [
            46,
            225
        ],
        [
            225,
            53
        ],
        [
            144,
            163
        ],
        [
            163,
            110
        ],
        [
            110,
            144
        ],
        [
            52,
            65
        ],
        [
            65,
            66
        ],
        [
            66,
            52
        ],
        [
            229,
            228
        ],
        [
            228,
            117
        ],
        [
            117,
            229
        ],
        [
            34,
            127
        ],
        [
            127,
            234
        ],
        [
            234,
            34
        ],
        [
            107,
            108
        ],
        [
            108,
            69
        ],
        [
            69,
            107
        ],
        [
            109,
            108
        ],
        [
            108,
            151
        ],
        [
            151,
            109
        ],
        [
            48,
            64
        ],
        [
            64,
            235
        ],
        [
            235,
            48
        ],
        [
            62,
            78
        ],
        [
            78,
            191
        ],
        [
            191,
            62
        ],
        [
            129,
            209
        ],
        [
            209,
            126
        ],
        [
            126,
            129
        ],
        [
            111,
            35
        ],
        [
            35,
            143
        ],
        [
            143,
            111
        ],
        [
            117,
            123
        ],
        [
            123,
            50
        ],
        [
            50,
            117
        ],
        [
            222,
            65
        ],
        [
            65,
            52
        ],
        [
            52,
            222
        ],
        [
            19,
            125
        ],
        [
            125,
            141
        ],
        [
            141,
            19
        ],
        [
            221,
            55
        ],
        [
            55,
            65
        ],
        [
            65,
            221
        ],
        [
            3,
            195
        ],
        [
            195,
            197
        ],
        [
            197,
            3
        ],
        [
            25,
            7
        ],
        [
            7,
            33
        ],
        [
            33,
            25
        ],
        [
            220,
            237
        ],
        [
            237,
            44
        ],
        [
            44,
            220
        ],
        [
            70,
            71
        ],
        [
            71,
            139
        ],
        [
            139,
            70
        ],
        [
            122,
            193
        ],
        [
            193,
            245
        ],
        [
            245,
            122
        ],
        [
            247,
            130
        ],
        [
            130,
            33
        ],
        [
            33,
            247
        ],
        [
            71,
            21
        ],
        [
            21,
            162
        ],
        [
            162,
            71
        ],
        [
            170,
            169
        ],
        [
            169,
            150
        ],
        [
            150,
            170
        ],
        [
            188,
            174
        ],
        [
            174,
            196
        ],
        [
            196,
            188
        ],
        [
            216,
            186
        ],
        [
            186,
            92
        ],
        [
            92,
            216
        ],
        [
            2,
            97
        ],
        [
            97,
            167
        ],
        [
            167,
            2
        ],
        [
            141,
            125
        ],
        [
            125,
            241
        ],
        [
            241,
            141
        ],
        [
            164,
            167
        ],
        [
            167,
            37
        ],
        [
            37,
            164
        ],
        [
            72,
            38
        ],
        [
            38,
            12
        ],
        [
            12,
            72
        ],
        [
            38,
            82
        ],
        [
            82,
            13
        ],
        [
            13,
            38
        ],
        [
            63,
            68
        ],
        [
            68,
            71
        ],
        [
            71,
            63
        ],
        [
            226,
            35
        ],
        [
            35,
            111
        ],
        [
            111,
            226
        ],
        [
            101,
            50
        ],
        [
            50,
            205
        ],
        [
            205,
            101
        ],
        [
            206,
            92
        ],
        [
            92,
            165
        ],
        [
            165,
            206
        ],
        [
            209,
            198
        ],
        [
            198,
            217
        ],
        [
            217,
            209
        ],
        [
            165,
            167
        ],
        [
            167,
            97
        ],
        [
            97,
            165
        ],
        [
            220,
            115
        ],
        [
            115,
            218
        ],
        [
            218,
            220
        ],
        [
            133,
            112
        ],
        [
            112,
            243
        ],
        [
            243,
            133
        ],
        [
            239,
            238
        ],
        [
            238,
            241
        ],
        [
            241,
            239
        ],
        [
            214,
            135
        ],
        [
            135,
            169
        ],
        [
            169,
            214
        ],
        [
            190,
            173
        ],
        [
            173,
            133
        ],
        [
            133,
            190
        ],
        [
            171,
            208
        ],
        [
            208,
            32
        ],
        [
            32,
            171
        ],
        [
            125,
            44
        ],
        [
            44,
            237
        ],
        [
            237,
            125
        ],
        [
            86,
            87
        ],
        [
            87,
            178
        ],
        [
            178,
            86
        ],
        [
            85,
            86
        ],
        [
            86,
            179
        ],
        [
            179,
            85
        ],
        [
            84,
            85
        ],
        [
            85,
            180
        ],
        [
            180,
            84
        ],
        [
            83,
            84
        ],
        [
            84,
            181
        ],
        [
            181,
            83
        ],
        [
            201,
            83
        ],
        [
            83,
            182
        ],
        [
            182,
            201
        ],
        [
            137,
            93
        ],
        [
            93,
            132
        ],
        [
            132,
            137
        ],
        [
            76,
            62
        ],
        [
            62,
            183
        ],
        [
            183,
            76
        ],
        [
            61,
            76
        ],
        [
            76,
            184
        ],
        [
            184,
            61
        ],
        [
            57,
            61
        ],
        [
            61,
            185
        ],
        [
            185,
            57
        ],
        [
            212,
            57
        ],
        [
            57,
            186
        ],
        [
            186,
            212
        ],
        [
            214,
            207
        ],
        [
            207,
            187
        ],
        [
            187,
            214
        ],
        [
            34,
            143
        ],
        [
            143,
            156
        ],
        [
            156,
            34
        ],
        [
            79,
            239
        ],
        [
            239,
            237
        ],
        [
            237,
            79
        ],
        [
            123,
            137
        ],
        [
            137,
            177
        ],
        [
            177,
            123
        ],
        [
            44,
            1
        ],
        [
            1,
            4
        ],
        [
            4,
            44
        ],
        [
            201,
            194
        ],
        [
            194,
            32
        ],
        [
            32,
            201
        ],
        [
            64,
            102
        ],
        [
            102,
            129
        ],
        [
            129,
            64
        ],
        [
            213,
            215
        ],
        [
            215,
            138
        ],
        [
            138,
            213
        ],
        [
            59,
            166
        ],
        [
            166,
            219
        ],
        [
            219,
            59
        ],
        [
            242,
            99
        ],
        [
            99,
            97
        ],
        [
            97,
            242
        ],
        [
            2,
            94
        ],
        [
            94,
            141
        ],
        [
            141,
            2
        ],
        [
            75,
            59
        ],
        [
            59,
            235
        ],
        [
            235,
            75
        ],
        [
            24,
            110
        ],
        [
            110,
            228
        ],
        [
            228,
            24
        ],
        [
            25,
            130
        ],
        [
            130,
            226
        ],
        [
            226,
            25
        ],
        [
            23,
            24
        ],
        [
            24,
            229
        ],
        [
            229,
            23
        ],
        [
            22,
            23
        ],
        [
            23,
            230
        ],
        [
            230,
            22
        ],
        [
            26,
            22
        ],
        [
            22,
            231
        ],
        [
            231,
            26
        ],
        [
            112,
            26
        ],
        [
            26,
            232
        ],
        [
            232,
            112
        ],
        [
            189,
            190
        ],
        [
            190,
            243
        ],
        [
            243,
            189
        ],
        [
            221,
            56
        ],
        [
            56,
            190
        ],
        [
            190,
            221
        ],
        [
            28,
            56
        ],
        [
            56,
            221
        ],
        [
            221,
            28
        ],
        [
            27,
            28
        ],
        [
            28,
            222
        ],
        [
            222,
            27
        ],
        [
            29,
            27
        ],
        [
            27,
            223
        ],
        [
            223,
            29
        ],
        [
            30,
            29
        ],
        [
            29,
            224
        ],
        [
            224,
            30
        ],
        [
            247,
            30
        ],
        [
            30,
            225
        ],
        [
            225,
            247
        ],
        [
            238,
            79
        ],
        [
            79,
            20
        ],
        [
            20,
            238
        ],
        [
            166,
            59
        ],
        [
            59,
            75
        ],
        [
            75,
            166
        ],
        [
            60,
            75
        ],
        [
            75,
            240
        ],
        [
            240,
            60
        ],
        [
            147,
            177
        ],
        [
            177,
            215
        ],
        [
            215,
            147
        ],
        [
            20,
            79
        ],
        [
            79,
            166
        ],
        [
            166,
            20
        ],
        [
            187,
            147
        ],
        [
            147,
            213
        ],
        [
            213,
            187
        ],
        [
            112,
            233
        ],
        [
            233,
            244
        ],
        [
            244,
            112
        ],
        [
            233,
            128
        ],
        [
            128,
            245
        ],
        [
            245,
            233
        ],
        [
            128,
            114
        ],
        [
            114,
            188
        ],
        [
            188,
            128
        ],
        [
            114,
            217
        ],
        [
            217,
            174
        ],
        [
            174,
            114
        ],
        [
            131,
            115
        ],
        [
            115,
            220
        ],
        [
            220,
            131
        ],
        [
            217,
            198
        ],
        [
            198,
            236
        ],
        [
            236,
            217
        ],
        [
            198,
            131
        ],
        [
            131,
            134
        ],
        [
            134,
            198
        ],
        [
            177,
            132
        ],
        [
            132,
            58
        ],
        [
            58,
            177
        ],
        [
            143,
            35
        ],
        [
            35,
            124
        ],
        [
            124,
            143
        ],
        [
            110,
            163
        ],
        [
            163,
            7
        ],
        [
            7,
            110
        ],
        [
            228,
            110
        ],
        [
            110,
            25
        ],
        [
            25,
            228
        ],
        [
            356,
            389
        ],
        [
            389,
            368
        ],
        [
            368,
            356
        ],
        [
            11,
            302
        ],
        [
            302,
            267
        ],
        [
            267,
            11
        ],
        [
            452,
            350
        ],
        [
            350,
            349
        ],
        [
            349,
            452
        ],
        [
            302,
            303
        ],
        [
            303,
            269
        ],
        [
            269,
            302
        ],
        [
            357,
            343
        ],
        [
            343,
            277
        ],
        [
            277,
            357
        ],
        [
            452,
            453
        ],
        [
            453,
            357
        ],
        [
            357,
            452
        ],
        [
            333,
            332
        ],
        [
            332,
            297
        ],
        [
            297,
            333
        ],
        [
            175,
            152
        ],
        [
            152,
            377
        ],
        [
            377,
            175
        ],
        [
            347,
            348
        ],
        [
            348,
            330
        ],
        [
            330,
            347
        ],
        [
            303,
            304
        ],
        [
            304,
            270
        ],
        [
            270,
            303
        ],
        [
            9,
            336
        ],
        [
            336,
            337
        ],
        [
            337,
            9
        ],
        [
            278,
            279
        ],
        [
            279,
            360
        ],
        [
            360,
            278
        ],
        [
            418,
            262
        ],
        [
            262,
            431
        ],
        [
            431,
            418
        ],
        [
            304,
            408
        ],
        [
            408,
            409
        ],
        [
            409,
            304
        ],
        [
            310,
            415
        ],
        [
            415,
            407
        ],
        [
            407,
            310
        ],
        [
            270,
            409
        ],
        [
            409,
            410
        ],
        [
            410,
            270
        ],
        [
            450,
            348
        ],
        [
            348,
            347
        ],
        [
            347,
            450
        ],
        [
            422,
            430
        ],
        [
            430,
            434
        ],
        [
            434,
            422
        ],
        [
            313,
            314
        ],
        [
            314,
            17
        ],
        [
            17,
            313
        ],
        [
            306,
            307
        ],
        [
            307,
            375
        ],
        [
            375,
            306
        ],
        [
            387,
            388
        ],
        [
            388,
            260
        ],
        [
            260,
            387
        ],
        [
            286,
            414
        ],
        [
            414,
            398
        ],
        [
            398,
            286
        ],
        [
            335,
            406
        ],
        [
            406,
            418
        ],
        [
            418,
            335
        ],
        [
            364,
            367
        ],
        [
            367,
            416
        ],
        [
            416,
            364
        ],
        [
            423,
            358
        ],
        [
            358,
            327
        ],
        [
            327,
            423
        ],
        [
            251,
            284
        ],
        [
            284,
            298
        ],
        [
            298,
            251
        ],
        [
            281,
            5
        ],
        [
            5,
            4
        ],
        [
            4,
            281
        ],
        [
            373,
            374
        ],
        [
            374,
            253
        ],
        [
            253,
            373
        ],
        [
            307,
            320
        ],
        [
            320,
            321
        ],
        [
            321,
            307
        ],
        [
            425,
            427
        ],
        [
            427,
            411
        ],
        [
            411,
            425
        ],
        [
            421,
            313
        ],
        [
            313,
            18
        ],
        [
            18,
            421
        ],
        [
            321,
            405
        ],
        [
            405,
            406
        ],
        [
            406,
            321
        ],
        [
            320,
            404
        ],
        [
            404,
            405
        ],
        [
            405,
            320
        ],
        [
            315,
            16
        ],
        [
            16,
            17
        ],
        [
            17,
            315
        ],
        [
            426,
            425
        ],
        [
            425,
            266
        ],
        [
            266,
            426
        ],
        [
            377,
            400
        ],
        [
            400,
            369
        ],
        [
            369,
            377
        ],
        [
            322,
            391
        ],
        [
            391,
            269
        ],
        [
            269,
            322
        ],
        [
            417,
            465
        ],
        [
            465,
            464
        ],
        [
            464,
            417
        ],
        [
            386,
            257
        ],
        [
            257,
            258
        ],
        [
            258,
            386
        ],
        [
            466,
            260
        ],
        [
            260,
            388
        ],
        [
            388,
            466
        ],
        [
            456,
            399
        ],
        [
            399,
            419
        ],
        [
            419,
            456
        ],
        [
            284,
            332
        ],
        [
            332,
            333
        ],
        [
            333,
            284
        ],
        [
            417,
            285
        ],
        [
            285,
            8
        ],
        [
            8,
            417
        ],
        [
            346,
            340
        ],
        [
            340,
            261
        ],
        [
            261,
            346
        ],
        [
            413,
            441
        ],
        [
            441,
            285
        ],
        [
            285,
            413
        ],
        [
            327,
            460
        ],
        [
            460,
            328
        ],
        [
            328,
            327
        ],
        [
            355,
            371
        ],
        [
            371,
            329
        ],
        [
            329,
            355
        ],
        [
            392,
            439
        ],
        [
            439,
            438
        ],
        [
            438,
            392
        ],
        [
            382,
            341
        ],
        [
            341,
            256
        ],
        [
            256,
            382
        ],
        [
            429,
            420
        ],
        [
            420,
            360
        ],
        [
            360,
            429
        ],
        [
            364,
            394
        ],
        [
            394,
            379
        ],
        [
            379,
            364
        ],
        [
            277,
            343
        ],
        [
            343,
            437
        ],
        [
            437,
            277
        ],
        [
            443,
            444
        ],
        [
            444,
            283
        ],
        [
            283,
            443
        ],
        [
            275,
            440
        ],
        [
            440,
            363
        ],
        [
            363,
            275
        ],
        [
            431,
            262
        ],
        [
            262,
            369
        ],
        [
            369,
            431
        ],
        [
            297,
            338
        ],
        [
            338,
            337
        ],
        [
            337,
            297
        ],
        [
            273,
            375
        ],
        [
            375,
            321
        ],
        [
            321,
            273
        ],
        [
            450,
            451
        ],
        [
            451,
            349
        ],
        [
            349,
            450
        ],
        [
            446,
            342
        ],
        [
            342,
            467
        ],
        [
            467,
            446
        ],
        [
            293,
            334
        ],
        [
            334,
            282
        ],
        [
            282,
            293
        ],
        [
            458,
            461
        ],
        [
            461,
            462
        ],
        [
            462,
            458
        ],
        [
            276,
            353
        ],
        [
            353,
            383
        ],
        [
            383,
            276
        ],
        [
            308,
            324
        ],
        [
            324,
            325
        ],
        [
            325,
            308
        ],
        [
            276,
            300
        ],
        [
            300,
            293
        ],
        [
            293,
            276
        ],
        [
            372,
            345
        ],
        [
            345,
            447
        ],
        [
            447,
            372
        ],
        [
            352,
            345
        ],
        [
            345,
            340
        ],
        [
            340,
            352
        ],
        [
            274,
            1
        ],
        [
            1,
            19
        ],
        [
            19,
            274
        ],
        [
            456,
            248
        ],
        [
            248,
            281
        ],
        [
            281,
            456
        ],
        [
            436,
            427
        ],
        [
            427,
            425
        ],
        [
            425,
            436
        ],
        [
            381,
            256
        ],
        [
            256,
            252
        ],
        [
            252,
            381
        ],
        [
            269,
            391
        ],
        [
            391,
            393
        ],
        [
            393,
            269
        ],
        [
            200,
            199
        ],
        [
            199,
            428
        ],
        [
            428,
            200
        ],
        [
            266,
            330
        ],
        [
            330,
            329
        ],
        [
            329,
            266
        ],
        [
            287,
            273
        ],
        [
            273,
            422
        ],
        [
            422,
            287
        ],
        [
            250,
            462
        ],
        [
            462,
            328
        ],
        [
            328,
            250
        ],
        [
            258,
            286
        ],
        [
            286,
            384
        ],
        [
            384,
            258
        ],
        [
            265,
            353
        ],
        [
            353,
            342
        ],
        [
            342,
            265
        ],
        [
            387,
            259
        ],
        [
            259,
            257
        ],
        [
            257,
            387
        ],
        [
            424,
            431
        ],
        [
            431,
            430
        ],
        [
            430,
            424
        ],
        [
            342,
            353
        ],
        [
            353,
            276
        ],
        [
            276,
            342
        ],
        [
            273,
            335
        ],
        [
            335,
            424
        ],
        [
            424,
            273
        ],
        [
            292,
            325
        ],
        [
            325,
            307
        ],
        [
            307,
            292
        ],
        [
            366,
            447
        ],
        [
            447,
            345
        ],
        [
            345,
            366
        ],
        [
            271,
            303
        ],
        [
            303,
            302
        ],
        [
            302,
            271
        ],
        [
            423,
            266
        ],
        [
            266,
            371
        ],
        [
            371,
            423
        ],
        [
            294,
            455
        ],
        [
            455,
            460
        ],
        [
            460,
            294
        ],
        [
            279,
            278
        ],
        [
            278,
            294
        ],
        [
            294,
            279
        ],
        [
            271,
            272
        ],
        [
            272,
            304
        ],
        [
            304,
            271
        ],
        [
            432,
            434
        ],
        [
            434,
            427
        ],
        [
            427,
            432
        ],
        [
            272,
            407
        ],
        [
            407,
            408
        ],
        [
            408,
            272
        ],
        [
            394,
            430
        ],
        [
            430,
            431
        ],
        [
            431,
            394
        ],
        [
            395,
            369
        ],
        [
            369,
            400
        ],
        [
            400,
            395
        ],
        [
            334,
            333
        ],
        [
            333,
            299
        ],
        [
            299,
            334
        ],
        [
            351,
            417
        ],
        [
            417,
            168
        ],
        [
            168,
            351
        ],
        [
            352,
            280
        ],
        [
            280,
            411
        ],
        [
            411,
            352
        ],
        [
            325,
            319
        ],
        [
            319,
            320
        ],
        [
            320,
            325
        ],
        [
            295,
            296
        ],
        [
            296,
            336
        ],
        [
            336,
            295
        ],
        [
            319,
            403
        ],
        [
            403,
            404
        ],
        [
            404,
            319
        ],
        [
            330,
            348
        ],
        [
            348,
            349
        ],
        [
            349,
            330
        ],
        [
            293,
            298
        ],
        [
            298,
            333
        ],
        [
            333,
            293
        ],
        [
            323,
            454
        ],
        [
            454,
            447
        ],
        [
            447,
            323
        ],
        [
            15,
            16
        ],
        [
            16,
            315
        ],
        [
            315,
            15
        ],
        [
            358,
            429
        ],
        [
            429,
            279
        ],
        [
            279,
            358
        ],
        [
            14,
            15
        ],
        [
            15,
            316
        ],
        [
            316,
            14
        ],
        [
            285,
            336
        ],
        [
            336,
            9
        ],
        [
            9,
            285
        ],
        [
            329,
            349
        ],
        [
            349,
            350
        ],
        [
            350,
            329
        ],
        [
            374,
            380
        ],
        [
            380,
            252
        ],
        [
            252,
            374
        ],
        [
            318,
            402
        ],
        [
            402,
            403
        ],
        [
            403,
            318
        ],
        [
            6,
            197
        ],
        [
            197,
            419
        ],
        [
            419,
            6
        ],
        [
            318,
            319
        ],
        [
            319,
            325
        ],
        [
            325,
            318
        ],
        [
            367,
            364
        ],
        [
            364,
            365
        ],
        [
            365,
            367
        ],
        [
            435,
            367
        ],
        [
            367,
            397
        ],
        [
            397,
            435
        ],
        [
            344,
            438
        ],
        [
            438,
            439
        ],
        [
            439,
            344
        ],
        [
            272,
            271
        ],
        [
            271,
            311
        ],
        [
            311,
            272
        ],
        [
            195,
            5
        ],
        [
            5,
            281
        ],
        [
            281,
            195
        ],
        [
            273,
            287
        ],
        [
            287,
            291
        ],
        [
            291,
            273
        ],
        [
            396,
            428
        ],
        [
            428,
            199
        ],
        [
            199,
            396
        ],
        [
            311,
            271
        ],
        [
            271,
            268
        ],
        [
            268,
            311
        ],
        [
            283,
            444
        ],
        [
            444,
            445
        ],
        [
            445,
            283
        ],
        [
            373,
            254
        ],
        [
            254,
            339
        ],
        [
            339,
            373
        ],
        [
            282,
            334
        ],
        [
            334,
            296
        ],
        [
            296,
            282
        ],
        [
            449,
            347
        ],
        [
            347,
            346
        ],
        [
            346,
            449
        ],
        [
            264,
            447
        ],
        [
            447,
            454
        ],
        [
            454,
            264
        ],
        [
            336,
            296
        ],
        [
            296,
            299
        ],
        [
            299,
            336
        ],
        [
            338,
            10
        ],
        [
            10,
            151
        ],
        [
            151,
            338
        ],
        [
            278,
            439
        ],
        [
            439,
            455
        ],
        [
            455,
            278
        ],
        [
            292,
            407
        ],
        [
            407,
            415
        ],
        [
            415,
            292
        ],
        [
            358,
            371
        ],
        [
            371,
            355
        ],
        [
            355,
            358
        ],
        [
            340,
            345
        ],
        [
            345,
            372
        ],
        [
            372,
            340
        ],
        [
            346,
            347
        ],
        [
            347,
            280
        ],
        [
            280,
            346
        ],
        [
            442,
            443
        ],
        [
            443,
            282
        ],
        [
            282,
            442
        ],
        [
            19,
            94
        ],
        [
            94,
            370
        ],
        [
            370,
            19
        ],
        [
            441,
            442
        ],
        [
            442,
            295
        ],
        [
            295,
            441
        ],
        [
            248,
            419
        ],
        [
            419,
            197
        ],
        [
            197,
            248
        ],
        [
            263,
            255
        ],
        [
            255,
            359
        ],
        [
            359,
            263
        ],
        [
            440,
            275
        ],
        [
            275,
            274
        ],
        [
            274,
            440
        ],
        [
            300,
            383
        ],
        [
            383,
            368
        ],
        [
            368,
            300
        ],
        [
            351,
            412
        ],
        [
            412,
            465
        ],
        [
            465,
            351
        ],
        [
            263,
            467
        ],
        [
            467,
            466
        ],
        [
            466,
            263
        ],
        [
            301,
            368
        ],
        [
            368,
            389
        ],
        [
            389,
            301
        ],
        [
            395,
            378
        ],
        [
            378,
            379
        ],
        [
            379,
            395
        ],
        [
            412,
            351
        ],
        [
            351,
            419
        ],
        [
            419,
            412
        ],
        [
            436,
            426
        ],
        [
            426,
            322
        ],
        [
            322,
            436
        ],
        [
            2,
            164
        ],
        [
            164,
            393
        ],
        [
            393,
            2
        ],
        [
            370,
            462
        ],
        [
            462,
            461
        ],
        [
            461,
            370
        ],
        [
            164,
            0
        ],
        [
            0,
            267
        ],
        [
            267,
            164
        ],
        [
            302,
            11
        ],
        [
            11,
            12
        ],
        [
            12,
            302
        ],
        [
            268,
            12
        ],
        [
            12,
            13
        ],
        [
            13,
            268
        ],
        [
            293,
            300
        ],
        [
            300,
            301
        ],
        [
            301,
            293
        ],
        [
            446,
            261
        ],
        [
            261,
            340
        ],
        [
            340,
            446
        ],
        [
            330,
            266
        ],
        [
            266,
            425
        ],
        [
            425,
            330
        ],
        [
            426,
            423
        ],
        [
            423,
            391
        ],
        [
            391,
            426
        ],
        [
            429,
            355
        ],
        [
            355,
            437
        ],
        [
            437,
            429
        ],
        [
            391,
            327
        ],
        [
            327,
            326
        ],
        [
            326,
            391
        ],
        [
            440,
            457
        ],
        [
            457,
            438
        ],
        [
            438,
            440
        ],
        [
            341,
            382
        ],
        [
            382,
            362
        ],
        [
            362,
            341
        ],
        [
            459,
            457
        ],
        [
            457,
            461
        ],
        [
            461,
            459
        ],
        [
            434,
            430
        ],
        [
            430,
            394
        ],
        [
            394,
            434
        ],
        [
            414,
            463
        ],
        [
            463,
            362
        ],
        [
            362,
            414
        ],
        [
            396,
            369
        ],
        [
            369,
            262
        ],
        [
            262,
            396
        ],
        [
            354,
            461
        ],
        [
            461,
            457
        ],
        [
            457,
            354
        ],
        [
            316,
            403
        ],
        [
            403,
            402
        ],
        [
            402,
            316
        ],
        [
            315,
            404
        ],
        [
            404,
            403
        ],
        [
            403,
            315
        ],
        [
            314,
            405
        ],
        [
            405,
            404
        ],
        [
            404,
            314
        ],
        [
            313,
            406
        ],
        [
            406,
            405
        ],
        [
            405,
            313
        ],
        [
            421,
            418
        ],
        [
            418,
            406
        ],
        [
            406,
            421
        ],
        [
            366,
            401
        ],
        [
            401,
            361
        ],
        [
            361,
            366
        ],
        [
            306,
            408
        ],
        [
            408,
            407
        ],
        [
            407,
            306
        ],
        [
            291,
            409
        ],
        [
            409,
            408
        ],
        [
            408,
            291
        ],
        [
            287,
            410
        ],
        [
            410,
            409
        ],
        [
            409,
            287
        ],
        [
            432,
            436
        ],
        [
            436,
            410
        ],
        [
            410,
            432
        ],
        [
            434,
            416
        ],
        [
            416,
            411
        ],
        [
            411,
            434
        ],
        [
            264,
            368
        ],
        [
            368,
            383
        ],
        [
            383,
            264
        ],
        [
            309,
            438
        ],
        [
            438,
            457
        ],
        [
            457,
            309
        ],
        [
            352,
            376
        ],
        [
            376,
            401
        ],
        [
            401,
            352
        ],
        [
            274,
            275
        ],
        [
            275,
            4
        ],
        [
            4,
            274
        ],
        [
            421,
            428
        ],
        [
            428,
            262
        ],
        [
            262,
            421
        ],
        [
            294,
            327
        ],
        [
            327,
            358
        ],
        [
            358,
            294
        ],
        [
            433,
            416
        ],
        [
            416,
            367
        ],
        [
            367,
            433
        ],
        [
            289,
            455
        ],
        [
            455,
            439
        ],
        [
            439,
            289
        ],
        [
            462,
            370
        ],
        [
            370,
            326
        ],
        [
            326,
            462
        ],
        [
            2,
            326
        ],
        [
            326,
            370
        ],
        [
            370,
            2
        ],
        [
            305,
            460
        ],
        [
            460,
            455
        ],
        [
            455,
            305
        ],
        [
            254,
            449
        ],
        [
            449,
            448
        ],
        [
            448,
            254
        ],
        [
            255,
            261
        ],
        [
            261,
            446
        ],
        [
            446,
            255
        ],
        [
            253,
            450
        ],
        [
            450,
            449
        ],
        [
            449,
            253
        ],
        [
            252,
            451
        ],
        [
            451,
            450
        ],
        [
            450,
            252
        ],
        [
            256,
            452
        ],
        [
            452,
            451
        ],
        [
            451,
            256
        ],
        [
            341,
            453
        ],
        [
            453,
            452
        ],
        [
            452,
            341
        ],
        [
            413,
            464
        ],
        [
            464,
            463
        ],
        [
            463,
            413
        ],
        [
            441,
            413
        ],
        [
            413,
            414
        ],
        [
            414,
            441
        ],
        [
            258,
            442
        ],
        [
            442,
            441
        ],
        [
            441,
            258
        ],
        [
            257,
            443
        ],
        [
            443,
            442
        ],
        [
            442,
            257
        ],
        [
            259,
            444
        ],
        [
            444,
            443
        ],
        [
            443,
            259
        ],
        [
            260,
            445
        ],
        [
            445,
            444
        ],
        [
            444,
            260
        ],
        [
            467,
            342
        ],
        [
            342,
            445
        ],
        [
            445,
            467
        ],
        [
            459,
            458
        ],
        [
            458,
            250
        ],
        [
            250,
            459
        ],
        [
            289,
            392
        ],
        [
            392,
            290
        ],
        [
            290,
            289
        ],
        [
            290,
            328
        ],
        [
            328,
            460
        ],
        [
            460,
            290
        ],
        [
            376,
            433
        ],
        [
            433,
            435
        ],
        [
            435,
            376
        ],
        [
            250,
            290
        ],
        [
            290,
            392
        ],
        [
            392,
            250
        ],
        [
            411,
            416
        ],
        [
            416,
            433
        ],
        [
            433,
            411
        ],
        [
            341,
            463
        ],
        [
            463,
            464
        ],
        [
            464,
            341
        ],
        [
            453,
            464
        ],
        [
            464,
            465
        ],
        [
            465,
            453
        ],
        [
            357,
            465
        ],
        [
            465,
            412
        ],
        [
            412,
            357
        ],
        [
            343,
            412
        ],
        [
            412,
            399
        ],
        [
            399,
            343
        ],
        [
            360,
            363
        ],
        [
            363,
            440
        ],
        [
            440,
            360
        ],
        [
            437,
            399
        ],
        [
            399,
            456
        ],
        [
            456,
            437
        ],
        [
            420,
            456
        ],
        [
            456,
            363
        ],
        [
            363,
            420
        ],
        [
            401,
            435
        ],
        [
            435,
            288
        ],
        [
            288,
            401
        ],
        [
            372,
            383
        ],
        [
            383,
            353
        ],
        [
            353,
            372
        ],
        [
            339,
            255
        ],
        [
            255,
            249
        ],
        [
            249,
            339
        ],
        [
            448,
            261
        ],
        [
            261,
            255
        ],
        [
            255,
            448
        ],
        [
            133,
            243
        ],
        [
            243,
            190
        ],
        [
            190,
            133
        ],
        [
            133,
            155
        ],
        [
            155,
            112
        ],
        [
            112,
            133
        ],
        [
            33,
            246
        ],
        [
            246,
            247
        ],
        [
            247,
            33
        ],
        [
            33,
            130
        ],
        [
            130,
            25
        ],
        [
            25,
            33
        ],
        [
            398,
            384
        ],
        [
            384,
            286
        ],
        [
            286,
            398
        ],
        [
            362,
            398
        ],
        [
            398,
            414
        ],
        [
            414,
            362
        ],
        [
            362,
            463
        ],
        [
            463,
            341
        ],
        [
            341,
            362
        ],
        [
            263,
            359
        ],
        [
            359,
            467
        ],
        [
            467,
            263
        ],
        [
            263,
            249
        ],
        [
            249,
            255
        ],
        [
            255,
            263
        ],
        [
            466,
            467
        ],
        [
            467,
            260
        ],
        [
            260,
            466
        ],
        [
            75,
            60
        ],
        [
            60,
            166
        ],
        [
            166,
            75
        ],
        [
            238,
            239
        ],
        [
            239,
            79
        ],
        [
            79,
            238
        ],
        [
            162,
            127
        ],
        [
            127,
            139
        ],
        [
            139,
            162
        ],
        [
            72,
            11
        ],
        [
            11,
            37
        ],
        [
            37,
            72
        ],
        [
            121,
            232
        ],
        [
            232,
            120
        ],
        [
            120,
            121
        ],
        [
            73,
            72
        ],
        [
            72,
            39
        ],
        [
            39,
            73
        ],
        [
            114,
            128
        ],
        [
            128,
            47
        ],
        [
            47,
            114
        ],
        [
            233,
            232
        ],
        [
            232,
            128
        ],
        [
            128,
            233
        ],
        [
            103,
            104
        ],
        [
            104,
            67
        ],
        [
            67,
            103
        ],
        [
            152,
            175
        ],
        [
            175,
            148
        ],
        [
            148,
            152
        ],
        [
            119,
            118
        ],
        [
            118,
            101
        ],
        [
            101,
            119
        ],
        [
            74,
            73
        ],
        [
            73,
            40
        ],
        [
            40,
            74
        ],
        [
            107,
            9
        ],
        [
            9,
            108
        ],
        [
            108,
            107
        ],
        [
            49,
            48
        ],
        [
            48,
            131
        ],
        [
            131,
            49
        ],
        [
            32,
            194
        ],
        [
            194,
            211
        ],
        [
            211,
            32
        ],
        [
            184,
            74
        ],
        [
            74,
            185
        ],
        [
            185,
            184
        ],
        [
            191,
            80
        ],
        [
            80,
            183
        ],
        [
            183,
            191
        ],
        [
            185,
            40
        ],
        [
            40,
            186
        ],
        [
            186,
            185
        ],
        [
            119,
            230
        ],
        [
            230,
            118
        ],
        [
            118,
            119
        ],
        [
            210,
            202
        ],
        [
            202,
            214
        ],
        [
            214,
            210
        ],
        [
            84,
            83
        ],
        [
            83,
            17
        ],
        [
            17,
            84
        ],
        [
            77,
            76
        ],
        [
            76,
            146
        ],
        [
            146,
            77
        ],
        [
            161,
            160
        ],
        [
            160,
            30
        ],
        [
            30,
            161
        ],
        [
            190,
            56
        ],
        [
            56,
            173
        ],
        [
            173,
            190
        ],
        [
            182,
            106
        ],
        [
            106,
            194
        ],
        [
            194,
            182
        ],
        [
            138,
            135
        ],
        [
            135,
            192
        ],
        [
            192,
            138
        ],
        [
            129,
            203
        ],
        [
            203,
            98
        ],
        [
            98,
            129
        ],
        [
            54,
            21
        ],
        [
            21,
            68
        ],
        [
            68,
            54
        ],
        [
            5,
            51
        ],
        [
            51,
            4
        ],
        [
            4,
            5
        ],
        [
            145,
            144
        ],
        [
            144,
            23
        ],
        [
            23,
            145
        ],
        [
            90,
            77
        ],
        [
            77,
            91
        ],
        [
            91,
            90
        ],
        [
            207,
            205
        ],
        [
            205,
            187
        ],
        [
            187,
            207
        ],
        [
            83,
            201
        ],
        [
            201,
            18
        ],
        [
            18,
            83
        ],
        [
            181,
            91
        ],
        [
            91,
            182
        ],
        [
            182,
            181
        ],
        [
            180,
            90
        ],
        [
            90,
            181
        ],
        [
            181,
            180
        ],
        [
            16,
            85
        ],
        [
            85,
            17
        ],
        [
            17,
            16
        ],
        [
            205,
            206
        ],
        [
            206,
            36
        ],
        [
            36,
            205
        ],
        [
            176,
            148
        ],
        [
            148,
            140
        ],
        [
            140,
            176
        ],
        [
            165,
            92
        ],
        [
            92,
            39
        ],
        [
            39,
            165
        ],
        [
            245,
            193
        ],
        [
            193,
            244
        ],
        [
            244,
            245
        ],
        [
            27,
            159
        ],
        [
            159,
            28
        ],
        [
            28,
            27
        ],
        [
            30,
            247
        ],
        [
            247,
            161
        ],
        [
            161,
            30
        ],
        [
            174,
            236
        ],
        [
            236,
            196
        ],
        [
            196,
            174
        ],
        [
            103,
            54
        ],
        [
            54,
            104
        ],
        [
            104,
            103
        ],
        [
            55,
            193
        ],
        [
            193,
            8
        ],
        [
            8,
            55
        ],
        [
            111,
            117
        ],
        [
            117,
            31
        ],
        [
            31,
            111
        ],
        [
            221,
            189
        ],
        [
            189,
            55
        ],
        [
            55,
            221
        ],
        [
            240,
            98
        ],
        [
            98,
            99
        ],
        [
            99,
            240
        ],
        [
            142,
            126
        ],
        [
            126,
            100
        ],
        [
            100,
            142
        ],
        [
            219,
            166
        ],
        [
            166,
            218
        ],
        [
            218,
            219
        ],
        [
            112,
            155
        ],
        [
            155,
            26
        ],
        [
            26,
            112
        ],
        [
            198,
            209
        ],
        [
            209,
            131
        ],
        [
            131,
            198
        ],
        [
            169,
            135
        ],
        [
            135,
            150
        ],
        [
            150,
            169
        ],
        [
            114,
            47
        ],
        [
            47,
            217
        ],
        [
            217,
            114
        ],
        [
            224,
            223
        ],
        [
            223,
            53
        ],
        [
            53,
            224
        ],
        [
            220,
            45
        ],
        [
            45,
            134
        ],
        [
            134,
            220
        ],
        [
            32,
            211
        ],
        [
            211,
            140
        ],
        [
            140,
            32
        ],
        [
            109,
            67
        ],
        [
            67,
            108
        ],
        [
            108,
            109
        ],
        [
            146,
            43
        ],
        [
            43,
            91
        ],
        [
            91,
            146
        ],
        [
            231,
            230
        ],
        [
            230,
            120
        ],
        [
            120,
            231
        ],
        [
            113,
            226
        ],
        [
            226,
            247
        ],
        [
            247,
            113
        ],
        [
            105,
            63
        ],
        [
            63,
            52
        ],
        [
            52,
            105
        ],
        [
            241,
            238
        ],
        [
            238,
            242
        ],
        [
            242,
            241
        ],
        [
            124,
            46
        ],
        [
            46,
            156
        ],
        [
            156,
            124
        ],
        [
            95,
            78
        ],
        [
            78,
            96
        ],
        [
            96,
            95
        ],
        [
            70,
            46
        ],
        [
            46,
            63
        ],
        [
            63,
            70
        ],
        [
            116,
            143
        ],
        [
            143,
            227
        ],
        [
            227,
            116
        ],
        [
            116,
            123
        ],
        [
            123,
            111
        ],
        [
            111,
            116
        ],
        [
            1,
            44
        ],
        [
            44,
            19
        ],
        [
            19,
            1
        ],
        [
            3,
            236
        ],
        [
            236,
            51
        ],
        [
            51,
            3
        ],
        [
            207,
            216
        ],
        [
            216,
            205
        ],
        [
            205,
            207
        ],
        [
            26,
            154
        ],
        [
            154,
            22
        ],
        [
            22,
            26
        ],
        [
            165,
            39
        ],
        [
            39,
            167
        ],
        [
            167,
            165
        ],
        [
            199,
            200
        ],
        [
            200,
            208
        ],
        [
            208,
            199
        ],
        [
            101,
            36
        ],
        [
            36,
            100
        ],
        [
            100,
            101
        ],
        [
            43,
            57
        ],
        [
            57,
            202
        ],
        [
            202,
            43
        ],
        [
            242,
            20
        ],
        [
            20,
            99
        ],
        [
            99,
            242
        ],
        [
            56,
            28
        ],
        [
            28,
            157
        ],
        [
            157,
            56
        ],
        [
            124,
            35
        ],
        [
            35,
            113
        ],
        [
            113,
            124
        ],
        [
            29,
            160
        ],
        [
            160,
            27
        ],
        [
            27,
            29
        ],
        [
            211,
            204
        ],
        [
            204,
            210
        ],
        [
            210,
            211
        ],
        [
            124,
            113
        ],
        [
            113,
            46
        ],
        [
            46,
            124
        ],
        [
            106,
            43
        ],
        [
            43,
            204
        ],
        [
            204,
            106
        ],
        [
            96,
            62
        ],
        [
            62,
            77
        ],
        [
            77,
            96
        ],
        [
            227,
            137
        ],
        [
            137,
            116
        ],
        [
            116,
            227
        ],
        [
            73,
            41
        ],
        [
            41,
            72
        ],
        [
            72,
            73
        ],
        [
            36,
            203
        ],
        [
            203,
            142
        ],
        [
            142,
            36
        ],
        [
            235,
            64
        ],
        [
            64,
            240
        ],
        [
            240,
            235
        ],
        [
            48,
            49
        ],
        [
            49,
            64
        ],
        [
            64,
            48
        ],
        [
            42,
            41
        ],
        [
            41,
            74
        ],
        [
            74,
            42
        ],
        [
            214,
            212
        ],
        [
            212,
            207
        ],
        [
            207,
            214
        ],
        [
            183,
            42
        ],
        [
            42,
            184
        ],
        [
            184,
            183
        ],
        [
            210,
            169
        ],
        [
            169,
            211
        ],
        [
            211,
            210
        ],
        [
            140,
            170
        ],
        [
            170,
            176
        ],
        [
            176,
            140
        ],
        [
            104,
            105
        ],
        [
            105,
            69
        ],
        [
            69,
            104
        ],
        [
            193,
            122
        ],
        [
            122,
            168
        ],
        [
            168,
            193
        ],
        [
            50,
            123
        ],
        [
            123,
            187
        ],
        [
            187,
            50
        ],
        [
            89,
            96
        ],
        [
            96,
            90
        ],
        [
            90,
            89
        ],
        [
            66,
            65
        ],
        [
            65,
            107
        ],
        [
            107,
            66
        ],
        [
            179,
            89
        ],
        [
            89,
            180
        ],
        [
            180,
            179
        ],
        [
            119,
            101
        ],
        [
            101,
            120
        ],
        [
            120,
            119
        ],
        [
            68,
            63
        ],
        [
            63,
            104
        ],
        [
            104,
            68
        ],
        [
            234,
            93
        ],
        [
            93,
            227
        ],
        [
            227,
            234
        ],
        [
            16,
            15
        ],
        [
            15,
            85
        ],
        [
            85,
            16
        ],
        [
            209,
            129
        ],
        [
            129,
            49
        ],
        [
            49,
            209
        ],
        [
            15,
            14
        ],
        [
            14,
            86
        ],
        [
            86,
            15
        ],
        [
            107,
            55
        ],
        [
            55,
            9
        ],
        [
            9,
            107
        ],
        [
            120,
            100
        ],
        [
            100,
            121
        ],
        [
            121,
            120
        ],
        [
            153,
            145
        ],
        [
            145,
            22
        ],
        [
            22,
            153
        ],
        [
            178,
            88
        ],
        [
            88,
            179
        ],
        [
            179,
            178
        ],
        [
            197,
            6
        ],
        [
            6,
            196
        ],
        [
            196,
            197
        ],
        [
            89,
            88
        ],
        [
            88,
            96
        ],
        [
            96,
            89
        ],
        [
            135,
            138
        ],
        [
            138,
            136
        ],
        [
            136,
            135
        ],
        [
            138,
            215
        ],
        [
            215,
            172
        ],
        [
            172,
            138
        ],
        [
            218,
            115
        ],
        [
            115,
            219
        ],
        [
            219,
            218
        ],
        [
            41,
            42
        ],
        [
            42,
            81
        ],
        [
            81,
            41
        ],
        [
            5,
            195
        ],
        [
            195,
            51
        ],
        [
            51,
            5
        ],
        [
            57,
            43
        ],
        [
            43,
            61
        ],
        [
            61,
            57
        ],
        [
            208,
            171
        ],
        [
            171,
            199
        ],
        [
            199,
            208
        ],
        [
            41,
            81
        ],
        [
            81,
            38
        ],
        [
            38,
            41
        ],
        [
            224,
            53
        ],
        [
            53,
            225
        ],
        [
            225,
            224
        ],
        [
            24,
            144
        ],
        [
            144,
            110
        ],
        [
            110,
            24
        ],
        [
            105,
            52
        ],
        [
            52,
            66
        ],
        [
            66,
            105
        ],
        [
            118,
            229
        ],
        [
            229,
            117
        ],
        [
            117,
            118
        ],
        [
            227,
            34
        ],
        [
            34,
            234
        ],
        [
            234,
            227
        ],
        [
            66,
            107
        ],
        [
            107,
            69
        ],
        [
            69,
            66
        ],
        [
            10,
            109
        ],
        [
            109,
            151
        ],
        [
            151,
            10
        ],
        [
            219,
            48
        ],
        [
            48,
            235
        ],
        [
            235,
            219
        ],
        [
            183,
            62
        ],
        [
            62,
            191
        ],
        [
            191,
            183
        ],
        [
            142,
            129
        ],
        [
            129,
            126
        ],
        [
            126,
            142
        ],
        [
            116,
            111
        ],
        [
            111,
            143
        ],
        [
            143,
            116
        ],
        [
            118,
            117
        ],
        [
            117,
            50
        ],
        [
            50,
            118
        ],
        [
            223,
            222
        ],
        [
            222,
            52
        ],
        [
            52,
            223
        ],
        [
            94,
            19
        ],
        [
            19,
            141
        ],
        [
            141,
            94
        ],
        [
            222,
            221
        ],
        [
            221,
            65
        ],
        [
            65,
            222
        ],
        [
            196,
            3
        ],
        [
            3,
            197
        ],
        [
            197,
            196
        ],
        [
            45,
            220
        ],
        [
            220,
            44
        ],
        [
            44,
            45
        ],
        [
            156,
            70
        ],
        [
            70,
            139
        ],
        [
            139,
            156
        ],
        [
            188,
            122
        ],
        [
            122,
            245
        ],
        [
            245,
            188
        ],
        [
            139,
            71
        ],
        [
            71,
            162
        ],
        [
            162,
            139
        ],
        [
            149,
            170
        ],
        [
            170,
            150
        ],
        [
            150,
            149
        ],
        [
            122,
            188
        ],
        [
            188,
            196
        ],
        [
            196,
            122
        ],
        [
            206,
            216
        ],
        [
            216,
            92
        ],
        [
            92,
            206
        ],
        [
            164,
            2
        ],
        [
            2,
            167
        ],
        [
            167,
            164
        ],
        [
            242,
            141
        ],
        [
            141,
            241
        ],
        [
            241,
            242
        ],
        [
            0,
            164
        ],
        [
            164,
            37
        ],
        [
            37,
            0
        ],
        [
            11,
            72
        ],
        [
            72,
            12
        ],
        [
            12,
            11
        ],
        [
            12,
            38
        ],
        [
            38,
            13
        ],
        [
            13,
            12
        ],
        [
            70,
            63
        ],
        [
            63,
            71
        ],
        [
            71,
            70
        ],
        [
            31,
            226
        ],
        [
            226,
            111
        ],
        [
            111,
            31
        ],
        [
            36,
            101
        ],
        [
            101,
            205
        ],
        [
            205,
            36
        ],
        [
            203,
            206
        ],
        [
            206,
            165
        ],
        [
            165,
            203
        ],
        [
            126,
            209
        ],
        [
            209,
            217
        ],
        [
            217,
            126
        ],
        [
            98,
            165
        ],
        [
            165,
            97
        ],
        [
            97,
            98
        ],
        [
            237,
            220
        ],
        [
            220,
            218
        ],
        [
            218,
            237
        ],
        [
            237,
            239
        ],
        [
            239,
            241
        ],
        [
            241,
            237
        ],
        [
            210,
            214
        ],
        [
            214,
            169
        ],
        [
            169,
            210
        ],
        [
            140,
            171
        ],
        [
            171,
            32
        ],
        [
            32,
            140
        ],
        [
            241,
            125
        ],
        [
            125,
            237
        ],
        [
            237,
            241
        ],
        [
            179,
            86
        ],
        [
            86,
            178
        ],
        [
            178,
            179
        ],
        [
            180,
            85
        ],
        [
            85,
            179
        ],
        [
            179,
            180
        ],
        [
            181,
            84
        ],
        [
            84,
            180
        ],
        [
            180,
            181
        ],
        [
            182,
            83
        ],
        [
            83,
            181
        ],
        [
            181,
            182
        ],
        [
            194,
            201
        ],
        [
            201,
            182
        ],
        [
            182,
            194
        ],
        [
            177,
            137
        ],
        [
            137,
            132
        ],
        [
            132,
            177
        ],
        [
            184,
            76
        ],
        [
            76,
            183
        ],
        [
            183,
            184
        ],
        [
            185,
            61
        ],
        [
            61,
            184
        ],
        [
            184,
            185
        ],
        [
            186,
            57
        ],
        [
            57,
            185
        ],
        [
            185,
            186
        ],
        [
            216,
            212
        ],
        [
            212,
            186
        ],
        [
            186,
            216
        ],
        [
            192,
            214
        ],
        [
            214,
            187
        ],
        [
            187,
            192
        ],
        [
            139,
            34
        ],
        [
            34,
            156
        ],
        [
            156,
            139
        ],
        [
            218,
            79
        ],
        [
            79,
            237
        ],
        [
            237,
            218
        ],
        [
            147,
            123
        ],
        [
            123,
            177
        ],
        [
            177,
            147
        ],
        [
            45,
            44
        ],
        [
            44,
            4
        ],
        [
            4,
            45
        ],
        [
            208,
            201
        ],
        [
            201,
            32
        ],
        [
            32,
            208
        ],
        [
            98,
            64
        ],
        [
            64,
            129
        ],
        [
            129,
            98
        ],
        [
            192,
            213
        ],
        [
            213,
            138
        ],
        [
            138,
            192
        ],
        [
            235,
            59
        ],
        [
            59,
            219
        ],
        [
            219,
            235
        ],
        [
            141,
            242
        ],
        [
            242,
            97
        ],
        [
            97,
            141
        ],
        [
            97,
            2
        ],
        [
            2,
            141
        ],
        [
            141,
            97
        ],
        [
            240,
            75
        ],
        [
            75,
            235
        ],
        [
            235,
            240
        ],
        [
            229,
            24
        ],
        [
            24,
            228
        ],
        [
            228,
            229
        ],
        [
            31,
            25
        ],
        [
            25,
            226
        ],
        [
            226,
            31
        ],
        [
            230,
            23
        ],
        [
            23,
            229
        ],
        [
            229,
            230
        ],
        [
            231,
            22
        ],
        [
            22,
            230
        ],
        [
            230,
            231
        ],
        [
            232,
            26
        ],
        [
            26,
            231
        ],
        [
            231,
            232
        ],
        [
            233,
            112
        ],
        [
            112,
            232
        ],
        [
            232,
            233
        ],
        [
            244,
            189
        ],
        [
            189,
            243
        ],
        [
            243,
            244
        ],
        [
            189,
            221
        ],
        [
            221,
            190
        ],
        [
            190,
            189
        ],
        [
            222,
            28
        ],
        [
            28,
            221
        ],
        [
            221,
            222
        ],
        [
            223,
            27
        ],
        [
            27,
            222
        ],
        [
            222,
            223
        ],
        [
            224,
            29
        ],
        [
            29,
            223
        ],
        [
            223,
            224
        ],
        [
            225,
            30
        ],
        [
            30,
            224
        ],
        [
            224,
            225
        ],
        [
            113,
            247
        ],
        [
            247,
            225
        ],
        [
            225,
            113
        ],
        [
            99,
            60
        ],
        [
            60,
            240
        ],
        [
            240,
            99
        ],
        [
            213,
            147
        ],
        [
            147,
            215
        ],
        [
            215,
            213
        ],
        [
            60,
            20
        ],
        [
            20,
            166
        ],
        [
            166,
            60
        ],
        [
            192,
            187
        ],
        [
            187,
            213
        ],
        [
            213,
            192
        ],
        [
            243,
            112
        ],
        [
            112,
            244
        ],
        [
            244,
            243
        ],
        [
            244,
            233
        ],
        [
            233,
            245
        ],
        [
            245,
            244
        ],
        [
            245,
            128
        ],
        [
            128,
            188
        ],
        [
            188,
            245
        ],
        [
            188,
            114
        ],
        [
            114,
            174
        ],
        [
            174,
            188
        ],
        [
            134,
            131
        ],
        [
            131,
            220
        ],
        [
            220,
            134
        ],
        [
            174,
            217
        ],
        [
            217,
            236
        ],
        [
            236,
            174
        ],
        [
            236,
            198
        ],
        [
            198,
            134
        ],
        [
            134,
            236
        ],
        [
            215,
            177
        ],
        [
            177,
            58
        ],
        [
            58,
            215
        ],
        [
            156,
            143
        ],
        [
            143,
            124
        ],
        [
            124,
            156
        ],
        [
            25,
            110
        ],
        [
            110,
            7
        ],
        [
            7,
            25
        ],
        [
            31,
            228
        ],
        [
            228,
            25
        ],
        [
            25,
            31
        ],
        [
            264,
            356
        ],
        [
            356,
            368
        ],
        [
            368,
            264
        ],
        [
            0,
            11
        ],
        [
            11,
            267
        ],
        [
            267,
            0
        ],
        [
            451,
            452
        ],
        [
            452,
            349
        ],
        [
            349,
            451
        ],
        [
            267,
            302
        ],
        [
            302,
            269
        ],
        [
            269,
            267
        ],
        [
            350,
            357
        ],
        [
            357,
            277
        ],
        [
            277,
            350
        ],
        [
            350,
            452
        ],
        [
            452,
            357
        ],
        [
            357,
            350
        ],
        [
            299,
            333
        ],
        [
            333,
            297
        ],
        [
            297,
            299
        ],
        [
            396,
            175
        ],
        [
            175,
            377
        ],
        [
            377,
            396
        ],
        [
            280,
            347
        ],
        [
            347,
            330
        ],
        [
            330,
            280
        ],
        [
            269,
            303
        ],
        [
            303,
            270
        ],
        [
            270,
            269
        ],
        [
            151,
            9
        ],
        [
            9,
            337
        ],
        [
            337,
            151
        ],
        [
            344,
            278
        ],
        [
            278,
            360
        ],
        [
            360,
            344
        ],
        [
            424,
            418
        ],
        [
            418,
            431
        ],
        [
            431,
            424
        ],
        [
            270,
            304
        ],
        [
            304,
            409
        ],
        [
            409,
            270
        ],
        [
            272,
            310
        ],
        [
            310,
            407
        ],
        [
            407,
            272
        ],
        [
            322,
            270
        ],
        [
            270,
            410
        ],
        [
            410,
            322
        ],
        [
            449,
            450
        ],
        [
            450,
            347
        ],
        [
            347,
            449
        ],
        [
            432,
            422
        ],
        [
            422,
            434
        ],
        [
            434,
            432
        ],
        [
            18,
            313
        ],
        [
            313,
            17
        ],
        [
            17,
            18
        ],
        [
            291,
            306
        ],
        [
            306,
            375
        ],
        [
            375,
            291
        ],
        [
            259,
            387
        ],
        [
            387,
            260
        ],
        [
            260,
            259
        ],
        [
            424,
            335
        ],
        [
            335,
            418
        ],
        [
            418,
            424
        ],
        [
            434,
            364
        ],
        [
            364,
            416
        ],
        [
            416,
            434
        ],
        [
            391,
            423
        ],
        [
            423,
            327
        ],
        [
            327,
            391
        ],
        [
            301,
            251
        ],
        [
            251,
            298
        ],
        [
            298,
            301
        ],
        [
            275,
            281
        ],
        [
            281,
            4
        ],
        [
            4,
            275
        ],
        [
            254,
            373
        ],
        [
            373,
            253
        ],
        [
            253,
            254
        ],
        [
            375,
            307
        ],
        [
            307,
            321
        ],
        [
            321,
            375
        ],
        [
            280,
            425
        ],
        [
            425,
            411
        ],
        [
            411,
            280
        ],
        [
            200,
            421
        ],
        [
            421,
            18
        ],
        [
            18,
            200
        ],
        [
            335,
            321
        ],
        [
            321,
            406
        ],
        [
            406,
            335
        ],
        [
            321,
            320
        ],
        [
            320,
            405
        ],
        [
            405,
            321
        ],
        [
            314,
            315
        ],
        [
            315,
            17
        ],
        [
            17,
            314
        ],
        [
            423,
            426
        ],
        [
            426,
            266
        ],
        [
            266,
            423
        ],
        [
            396,
            377
        ],
        [
            377,
            369
        ],
        [
            369,
            396
        ],
        [
            270,
            322
        ],
        [
            322,
            269
        ],
        [
            269,
            270
        ],
        [
            413,
            417
        ],
        [
            417,
            464
        ],
        [
            464,
            413
        ],
        [
            385,
            386
        ],
        [
            386,
            258
        ],
        [
            258,
            385
        ],
        [
            248,
            456
        ],
        [
            456,
            419
        ],
        [
            419,
            248
        ],
        [
            298,
            284
        ],
        [
            284,
            333
        ],
        [
            333,
            298
        ],
        [
            168,
            417
        ],
        [
            417,
            8
        ],
        [
            8,
            168
        ],
        [
            448,
            346
        ],
        [
            346,
            261
        ],
        [
            261,
            448
        ],
        [
            417,
            413
        ],
        [
            413,
            285
        ],
        [
            285,
            417
        ],
        [
            326,
            327
        ],
        [
            327,
            328
        ],
        [
            328,
            326
        ],
        [
            277,
            355
        ],
        [
            355,
            329
        ],
        [
            329,
            277
        ],
        [
            309,
            392
        ],
        [
            392,
            438
        ],
        [
            438,
            309
        ],
        [
            381,
            382
        ],
        [
            382,
            256
        ],
        [
            256,
            381
        ],
        [
            279,
            429
        ],
        [
            429,
            360
        ],
        [
            360,
            279
        ],
        [
            365,
            364
        ],
        [
            364,
            379
        ],
        [
            379,
            365
        ],
        [
            355,
            277
        ],
        [
            277,
            437
        ],
        [
            437,
            355
        ],
        [
            282,
            443
        ],
        [
            443,
            283
        ],
        [
            283,
            282
        ],
        [
            281,
            275
        ],
        [
            275,
            363
        ],
        [
            363,
            281
        ],
        [
            395,
            431
        ],
        [
            431,
            369
        ],
        [
            369,
            395
        ],
        [
            299,
            297
        ],
        [
            297,
            337
        ],
        [
            337,
            299
        ],
        [
            335,
            273
        ],
        [
            273,
            321
        ],
        [
            321,
            335
        ],
        [
            348,
            450
        ],
        [
            450,
            349
        ],
        [
            349,
            348
        ],
        [
            359,
            446
        ],
        [
            446,
            467
        ],
        [
            467,
            359
        ],
        [
            283,
            293
        ],
        [
            293,
            282
        ],
        [
            282,
            283
        ],
        [
            250,
            458
        ],
        [
            458,
            462
        ],
        [
            462,
            250
        ],
        [
            300,
            276
        ],
        [
            276,
            383
        ],
        [
            383,
            300
        ],
        [
            292,
            308
        ],
        [
            308,
            325
        ],
        [
            325,
            292
        ],
        [
            283,
            276
        ],
        [
            276,
            293
        ],
        [
            293,
            283
        ],
        [
            264,
            372
        ],
        [
            372,
            447
        ],
        [
            447,
            264
        ],
        [
            346,
            352
        ],
        [
            352,
            340
        ],
        [
            340,
            346
        ],
        [
            354,
            274
        ],
        [
            274,
            19
        ],
        [
            19,
            354
        ],
        [
            363,
            456
        ],
        [
            456,
            281
        ],
        [
            281,
            363
        ],
        [
            426,
            436
        ],
        [
            436,
            425
        ],
        [
            425,
            426
        ],
        [
            380,
            381
        ],
        [
            381,
            252
        ],
        [
            252,
            380
        ],
        [
            267,
            269
        ],
        [
            269,
            393
        ],
        [
            393,
            267
        ],
        [
            421,
            200
        ],
        [
            200,
            428
        ],
        [
            428,
            421
        ],
        [
            371,
            266
        ],
        [
            266,
            329
        ],
        [
            329,
            371
        ],
        [
            432,
            287
        ],
        [
            287,
            422
        ],
        [
            422,
            432
        ],
        [
            290,
            250
        ],
        [
            250,
            328
        ],
        [
            328,
            290
        ],
        [
            385,
            258
        ],
        [
            258,
            384
        ],
        [
            384,
            385
        ],
        [
            446,
            265
        ],
        [
            265,
            342
        ],
        [
            342,
            446
        ],
        [
            386,
            387
        ],
        [
            387,
            257
        ],
        [
            257,
            386
        ],
        [
            422,
            424
        ],
        [
            424,
            430
        ],
        [
            430,
            422
        ],
        [
            445,
            342
        ],
        [
            342,
            276
        ],
        [
            276,
            445
        ],
        [
            422,
            273
        ],
        [
            273,
            424
        ],
        [
            424,
            422
        ],
        [
            306,
            292
        ],
        [
            292,
            307
        ],
        [
            307,
            306
        ],
        [
            352,
            366
        ],
        [
            366,
            345
        ],
        [
            345,
            352
        ],
        [
            268,
            271
        ],
        [
            271,
            302
        ],
        [
            302,
            268
        ],
        [
            358,
            423
        ],
        [
            423,
            371
        ],
        [
            371,
            358
        ],
        [
            327,
            294
        ],
        [
            294,
            460
        ],
        [
            460,
            327
        ],
        [
            331,
            279
        ],
        [
            279,
            294
        ],
        [
            294,
            331
        ],
        [
            303,
            271
        ],
        [
            271,
            304
        ],
        [
            304,
            303
        ],
        [
            436,
            432
        ],
        [
            432,
            427
        ],
        [
            427,
            436
        ],
        [
            304,
            272
        ],
        [
            272,
            408
        ],
        [
            408,
            304
        ],
        [
            395,
            394
        ],
        [
            394,
            431
        ],
        [
            431,
            395
        ],
        [
            378,
            395
        ],
        [
            395,
            400
        ],
        [
            400,
            378
        ],
        [
            296,
            334
        ],
        [
            334,
            299
        ],
        [
            299,
            296
        ],
        [
            6,
            351
        ],
        [
            351,
            168
        ],
        [
            168,
            6
        ],
        [
            376,
            352
        ],
        [
            352,
            411
        ],
        [
            411,
            376
        ],
        [
            307,
            325
        ],
        [
            325,
            320
        ],
        [
            320,
            307
        ],
        [
            285,
            295
        ],
        [
            295,
            336
        ],
        [
            336,
            285
        ],
        [
            320,
            319
        ],
        [
            319,
            404
        ],
        [
            404,
            320
        ],
        [
            329,
            330
        ],
        [
            330,
            349
        ],
        [
            349,
            329
        ],
        [
            334,
            293
        ],
        [
            293,
            333
        ],
        [
            333,
            334
        ],
        [
            366,
            323
        ],
        [
            323,
            447
        ],
        [
            447,
            366
        ],
        [
            316,
            15
        ],
        [
            15,
            315
        ],
        [
            315,
            316
        ],
        [
            331,
            358
        ],
        [
            358,
            279
        ],
        [
            279,
            331
        ],
        [
            317,
            14
        ],
        [
            14,
            316
        ],
        [
            316,
            317
        ],
        [
            8,
            285
        ],
        [
            285,
            9
        ],
        [
            9,
            8
        ],
        [
            277,
            329
        ],
        [
            329,
            350
        ],
        [
            350,
            277
        ],
        [
            253,
            374
        ],
        [
            374,
            252
        ],
        [
            252,
            253
        ],
        [
            319,
            318
        ],
        [
            318,
            403
        ],
        [
            403,
            319
        ],
        [
            351,
            6
        ],
        [
            6,
            419
        ],
        [
            419,
            351
        ],
        [
            324,
            318
        ],
        [
            318,
            325
        ],
        [
            325,
            324
        ],
        [
            397,
            367
        ],
        [
            367,
            365
        ],
        [
            365,
            397
        ],
        [
            288,
            435
        ],
        [
            435,
            397
        ],
        [
            397,
            288
        ],
        [
            278,
            344
        ],
        [
            344,
            439
        ],
        [
            439,
            278
        ],
        [
            310,
            272
        ],
        [
            272,
            311
        ],
        [
            311,
            310
        ],
        [
            248,
            195
        ],
        [
            195,
            281
        ],
        [
            281,
            248
        ],
        [
            375,
            273
        ],
        [
            273,
            291
        ],
        [
            291,
            375
        ],
        [
            175,
            396
        ],
        [
            396,
            199
        ],
        [
            199,
            175
        ],
        [
            312,
            311
        ],
        [
            311,
            268
        ],
        [
            268,
            312
        ],
        [
            276,
            283
        ],
        [
            283,
            445
        ],
        [
            445,
            276
        ],
        [
            390,
            373
        ],
        [
            373,
            339
        ],
        [
            339,
            390
        ],
        [
            295,
            282
        ],
        [
            282,
            296
        ],
        [
            296,
            295
        ],
        [
            448,
            449
        ],
        [
            449,
            346
        ],
        [
            346,
            448
        ],
        [
            356,
            264
        ],
        [
            264,
            454
        ],
        [
            454,
            356
        ],
        [
            337,
            336
        ],
        [
            336,
            299
        ],
        [
            299,
            337
        ],
        [
            337,
            338
        ],
        [
            338,
            151
        ],
        [
            151,
            337
        ],
        [
            294,
            278
        ],
        [
            278,
            455
        ],
        [
            455,
            294
        ],
        [
            308,
            292
        ],
        [
            292,
            415
        ],
        [
            415,
            308
        ],
        [
            429,
            358
        ],
        [
            358,
            355
        ],
        [
            355,
            429
        ],
        [
            265,
            340
        ],
        [
            340,
            372
        ],
        [
            372,
            265
        ],
        [
            352,
            346
        ],
        [
            346,
            280
        ],
        [
            280,
            352
        ],
        [
            295,
            442
        ],
        [
            442,
            282
        ],
        [
            282,
            295
        ],
        [
            354,
            19
        ],
        [
            19,
            370
        ],
        [
            370,
            354
        ],
        [
            285,
            441
        ],
        [
            441,
            295
        ],
        [
            295,
            285
        ],
        [
            195,
            248
        ],
        [
            248,
            197
        ],
        [
            197,
            195
        ],
        [
            457,
            440
        ],
        [
            440,
            274
        ],
        [
            274,
            457
        ],
        [
            301,
            300
        ],
        [
            300,
            368
        ],
        [
            368,
            301
        ],
        [
            417,
            351
        ],
        [
            351,
            465
        ],
        [
            465,
            417
        ],
        [
            251,
            301
        ],
        [
            301,
            389
        ],
        [
            389,
            251
        ],
        [
            394,
            395
        ],
        [
            395,
            379
        ],
        [
            379,
            394
        ],
        [
            399,
            412
        ],
        [
            412,
            419
        ],
        [
            419,
            399
        ],
        [
            410,
            436
        ],
        [
            436,
            322
        ],
        [
            322,
            410
        ],
        [
            326,
            2
        ],
        [
            2,
            393
        ],
        [
            393,
            326
        ],
        [
            354,
            370
        ],
        [
            370,
            461
        ],
        [
            461,
            354
        ],
        [
            393,
            164
        ],
        [
            164,
            267
        ],
        [
            267,
            393
        ],
        [
            268,
            302
        ],
        [
            302,
            12
        ],
        [
            12,
            268
        ],
        [
            312,
            268
        ],
        [
            268,
            13
        ],
        [
            13,
            312
        ],
        [
            298,
            293
        ],
        [
            293,
            301
        ],
        [
            301,
            298
        ],
        [
            265,
            446
        ],
        [
            446,
            340
        ],
        [
            340,
            265
        ],
        [
            280,
            330
        ],
        [
            330,
            425
        ],
        [
            425,
            280
        ],
        [
            322,
            426
        ],
        [
            426,
            391
        ],
        [
            391,
            322
        ],
        [
            420,
            429
        ],
        [
            429,
            437
        ],
        [
            437,
            420
        ],
        [
            393,
            391
        ],
        [
            391,
            326
        ],
        [
            326,
            393
        ],
        [
            344,
            440
        ],
        [
            440,
            438
        ],
        [
            438,
            344
        ],
        [
            458,
            459
        ],
        [
            459,
            461
        ],
        [
            461,
            458
        ],
        [
            364,
            434
        ],
        [
            434,
            394
        ],
        [
            394,
            364
        ],
        [
            428,
            396
        ],
        [
            396,
            262
        ],
        [
            262,
            428
        ],
        [
            274,
            354
        ],
        [
            354,
            457
        ],
        [
            457,
            274
        ],
        [
            317,
            316
        ],
        [
            316,
            402
        ],
        [
            402,
            317
        ],
        [
            316,
            315
        ],
        [
            315,
            403
        ],
        [
            403,
            316
        ],
        [
            315,
            314
        ],
        [
            314,
            404
        ],
        [
            404,
            315
        ],
        [
            314,
            313
        ],
        [
            313,
            405
        ],
        [
            405,
            314
        ],
        [
            313,
            421
        ],
        [
            421,
            406
        ],
        [
            406,
            313
        ],
        [
            323,
            366
        ],
        [
            366,
            361
        ],
        [
            361,
            323
        ],
        [
            292,
            306
        ],
        [
            306,
            407
        ],
        [
            407,
            292
        ],
        [
            306,
            291
        ],
        [
            291,
            408
        ],
        [
            408,
            306
        ],
        [
            291,
            287
        ],
        [
            287,
            409
        ],
        [
            409,
            291
        ],
        [
            287,
            432
        ],
        [
            432,
            410
        ],
        [
            410,
            287
        ],
        [
            427,
            434
        ],
        [
            434,
            411
        ],
        [
            411,
            427
        ],
        [
            372,
            264
        ],
        [
            264,
            383
        ],
        [
            383,
            372
        ],
        [
            459,
            309
        ],
        [
            309,
            457
        ],
        [
            457,
            459
        ],
        [
            366,
            352
        ],
        [
            352,
            401
        ],
        [
            401,
            366
        ],
        [
            1,
            274
        ],
        [
            274,
            4
        ],
        [
            4,
            1
        ],
        [
            418,
            421
        ],
        [
            421,
            262
        ],
        [
            262,
            418
        ],
        [
            331,
            294
        ],
        [
            294,
            358
        ],
        [
            358,
            331
        ],
        [
            435,
            433
        ],
        [
            433,
            367
        ],
        [
            367,
            435
        ],
        [
            392,
            289
        ],
        [
            289,
            439
        ],
        [
            439,
            392
        ],
        [
            328,
            462
        ],
        [
            462,
            326
        ],
        [
            326,
            328
        ],
        [
            94,
            2
        ],
        [
            2,
            370
        ],
        [
            370,
            94
        ],
        [
            289,
            305
        ],
        [
            305,
            455
        ],
        [
            455,
            289
        ],
        [
            339,
            254
        ],
        [
            254,
            448
        ],
        [
            448,
            339
        ],
        [
            359,
            255
        ],
        [
            255,
            446
        ],
        [
            446,
            359
        ],
        [
            254,
            253
        ],
        [
            253,
            449
        ],
        [
            449,
            254
        ],
        [
            253,
            252
        ],
        [
            252,
            450
        ],
        [
            450,
            253
        ],
        [
            252,
            256
        ],
        [
            256,
            451
        ],
        [
            451,
            252
        ],
        [
            256,
            341
        ],
        [
            341,
            452
        ],
        [
            452,
            256
        ],
        [
            414,
            413
        ],
        [
            413,
            463
        ],
        [
            463,
            414
        ],
        [
            286,
            441
        ],
        [
            441,
            414
        ],
        [
            414,
            286
        ],
        [
            286,
            258
        ],
        [
            258,
            441
        ],
        [
            441,
            286
        ],
        [
            258,
            257
        ],
        [
            257,
            442
        ],
        [
            442,
            258
        ],
        [
            257,
            259
        ],
        [
            259,
            443
        ],
        [
            443,
            257
        ],
        [
            259,
            260
        ],
        [
            260,
            444
        ],
        [
            444,
            259
        ],
        [
            260,
            467
        ],
        [
            467,
            445
        ],
        [
            445,
            260
        ],
        [
            309,
            459
        ],
        [
            459,
            250
        ],
        [
            250,
            309
        ],
        [
            305,
            289
        ],
        [
            289,
            290
        ],
        [
            290,
            305
        ],
        [
            305,
            290
        ],
        [
            290,
            460
        ],
        [
            460,
            305
        ],
        [
            401,
            376
        ],
        [
            376,
            435
        ],
        [
            435,
            401
        ],
        [
            309,
            250
        ],
        [
            250,
            392
        ],
        [
            392,
            309
        ],
        [
            376,
            411
        ],
        [
            411,
            433
        ],
        [
            433,
            376
        ],
        [
            453,
            341
        ],
        [
            341,
            464
        ],
        [
            464,
            453
        ],
        [
            357,
            453
        ],
        [
            453,
            465
        ],
        [
            465,
            357
        ],
        [
            343,
            357
        ],
        [
            357,
            412
        ],
        [
            412,
            343
        ],
        [
            437,
            343
        ],
        [
            343,
            399
        ],
        [
            399,
            437
        ],
        [
            344,
            360
        ],
        [
            360,
            440
        ],
        [
            440,
            344
        ],
        [
            420,
            437
        ],
        [
            437,
            456
        ],
        [
            456,
            420
        ],
        [
            360,
            420
        ],
        [
            420,
            363
        ],
        [
            363,
            360
        ],
        [
            361,
            401
        ],
        [
            401,
            288
        ],
        [
            288,
            361
        ],
        [
            265,
            372
        ],
        [
            372,
            353
        ],
        [
            353,
            265
        ],
        [
            390,
            339
        ],
        [
            339,
            249
        ],
        [
            249,
            390
        ],
        [
            339,
            448
        ],
        [
            448,
            255
        ],
        [
            255,
            339
        ]
    ]);
    P("matrixDataToMatrix", function(a) {
        for(var b = a.getCols(), c = a.getRows(), d = a.getPackedDataList(), e = [], g = 0; g < c; g++)e.push(Array(b));
        for(g = 0; g < c; g++)for(var f = 0; f < b; f++){
            var h = 1 === a.getLayout() ? g * b + f : f * c + g;
            e[g][f] = d[h];
        }
        return e;
    });
    P("VERSION", "0.4.1633559619");
}).call(this);

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7LGnM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const client_1 = __importDefault(require("./parsers/client"));
const device_1 = __importDefault(require("./parsers/device"));
const operating_system_1 = __importDefault(require("./parsers/operating-system"));
const vendor_fragment_1 = __importDefault(require("./parsers/vendor-fragment"));
const browser_1 = __importDefault(require("./parsers/client/browser"));
const BotParser = require("./parsers/bot");
const user_agent_1 = require("./utils/user-agent");
const version_compare_1 = require("./utils/version-compare");
class DeviceDetector {
    constructor(options){
        // Default options
        this.options = {
            skipBotDetection: false,
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            const result = {
                client: this.clientParser.parse(userAgent),
                os: this.operatingSystemParser.parse(userAgent),
                device: this.deviceParser.parse(userAgent),
                bot: this.options.skipBotDetection ? null : this.botParser.parse(userAgent)
            };
            const osName = (_a = result.os) === null || _a === void 0 ? void 0 : _a.name;
            const osVersion = (_b = result.os) === null || _b === void 0 ? void 0 : _b.version;
            const osFamily = operating_system_1.default.getOsFamily(osName || "");
            if (!((_c = result.device) === null || _c === void 0 ? void 0 : _c.brand)) {
                const brand = this.vendorFragmentParser.parse(userAgent);
                if (brand) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.brand = brand;
                }
            }
            /**
             * Assume all devices running iOS / Mac OS are from Apple
             */ if (!((_d = result.device) === null || _d === void 0 ? void 0 : _d.brand) && [
                "Apple TV",
                "watchOS",
                "iOS",
                "Mac"
            ].includes(osName || "")) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.brand = "Apple";
            }
            /**
             * Chrome on Android passes the device type based on the keyword 'Mobile'
             * If it is present the device should be a smartphone, otherwise it's a tablet
             * See https://developer.chrome.com/multidevice/user-agent#chrome_for_android_user_agent
             * Note: We do not check for browser (family) here, as there might be mobile apps using Chrome, that won't have
             *       a detected browser, but can still be detected. So we check the useragent for Chrome instead.
             */ if (!((_e = result.device) === null || _e === void 0 ? void 0 : _e.type) && osFamily === "Android" && user_agent_1.userAgentParser("Chrome/[\\.0-9]*", userAgent)) {
                if (user_agent_1.userAgentParser("Chrome/[.0-9]* (?:Mobile|eliboM)", userAgent)) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "smartphone";
                } else if (user_agent_1.userAgentParser("Chrome/[.0-9]* (?!Mobile)", userAgent)) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "tablet";
                }
            }
            /**
             * Some user agents simply contain the fragment 'Android; Tablet;' or 'Opera Tablet', so we assume those devices are tablets
             */ if (!((_f = result.device) === null || _f === void 0 ? void 0 : _f.type) && this.hasAndroidTabletFragment(userAgent) || user_agent_1.userAgentParser("Opera Tablet", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "tablet";
            }
            /**
             * Some user agents simply contain the fragment 'Android; Mobile;', so we assume those devices are smartphones
             */ if (!((_g = result.device) === null || _g === void 0 ? void 0 : _g.type) && this.hasAndroidMobileFragment(userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "smartphone";
            }
            /**
             * Android up to 3.0 was designed for smartphones only. But as 3.0, which was tablet only, was published
             * too late, there were a bunch of tablets running with 2.x
             * With 4.0 the two trees were merged and it is for smartphones and tablets
             *
             * So were are expecting that all devices running Android < 2 are smartphones
             * Devices running Android 3.X are tablets. Device type of Android 2.X and 4.X+ are unknown
             */ if (!((_h = result.device) === null || _h === void 0 ? void 0 : _h.type) && osName === "Android" && osVersion !== "") {
                if (version_compare_1.versionCompare(osVersion, "2.0") === -1) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "smartphone";
                } else if (version_compare_1.versionCompare(osVersion, "3.0") >= 0 && version_compare_1.versionCompare(osVersion, "4.0") === -1) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "tablet";
                }
            }
            /**
             * All detected feature phones running android are more likely smartphones
             */ if (((_j = result.device) === null || _j === void 0 ? void 0 : _j.type) === "feature phone" && osFamily === "Android") result.device.type = "smartphone";
            /**
             * According to http://msdn.microsoft.com/en-us/library/ie/hh920767(v=vs.85).aspx
             * Internet Explorer 10 introduces the "Touch" UA string token. If this token is present at the end of the
             * UA string, the computer has touch capability, and is running Windows 8 (or later).
             * This UA string will be transmitted on a touch-enabled system running Windows 8 (RT)
             *
             * As most touch enabled devices are tablets and only a smaller part are desktops/notebooks we assume that
             * all Windows 8 touch devices are tablets.
             */ if (!((_k = result.device) === null || _k === void 0 ? void 0 : _k.type) && this.isToucheEnabled(userAgent) && (osName === "Windows RT" || osName === "Windows" && version_compare_1.versionCompare(osVersion, "8.0") >= 0)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "tablet";
            }
            /**
             * All devices running Opera TV Store are assumed to be televisions
             */ if (user_agent_1.userAgentParser("Opera TV Store", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * All devices running Tizen TV or SmartTV are assumed to be televisions
             */ if (user_agent_1.userAgentParser("SmartTV|Tizen.+ TV .+$", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * Devices running Kylo or Espital TV Browsers are assumed to be televisions
             */ if (!((_l = result.device) === null || _l === void 0 ? void 0 : _l.type) && [
                "Kylo",
                "Espial TV Browser"
            ].includes(((_m = result.client) === null || _m === void 0 ? void 0 : _m.name) || "")) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * Set device type to desktop if string ua contains desktop
             */ const hasDesktop = "desktop" !== ((_o = result.device) === null || _o === void 0 ? void 0 : _o.type) && null !== user_agent_1.userAgentParser("Desktop", userAgent) && this.hasDesktopFragment(userAgent);
            if (hasDesktop) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "desktop";
            }
            // set device type to desktop for all devices running a desktop os that were not detected as an other device type
            if (!((_p = result.device) === null || _p === void 0 ? void 0 : _p.type) && this.isDesktop(result, osFamily)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "desktop";
            }
            return result;
        };
        this.hasAndroidMobileFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Android( [\.0-9]+)?; Mobile;", userAgent);
        };
        this.hasAndroidTabletFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Android( [\.0-9]+)?; Tablet;", userAgent);
        };
        this.hasDesktopFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Desktop (x(?:32|64)|WOW64);", userAgent);
        };
        this.isDesktop = (result, osFamily)=>{
            if (!result.os) return false;
            // Check for browsers available for mobile devices only
            if (this.usesMobileBrowser(result.client)) return false;
            return operating_system_1.default.getDesktopOsArray().includes(osFamily);
        };
        this.usesMobileBrowser = (client)=>{
            var _a, _b;
            if (!client) return false;
            return ((_a = client) === null || _a === void 0 ? void 0 : _a.type) === "browser" && browser_1.default.isMobileOnlyBrowser((_b = client) === null || _b === void 0 ? void 0 : _b.name);
        };
        this.isToucheEnabled = (userAgent)=>{
            return user_agent_1.userAgentParser("Touch", userAgent);
        };
        this.createDeviceObject = ()=>({
                type: "",
                brand: "",
                model: ""
            })
        ;
        this.options = Object.assign(Object.assign({}, this.options), options);
        this.clientParser = new client_1.default(this.options);
        this.deviceParser = new device_1.default();
        this.operatingSystemParser = new operating_system_1.default(this.options);
        this.vendorFragmentParser = new vendor_fragment_1.default();
        this.botParser = new BotParser();
    }
}
module.exports = DeviceDetector;

},{"./parsers/client":"1BZy1","./parsers/device":"nlCs9","./parsers/operating-system":"gSgGA","./parsers/vendor-fragment":"9mXz9","./parsers/client/browser":"fiq9P","./parsers/bot":"gL7by","./utils/user-agent":"5QvTF","./utils/version-compare":"glMh9"}],"1BZy1":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const browser_1 = __importDefault(require("./browser"));
const mobile_apps_1 = __importDefault(require("./mobile-apps"));
const feed_readers_1 = __importDefault(require("./feed-readers"));
const libraries_1 = __importDefault(require("./libraries"));
const media_players_1 = __importDefault(require("./media-players"));
const personal_information_managers_1 = __importDefault(require("./personal-information-managers"));
const clientParsers = [
    feed_readers_1.default,
    mobile_apps_1.default,
    media_players_1.default,
    personal_information_managers_1.default,
    browser_1.default,
    libraries_1.default
];
class ClientParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            for (const Parser of clientParsers){
                const parser = new Parser(this.options);
                const client = parser.parse(userAgent);
                if (client.type !== "") return client;
            }
            return null;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = ClientParser;

},{"./browser":"fiq9P","./mobile-apps":"4mk08","./feed-readers":"7Ci9m","./libraries":"dWoue","./media-players":"lvhXV","./personal-information-managers":"d7jwn"}],"fiq9P":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const browsers_json_1 = __importDefault(require("../../fixtures/regexes/client/browsers.json"));
const browser_engine_json_1 = __importDefault(require("../../fixtures/regexes/client/browser_engine.json"));
const available_browsers_json_1 = __importDefault(require("./fixtures/available-browsers.json"));
const mobile_only_browsers_json_1 = __importDefault(require("./fixtures/mobile-only-browsers.json"));
class BrowserParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                engine: "",
                engineVersion: ""
            };
            for (const browser of browsers_json_1.default){
                const match = user_agent_1.userAgentParser(browser.regex, userAgent);
                if (!match) continue;
                const vrpVersion = variable_replacement_1.variableReplacement(browser.version, match);
                const version = version_1.formatVersion(vrpVersion, this.options.versionTruncation);
                const shortVersion = version && parseFloat(version_1.formatVersion(vrpVersion, 1)) || "";
                if (browser.engine) {
                    result.engine = browser.engine.default;
                    if (browser.engine && browser.engine.versions && shortVersion) {
                        const sortedEngineVersions = Object.entries(browser.engine.versions).sort((a, b)=>{
                            return parseFloat(a[0]) > parseFloat(b[0]) ? 1 : -1;
                        });
                        for (const [versionThreshold, engineByVersion] of sortedEngineVersions)if (parseFloat(versionThreshold) <= shortVersion) result.engine = engineByVersion || "";
                    }
                }
                result.type = "browser";
                result.name = variable_replacement_1.variableReplacement(browser.name, match);
                result.version = version;
                break;
            }
            if (!result.engine) for (const browserEngine of browser_engine_json_1.default){
                let match = null;
                try {
                    match = RegExp(browserEngine.regex, "i").exec(userAgent);
                } catch (_a) {
                // TODO: find out why it fails in some browsers
                }
                if (!match) continue;
                result.engine = browserEngine.name;
                break;
            }
            result.engineVersion = version_1.formatVersion(version_1.parseBrowserEngineVersion(userAgent, result.engine), this.options.versionTruncation);
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = BrowserParser;
BrowserParser.getBrowserShortName = (browserName)=>{
    for (const [shortName, name] of Object.entries(available_browsers_json_1.default)){
        if (name === browserName) return shortName;
    }
    return "";
};
BrowserParser.isMobileOnlyBrowser = (browserName)=>{
    return mobile_only_browsers_json_1.default.includes(BrowserParser.getBrowserShortName(browserName));
};

},{"../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../fixtures/regexes/client/browsers.json":"aW9hq","../../fixtures/regexes/client/browser_engine.json":"4z5BI","./fixtures/available-browsers.json":"aW94u","./fixtures/mobile-only-browsers.json":"4iVdb"}],"5QJ7z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const trim_1 = require("./trim");
exports.formatVersion = (version, versionTruncation)=>{
    if (version === undefined) return "";
    const versionString = trim_1.trim(version, ". ").replace(new RegExp("_", "g"), ".");
    const versionParts = versionString.split(".");
    // Return if the string is not only digits once we removed the dots
    if (!/^\d+$/.test(versionParts.join(""))) return versionString;
    if (versionTruncation !== 0) {
        if (Number.isInteger(parseFloat(versionString))) return parseInt(versionString, 10).toFixed(1);
    }
    if (versionParts.length > 1) {
        if (versionTruncation !== null) return versionParts.slice(0, versionTruncation + 1).join(".");
    }
    return versionString;
};
exports.parseBrowserEngineVersion = (userAgent, engine)=>{
    if (!engine) return "";
    if (engine === "Gecko") {
        const geckoVersionRegex = /[ ](?:rv[: ]([0-9\.]+)).*gecko\/[0-9]{8,10}/i;
        const match = userAgent.match(geckoVersionRegex);
        if (match) return match.pop();
    }
    const regex = new RegExp(`${engine}\\s*\\/?\\s*((?:(?=\\d+\\.\\d)\\d+[.\\d]*|\\d{1,7}(?=(?:\\D|$))))`, "i");
    const match = userAgent.match(regex);
    if (!match) return "";
    return match.pop();
};

},{"./trim":"7qLcu"}],"7qLcu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = (str, char)=>{
    return str.replace(new RegExp("^[" + char + "]+|[" + char + "]+$", "g"), "");
};

},{}],"ixNsu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.variableReplacement = (template, variables)=>{
    const regex = new RegExp(`\\$\\d`, "g");
    if (template === null || template === undefined) return "";
    return template.replace(regex, (match)=>{
        const index = parseInt(match.substr(1), 10);
        const variable = variables[index - 1];
        return variable || "";
    });
};

},{}],"5QvTF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const memory_cache_1 = require("./memory-cache");
const cache = memory_cache_1.memoryCache();
const getRegexInstance = (rawRegex)=>{
    const cachedRegexInstance = cache.get(rawRegex);
    if (cachedRegexInstance) return cachedRegexInstance.value;
    const regexInstance = RegExp(`(?:^|[^A-Z0-9\-_]|[^A-Z0-9\-]_|sprd-)(?:${rawRegex})`, "i");
    cache.set(rawRegex, {
        value: regexInstance
    });
    return regexInstance;
};
exports.userAgentParser = (rawRegex, userAgent)=>{
    // TODO: find out why it fails in some browsers
    try {
        const regexInstance = getRegexInstance(rawRegex);
        const match = regexInstance.exec(userAgent);
        return match ? match.slice(1) : null;
    } catch (_a) {
        return null;
    }
};

},{"./memory-cache":"6BYEI"}],"6BYEI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.memoryCache = ()=>{
    const memoryCacheBucket = {};
    const set = (key, value)=>{
        memoryCacheBucket[key] = value;
    };
    const get = (key)=>{
        if (memoryCacheBucket.hasOwnProperty(key)) return memoryCacheBucket[key];
    };
    return {
        set,
        get
    };
};

},{}],"aW9hq":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Helio/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Helio\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"7654Browser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"7654 Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Qazweb/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Qazweb\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Degdegan/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"deg-degan\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"JavaFX/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"JavaFX\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Chedot/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Chedot\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome/(\\\\d+[\\\\.\\\\d]+) \\\\(Chromium GOST\\\\)\",\"name\":\"Chromium GOST\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"(?:DeledaoPersonal|DeledaoFamily)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Deledao\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"HasBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"HasBrowser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Byffox/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Byffox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Chrome/(\\\\d+[\\\\.\\\\d]+).+AgentWeb.+UCBrowser\",\"name\":\"CoolBrowser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"DotBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Dot Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"CravingExplorer/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Craving Explorer\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"DeskBrowse/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"DeskBrowse\",\"version\":\"$1\"},{\"regex\":\"Lolifox/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Lolifox\",\"version\":\"$1\"},{\"regex\":\"qutebrowser/(\\\\d+[\\\\.\\\\d]+).+Chrome\",\"name\":\"Qutebrowser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"qutebrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Qutebrowser\",\"version\":\"$1\"},{\"regex\":\"flast/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Flast\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"PolyBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"PolyBrowser\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Chrome.+BriskBard/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"BriskBard\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"BriskBard(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"BriskBard\",\"version\":\"$1\"},{\"regex\":\"GinxDroidBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"GinxDroid Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"AviraScout/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Avira Scout\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"VenusBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Venus Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome.+Otter(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Otter Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Otter(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Otter Browser\",\"version\":\"$1\"},{\"regex\":\"Chrome.+Smooz/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Smooz\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Smooz/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Smooz\",\"version\":\"$1\"},{\"regex\":\"Cornowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Cornowser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Orca/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Orca\",\"version\":\"$1\"},{\"regex\":\"Flow/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Flow\",\"version\":\"$1\",\"engine\":{\"default\":\"EkiohFlow\"}},{\"regex\":\"Ekioh/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Flow\",\"version\":\"$1\",\"engine\":{\"default\":\"EkiohFlow\"}},{\"regex\":\"xStand/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"xStand\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Biyubi/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Biyubi\",\"version\":\"$1\"},{\"regex\":\"(?:Perfect%20Browser(?:-iPad)?|Perfect(?:BrowserPro)?)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Perfect Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Browser/Phantom/V(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Phantom Browser\",\"version\":\"$1\"},{\"regex\":\"AwoX(?:/(\\\\d+[\\\\.\\\\d]+))? Browser\",\"name\":\"AwoX\",\"version\":\"$1\"},{\"regex\":\"Zetakey/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Zetakey\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"PlayFreeBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"PlayFree Browser\",\"version\":\"$1\"},{\"regex\":\"(?:chimlac_browser|chimlac)/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Chim Lac\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Odin/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Odin\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Tbrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"T-Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SFive(?:_Android)?/.+ Chrome/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"SFive\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SFive_IOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"SFive\",\"version\":\"$1\"},{\"regex\":\"Navigateur web/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Navigateur Web\",\"version\":\"$1\"},{\"regex\":\"Sraf(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Seraphic Sraf\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SeewoBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Seewo Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"(?:Kode(?:iOS)?/(?:(\\\\d+[\\\\.\\\\d]+))?|TansoDL)\",\"name\":\"Kode Browser\",\"version\":\"$1\"},{\"regex\":\"UR/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"UR Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"OceanHero/([\\\\.\\\\d]+)\",\"name\":\"OceanHero\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome/.+ SLBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Smart Lenovo Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SLBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Smart Lenovo Browser\",\"version\":\"$1\"},{\"regex\":\"Browzar\",\"name\":\"Browzar\",\"version\":\"\"},{\"regex\":\"Stargon/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Stargon\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"NFSBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NFS Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Borealis/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Borealis Navigator\",\"version\":\"$1\"},{\"regex\":\"YoloBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Yolo Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"PHX/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Phoenix Browser\",\"version\":\"$1\"},{\"regex\":\"PrivacyWall/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"PrivacyWall\",\"version\":\"$1\"},{\"regex\":\"Ghostery:?(\\\\d+[\\\\.\\\\d]+)?\",\"name\":\"Ghostery Privacy Browser\",\"version\":\"$1\"},{\"regex\":\"Firefox/.*(?:Turkcell-)?YaaniBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Yaani Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"(?:Turkcell-)?YaaniBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Yaani Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SEB/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Safe Exam Browser\",\"version\":\"$1\"},{\"regex\":\"Colibri/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Colibri\",\"version\":\"$1\"},{\"regex\":\"Xvast/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Xvast\",\"version\":\"$1\"},{\"regex\":\"TungstenBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Tungsten\",\"version\":\"$1\"},{\"regex\":\"Lulumi-browser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lulumi\",\"version\":\"$1\"},{\"regex\":\"ybrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Yahoo! Japan Browser\",\"version\":\"$1\"},{\"regex\":\"iLunascapeLite/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lunascape Lite\",\"version\":\"$1\"},{\"regex\":\"Polypane/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Polypane\",\"version\":\"$1\"},{\"regex\":\"OhHaiBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"OhHai Browser\",\"version\":\"$1\"},{\"regex\":\"Sizzy/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Sizzy\",\"version\":\"$1\"},{\"regex\":\"GlassBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Glass Browser\",\"version\":\"$1\"},{\"regex\":\"ToGate/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ToGate\",\"version\":\"$1\"},{\"regex\":\"AirWatch Browser v(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"VMware AirWatch\",\"version\":\"$1\"},{\"regex\":\"ADG/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"AOL Desktop\",\"version\":\"$1\"},{\"regex\":\"Elements Browser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Elements Browser\",\"version\":\"$1\"},{\"regex\":\"Light/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Light\",\"version\":\"$1\"},{\"regex\":\"Valve Steam GameOverlay/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Steam In-Game Overlay\",\"version\":\"$1\"},{\"regex\":\"115Browser/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"115 Browser\",\"version\":\"$1\"},{\"regex\":\"Atom/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Atom\",\"version\":\"$1\"},{\"regex\":\"Mobile VR.+Firefox\",\"name\":\"Firefox Reality\",\"version\":\"\"},{\"regex\":\"AVG(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"AVG Secure Browser\",\"version\":\"$1\"},{\"regex\":\"Start/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"START Internet Browser\",\"version\":\"$1\"},{\"regex\":\"Lovense(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lovense Browser\",\"version\":\"$1\"},{\"regex\":\"com.airfind.deltabrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Delta Browser\",\"version\":\"$1\"},{\"regex\":\"(?:Ordissimo|webissimo3)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Ordissimo\",\"version\":\"$1\"},{\"regex\":\"CCleaner(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"CCleaner\",\"version\":\"$1\"},{\"regex\":\"AlohaLite(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Aloha Browser Lite\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"TaoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Tao Browser\",\"version\":\"$1\"},{\"regex\":\"Falkon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Falkon\",\"version\":\"$1\"},{\"regex\":\"mCent(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"mCent\",\"version\":\"$1\"},{\"regex\":\"SalamWeb(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"SalamWeb\",\"version\":\"$1\"},{\"regex\":\"BlackHawk(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"BlackHawk\",\"version\":\"$1\"},{\"regex\":\"Minimo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Minimo\",\"version\":\"$1\"},{\"regex\":\"WIB(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Wear Internet Browser\",\"version\":\"$1\"},{\"regex\":\"Origyn Web Browser\",\"name\":\"Origyn Web Browser\",\"version\":\"\"},{\"regex\":\"Kinza(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Kinza\",\"version\":\"$1\"},{\"regex\":\"Beamrise(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Beamrise\",\"version\":\"$1\"},{\"regex\":\"Faux(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Faux Browser\",\"version\":\"$1\"},{\"regex\":\"splash Version(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Splash\",\"version\":\"$1\"},{\"regex\":\"MZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Meizu Browser\",\"version\":\"$1\"},{\"regex\":\"COSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"COS Browser\",\"version\":\"$1\"},{\"regex\":\"Crusta(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Crusta\",\"version\":\"$1\"},{\"regex\":\"Hawk/TurboBrowser(?:/v?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Hawk Turbo Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"FreeU(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"FreeU\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"NoxBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Nox Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Basilisk(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Basilisk\",\"version\":\"$1\",\"engine\":{\"default\":\"Goanna\"}},{\"regex\":\"SputnikBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Sputnik Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"TNSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"K.Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"OculusBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Oculus Browser\",\"version\":\"$1\"},{\"regex\":\"Jio(?:Browser|Pages)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Jio Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome/.+ Hola(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"hola! Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Slimjet/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Slimjet\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"7Star/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"7Star\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"MxNitro/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"MxNitro\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"HuaweiBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Huawei Browser\",\"version\":\"$1\"},{\"regex\":\"VivoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"vivo Browser\",\"version\":\"$1\"},{\"regex\":\"RealmeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Realme Browser\",\"version\":\"$1\"},{\"regex\":\"Beaker ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Beaker Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"QwantiOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Qwant Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"QwantMobile(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Qwant Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Qwant/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Qwant Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"TenFourFox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"TenFourFox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"AOLShield(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"AOL Shield\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Edge[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Microsoft Edge\",\"version\":\"$1\",\"engine\":{\"default\":\"Edge\"}},{\"regex\":\"EdgiOS[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Microsoft Edge\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"EdgA[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Microsoft Edge\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Edg[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Microsoft Edge\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"QIHU 360[ES]E\",\"name\":\"360 Browser\",\"version\":\"\"},{\"regex\":\"360 Aphone Browser(?: \\\\((\\\\d+[\\\\.\\\\d]+)(?:beta)?\\\\))?\",\"name\":\"360 Phone Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"SailfishBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Sailfish Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"IceCat(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"IceCat\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Mobicip\",\"name\":\"Mobicip\",\"version\":\"\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Camino(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Camino\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Waterfox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Waterfox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Chrome/.+ AlohaBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Aloha Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"AlohaBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Aloha Browser\",\"version\":\"$1\"},{\"regex\":\"(?:Avast|ASW|Safer)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Avast Secure Browser\",\"version\":\"$1\"},{\"regex\":\"Epic(?:/(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Epic\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Fennec(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Fennec\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Firefox.*Tablet browser (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"MicroB\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Maemo Browser(?: (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"MicroB\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Deepnet Explorer (\\\\d+[\\\\.\\\\d]+)?\",\"name\":\"Deepnet Explorer\",\"version\":\"$1\"},{\"regex\":\"Avant ?Browser\",\"name\":\"Avant Browser\",\"version\":\"\",\"engine\":{\"default\":\"\"}},{\"regex\":\"OppoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Oppo Browser\",\"version\":\"$1\"},{\"regex\":\"Chrome/(\\\\d+[\\\\.\\\\d]+).*MRCHROME\",\"name\":\"Amigo\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"AtomicBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Atomic Web Browser\",\"version\":\"$1\"},{\"regex\":\"Bunjalloo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Bunjalloo\",\"version\":\"$1\"},{\"regex\":\"Brave(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Brave\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Iridium(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Iridium\",\"version\":\"$1\"},{\"regex\":\"Iceweasel(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Iceweasel\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"WebPositive\",\"name\":\"WebPositive\",\"version\":\"\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\".*Goanna.*PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Pale Moon\",\"version\":\"$1\",\"engine\":{\"default\":\"Goanna\"}},{\"regex\":\"PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Pale Moon\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"CometBird(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"CometBird\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"IceDragon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"IceDragon\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Flock(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Flock\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\",\"versions\":{\"3\":\"WebKit\"}}},{\"regex\":\"JigBrowserPlus/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Jig Browser Plus\",\"version\":\"$1\"},{\"regex\":\"jig browser(?: web;|9i?)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Jig Browser\",\"version\":\"$1\"},{\"regex\":\"Kapiko(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Kapiko\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Kylo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Kylo\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Origin/(?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Origin In-Game Overlay\",\"version\":\"$1\"},{\"regex\":\"Cunaguaro(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Cunaguaro\",\"version\":\"$1\"},{\"regex\":\"(?:TO-Browser/TOB|DT-Browser/DTB)(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"t-online.de Browser\",\"version\":\"$1\"},{\"regex\":\"Kazehakase(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Kazehakase\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"ArcticFox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Arctic Fox\",\"version\":\"$1\",\"engine\":{\"default\":\"Goanna\"}},{\"regex\":\"Mypal(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Mypal\",\"version\":\"$1\",\"engine\":{\"default\":\"Goanna\"}},{\"regex\":\"Centaury(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Centaury\",\"version\":\"$1\",\"engine\":{\"default\":\"Goanna\"}},{\"regex\":\"(?:Focus|Klar)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firefox Focus\",\"version\":\"$1\"},{\"regex\":\"Cyberfox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Cyberfox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Firefox/(\\\\d+[\\\\.\\\\d]+).*\\\\(Swiftfox\\\\)\",\"name\":\"Swiftfox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"(?:Mobile|Tablet).*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firefox Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Servo\"}},{\"regex\":\"(?:Mobile|Tablet).*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firefox Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"FxiOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Firefox Mobile iOS\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\".*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firefox\",\"version\":\"$1\",\"engine\":{\"default\":\"Servo\"}},{\"regex\":\"(?!.*Opera[ /])Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firefox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"(?:BonEcho|GranParadiso|Lorentz|Minefield|Namoroka|Shiretoko)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Firefox\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"ANTFresco(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ANT Fresco\",\"version\":\"$1\"},{\"regex\":\"ANTGalio(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ANTGalio\",\"version\":\"$1\"},{\"regex\":\"(?:Espial|Escape)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Espial TV Browser\",\"version\":\"$1\"},{\"regex\":\"RockMelt(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"RockMelt\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Fireweb Navigator(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Fireweb Navigator\",\"version\":\"$1\"},{\"regex\":\"Fireweb(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Fireweb\",\"version\":\"$1\"},{\"regex\":\"(?:Navigator|Netscape6?)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Netscape\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"(?:Polarity)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Polarity\",\"version\":\"$1\"},{\"regex\":\"(?:QupZilla)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"QupZilla\",\"version\":\"$1\"},{\"regex\":\"(?:Dooble)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Dooble\",\"version\":\"$1\"},{\"regex\":\"Whale/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Whale Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Obigo[ ]?(?:InternetBrowser|Browser)?(?:[ /]([a-z0-9]*))?\",\"name\":\"Obigo\",\"version\":\"$1\"},{\"regex\":\"Obigo|Teleca\",\"name\":\"Obigo\",\"version\":\"\"},{\"regex\":\"UCBrowserHD/(\\\\d[\\\\d\\\\.]+)\",\"name\":\"UC Browser HD\",\"version\":\"$1\"},{\"regex\":\"UCMini(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"UC Browser Mini\",\"version\":\"$1\"},{\"regex\":\"UC[ ]?Browser.* \\\\(UCMini\\\\)\",\"name\":\"UC Browser Mini\",\"version\":\"\"},{\"regex\":\"UCTurbo(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"UC Browser Turbo\",\"version\":\"$1\"},{\"regex\":\"UC[ ]?Browser.* \\\\(UCTurbo\\\\)\",\"name\":\"UC Browser Turbo\",\"version\":\"\"},{\"regex\":\"OPRGX(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Opera GX\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"(?:Opera Tablet.*Version|Opera/.+Opera Mobi.+Version|Mobile.+OPR)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\",\"versions\":{\"15\":\"Blink\"}}},{\"regex\":\"MMS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Neon\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"OMI/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Devices\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Opera%20Touch/(\\\\d+[\\\\.\\\\d]+)? CFNetwork/.+Darwin/.+(?!.*x86_64)\",\"name\":\"Opera Touch\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"OPT/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Touch\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Opera/(\\\\d+[\\\\.\\\\d]+).+Opera Mobi\",\"name\":\"Opera Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\",\"versions\":{\"15\":\"Blink\"}}},{\"regex\":\"Opera ?Mini/(?:att/)?(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Mini\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\"}},{\"regex\":\"Opera ?Mini.+Version/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Mini\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\"}},{\"regex\":\"OPiOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Mini iOS\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Opera%20Mini/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Opera Mini iOS\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Opera.+Edition Next.+Version/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera Next\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\",\"versions\":{\"15\":\"Blink\"}}},{\"regex\":\"(?:Opera|OPR)[/ ](?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+).+Edition Next\",\"name\":\"Opera Next\",\"version\":\"$1\",\"engine\":{\"default\":\"Presto\",\"versions\":{\"15\":\"Blink\"}}},{\"regex\":\"(?:Opera[/ ]?|OPR[/ ])(?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Opera\",\"version\":\"$1\",\"engine\":{\"default\":\"\",\"versions\":{\"7\":\"Presto\",\"15\":\"Blink\",\"3.5\":\"Elektra\"}}},{\"regex\":\"rekonq(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Rekonq\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"CoolNovo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"CoolNovo\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"(?:Comodo[ _])?Dragon(?!fruit)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Comodo Dragon\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"ChromePlus(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ChromePlus\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Conkeror(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Conkeror\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Konqueror(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Konqueror\",\"version\":\"$1\",\"engine\":{\"default\":\"KHTML\",\"versions\":{\"4\":\"\"}}},{\"regex\":\"(?:baidubrowser|bdbrowser(?:(?:hd)?_i18n)?|FlyFlow|BaiduHD)(?:[/ ](\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"Baidu Browser\",\"version\":\"$1\"},{\"regex\":\"(?:(?:BD)?Spark(?:Safe)?|BIDUBrowser)[/ ](\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Baidu Spark\",\"version\":\"$1\"},{\"regex\":\"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*)) \\\\(lite\\\\)?\",\"name\":\"Yandex Browser Lite\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*))(?: \\\\((alpha|beta)\\\\))?\",\"name\":\"Yandex Browser\",\"version\":\"$1 $2\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Ya(?:ndex)?SearchBrowser(?:/(\\\\d+[\\\\.\\\\d]*))\",\"name\":\"Yandex Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Vivaldi(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Vivaldi\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"TweakStyle(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"TweakStyle\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome.+Midori Browser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Midori\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Midori(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Midori\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Mercury(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Mercury\",\"version\":\"$1\"},{\"regex\":\"Chrome.+Maxthon(?:.+\\\\(portable\\\\))?/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Maxthon\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"5.2\":\"Blink\"}}},{\"regex\":\"(?:Maxthon(?:%20Browser)?|MxBrowser(?:-inhouse|-iPhone)?)[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Maxthon\",\"version\":\"$1\",\"engine\":{\"default\":\"\",\"versions\":{\"3\":\"WebKit\"}}},{\"regex\":\"(?:Maxthon|MyIE2)\",\"name\":\"Maxthon\",\"version\":\"\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Puffin(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Puffin\",\"version\":\"$1\"},{\"regex\":\"MobileIron(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Iron Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?.*Iron\",\"name\":\"Iron\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Iron(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Iron\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"Epiphany(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"GNOME Web\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\",\"versions\":{\"2.9.16\":\"\",\"2.28\":\"WebKit\"}}},{\"regex\":\"LieBaoFast(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"LieBaoFast\",\"version\":\"$1\"},{\"regex\":\"LBBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Cheetah Browser\",\"version\":\"$1\"},{\"regex\":\"SE (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Sogou Explorer\",\"version\":\"$1\"},{\"regex\":\"QQBrowserLite/([\\\\d\\\\.]+)\",\"name\":\"QQ Browser Lite\",\"version\":\"$1\"},{\"regex\":\"M?QQBrowser/Mini([\\\\.\\\\d]+)?\",\"name\":\"QQ Browser Mini\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"M?QQBrowser(?:/([\\\\.\\\\d]+))?\",\"name\":\"QQ Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"(?:MIUIBrowser|MiuiBrowser)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"MIUI Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"(?:coc_coc_browser|coccocbrowser|CocCoc)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Coc Coc\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"DuckDuckGo/(\\\\d+[\\\\.\\\\d]*)\",\"name\":\"DuckDuckGo Privacy Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Samsung ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Samsung Browser\",\"version\":\"$1\"},{\"regex\":\"(?:SFB(?:rowser)?)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Super Fast Browser\",\"version\":\"$1\"},{\"regex\":\"com.browser.tssomas(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Super Fast Browser\",\"version\":\"$1\"},{\"regex\":\"EUI Browser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"EUI Browser\",\"version\":\"$1\"},{\"regex\":\"UBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"UBrowser\",\"version\":\"$1\"},{\"regex\":\"Streamy(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Streamy\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"isivioo\",\"name\":\"Isivioo\",\"version\":\"\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"UC[ ]?Browser(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"UC Browser\",\"version\":\"$1\"},{\"regex\":\"UCWEB(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"UC Browser\",\"version\":\"$1\"},{\"regex\":\"UC AppleWebKit\",\"name\":\"UC Browser\",\"version\":\"\"},{\"regex\":\"Tenta/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Tenta Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Rocket/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Firefox Rocket\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Web Explorer/(\\\\d+[\\\\.\\\\d]+).*Chrome\",\"name\":\"Web Explorer\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"SznProhlizec/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Seznam Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"SogouMobileBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Sogou Mobile Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Mint Browser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Mint Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Ecosia (?:android|ios)@(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Ecosia\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"ACHEETAHI\",\"name\":\"CM Browser\",\"version\":\"\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Kiwi Chrome\",\"name\":\"Kiwi\",\"version\":\"\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Mb2345Browser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"2345 Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"QtWebEngine/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"QtWebEngine\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Silk/(\\\\d+[\\\\.\\\\d]+) like Chrome\",\"name\":\"Mobile Silk\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Silk(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Mobile Silk\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"IBrowse(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"IBrowse\",\"version\":\"$1\"},{\"regex\":\"UP.Browser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Openwave Mobile Browser\",\"version\":\"$1\"},{\"regex\":\"Openwave(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Openwave Mobile Browser\",\"version\":\"$1\"},{\"regex\":\"OneBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ONE Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"(?:NokiaBrowser|BrowserNG)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Nokia Browser\",\"version\":\"$1\"},{\"regex\":\"Series60/5\\\\.0\",\"name\":\"Nokia Browser\",\"version\":\"7.0\"},{\"regex\":\"Series60/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Nokia OSS Browser\",\"version\":\"$1\"},{\"regex\":\"S40OviBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Nokia Ovi Browser\",\"version\":\"$1\"},{\"regex\":\"^Nokia|Nokia[EN]?\\\\d+\",\"name\":\"Nokia Browser\",\"version\":\"\"},{\"regex\":\"Sleipnir(?:(?:%20Browser)?[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Sleipnir\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"NTENTBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NTENT Browser\",\"version\":\"$1\"},{\"regex\":\"TV Bro/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"TV Bro\",\"version\":\"$1\"},{\"regex\":\"Chrome/.+ Quark(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Quark\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"MonumentBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Monument Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"BlueBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Blue Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"JAPAN Browser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Japan Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Version/.* Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chrome Webview\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"CrMo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chrome Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"CriOS(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chrome Mobile iOS\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))? Mobile\",\"name\":\"Chrome Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"chromeframe(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chrome Frame\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Chromium(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chromium\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"HeadlessChrome(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Headless Chrome\",\"version\":\"$1\",\"engine\":{\"default\":\"Blink\"}},{\"regex\":\"Chrome(?!book)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Chrome\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\",\"versions\":{\"28\":\"Blink\"}}},{\"regex\":\"(?:Tizen|SLP) Browser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Tizen Browser\",\"version\":\"$1\"},{\"regex\":\"Blazer(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Palm Blazer\",\"version\":\"$1\"},{\"regex\":\"Pre/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Palm Pre\",\"version\":\"$1\"},{\"regex\":\"(?:hpw|web)OS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"wOSBrowser\",\"version\":\"$1\"},{\"regex\":\"WebPro(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Palm WebPro\",\"version\":\"$1\"},{\"regex\":\"Palmscape(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Palmscape\",\"version\":\"$1\"},{\"regex\":\"Jasmine(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Jasmine\",\"version\":\"$1\"},{\"regex\":\"Lynx(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lynx\",\"version\":\"$1\",\"engine\":{\"default\":\"Text-based\"}},{\"regex\":\"NCSA_Mosaic(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NCSA Mosaic\",\"version\":\"$1\"},{\"regex\":\"ABrowse(?: (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ABrowse\",\"version\":\"$1\"},{\"regex\":\"amaya(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Amaya\",\"version\":\"$1\"},{\"regex\":\"AmigaVoyager(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Amiga Voyager\",\"version\":\"$1\"},{\"regex\":\"Amiga-Aweb(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Amiga Aweb\",\"version\":\"$1\"},{\"regex\":\"Arora(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Arora\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Beonex(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Beonex\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"bline(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"B-Line\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"BrowseX \\\\((\\\\d+[\\\\.\\\\d]+)\",\"name\":\"BrowseX\",\"version\":\"$1\"},{\"regex\":\"Charon(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Charon\",\"version\":\"$1\"},{\"regex\":\"Cheshire(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Cheshire\",\"version\":\"$1\"},{\"regex\":\"dbrowser\",\"name\":\"dbrowser\",\"version\":\"\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Dillo(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Dillo\",\"version\":\"$1\",\"engine\":{\"default\":\"Dillo\"}},{\"regex\":\"Dolfin(?:/(\\\\d+[\\\\.\\\\d]+))?|dolphin\",\"name\":\"Dolphin\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Elinks(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Elinks\",\"version\":\"$1\",\"engine\":{\"default\":\"Text-based\"}},{\"regex\":\"Element Browser(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Element Browser\",\"version\":\"$1\"},{\"regex\":\"eZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"eZ Browser\",\"version\":\"$1\"},{\"regex\":\"Firebird(?! Build)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Firebird\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Fluid(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Fluid\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Galeon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Galeon\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Google Earth(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Google Earth\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"HotJava(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"HotJava\",\"version\":\"$1\"},{\"regex\":\"iCabMobile(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"iCab Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"iCab(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"iCab\",\"version\":\"$1\",\"engine\":{\"default\":\"iCab\",\"versions\":{\"4\":\"WebKit\"}}},{\"regex\":\"i?Lunascape(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lunascape\",\"version\":\"$1\",\"engine\":{\"default\":\"\"}},{\"regex\":\"Crazy Browser (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Crazy Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"IEMobile[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"IE Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"MSIE (\\\\d+[\\\\.\\\\d]+).*XBLWP7\",\"name\":\"IE Mobile\",\"version\":\"$1\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"MSIE.*Trident/4.0\",\"name\":\"Internet Explorer\",\"version\":\"8.0\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"MSIE.*Trident/5.0\",\"name\":\"Internet Explorer\",\"version\":\"9.0\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"MSIE.*Trident/6.0\",\"name\":\"Internet Explorer\",\"version\":\"10.0\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"Trident/[78].0\",\"name\":\"Internet Explorer\",\"version\":\"11.0\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"MSIE (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Internet Explorer\",\"version\":\"$1\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"IE[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Internet Explorer\",\"version\":\"$1\",\"engine\":{\"default\":\"Trident\"}},{\"regex\":\"Kindle/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Kindle Browser\",\"version\":\"$1\"},{\"regex\":\"K-meleon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"K-meleon\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"Links(?: \\\\((\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Links\",\"version\":\"$1\",\"engine\":{\"default\":\"Text-based\"}},{\"regex\":\"LG Browser(?:/(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"LG Browser\",\"version\":\"$1\"},{\"regex\":\"LuaKit(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"LuaKit\",\"version\":\"$1\"},{\"regex\":\"OmniWeb(?:/[v]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"OmniWeb\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Phoenix(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Phoenix\",\"version\":\"$1\"},{\"regex\":\"NetFrontLifeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetFront Life\",\"version\":\"$1\",\"engine\":{\"default\":\"NetFront\"}},{\"regex\":\"NetFront(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetFront\",\"version\":\"$1\",\"engine\":{\"default\":\"NetFront\"}},{\"regex\":\"PLAYSTATION|NINTENDO 3|AppleWebKit.+ N[XF]/\\\\d+\\\\.\\\\d+\\\\.\\\\d+\",\"name\":\"NetFront\",\"version\":\"\"},{\"regex\":\"NetPositive(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetPositive\",\"version\":\"$1\"},{\"regex\":\"Odyssey Web Browser(?:.*OWB/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Odyssey Web Browser\",\"version\":\"$1\"},{\"regex\":\"OffByOne\",\"name\":\"Off By One\",\"version\":\"\"},{\"regex\":\"(?:Oregano|OreganMediaBrowser)(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Oregano\",\"version\":\"$1\"},{\"regex\":\"(?:Polaris|Embider)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Polaris\",\"version\":\"$1\"},{\"regex\":\"SEMC-Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"SEMC-Browser\",\"version\":\"$1\"},{\"regex\":\"Shiira(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Shiira\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Skyfire(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Skyfire\",\"version\":\"$1\"},{\"regex\":\"Snowshoe(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Snowshoe\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Sunrise(?:Browser)?(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Sunrise\",\"version\":\"$1\"},{\"regex\":\"SuperBird(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"SuperBird\",\"version\":\"$1\"},{\"regex\":\"Vision-Browser(?:/(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"Vision Mobile Browser\",\"version\":\"$1\"},{\"regex\":\"WeTab-Browser\",\"name\":\"WeTab Browser\",\"version\":\"\"},{\"regex\":\"Xiino(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Xiino\",\"version\":\"$1\"},{\"regex\":\"BlackBerry|PlayBook|BB10\",\"name\":\"BlackBerry Browser\",\"version\":\"\"},{\"regex\":\"Android\",\"name\":\"Android Browser\",\"version\":\"\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Coast(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Coast\",\"version\":\"$1\"},{\"regex\":\"Surf(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"surf\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Mobile Safari\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"(?:Version/(\\\\d+[\\\\.\\\\d]+).*)?Mobile.*Safari/\",\"name\":\"Mobile Safari\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"(?:iPod|iPhone|iPad)\",\"name\":\"Mobile Safari\",\"version\":\"\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Version/(\\\\d+[\\\\.\\\\d]+).*Safari/|Safari/?\\\\d+\",\"name\":\"Safari\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}},{\"regex\":\"Dorado WAP-Browser[/ ](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Dorado\",\"version\":\"$1\"},{\"regex\":\"NetSurf(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetSurf\",\"version\":\"$1\",\"engine\":{\"default\":\"NetSurf\"}},{\"regex\":\"Uzbl\",\"name\":\"Uzbl\",\"version\":\"\"},{\"regex\":\"SimpleBrowser\",\"name\":\"SimpleBrowser\",\"version\":\"\"},{\"regex\":\"Zvu(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Zvu\",\"version\":\"$1\",\"engine\":{\"default\":\"Gecko\"}},{\"regex\":\"GOGGalaxyClient/(\\\\d+[\\\\.\\\\d]+)?\",\"name\":\"GOG Galaxy\",\"version\":\"$1\"},{\"regex\":\"WAP Browser/MAUI|(?:\\\\w+)?Maui Wap Browser|MAUI[- ]Browser\",\"name\":\"MAUI WAP Browser\",\"version\":\"\"},{\"regex\":\"SP%20Browser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"SP Browser\",\"version\":\"$1\",\"engine\":{\"default\":\"WebKit\"}}]");

},{}],"4z5BI":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"NetFront\",\"name\":\"NetFront\"},{\"regex\":\"Edge\",\"name\":\"Edge\"},{\"regex\":\"Trident\",\"name\":\"Trident\"},{\"regex\":\"(?<!SmartHu)Blink\",\"name\":\"Blink\"},{\"regex\":\"(?:Apple)?WebKit\",\"name\":\"WebKit\"},{\"regex\":\"Presto\",\"name\":\"Presto\"},{\"regex\":\"Goanna\",\"name\":\"Goanna\"},{\"regex\":\"(?<!like )Gecko\",\"name\":\"Gecko\"},{\"regex\":\"KHTML\",\"name\":\"KHTML\"},{\"regex\":\"NetSurf\",\"name\":\"NetSurf\"},{\"regex\":\"Servo\",\"name\":\"Servo\"},{\"regex\":\"Goanna\",\"name\":\"Goanna\"},{\"regex\":\"Ekioh(?:Flow)?\",\"name\":\"EkiohFlow\"}]");

},{}],"aW94u":[function(require,module,exports) {
module.exports = JSON.parse("{\"36\":\"360 Phone Browser\",\"1B\":\"115 Browser\",\"2B\":\"2345 Browser\",\"3B\":\"360 Browser\",\"7B\":\"7654 Browser\",\"AA\":\"Avant Browser\",\"AB\":\"ABrowse\",\"AF\":\"ANT Fresco\",\"AG\":\"ANTGalio\",\"AL\":\"Aloha Browser\",\"AH\":\"Aloha Browser Lite\",\"AM\":\"Amaya\",\"AO\":\"Amigo\",\"AN\":\"Android Browser\",\"AE\":\"AOL Desktop\",\"AD\":\"AOL Shield\",\"AR\":\"Arora\",\"AX\":\"Arctic Fox\",\"AV\":\"Amiga Voyager\",\"AW\":\"Amiga Aweb\",\"A0\":\"Atom\",\"AT\":\"Atomic Web Browser\",\"AS\":\"Avast Secure Browser\",\"VG\":\"AVG Secure Browser\",\"AC\":\"Avira Scout\",\"A1\":\"AwoX\",\"BA\":\"Beaker Browser\",\"BM\":\"Beamrise\",\"BB\":\"BlackBerry Browser\",\"BD\":\"Baidu Browser\",\"BS\":\"Baidu Spark\",\"BI\":\"Basilisk\",\"BE\":\"Beonex\",\"BH\":\"BlackHawk\",\"BJ\":\"Bunjalloo\",\"BL\":\"B-Line\",\"BU\":\"Blue Browser\",\"BN\":\"Borealis Navigator\",\"BR\":\"Brave\",\"BK\":\"BriskBard\",\"BX\":\"BrowseX\",\"BZ\":\"Browzar\",\"BY\":\"Biyubi\",\"BF\":\"Byffox\",\"CA\":\"Camino\",\"CL\":\"CCleaner\",\"C6\":\"Chedot\",\"C0\":\"Centaury\",\"CC\":\"Coc Coc\",\"C4\":\"CoolBrowser\",\"C2\":\"Colibri\",\"CD\":\"Comodo Dragon\",\"C1\":\"Coast\",\"CX\":\"Charon\",\"CE\":\"CM Browser\",\"CF\":\"Chrome Frame\",\"HC\":\"Headless Chrome\",\"CH\":\"Chrome\",\"CI\":\"Chrome Mobile iOS\",\"CK\":\"Conkeror\",\"CM\":\"Chrome Mobile\",\"CN\":\"CoolNovo\",\"CO\":\"CometBird\",\"CB\":\"COS Browser\",\"CW\":\"Cornowser\",\"C3\":\"Chim Lac\",\"CP\":\"ChromePlus\",\"CR\":\"Chromium\",\"C5\":\"Chromium GOST\",\"CY\":\"Cyberfox\",\"CS\":\"Cheshire\",\"CT\":\"Crusta\",\"CG\":\"Craving Explorer\",\"CZ\":\"Crazy Browser\",\"CU\":\"Cunaguaro\",\"CV\":\"Chrome Webview\",\"DB\":\"dbrowser\",\"DE\":\"Deepnet Explorer\",\"DG\":\"deg-degan\",\"DA\":\"Deledao\",\"DT\":\"Delta Browser\",\"DS\":\"DeskBrowse\",\"DF\":\"Dolphin\",\"DO\":\"Dorado\",\"DR\":\"Dot Browser\",\"DL\":\"Dooble\",\"DI\":\"Dillo\",\"DD\":\"DuckDuckGo Privacy Browser\",\"EC\":\"Ecosia\",\"EI\":\"Epic\",\"EL\":\"Elinks\",\"EB\":\"Element Browser\",\"EE\":\"Elements Browser\",\"EZ\":\"eZ Browser\",\"EU\":\"EUI Browser\",\"EP\":\"GNOME Web\",\"ES\":\"Espial TV Browser\",\"FA\":\"Falkon\",\"FX\":\"Faux Browser\",\"F1\":\"Firefox Mobile iOS\",\"FB\":\"Firebird\",\"FD\":\"Fluid\",\"FE\":\"Fennec\",\"FF\":\"Firefox\",\"FK\":\"Firefox Focus\",\"FY\":\"Firefox Reality\",\"FR\":\"Firefox Rocket\",\"FL\":\"Flock\",\"FO\":\"Flow\",\"FM\":\"Firefox Mobile\",\"FW\":\"Fireweb\",\"FN\":\"Fireweb Navigator\",\"FS\":\"Flast\",\"FU\":\"FreeU\",\"GA\":\"Galeon\",\"GH\":\"Ghostery Privacy Browser\",\"GI\":\"GinxDroid Browser\",\"GB\":\"Glass Browser\",\"GE\":\"Google Earth\",\"GO\":\"GOG Galaxy\",\"HS\":\"HasBrowser\",\"HA\":\"Hawk Turbo Browser\",\"HE\":\"Helio\",\"HO\":\"hola! Browser\",\"HJ\":\"HotJava\",\"HU\":\"Huawei Browser\",\"IB\":\"IBrowse\",\"IC\":\"iCab\",\"I2\":\"iCab Mobile\",\"I1\":\"Iridium\",\"I3\":\"Iron Mobile\",\"I4\":\"IceCat\",\"ID\":\"IceDragon\",\"IV\":\"Isivioo\",\"IW\":\"Iceweasel\",\"IE\":\"Internet Explorer\",\"IM\":\"IE Mobile\",\"IR\":\"Iron\",\"JB\":\"Japan Browser\",\"JS\":\"Jasmine\",\"JA\":\"JavaFX\",\"JI\":\"Jig Browser\",\"JP\":\"Jig Browser Plus\",\"JO\":\"Jio Browser\",\"KB\":\"K.Browser\",\"KI\":\"Kindle Browser\",\"KM\":\"K-meleon\",\"KO\":\"Konqueror\",\"KP\":\"Kapiko\",\"KN\":\"Kinza\",\"KW\":\"Kiwi\",\"KD\":\"Kode Browser\",\"KY\":\"Kylo\",\"KZ\":\"Kazehakase\",\"LB\":\"Cheetah Browser\",\"LF\":\"LieBaoFast\",\"LG\":\"LG Browser\",\"LH\":\"Light\",\"LI\":\"Links\",\"IF\":\"Lolifox\",\"LO\":\"Lovense Browser\",\"LU\":\"LuaKit\",\"LL\":\"Lulumi\",\"LS\":\"Lunascape\",\"LN\":\"Lunascape Lite\",\"LX\":\"Lynx\",\"M1\":\"mCent\",\"MB\":\"MicroB\",\"MC\":\"NCSA Mosaic\",\"MZ\":\"Meizu Browser\",\"ME\":\"Mercury\",\"MF\":\"Mobile Safari\",\"MI\":\"Midori\",\"MO\":\"Mobicip\",\"MU\":\"MIUI Browser\",\"MS\":\"Mobile Silk\",\"MN\":\"Minimo\",\"MT\":\"Mint Browser\",\"MX\":\"Maxthon\",\"NM\":\"MxNitro\",\"MY\":\"Mypal\",\"MR\":\"Monument Browser\",\"MW\":\"MAUI WAP Browser\",\"NW\":\"Navigateur Web\",\"NR\":\"NFS Browser\",\"NB\":\"Nokia Browser\",\"NO\":\"Nokia OSS Browser\",\"NV\":\"Nokia Ovi Browser\",\"NX\":\"Nox Browser\",\"NE\":\"NetSurf\",\"NF\":\"NetFront\",\"NL\":\"NetFront Life\",\"NP\":\"NetPositive\",\"NS\":\"Netscape\",\"NT\":\"NTENT Browser\",\"OC\":\"Oculus Browser\",\"O1\":\"Opera Mini iOS\",\"OB\":\"Obigo\",\"O2\":\"Odin\",\"H2\":\"OceanHero\",\"OD\":\"Odyssey Web Browser\",\"OF\":\"Off By One\",\"HH\":\"OhHai Browser\",\"OE\":\"ONE Browser\",\"OX\":\"Opera GX\",\"OG\":\"Opera Neon\",\"OH\":\"Opera Devices\",\"OI\":\"Opera Mini\",\"OM\":\"Opera Mobile\",\"OP\":\"Opera\",\"ON\":\"Opera Next\",\"OO\":\"Opera Touch\",\"OA\":\"Orca\",\"OS\":\"Ordissimo\",\"OR\":\"Oregano\",\"O0\":\"Origin In-Game Overlay\",\"OY\":\"Origyn Web Browser\",\"OV\":\"Openwave Mobile Browser\",\"OW\":\"OmniWeb\",\"OT\":\"Otter Browser\",\"PL\":\"Palm Blazer\",\"PM\":\"Pale Moon\",\"PY\":\"Polypane\",\"PP\":\"Oppo Browser\",\"PR\":\"Palm Pre\",\"PU\":\"Puffin\",\"PW\":\"Palm WebPro\",\"PA\":\"Palmscape\",\"PE\":\"Perfect Browser\",\"PH\":\"Phantom Browser\",\"PX\":\"Phoenix\",\"PB\":\"Phoenix Browser\",\"PF\":\"PlayFree Browser\",\"PO\":\"Polaris\",\"PT\":\"Polarity\",\"LY\":\"PolyBrowser\",\"PI\":\"PrivacyWall\",\"PS\":\"Microsoft Edge\",\"QA\":\"Qazweb\",\"Q2\":\"QQ Browser Lite\",\"Q1\":\"QQ Browser Mini\",\"QQ\":\"QQ Browser\",\"QT\":\"Qutebrowser\",\"QU\":\"Quark\",\"QZ\":\"QupZilla\",\"QM\":\"Qwant Mobile\",\"QW\":\"QtWebEngine\",\"RE\":\"Realme Browser\",\"RK\":\"Rekonq\",\"RM\":\"RockMelt\",\"SB\":\"Samsung Browser\",\"SA\":\"Sailfish Browser\",\"S8\":\"Seewo Browser\",\"SC\":\"SEMC-Browser\",\"SE\":\"Sogou Explorer\",\"SF\":\"Safari\",\"S5\":\"Safe Exam Browser\",\"SW\":\"SalamWeb\",\"SV\":\"SFive\",\"SH\":\"Shiira\",\"S1\":\"SimpleBrowser\",\"SY\":\"Sizzy\",\"SK\":\"Skyfire\",\"SS\":\"Seraphic Sraf\",\"SL\":\"Sleipnir\",\"S6\":\"Slimjet\",\"S7\":\"SP Browser\",\"7S\":\"7Star\",\"LE\":\"Smart Lenovo Browser\",\"OZ\":\"Smooz\",\"SN\":\"Snowshoe\",\"SO\":\"Sogou Mobile Browser\",\"S2\":\"Splash\",\"SI\":\"Sputnik Browser\",\"SR\":\"Sunrise\",\"SP\":\"SuperBird\",\"SU\":\"Super Fast Browser\",\"S3\":\"surf\",\"SG\":\"Stargon\",\"S0\":\"START Internet Browser\",\"S4\":\"Steam In-Game Overlay\",\"ST\":\"Streamy\",\"SX\":\"Swiftfox\",\"SZ\":\"Seznam Browser\",\"TR\":\"T-Browser\",\"TO\":\"t-online.de Browser\",\"TA\":\"Tao Browser\",\"TF\":\"TenFourFox\",\"TB\":\"Tenta Browser\",\"TZ\":\"Tizen Browser\",\"TU\":\"Tungsten\",\"TG\":\"ToGate\",\"TS\":\"TweakStyle\",\"TV\":\"TV Bro\",\"UB\":\"UBrowser\",\"UC\":\"UC Browser\",\"UH\":\"UC Browser HD\",\"UM\":\"UC Browser Mini\",\"UT\":\"UC Browser Turbo\",\"UR\":\"UR Browser\",\"UZ\":\"Uzbl\",\"VE\":\"Venus Browser\",\"VI\":\"Vivaldi\",\"VV\":\"vivo Browser\",\"VB\":\"Vision Mobile Browser\",\"VM\":\"VMware AirWatch\",\"WI\":\"Wear Internet Browser\",\"WP\":\"Web Explorer\",\"WE\":\"WebPositive\",\"WF\":\"Waterfox\",\"WH\":\"Whale Browser\",\"WO\":\"wOSBrowser\",\"WT\":\"WeTab Browser\",\"YJ\":\"Yahoo! Japan Browser\",\"YA\":\"Yandex Browser\",\"YL\":\"Yandex Browser Lite\",\"YN\":\"Yaani Browser\",\"YB\":\"Yolo Browser\",\"XS\":\"xStand\",\"XI\":\"Xiino\",\"XV\":\"Xvast\",\"ZE\":\"Zetakey\",\"ZV\":\"Zvu\"}");

},{}],"4iVdb":[function(require,module,exports) {
module.exports = JSON.parse("[\"36\",\"OC\",\"PU\",\"SK\",\"MF\",\"OI\",\"OM\",\"DD\",\"DB\",\"ST\",\"BL\",\"IV\",\"FM\",\"C1\",\"C4\",\"SA\",\"SB\",\"FR\",\"WP\",\"HA\",\"NX\",\"HU\",\"VV\",\"RE\",\"CB\",\"MZ\",\"UM\",\"FK\",\"FX\",\"WI\",\"MN\",\"M1\",\"AH\",\"SU\",\"EU\",\"EZ\",\"UT\",\"DT\",\"S0\",\"QU\",\"YN\",\"JB\",\"GH\",\"PI\",\"SG\",\"KD\",\"PE\",\"UH\",\"S7\",\"CW\",\"OZ\",\"GI\",\"VE\"]");

},{}],"4mk08":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mobile_apps_json_1 = __importDefault(require("../../fixtures/regexes/client/mobile_apps.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class MobileAppParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const mobileApp of mobile_apps_json_1.default){
                const match = user_agent_1.userAgentParser(mobileApp.regex, userAgent);
                if (!match) continue;
                result.type = "mobile app";
                result.name = variable_replacement_1.variableReplacement(mobileApp.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(mobileApp.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = MobileAppParser;

},{"../../fixtures/regexes/client/mobile_apps.json":"jWM7u","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"jWM7u":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"AndroidDownloadManager(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"AndroidDownloadManager\",\"version\":\"$1\"},{\"regex\":\"(?:Apple)?News(?:[ /][\\\\d\\\\.]+)? Version(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Apple News\",\"version\":\"$1\"},{\"regex\":\"bPod\",\"name\":\"bPod\",\"version\":\"\"},{\"regex\":\"MessengerLiteForiOS.(?:FBAV)(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Facebook Messenger Lite\",\"version\":\"$1\"},{\"regex\":\"(?:MessengerForiOS|MESSENGER).(?:FBAV)(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Facebook Messenger\",\"version\":\"$1\"},{\"regex\":\"(?:FBAV|com.facebook.katana)(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Facebook\",\"version\":\"$1\"},{\"regex\":\"(?:FBAN|FBSV|FBID|FBBV)/\",\"name\":\"Facebook\",\"version\":\"\"},{\"regex\":\"FeedR(?:/([\\\\d\\\\.]+))?\",\"name\":\"FeedR\",\"version\":\"$1\"},{\"regex\":\"com.google.android.apps.searchlite\",\"name\":\"Google Go\",\"version\":\"\"},{\"regex\":\"com.google.android.apps.magazines\",\"name\":\"Google Play Newsstand\",\"version\":\"\"},{\"regex\":\"com.google.GooglePlus\",\"name\":\"Google Plus\",\"version\":\"\"},{\"regex\":\"MicroMessenger/([^; ]+)\",\"name\":\"WeChat\",\"version\":\"$1\"},{\"regex\":\"WeChatShareExtensionNew/([\\\\d\\\\.]+)\",\"name\":\"WeChat Share Extension\",\"version\":\"$1\"},{\"regex\":\"DingTalk/([0-9\\\\.]+)\",\"name\":\"DingTalk\",\"version\":\"$1\"},{\"regex\":\".*__weibo__([0-9\\\\.]+)__\",\"name\":\"Sina Weibo\",\"version\":\"$1\"},{\"regex\":\"Pinterest(?: for (?:Android|iOS))?(?:/([\\\\d\\\\.]+))?\",\"name\":\"Pinterest\",\"version\":\"$1\"},{\"regex\":\"Podcatcher Deluxe\",\"name\":\"Podcatcher Deluxe\",\"version\":\"\"},{\"regex\":\"com.google.android.youtube(?:/([\\\\d\\\\.]+))?\",\"name\":\"YouTube\",\"version\":\"$1\"},{\"regex\":\"([^/]+)/(\\\\d+(?:\\\\.\\\\d+)+) \\\\((?:iPhone|iPad); iOS [0-9\\\\.]+; Scale/[0-9\\\\.]+\\\\)\",\"name\":\"$1\",\"version\":\"$2\"},{\"regex\":\"WhatsApp(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"WhatsApp\",\"version\":\"$1\"},{\"regex\":\"Line(?:[ /]([\\\\d\\\\.]+))\",\"name\":\"Line\",\"version\":\"$1\"},{\"regex\":\"Instacast(?:HD)?/(\\\\d\\\\.[\\\\d\\\\.abc]+) CFNetwork/([\\\\d\\\\.]+) Darwin/([\\\\d\\\\.]+)\",\"name\":\"Instacast\",\"version\":\"$1\"},{\"regex\":\"Podcasts/([\\\\d\\\\.]+)\",\"name\":\"Podcasts\",\"version\":\"$1\"},{\"regex\":\"Pocket Casts(?:, (?:Android|iOS) v([\\\\d\\\\.]+))?\",\"name\":\"Pocket Casts\",\"version\":\"$1\"},{\"regex\":\"Podcat/([\\\\d\\\\.]+)\",\"name\":\"Podcat\",\"version\":\"$1\"},{\"regex\":\"BeyondPod\",\"name\":\"BeyondPod\",\"version\":null},{\"regex\":\"AntennaPod/?([\\\\d\\\\.]+)?\",\"name\":\"AntennaPod\",\"version\":\"$1\"},{\"regex\":\"Overcast/([\\\\d\\\\.]+)\",\"name\":\"Overcast\",\"version\":\"$1\"},{\"regex\":\"(?:CastBox|fm.castbox.audiobook.radio.podcast)/?([\\\\d\\\\.]+)?\",\"name\":\"CastBox\",\"version\":\"$1\"},{\"regex\":\"Player FM\",\"name\":\"Player FM\",\"version\":\"\"},{\"regex\":\"Podkicker(?: Pro)?/([\\\\d\\\\.]+)\",\"name\":\"Podkicker\",\"version\":\"$1\"},{\"regex\":\"PodcastRepublic/([\\\\d\\\\.]+)\",\"name\":\"Podcast Republic\",\"version\":\"$1\"},{\"regex\":\"Castro/(\\\\d+)\",\"name\":\"Castro\",\"version\":\"$1\"},{\"regex\":\"Castro 2 ([\\\\d\\\\.]+)/[\\\\d]+ Like iTunes\",\"name\":\"Castro 2\",\"version\":\"$1\"},{\"regex\":\"Castro 2\",\"name\":\"Castro 2\",\"version\":\"\"},{\"regex\":\"DoggCatcher\",\"name\":\"DoggCatcher\",\"version\":null},{\"regex\":\"PodcastAddict/v([\\\\d]+)\",\"name\":\"Podcast & Radio Addict\",\"version\":\"$1\"},{\"regex\":\"Podcat(?:%202)?/([\\\\d]+) CFNetwork\",\"name\":\"Podcat\",\"version\":\"$1\"},{\"regex\":\"iCatcher[^\\\\d]+([\\\\d\\\\.]+)\",\"name\":\"iCatcher\",\"version\":\"$1\"},{\"regex\":\"YelpApp/([\\\\d\\\\.]+)\",\"name\":\"Yelp Mobile\",\"version\":\"$1\"},{\"regex\":\"jp.co.yahoo.android.yjtop/([\\\\d\\\\.]+)\",\"name\":\"Yahoo! Japan\",\"version\":\"$1\"},{\"regex\":\"RSSRadio/([\\\\d]+)?\",\"name\":\"RSSRadio\",\"version\":\"$1\"},{\"regex\":\"SogouSearch Android[\\\\d\\\\.]+ version([\\\\d\\\\.]+)?\",\"name\":\"SogouSearch App\",\"version\":\"$1\"},{\"regex\":\"NewsArticle/([\\\\d\\\\.]+)?\",\"name\":\"NewsArticle App\",\"version\":\"$1\"},{\"regex\":\"tieba/([\\\\d\\\\.]+)?\",\"name\":\"tieba\",\"version\":\"$1\"},{\"regex\":\"com\\\\.douban\\\\.group/([\\\\d\\\\.]+)?\",\"name\":\"douban App\",\"version\":\"$1\"},{\"regex\":\"BingWeb/([\\\\d\\\\.]+)?\",\"name\":\"BingWebApp\",\"version\":\"$1\"},{\"regex\":\"(?:com.google.GoogleMobile|GSA)/([\\\\d\\\\.]+)?\",\"name\":\"Google Search App\",\"version\":\"$1\"},{\"regex\":\"Flipboard/([\\\\d\\\\.]+)?\",\"name\":\"Flipboard App\",\"version\":\"$1\"},{\"regex\":\"Instagram[ /]([\\\\d\\\\.]+)?\",\"name\":\"Instagram App\",\"version\":\"$1\"},{\"regex\":\"baiduboxapp/([\\\\d\\\\.]+)?\",\"name\":\"Baidu Box App\",\"version\":\"$1\"},{\"regex\":\"Crosswalk(?!.*(?:Streamy|QwantMobile))/([\\\\d\\\\.]+)?\",\"name\":\"CrosswalkApp\",\"version\":\"$1\"},{\"regex\":\"Twitter for iPhone[/]?([\\\\d\\\\.]+)?\",\"name\":\"Twitter\",\"version\":\"$1\"},{\"regex\":\"Twitter/([\\\\d\\\\.]+)\",\"name\":\"Twitter\",\"version\":\"$1\"},{\"regex\":\"TwitterAndroid[/]?([\\\\d\\\\.]+)?\",\"name\":\"Twitter\",\"version\":\"$1\"},{\"regex\":\"TopBuzz/([\\\\d\\\\.]+)\",\"name\":\"TopBuzz\",\"version\":\"$1\"},{\"regex\":\"Snapchat/([\\\\d\\\\.]+)\",\"name\":\"Snapchat\",\"version\":\"$1\"},{\"regex\":\"UnityPlayer/([\\\\d\\\\.]+)\",\"name\":\"UnityPlayer\",\"version\":\"$1\"},{\"regex\":\"UCURSOS/v([\\\\d\\\\.]+)\",\"name\":\"U-Cursos\",\"version\":\"$1\"},{\"regex\":\"HeyTapBrowser/([\\\\d\\\\.]+)\",\"name\":\"HeyTapBrowser\",\"version\":\"$1\"},{\"regex\":\"RobloxApp/([\\\\d\\\\.]+)\",\"name\":\"Roblox\",\"version\":\"$1\"},{\"regex\":\"Viber/([\\\\d\\\\.]+)\",\"name\":\"Viber\",\"version\":\"$1\"},{\"regex\":\"Siri/1\",\"name\":\"Siri\",\"version\":\"1.0\"},{\"regex\":\"LinkedIn/([\\\\d\\\\.]+)\",\"name\":\"LinkedIn\",\"version\":\"$1\"},{\"regex\":\"Instapaper/([\\\\d\\\\.]+)\",\"name\":\"Instapaper\",\"version\":\"$1\"},{\"regex\":\"Keeper/([\\\\d\\\\.]+)\",\"name\":\"Keeper Password Manager\",\"version\":\"$1\"},{\"regex\":\"Skyeng Teachers/([\\\\d\\\\.]+)\",\"name\":\"Skyeng Teachers\",\"version\":\"$1\"},{\"regex\":\"Kik/([\\\\d\\\\.]+) \\\\(Android\",\"name\":\"Kik\",\"version\":\"$1\"},{\"regex\":\"Procast/?([\\\\d\\\\.]+)?\",\"name\":\"Procast\",\"version\":\"$1\"},{\"regex\":\"DeviantArt/([\\\\d\\\\.]+)\",\"name\":\"DeviantArt\",\"version\":\"\"},{\"regex\":\"Discord/([\\\\d\\\\.]+)\",\"name\":\"Discord\",\"version\":\"\"},{\"regex\":\"Covenant%20Eyes/([\\\\d\\\\.]+)\",\"name\":\"Covenant Eyes\",\"version\":\"$1\"},{\"regex\":\"HP%20Smart/([\\\\d\\\\.]+)\",\"name\":\"HP Smart\",\"version\":\"\"},{\"regex\":\"Bitsboard/([\\\\d\\\\.]+)\",\"name\":\"Bitsboard\",\"version\":\"$1\"},{\"regex\":\"Betbull/([\\\\d\\\\.]+)\",\"name\":\"BetBull\",\"version\":\"\"},{\"regex\":\"U-Cursos/([\\\\d\\\\.]+)\",\"name\":\"U-Cursos\",\"version\":\"\"},{\"regex\":\"1PasswordThumbs/([\\\\d\\\\.]+)\",\"name\":\"1Password\",\"version\":\"$1\"},{\"regex\":\"(?:Microsoft Office )?(Access|Excel|OneDrive for Business|OneNote|PowerPoint|Project|Publisher|Visio|Word)[ /]([\\\\d\\\\.]+)\",\"name\":\"Microsoft Office $1\",\"version\":\"$2\"},{\"regex\":\"OneDriveiOSApp/([\\\\d\\\\.]+)\",\"name\":\"Microsoft OneDrive\",\"version\":\"$1\"},{\"regex\":\"Microsoft Office Mobile/([\\\\d\\\\.]+)\",\"name\":\"Microsoft Office Mobile\",\"version\":\"$1\"},{\"regex\":\"OC/([\\\\d\\\\.]+) \\\\(Skype for Business\\\\)\",\"name\":\"Skype for Business\",\"version\":\"$1\"},{\"regex\":\"TikTok[/ ](\\\\d+\\\\.(?:[\\\\.\\\\d]+))?\",\"name\":\"TikTok\",\"version\":\"$1\"},{\"regex\":\"NAVER/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Naver\",\"version\":\"$1\"},{\"regex\":\"Copied/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Copied\",\"version\":\"\"},{\"regex\":\"Pic%20Collage/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Pic Collage\",\"version\":\"$1\"},{\"regex\":\"Papers/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Papers\",\"version\":\"$1\"},{\"regex\":\"RoboForm/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"RoboForm\",\"version\":\"\"},{\"regex\":\"Slack/(\\\\d+[\\\\.\\\\d]+) CFNetwork\",\"name\":\"Slack\",\"version\":\"\"},{\"regex\":\"KAKAOTALK (\\\\d+\\\\.(?:[\\\\.\\\\d]+))?\",\"name\":\"KakaoTalk\",\"version\":\"$1\"},{\"regex\":\"ShopeeVN/([\\\\d\\\\.]+)\",\"name\":\"Shopee\",\"version\":\"$1\"},{\"regex\":\"SPORT1/([\\\\d\\\\.]+)\",\"name\":\"SPORT1\",\"version\":\"\"},{\"regex\":\"Clovia/([\\\\d\\\\.]+)\",\"name\":\"Clovia\",\"version\":\"$1\"},{\"regex\":\"ShowMe/([\\\\d\\\\.]+)\",\"name\":\"ShowMe\",\"version\":\"$1\"},{\"regex\":\"Wattpad/([\\\\d\\\\.]+)\",\"name\":\"Wattpad\",\"version\":\"$1\"},{\"regex\":\"WSJ/([\\\\d\\\\.]+)\",\"name\":\"The Wall Street Journal\",\"version\":\"\"},{\"regex\":\"WH%20Questions/([\\\\d\\\\.]+)\",\"name\":\"WH Questions\",\"version\":\"$1\"},{\"regex\":\"whisper/([\\\\d\\\\.]+)\",\"name\":\"Whisper\",\"version\":\"\"},{\"regex\":\"Opal/([\\\\d\\\\.]+)\",\"name\":\"Opal Travel\",\"version\":\"$1\"},{\"regex\":\"Zalo/([\\\\d\\\\.]+)\",\"name\":\"Zalo\",\"version\":\"$1\"},{\"regex\":\"Yandex/([\\\\d\\\\.]+)\",\"name\":\"Yandex\",\"version\":\"\"},{\"regex\":\"Zoho%20Chat/([\\\\d\\\\.]+)\",\"name\":\"Zoho Chat\",\"version\":\"$1\"},{\"regex\":\"Thunder/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Thunder\",\"version\":\"$1\"},{\"regex\":\"CGNBrowser/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"CGN\",\"version\":\"$1\"},{\"regex\":\"Podbean/.+App (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Podbean\",\"version\":\"$1\"},{\"regex\":\"AlexaMediaPlayer/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Alexa Media Player\",\"version\":\"$1\"},{\"regex\":\"TuneIn Radio Pro(?:[^/]+)?/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"TuneIn Radio Pro\",\"version\":\"$1\"},{\"regex\":\"TuneIn Radio(?:[^/]+)?/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"TuneIn Radio\",\"version\":\"$1\"},{\"regex\":\"Podcaster/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Podcaster\",\"version\":\"$1\"},{\"regex\":\"Swoot/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Swoot\",\"version\":\"$1\"},{\"regex\":\"RadioPublic/android-(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"RadioPublic\",\"version\":\"$1\"},{\"regex\":\"Podimo/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Podimo\",\"version\":\"$1\"},{\"regex\":\"com.evolve.podcast/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Evolve Podcast\",\"version\":\"$1\"},{\"regex\":\" Rocket.Chat\\\\+?/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Rocket Chat\",\"version\":\"$1\"},{\"regex\":\"^Pandora Audio.+Android\",\"name\":\"Pandora\",\"version\":\"\"},{\"regex\":\"^NPROneAndroid\",\"name\":\"NPR One\",\"version\":\"\"},{\"regex\":\"^WirtschaftsWoche-iOS-(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Wirtschafts Woche\",\"version\":\"$1\"},{\"regex\":\"^Outlook-iOS/.+\\\\((\\\\d+[\\\\.\\\\d]+)\\\\)$\",\"name\":\"Microsoft Outlook\",\"version\":\"$1\"},{\"regex\":\"^TVirl/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"TVirl\",\"version\":\"$1\"},{\"regex\":\"2?chMate/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"ChMate\",\"version\":\"$1\"},{\"regex\":\"2tch/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"2tch\",\"version\":\"$1\"},{\"regex\":\"Ciisaa/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Ciisaa\",\"version\":\"$1\"},{\"regex\":\"BB2C (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"BB2C\",\"version\":\"$1\"},{\"regex\":\"twinkle/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"twinkle\",\"version\":\"$1\"},{\"regex\":\"JaneStyle_iOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"JaneStyle\",\"version\":\"$1\"}]");

},{}],"7Ci9m":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const feed_readers_json_1 = __importDefault(require("../../fixtures/regexes/client/feed_readers.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class FeedReaderParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                url: ""
            };
            for (const feedReader of feed_readers_json_1.default){
                const match = user_agent_1.userAgentParser(feedReader.regex, userAgent);
                if (!match) continue;
                result.type = "feed reader";
                result.name = variable_replacement_1.variableReplacement(feedReader.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(feedReader.version, match), this.options.versionTruncation);
                result.url = feedReader.url;
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = FeedReaderParser;

},{"../../fixtures/regexes/client/feed_readers.json":"7SFmq","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"7SFmq":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Akregator(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Akregator\",\"version\":\"$1\",\"url\":\"http://userbase.kde.org/Akregator\",\"type\":\"Feed Reader\"},{\"regex\":\"Apple-PubSub(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Apple PubSub\",\"version\":\"$1\",\"url\":\"https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/pubsub.1.html\",\"type\":\"Feed Reader\"},{\"regex\":\"BashPodder\",\"name\":\"BashPodder\",\"version\":\"\",\"url\":\"http://lincgeek.org/bashpodder/\",\"type\":\"Feed Reader\"},{\"regex\":\"Breaker/v([\\\\d\\\\.]+)\",\"name\":\"Breaker\",\"version\":\"$1\",\"url\":\"https://www.breaker.audio/\",\"type\":\"Feed Reader App\"},{\"regex\":\"Downcast/([\\\\d\\\\.]+)\",\"name\":\"Downcast\",\"version\":\"$1\",\"url\":\"http://downcastapp.com/\",\"type\":\"Feed Reader App\"},{\"regex\":\"FeedDemon(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"FeedDemon\",\"version\":\"$1\",\"url\":\"http://www.feeddemon.com/\",\"type\":\"Feed Reader\"},{\"regex\":\"Feeddler(?:RSS|PRO)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Feeddler RSS Reader\",\"version\":\"$1\",\"url\":\"http://www.chebinliu.com/projects/iphone/feeddler-rss-reader/\",\"type\":\"Feed Reader App\"},{\"regex\":\"QuiteRSS(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"QuiteRSS\",\"version\":\"$1\",\"url\":\"https://quiterss.org\",\"type\":\"Feed Reader App\"},{\"regex\":\"gPodder/([\\\\d\\\\.]+)\",\"name\":\"gPodder\",\"version\":\"$1\",\"url\":\"http://gpodder.org/\",\"type\":\"Feed Reader App\"},{\"regex\":\"JetBrains Omea Reader(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"JetBrains Omea Reader\",\"version\":\"$1\",\"url\":\"http://www.jetbrains.com/omea/reader/\",\"type\":\"Feed Reader\"},{\"regex\":\"Liferea(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Liferea\",\"version\":\"$1\",\"url\":\"http://liferea.sf.net/\",\"type\":\"Feed Reader\"},{\"regex\":\"(?:NetNewsWire|Evergreen.+MacOS)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetNewsWire\",\"version\":\"$1\",\"url\":\"http://netnewswireapp.com/\",\"type\":\"Feed Reader\"},{\"regex\":\"NewsBlur (?:iPhone|iPad) App(?: v(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NewsBlur Mobile App\",\"version\":\"$1\",\"url\":\"http://www.newsblur.com\",\"type\":\"Feed Reader App\"},{\"regex\":\"NewsBlur(?:/(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"NewsBlur\",\"version\":\"$1\",\"url\":\"http://www.newsblur.com\",\"type\":\"Feed Reader\"},{\"regex\":\"newsbeuter(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Newsbeuter\",\"version\":\"$1\",\"url\":\"http://www.newsbeuter.org/\",\"type\":\"Feed Reader\"},{\"regex\":\"PritTorrent/([\\\\d\\\\.]+)\",\"name\":\"PritTorrent\",\"version\":\"$1\",\"url\":\"http://bitlove.org\",\"type\":\"Feed Reader\"},{\"regex\":\"Pulp[/ ](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Pulp\",\"version\":\"$1\",\"url\":\"http://www.acrylicapps.com/pulp/\",\"type\":\"Feed Reader App\"},{\"regex\":\"ReadKit(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"ReadKit\",\"version\":\"$1\",\"url\":\"http://readkitapp.com/\",\"type\":\"Feed Reader App\"},{\"regex\":\"Reeder[/ ](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Reeder\",\"version\":\"$1\",\"url\":\"http://reederapp.com/\",\"type\":\"Feed Reader App\"},{\"regex\":\"RSSBandit(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"RSS Bandit\",\"version\":\"$1\",\"url\":\"http://www.rssbandit.org)\",\"type\":\"Feed Reader\"},{\"regex\":\"RSS Junkie(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"RSS Junkie\",\"version\":\"$1\",\"url\":\"https://play.google.com/store/apps/details?id=com.bitpowder.rssjunkie\",\"type\":\"Feed Reader App\"},{\"regex\":\"RSSOwl(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"RSSOwl\",\"version\":\"$1\",\"url\":\"http://www.rssowl.org/\",\"type\":\"Feed Reader\"},{\"regex\":\"Stringer\",\"name\":\"Stringer\",\"version\":\"\",\"url\":\"https://github.com/swanson/stringer\",\"type\":\"Feed Reader\"}]");

},{}],"dWoue":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const libraries_json_1 = __importDefault(require("../../fixtures/regexes/client/libraries.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class LibraryParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                url: ""
            };
            for (const library of libraries_json_1.default){
                const match = user_agent_1.userAgentParser(library.regex, userAgent);
                if (!match) continue;
                result.type = "library";
                result.name = variable_replacement_1.variableReplacement(library.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(library.version, match), this.options.versionTruncation);
                result.url = library.url || "";
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = LibraryParser;

},{"../../fixtures/regexes/client/libraries.json":"aiAZb","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"aiAZb":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Wget(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Wget\",\"version\":\"$1\"},{\"regex\":\"Guzzle(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Guzzle (PHP HTTP Client)\",\"version\":\"$1\"},{\"regex\":\"(?:lib)?curl(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"curl\",\"version\":\"$1\"},{\"regex\":\"python-requests(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Python Requests\",\"version\":\"$1\"},{\"regex\":\"Python-urllib(?:/?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Python urllib\",\"version\":\"$1\"},{\"regex\":\"Java(?:/?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Java\",\"version\":\"$1\"},{\"regex\":\"(?:perlclient|libwww-perl)(?:/?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Perl\",\"version\":\"$1\"},{\"regex\":\"okhttp/([\\\\d\\\\.]+)\",\"name\":\"OkHttp\",\"version\":\"$1\"},{\"regex\":\"HTTP_Request2(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"HTTP_Request2\",\"version\":\"$1\"},{\"regex\":\"HTTP_Request2(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"HTTP_Request2\",\"version\":\"$1\",\"url\":\"http://pear.php.net/package/http_request2\"},{\"regex\":\"Mechanize(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Mechanize\",\"version\":\"$1\",\"url\":\"http://github.com/sparklemotion/mechanize/\"},{\"regex\":\"aiohttp(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"aiohttp\",\"version\":\"$1\"},{\"regex\":\"Google-HTTP-Java-Client(?:/(\\\\d+[\\\\.\\\\d\\\\w-]+))?\",\"name\":\"Google HTTP Java Client\",\"version\":\"$1\"},{\"regex\":\"WWW-Mechanize(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"WWW-Mechanize\",\"version\":\"$1\"},{\"regex\":\"Faraday(?: v(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Faraday\",\"version\":\"$1\"},{\"regex\":\"(?:Go-http-client|Go )/?(?:(\\\\d+[\\\\.\\\\d]+))?(?: package http)?\",\"name\":\"Go-http-client\",\"version\":\"$1\"},{\"regex\":\"urlgrabber(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"urlgrabber (yum)\",\"version\":\"$1\"},{\"regex\":\"libdnf(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"libdnf\",\"version\":\"$1\"},{\"regex\":\"HTTPie(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"HTTPie\",\"version\":\"$1\"},{\"regex\":\"rest-client/(\\\\d+[\\\\.\\\\d]+).*ruby\",\"name\":\"REST Client for Ruby\",\"version\":\"$1\"},{\"regex\":\"RestSharp/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"RestSharp\",\"version\":\"$1\",\"url\":\"http://restsharp.org/\"},{\"regex\":\"scalaj-http/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"ScalaJ HTTP\",\"version\":\"$1\",\"url\":\"https://github.com/scalaj/scalaj-http\"},{\"regex\":\"REST::Client/(\\\\d+)\",\"name\":\"Perl REST::Client\",\"version\":\"$1\",\"url\":\"https://metacpan.org/pod/REST::Client\"},{\"regex\":\"node-fetch/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Node Fetch\",\"version\":\"$1\",\"url\":\"https://github.com/node-fetch/node-fetch\"},{\"regex\":\"ReactorNetty/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"ReactorNetty\",\"version\":\"$1\",\"url\":\"https://github.com/reactor/reactor-netty\"},{\"regex\":\"PostmanRuntime(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Postman Desktop\",\"version\":\"$1\",\"url\":\"https://github.com/postmanlabs/postman-runtime\"},{\"regex\":\"Jakarta Commons-HttpClient/([\\\\.\\\\d]+)\",\"name\":\"Jakarta Commons HttpClient\",\"version\":\"$1\",\"url\":\"https://hc.apache.org/httpclient-3.x\"},{\"regex\":\"WinHttp.WinHttpRequest.+([\\\\.\\\\d]+)\",\"name\":\"WinHttp WinHttpRequest\",\"version\":\"$1\"},{\"regex\":\"Embarcadero URI Client/([\\\\.\\\\d]+)\",\"name\":\"Embarcadero URI Client\",\"version\":\"$1\"},{\"regex\":\"Mikrotik/([\\\\.\\\\d]+)\",\"name\":\"Mikrotik Fetch\",\"version\":\"$1\"},{\"regex\":\"GRequests(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"GRequests\",\"version\":\"$1\"},{\"regex\":\"akka-http/([\\\\.\\\\d]+)\",\"name\":\"Akka HTTP\",\"version\":\"$1\"}]");

},{}],"lvhXV":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mediaplayers_json_1 = __importDefault(require("../../fixtures/regexes/client/mediaplayers.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class MediaPlayerParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const mediaPlayer of mediaplayers_json_1.default){
                const match = user_agent_1.userAgentParser(mediaPlayer.regex, userAgent);
                if (!match) continue;
                result.type = "media player";
                result.name = variable_replacement_1.variableReplacement(mediaPlayer.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(mediaPlayer.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = MediaPlayerParser;

},{"../../fixtures/regexes/client/mediaplayers.json":"hnEjX","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"hnEjX":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Audacious(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Audacious\",\"version\":\"$1\"},{\"regex\":\"Banshee(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Banshee\",\"version\":\"$1\"},{\"regex\":\"Boxee(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Boxee\",\"version\":\"$1\"},{\"regex\":\"Clementine(?:[ /]([\\\\d\\\\.]+))?\",\"name\":\"Clementine\",\"version\":\"$1\"},{\"regex\":\"Deezer(?:/([\\\\d\\\\.]+))?\",\"name\":\"Deezer\",\"version\":\"$1\"},{\"regex\":\"iTunes(?:-iPhone|-iPad)?(?:/([\\\\d\\\\.]+))?\",\"name\":\"iTunes\",\"version\":\"$1\"},{\"regex\":\"FlyCast(?:/([\\\\d\\\\.]+))?\",\"name\":\"FlyCast\",\"version\":\"$1\"},{\"regex\":\"foobar2000(?:/([\\\\d\\\\.]+))?\",\"name\":\"Foobar2000\",\"version\":\"$1\"},{\"regex\":\"MediaMonkey(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"MediaMonkey\",\"version\":\"$1\"},{\"regex\":\"Miro(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Miro\",\"version\":\"$1\"},{\"regex\":\"NexPlayer(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NexPlayer\",\"version\":\"$1\"},{\"regex\":\"Nightingale(?:/([\\\\d\\\\.]+))?\",\"name\":\"Nightingale\",\"version\":\"$1\"},{\"regex\":\"QuickTime(?:(?:(?:.+qtver=)|(?:(?: E-)?[\\\\./]))([\\\\d\\\\.]+))?\",\"name\":\"QuickTime\",\"version\":\"$1\"},{\"regex\":\"Songbird(?:/([\\\\d\\\\.]+))?\",\"name\":\"Songbird\",\"version\":\"$1\"},{\"regex\":\"SubStream(?:/([\\\\d\\\\.]+))?\",\"name\":\"SubStream\",\"version\":\"$1\"},{\"regex\":\"Sonos/([\\\\d\\\\.]+)?\",\"name\":\"SONOS\",\"version\":\"$1\"},{\"regex\":\"(?:Lib)?VLC(?:/([\\\\d\\\\.]+))?\",\"name\":\"VLC\",\"version\":\"$1\"},{\"regex\":\"Winamp(?:MPEG)?(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Winamp\",\"version\":\"$1\"},{\"regex\":\"(?:Windows-Media-Player|NSPlayer)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Windows Media Player\",\"version\":\"$1\"},{\"regex\":\"XBMC(?:/([\\\\d\\\\.]+))?\",\"name\":\"XBMC\",\"version\":\"$1\"},{\"regex\":\"Kodi(?:/([\\\\d\\\\.]+))?\",\"name\":\"Kodi\",\"version\":\"$1\"},{\"regex\":\"stagefright(?:/([\\\\d\\\\.]+))?\",\"name\":\"Stagefright\",\"version\":\"$1\"},{\"regex\":\"GoogleChirp(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Google Podcasts\",\"version\":\"$1\"},{\"regex\":\"Music Player Daemon (?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Music Player Daemon\",\"version\":\"$1\"},{\"regex\":\"mpv (?:(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"mpv\",\"version\":\"$1\"}]");

},{}],"d7jwn":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const pim_json_1 = __importDefault(require("../../fixtures/regexes/client/pim.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class PersonalInformationManagerParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const personalInformationManager of pim_json_1.default){
                const match = user_agent_1.userAgentParser(personalInformationManager.regex, userAgent);
                if (!match) continue;
                result.type = "personal information manager";
                result.name = variable_replacement_1.variableReplacement(personalInformationManager.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(personalInformationManager.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = PersonalInformationManagerParser;

},{"../../fixtures/regexes/client/pim.json":"hQY2Y","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"hQY2Y":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Outlook-Express(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Outlook Express\",\"version\":\"$1\"},{\"regex\":\"Microsoft Outlook(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Microsoft Outlook\",\"version\":\"$1\"},{\"regex\":\"(?:Thunderbird|Icedove|Shredder)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Thunderbird\",\"version\":\"$1\"},{\"regex\":\"Airmail(?: (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Airmail\",\"version\":\"$1\"},{\"regex\":\"Lotus-Notes(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Lotus Notes\",\"version\":\"$1\"},{\"regex\":\"Barca(?:Pro)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Barca\",\"version\":\"$1\"},{\"regex\":\"Postbox(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Postbox\",\"version\":\"$1\"},{\"regex\":\"MailBar(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"MailBar\",\"version\":\"$1\"},{\"regex\":\"The Bat!(?: Voyager)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"The Bat!\",\"version\":\"$1\"},{\"regex\":\"DAVdroid(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"DAVdroid\",\"version\":\"$1\"},{\"regex\":\"(?:SeaMonkey|Iceape)(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"SeaMonkey\",\"version\":\"$1\"},{\"regex\":\"Live5ch/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Live5ch\",\"version\":\"$1\"},{\"regex\":\"JaneView/\",\"name\":\"JaneView\",\"version\":\"\"},{\"regex\":\"BathyScaphe/\",\"name\":\"BathyScaphe\",\"version\":\"\"}]");

},{}],"nlCs9":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cameras_1 = __importDefault(require("./cameras"));
const mobiles_1 = __importDefault(require("./mobiles"));
const televisions_1 = __importDefault(require("./televisions"));
const cars_1 = __importDefault(require("./cars"));
const consoles_1 = __importDefault(require("./consoles"));
const notebooks_1 = __importDefault(require("./notebooks"));
const portable_media_players_1 = __importDefault(require("./portable-media-players"));
const deviceParsers = [
    consoles_1.default,
    cars_1.default,
    cameras_1.default,
    televisions_1.default,
    portable_media_players_1.default,
    mobiles_1.default,
    notebooks_1.default
];
class ClientParser {
    constructor(){
        this.parse = (userAgent)=>{
            for (const Parser of deviceParsers){
                const parser = new Parser();
                const device = parser.parse(userAgent);
                if (device.type !== "") return device;
            }
            return null;
        };
    }
}
exports.default = ClientParser;

},{"./cameras":"jmtYJ","./mobiles":"jTWht","./televisions":"f9SkP","./cars":"2ehGP","./consoles":"gq9ao","./notebooks":"27Zpq","./portable-media-players":"fc0rS"}],"jmtYJ":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cameras_json_1 = __importDefault(require("../../fixtures/regexes/device/cameras.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class CameraParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, camera] of Object.entries(cameras_json_1.default)){
                const match = user_agent_1.userAgentParser(camera.regex, userAgent);
                if (!match) continue;
                result.type = "camera";
                result.brand = brand;
                if ("model" in camera && camera.model) result.model = variable_replacement_1.variableReplacement(camera.model, match).trim();
                else if ("models" in camera && camera.models) for (const model of camera.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = CameraParser;

},{"../../fixtures/regexes/device/cameras.json":"jDA9X","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"jDA9X":[function(require,module,exports) {
module.exports = JSON.parse("{\"Nikon\":{\"regex\":\"Coolpix S800c\",\"device\":\"camera\",\"model\":\"Coolpix S800c\"},\"Samsung\":{\"regex\":\"EK-G[CN][0-9]{3}\",\"device\":\"camera\",\"models\":[{\"regex\":\"EK-GN120\",\"model\":\"Galaxy NX\"},{\"regex\":\"EK-GC100\",\"model\":\"Galaxy Camera\"},{\"regex\":\"EK-GC110\",\"model\":\"Galaxy Camera WiFi only\"},{\"regex\":\"EK-GC200\",\"model\":\"Galaxy Camera 2\"},{\"regex\":\"EK-GC([0-9]{3})\",\"model\":\"Galaxy Camera $1\"}]}}");

},{}],"jTWht":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mobiles_json_1 = __importDefault(require("../../fixtures/regexes/device/mobiles.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class MobileParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            let resultType = "";
            for (const [brand, mobile] of Object.entries(mobiles_json_1.default)){
                const match = user_agent_1.userAgentParser(mobile.regex, userAgent);
                if (!match) continue;
                resultType = "device" in mobile && mobile.device || "";
                result.brand = brand;
                if ("model" in mobile && mobile.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(mobile.model, match)).trim();
                else if ("models" in mobile && mobile.models) for (const model of mobile.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = model_1.buildModel(variable_replacement_1.variableReplacement(model.model, modelMatch)).trim();
                    if ("device" in model && model.device) resultType = model.device;
                    if ("brand" in model) result.brand = model.brand || "";
                    break;
                }
                break;
            }
            // Sanitize device type
            if (resultType === "tv") result.type = "television";
            else if (resultType === "car browser") result.type = "car";
            else result.type = resultType;
            // Sanitize device brand
            if (result.brand === "Unknown") result.brand = "";
            return result;
        };
    }
}
exports.default = MobileParser;

},{"../../fixtures/regexes/device/mobiles.json":"5LFtf","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"5LFtf":[function(require,module,exports) {

},{}],"j4X29":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildModel = (model)=>{
    model = model.replace(/_/g, " ");
    model = model.replace(RegExp(" TD$", "i"), "");
    if (model === "Build") return "";
    return model;
};

},{}],"f9SkP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const televisions_json_1 = __importDefault(require("../../fixtures/regexes/device/televisions.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class TelevisionParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            if (!this.isHbbTv(userAgent)) return result;
            result.type = "television";
            for (const [brand, television] of Object.entries(televisions_json_1.default)){
                const match = user_agent_1.userAgentParser(television.regex, userAgent);
                if (!match) continue;
                result.brand = brand;
                if ("model" in television && television.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(television.model, match)).trim();
                else if ("models" in television && television.models) for (const model of television.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = model_1.buildModel(variable_replacement_1.variableReplacement(model.model, modelMatch)).trim();
                    break;
                }
                break;
            }
            return result;
        };
        this.isHbbTv = (userAgent)=>{
            return user_agent_1.userAgentParser("HbbTV\/([1-9]{1}(?:\.[0-9]{1}){1,2})", userAgent);
        };
    }
}
exports.default = TelevisionParser;

},{"../../fixtures/regexes/device/televisions.json":"lv7qE","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"lv7qE":[function(require,module,exports) {
module.exports = JSON.parse("{\"Airties\":{\"regex\":\"Airties\",\"device\":\"tv\",\"models\":[{\"regex\":\"Airties; ?([^);/]+)\",\"model\":\"$1\"}]},\"ALDI NORD\":{\"regex\":\"ALDINORD[;,]\",\"device\":\"tv\",\"model\":\"\"},\"ALDI SÜD\":{\"regex\":\"ALDISUED[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Altech UEC\":{\"regex\":\"Altech UEC\",\"device\":\"tv\",\"models\":[{\"regex\":\"Altech UEC; ?([^);/]+)\",\"model\":\"$1\"}]},\"AOC\":{\"regex\":\"AOC\",\"device\":\"tv\",\"models\":[{\"regex\":\"(LE43S5970-20|S50856)\",\"model\":\"$1\"}]},\"ARRIS\":{\"regex\":\"ARRIS[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"FS-ARS-01B\",\"model\":\"FS-ARS-01B\"}]},\"Atvio\":{\"regex\":\"ATVIO\",\"device\":\"tv\",\"models\":[{\"regex\":\"55D1620\",\"model\":\"55D1620\"}]},\"BangOlufsen\":{\"regex\":\"Bangolufsen\",\"device\":\"tv\",\"model\":\"BeoVision\"},\"Blaupunkt\":{\"regex\":\"Blaupunkt_UMC[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"LC-65CUG8052E\",\"model\":\"LC-65CUG8052E\"}]},\"Bush\":{\"regex\":\"BUSH[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Celcus\":{\"regex\":\"CELCUS[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Changhong\":{\"regex\":\"Changhong\",\"device\":\"tv\",\"models\":[{\"regex\":\"Changhong; ?([^);/]+)\",\"model\":\"$1\"}]},\"CreNova\":{\"regex\":\"CreNova\",\"device\":\"tv\",\"model\":\"CNV001\"},\"Digihome\":{\"regex\":\"DIGIHOME[;,]\",\"device\":\"tv\",\"model\":\"\"},\"DMM\":{\"regex\":\"DMM\",\"device\":\"tv\",\"model\":\"Dreambox\"},\"ELECTRONIA\":{\"regex\":\"ELECTRONIA[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Essentielb\":{\"regex\":\"ESSENTIELB[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Finlux\":{\"regex\":\"FINLUX[;,]\",\"device\":\"tv\",\"model\":\"\"},\"F&U\":{\"regex\":\"FU[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Fuego\":{\"regex\":\"FUEGO[;,]\",\"device\":\"tv\",\"model\":\"\"},\"GoGEN\":{\"regex\":\"GOGEN[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Grundig\":{\"regex\":\"(OWB|Grundig|Arcelik)\",\"device\":\"tv\",\"model\":\"\"},\"Haier\":{\"regex\":\"(?:HHW_)?HAIER\",\"device\":\"tv\",\"models\":[{\"regex\":\"LE55X7000U\",\"model\":\"LE55X7000U\"}]},\"Hi-Level\":{\"regex\":\"HI-LEVEL[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Hisense\":{\"regex\":\"Hisense|Eurofins_Digital_Testing\",\"device\":\"tv\",\"models\":[{\"regex\":\"50ADEVTOOL\",\"model\":\"50ADEVTOOL\"},{\"regex\":\"50A683FEVS\",\"model\":\"50A683FEVS\"},{\"regex\":\"55A6100EE\",\"model\":\"55A6100EE\"},{\"regex\":\"55U62QGAVT\",\"model\":\"55U62QGAVT\"},{\"regex\":\"50A6502EA\",\"model\":\"50A6502EA\"},{\"regex\":\"MICALIDVB6886\",\"model\":\"MICALIDVB6886\"},{\"regex\":\"(L[A-Z]{2,3}[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,6}[0-9]?[A-Z]?)\",\"model\":\"$1\"},{\"regex\":\"(H[A-Z]?[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,4})\",\"model\":\"$1\"}]},\"Hitachi\":{\"regex\":\"Hitachi[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"49D2900\",\"model\":\"49D2900\"}]},\"Horizon\":{\"regex\":\"HORIZON[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Hotel\":{\"regex\":\"HOTEL[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Humax\":{\"regex\":\"Humax\",\"device\":\"tv\",\"models\":[{\"regex\":\"(HD-FOX C|HD (FOX\\\\+|NANO)|iCord (HD\\\\+|MINI|Cable)|(CX|IR)HD-5100(C|S)|HM9503HD)\",\"model\":\"$1\"},{\"regex\":\"HMS1000S\",\"model\":\"HMS-1000S\"},{\"regex\":\"Humax; ([^);/]+)\",\"model\":\"$1\"}]},\"Hyundai\":{\"regex\":\"HYUNDAI[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Ikea\":{\"regex\":\"Ikea\",\"device\":\"tv\",\"model\":\"\"},\"Intek\":{\"regex\":\"Intek\",\"device\":\"tv\",\"models\":[{\"regex\":\"(Vantage|VT-100|VT-1)\",\"model\":\"$1\"}]},\"Inverto\":{\"regex\":\"Inverto\",\"device\":\"tv\",\"models\":[{\"regex\":\"inverto; ([^);/]+)\",\"model\":\"$1\"},{\"regex\":\"(Volksbox Web Edition|Volksbox Essential|Volksbox II|Volksbox)\",\"model\":\"$1\"}]},\"JVC\":{\"regex\":\"AFTSO001|JVC[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"AFTSO001\",\"model\":\"4K (2019)\"}]},\"Kalley\":{\"regex\":\"KALLEY[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"32D1620\",\"model\":\"32D1620\"}]},\"KUBO\":{\"regex\":\"KUBO[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Laurus\":{\"regex\":\"LAURUS[;,]\",\"device\":\"tv\",\"model\":\"\"},\"LG\":{\"regex\":\"LGE\",\"device\":\"tv\",\"models\":[{\"regex\":\"XU43WT180N\",\"model\":\"XU43WT180N\"},{\"regex\":\"43LJ614V-ZA\",\"model\":\"43LJ614V-ZA\"},{\"regex\":\"55SK850V-ZA\",\"model\":\"55SK850V-ZA\"},{\"regex\":\"KEY0000213F1z\",\"model\":\"KEY0000213F1z\"},{\"regex\":\"KEY0000213F\",\"model\":\"KEY0000213F\"},{\"regex\":\"KEY000000(2E|2F|3B|3F)\",\"model\":\"KEY000000$1\"},{\"regex\":\"(NetCast [0-9]{1}.[0-9]{1}|GLOBAL_PLAT3)\",\"model\":\"$1\"},{\"regex\":\"(OLED[0-9]{2}[A-Z0-9]{3}[A-Z]{2})\",\"model\":\"$1\"},{\"regex\":\"(OLED[0-9]{2}[A-Z][0-9][A-Z])\",\"model\":\"$1\"},{\"regex\":\"(OLED[0-9]{2}[A-Z0-9]{2})\",\"model\":\"$1\"},{\"regex\":\"([0-9]{2}[A-Z]{2}[0-9]{4}[A-Z0-9]{1}[A-Z]{2})\",\"model\":\"$1\"},{\"regex\":\"([0-9]{2}NANO[0-9]{3}[A-Z]{2})\",\"model\":\"$1\"},{\"regex\":\"([0-9]{2}NANO[0-9]{2})\",\"model\":\"$1\"},{\"regex\":\"LGE;? ?([0-9]{2}[A-Z]{2}[0-9]{2,4}[A-Z]?)\",\"model\":\"$1\"},{\"regex\":\"LM21U\",\"model\":\"LM21U\"},{\"regex\":\"32LM\",\"model\":\"32LM\"}]},\"Lifemaxx\":{\"regex\":\"Lifemaxx[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Linsar\":{\"regex\":\"LINSAR[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Loewe\":{\"regex\":\"Loewe\",\"device\":\"tv\",\"models\":[{\"regex\":\"([A-Z]{2}[0-9]{3})\",\"model\":\"$1\"}]},\"Luxor\":{\"regex\":\"LUXOR[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Manhattan\":{\"regex\":\"Manhattan\",\"device\":\"tv\",\"models\":[{\"regex\":\"T3\",\"model\":\"T3\"}]},\"MediaTek\":{\"regex\":\"MTK|MediaTek;\",\"device\":\"tv\",\"models\":[{\"regex\":\"(MT[0-9]{4})\",\"model\":\"$1\"}]},\"Medion\":{\"regex\":\"Medion\",\"device\":\"tv\",\"model\":\"\"},\"Miray\":{\"regex\":\"MIRAY\",\"device\":\"tv\",\"models\":[{\"regex\":\"LEDM-322NIP\",\"model\":\"LEDM-322NIP\"}]},\"MStar\":{\"regex\":\"MStar[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"([24])KTV18\",\"model\":\"$1KTV18\"}]},\"MTC\":{\"regex\":\"MTC[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"([24])K_Android_TV_V01\",\"model\":\"$1K Android TV\"}]},\"Nordmende\":{\"regex\":\"NORDMENDE[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Metz\":{\"regex\":\"Metz\",\"device\":\"tv\",\"model\":\"\"},\"Ok\":{\"regex\":\"OK[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Panasonic\":{\"regex\":\"Panasonic\",\"device\":\"tv\",\"models\":[{\"regex\":\"VIERA (201[1-9])\",\"model\":\"VIERA ($1)\"},{\"regex\":\"(DIGA [A-Z]{1}[0-9]{4})\",\"model\":\"$1\"},{\"regex\":\"DIGA Webkit ([A-Z]{1}[0-9]{4})\",\"model\":\"DIGA $1\"},{\"regex\":\"SmartTV(201[89]|202[0-1])\",\"model\":\"Smart TV ($1)\"}]},\"PEAQ\":{\"regex\":\"PEAQ\",\"device\":\"tv\",\"model\":\"\"},\"Philips\":{\"regex\":\"Philips|NETTV/\",\"device\":\"tv\",\"models\":[{\"regex\":\"Philips[,;] ?((?! )[^),;/]+)\",\"model\":\"$1\"},{\"regex\":\"NETTV/[0-9\\\\.]{5}\",\"model\":\"NetTV Series\"}]},\"Polaroid\":{\"regex\":\"POLAROID[;,]\",\"device\":\"tv\",\"model\":\"\"},\"PROFiLO\":{\"regex\":\"PROFILO[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Qilive\":{\"regex\":\"QILIVE[;,]\",\"device\":\"tv\",\"model\":\"\"},\"REGAL\":{\"regex\":\"REGAL[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Saba\":{\"regex\":\"Saba[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Salora\":{\"regex\":\"Salora[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Samsung\":{\"regex\":\"Samsung|Maple_2011\",\"device\":\"tv\",\"models\":[{\"regex\":\"SmartTV(201[2-9]|202[0-1]):([^);/]+)\",\"model\":\"$2\"},{\"regex\":\"SmartTV(201[2-9]|202[0-1])\",\"model\":\"Smart TV ($1)\"},{\"regex\":\"Maple_2011\",\"model\":\"Smart TV (2011)\"}]},\"SCBC\":{\"regex\":\"SCBC[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"SCBC586\",\"model\":\"SCBC586\"},{\"regex\":\"43D1850\",\"model\":\"43D1850\"}]},\"SEG\":{\"regex\":\"SEG[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Selevision\":{\"regex\":\"Selevision\",\"device\":\"tv\",\"models\":[{\"regex\":\"Selevision; (?:Selevision )?([^);/]+)\",\"model\":\"$1\"},{\"regex\":\"(EMC1000i)\",\"model\":\"$1\"}]},\"Sharp\":{\"regex\":\"(?:UMC-)?Sharp\",\"device\":\"tv\",\"models\":[{\"regex\":\"Sharp[,;] ?((?! |HbbTV)[^),;/]+)\",\"model\":\"$1\"},{\"regex\":\"(LE[0-9]{3}[A-Z]{0,3})\",\"model\":\"$1\"},{\"regex\":\"LC-([^);/]+)\",\"model\":\"LC-$1\"},{\"regex\":\"BLA-43\",\"model\":\"BLA-43\"}]},\"Skyworth\":{\"regex\":\"Sky_worth\",\"device\":\"tv\",\"models\":[{\"regex\":\"Sky_worth;([^);/]+)\",\"model\":\"$1\"}]},\"Smart\":{\"regex\":\"Smart[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"Smart; ([^);/]+)\",\"model\":\"$1\"},{\"regex\":\"([A-Z]{2}[0-9]{2}|ZAPPIX)\",\"model\":\"$1\"}]},\"Sony\":{\"regex\":\"Sony\",\"device\":\"tv\",\"models\":[{\"regex\":\"KDL-GR1\",\"model\":\"KDL-GR1\"},{\"regex\":\"KDL-GN([56])\",\"model\":\"KDL-GN$1\"},{\"regex\":\"BRAVIA (VH1|4K VH2)\",\"model\":\"BRAVIA $1\"},{\"regex\":\"(KDL?-?[0-9]{2}[A-Z]{1}[0-9]{4}[A-Z]{1})\",\"model\":\"$1\"},{\"regex\":\"(KDL?-?[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1})\",\"model\":\"$1\"},{\"regex\":\"(KDL?-?[0-9]{2}[A-Z]{1,2}[0-9]{1,5})\",\"model\":\"$1\"}]},\"SWTV\":{\"regex\":\"SWTV[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"SKWE20E21\",\"model\":\"SKWE20E21\"}]},\"TD Systems\":{\"regex\":\"TDSystems[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"SmartTV(2019|2020)\",\"model\":\"Smart TV ($1)\"}]},\"Technicolor\":{\"regex\":\"Technicolor\",\"device\":\"tv\",\"models\":[{\"regex\":\"uzw4054ttg\",\"model\":\"UZW4054TTG\"}]},\"Technika\":{\"regex\":\"TECHNIKA[;,]\",\"device\":\"tv\",\"model\":\"\"},\"TechniSat\":{\"regex\":\"TechniSat\",\"device\":\"tv\",\"models\":[{\"regex\":\"((DigiCorder|MultyVision|Digit) (ISIO S|ISIO C|ISIO))\",\"model\":\"$1\"}]},\"TechnoTrend\":{\"regex\":\"TechnoTrend\",\"device\":\"tv\",\"models\":[{\"regex\":\"([A-Z]{1}-[0-9]{3})\",\"model\":\"$1\"}]},\"Techwood\":{\"regex\":\"Techwood[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Telefunken\":{\"regex\":\"Telefunken\",\"device\":\"tv\",\"model\":\"\"},\"TCL\":{\"regex\":\"TCL\",\"device\":\"tv\",\"models\":[{\"regex\":\"(32D1820|(?:39|55)D2900|32D2930|(?:32|43)S4900)\",\"model\":\"$1\"}]},\"Thomson\":{\"regex\":\"THOMSON[,]?|THOM\",\"device\":\"tv\",\"models\":[{\"regex\":\"(TB28D19DHS-01|T28D18SFS-01B)\",\"model\":\"$1 28.0\\\"\"},{\"regex\":\"(T32RTM5040|T32D18SFS-01B)\",\"model\":\"$1 32.0\\\"\"},{\"regex\":\"(T43FSL5031|T43D18SFS-01B)\",\"model\":\"$1 43.0\\\"\"},{\"regex\":\"(T40D18SFS-01B)\",\"model\":\"$1 40.0\\\"\"},{\"regex\":\"(T49D18SFS-01B)\",\"model\":\"$1 49.0\\\"\"},{\"regex\":\"(T55D18[SD]FS-01B)\",\"model\":\"$1 55.0\\\"\"},{\"regex\":\"40FB5426\",\"model\":\"40FB5426\"}]},\"TOKYO\":{\"regex\":\"TOKYO[;,]\",\"device\":\"tv\",\"models\":[{\"regex\":\"TOKTCLED32S\",\"model\":\"TOKTCLED32S\"}]},\"Toshiba\":{\"regex\":\"Toshiba\",\"device\":\"tv\",\"models\":[{\"regex\":\"40L2600\",\"model\":\"40L2600\"},{\"regex\":\"(([0-9]{2}|DTV_)[A-Z]{2}[0-9]{1,3})\",\"model\":\"$1\"}]},\"Videoweb\":{\"regex\":\"videoweb|tv2n\",\"device\":\"tv\",\"models\":[{\"regex\":\"(tv2n)\",\"model\":\"$1\"},{\"regex\":\"(videowebtv)\",\"model\":\"VideoWeb TV\"}]},\"VOX\":{\"regex\":\"VOX[;,]\",\"device\":\"tv\",\"model\":\"\"},\"WELLINGTON\":{\"regex\":\"WELLINGTON[;,]\",\"device\":\"tv\",\"model\":\"\"},\"X.Vision\":{\"regex\":\"X-VISION[;,]\",\"device\":\"tv\",\"model\":\"\"},\"Vestel\":{\"regex\":\"(?:Vestel.+VESTEL|VESTEL;)\",\"device\":\"tv\",\"model\":\"\"}}");

},{}],"2ehGP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const car_browsers_json_1 = __importDefault(require("../../fixtures/regexes/device/car_browsers.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class CarParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, car] of Object.entries(car_browsers_json_1.default)){
                const match = user_agent_1.userAgentParser(car.regex, userAgent);
                if (!match) continue;
                result.type = "car";
                result.brand = brand;
                for (const model of car.models){
                    const match = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!match) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, match).trim();
                }
                break;
            }
            return result;
        };
    }
}
exports.default = CarParser;

},{"../../fixtures/regexes/device/car_browsers.json":"kzkjI","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"kzkjI":[function(require,module,exports) {
module.exports = JSON.parse("{\"Tesla\":{\"regex\":\"(?:Tesla/[0-9.]+|QtCarBrowser)\",\"device\":\"car browser\",\"models\":[{\"regex\":\"QtCarBrowser\",\"model\":\"Model S\"},{\"regex\":\"Tesla/[0-9.]+\",\"model\":\"\"}]},\"MAC AUDIO\":{\"regex\":\"Mac Audio Spro\",\"device\":\"car browser\",\"models\":[{\"regex\":\"Spro\",\"model\":\"S Pro\"}]},\"Topway\":{\"regex\":\"sp9853i_1h10_vmm\",\"device\":\"car browser\",\"models\":[{\"regex\":\"sp9853i_1h10_vmm\",\"model\":\"TS9\"}]}}");

},{}],"gq9ao":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const consoles_json_1 = __importDefault(require("../../fixtures/regexes/device/consoles.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class ConsoleParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, gameConsole] of Object.entries(consoles_json_1.default)){
                const match = user_agent_1.userAgentParser(gameConsole.regex, userAgent);
                if (!match) continue;
                result.type = gameConsole.device;
                result.brand = brand;
                if ("model" in gameConsole && gameConsole.model) result.model = variable_replacement_1.variableReplacement(gameConsole.model, match).trim();
                else if ("models" in gameConsole && gameConsole.models) for (const model of gameConsole.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = ConsoleParser;

},{"../../fixtures/regexes/device/consoles.json":"lMm6d","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"lMm6d":[function(require,module,exports) {
module.exports = JSON.parse("{\"Archos\":{\"regex\":\"Archos.*GAMEPAD([2]?)\",\"device\":\"console\",\"model\":\"Gamepad $1\"},\"Microsoft\":{\"regex\":\"Xbox\",\"device\":\"console\",\"models\":[{\"regex\":\"Xbox Series X\",\"model\":\"Xbox Series X\"},{\"regex\":\"Xbox One X\",\"model\":\"Xbox One X\"},{\"regex\":\"Xbox One\",\"model\":\"Xbox One\"},{\"regex\":\"XBOX_ONE_ED\",\"model\":\"Xbox One S\"},{\"regex\":\"Xbox\",\"model\":\"Xbox 360\"}]},\"Nintendo\":{\"regex\":\"Nintendo (([3]?DS[i]?)|Wii[U]?|Switch)\",\"device\":\"console\",\"model\":\"$1\"},\"OUYA\":{\"regex\":\"OUYA\",\"device\":\"console\",\"model\":\"OUYA\"},\"Sega\":{\"regex\":\"Dreamcast\",\"device\":\"console\",\"model\":\"Dreamcast\"},\"Sony\":{\"regex\":\"PlayStation (3|4 Pro|4|Portable|Vita)\",\"device\":\"console\",\"model\":\"PlayStation $1\"}}");

},{}],"27Zpq":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const notebooks_json_1 = __importDefault(require("../../fixtures/regexes/device/notebooks.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class NotebooksParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            if (!user_agent_1.userAgentParser("FBMD/", userAgent)) return result;
            for (const [brand, notebook] of Object.entries(notebooks_json_1.default)){
                const match = user_agent_1.userAgentParser(notebook.regex, userAgent);
                if (!match) continue;
                result.type = "desktop";
                result.brand = brand;
                if ("model" in notebook && notebook.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(notebook.model, match)).trim();
                else if ("models" in notebook && notebook.models) for (const model of notebook.models){
                    const match = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!match) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, match).trim();
                }
                break;
            }
            return result;
        };
    }
}
exports.default = NotebooksParser;

},{"../../fixtures/regexes/device/notebooks.json":"2tGdW","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"2tGdW":[function(require,module,exports) {
module.exports = JSON.parse("{\"Acer\":{\"regex\":\"FBMD/(?:Aspire E5-421G|Z5WAL|One S1003);\",\"device\":\"desktop\",\"models\":[{\"regex\":\"FBMD/Aspire E5-421G;\",\"model\":\"Aspire E5-421G\"},{\"regex\":\"FBMD/Z5WAL;\",\"model\":\"Aspire E5-511\"},{\"regex\":\"FBMD/One S1003;\",\"model\":\"One 10\"}]},\"Asus\":{\"regex\":\"FBMD/(?:K50IN|K54L|T100HAN|T103HAF|UX360CAK|X550LB|X553MA|X555LN|X556UQK);\",\"device\":\"desktop\",\"models\":[{\"regex\":\"FBMD/K50IN;\",\"model\":\"K50IN\"},{\"regex\":\"FBMD/K54L;\",\"model\":\"K54L\"},{\"regex\":\"FBMD/T100HAN;\",\"model\":\"Transformer Book\"},{\"regex\":\"FBMD/T103HAF;\",\"model\":\"Transformer Mini\"},{\"regex\":\"FBMD/UX360CAK;\",\"model\":\"ZenBook Flip\"},{\"regex\":\"FBMD/X550LB;\",\"model\":\"X550LB\"},{\"regex\":\"FBMD/X553MA;\",\"model\":\"X553MA\"},{\"regex\":\"FBMD/X555LN;\",\"model\":\"X555LN\"},{\"regex\":\"FBMD/X556UQK;\",\"model\":\"X556UQK\"}]},\"Dell\":{\"regex\":\"FBMD/(?:Latitude E4300|Inspiron 3541|XPS 15 95[35]0);\",\"device\":\"desktop\",\"models\":[{\"regex\":\"Latitude E4300\",\"model\":\"Latitude E4300\"},{\"regex\":\"Inspiron 3541\",\"model\":\"Inspiron 3541\"},{\"regex\":\"XPS 15 9530\",\"model\":\"XPS 15 9530\"},{\"regex\":\"XPS 15 9550\",\"model\":\"XPS 15 9550\"}]},\"HP\":{\"regex\":\"FBMD/((?:Compaq|HP) |23-f364)\",\"device\":\"desktop\",\"models\":[{\"regex\":\"Compaq Presario CQ61 Notebook PC\",\"model\":\"Compaq Presario CQ61\"},{\"regex\":\"HP Pavilion x2 Detachable\",\"model\":\"Pavilion x2\"},{\"regex\":\"HP Laptop 15-bs0xx\",\"model\":\"15 Laptop PC\"},{\"regex\":\"HP ENVY x360 Convertible 15-bp0xx\",\"model\":\"ENVY x360 Convertible PC\"},{\"regex\":\"HP EliteBook (25[67]0p)\",\"model\":\"EliteBook $1\"},{\"regex\":\"HP ProBook (440 G5|6[35]60b)\",\"model\":\"ProBook $1\"},{\"regex\":\"HP Pavilion dv6 Notebook PC\",\"model\":\"Pavilion dv6\"},{\"regex\":\"HP Pavilion Notebook\",\"model\":\"Pavilion\"},{\"regex\":\"HP Spectre x360 Convertible\",\"model\":\"Spectre x360\"},{\"regex\":\"HP Pavilion All-in-One 24-r0xx\",\"model\":\"Pavilion 24-r0xx All-in-One Desktop PC\",\"device\":\"desktop\"},{\"regex\":\"23-f364\",\"model\":\"Pavilion TouchSmart 23-f364 All-in-One Desktop PC\",\"device\":\"desktop\"}]},\"Lenovo\":{\"regex\":\"FBMD/(?:37021C5|80E5|80SM|80VR);\",\"device\":\"desktop\",\"models\":[{\"regex\":\"FBMD/37021C5;\",\"model\":\"ThinkPad Helix 3702\"},{\"regex\":\"FBMD/80E5;\",\"model\":\"G50-80\"},{\"regex\":\"FBMD/80SM;\",\"model\":\"Ideapad 310-15ISK\"},{\"regex\":\"FBMD/80VR;\",\"model\":\"Legion Y720\"}]},\"Schneider\":{\"regex\":\"FBMD/SCL141CTP;\",\"device\":\"desktop\",\"model\":\"Notebook 14\\\" Cherry Trail\"},\"Thomson\":{\"regex\":\"FBMD/TH360R12.32CTW;\",\"device\":\"desktop\",\"model\":\"Prestige TH-360R12.32CTW\"},\"Toshiba\":{\"regex\":\"FBMD/Satellite \",\"device\":\"desktop\",\"models\":[{\"regex\":\"Satellite (A[25]00|C650|C855|L650|S855)\",\"model\":\"Satellite $1\"},{\"regex\":\"Satellite ([^;\\\\)]+);\",\"model\":\"Satellite $1\"}]}}");

},{}],"fc0rS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const portable_media_player_json_1 = __importDefault(require("../../fixtures/regexes/device/portable_media_player.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class PortableMediaPlayersParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, portableMediaPlayer] of Object.entries(portable_media_player_json_1.default)){
                const match = user_agent_1.userAgentParser(portableMediaPlayer.regex, userAgent);
                if (!match) continue;
                result.type = portableMediaPlayer.device;
                result.brand = brand;
                if ("model" in portableMediaPlayer && portableMediaPlayer.model) result.model = variable_replacement_1.variableReplacement(portableMediaPlayer.model, match).trim();
                else if ("models" in portableMediaPlayer && portableMediaPlayer.models) for (const model of portableMediaPlayer.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = PortableMediaPlayersParser;

},{"../../fixtures/regexes/device/portable_media_player.json":"bJQX3","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"bJQX3":[function(require,module,exports) {
module.exports = JSON.parse("{\"Apple\":{\"regex\":\"(?:Apple-)?iPod\",\"device\":\"portable media player\",\"models\":[{\"regex\":\"(?:Apple-)?iPod1[C,]1\",\"model\":\"iPod Touch 1G\"},{\"regex\":\"(?:Apple-)?iPod2[C,]1\",\"model\":\"iPod Touch 2G\"},{\"regex\":\"(?:Apple-)?iPod3[C,]1\",\"model\":\"iPod Touch 3\"},{\"regex\":\"(?:Apple-)?iPod4[C,]1\",\"model\":\"iPod Touch 4\"},{\"regex\":\"(?:Apple-)?iPod5[C,]1\",\"model\":\"iPod Touch 5\"},{\"regex\":\"(?:Apple-)?iPod7[C,]1\",\"model\":\"iPod Touch 6\"},{\"regex\":\"(?:Apple-)?iPod\",\"model\":\"iPod Touch\"}]},\"Cowon\":{\"regex\":\"COWON ([^;/]+) Build\",\"device\":\"portable media player\",\"model\":\"$1\"},\"Microsoft\":{\"regex\":\"Microsoft ZuneHD\",\"device\":\"portable media player\",\"model\":\"Zune HD\"},\"Panasonic\":{\"regex\":\"(SV-MV100)\",\"device\":\"portable media player\",\"model\":\"$1\"},\"Samsung\":{\"regex\":\"YP-(G[SIPB]?1|G[57]0|GB70D)\",\"device\":\"portable media player\",\"models\":[{\"regex\":\"YP-G[B]?1\",\"model\":\"Galaxy Player 4.0\"},{\"regex\":\"YP-G70\",\"model\":\"Galaxy Player 5.0\"},{\"regex\":\"YP-GS1\",\"model\":\"Galaxy Player 3.6\"},{\"regex\":\"YP-GI1\",\"model\":\"Galaxy Player 4.2\"},{\"regex\":\"YP-GP1\",\"model\":\"Galaxy Player 5.8\"},{\"regex\":\"YP-G50\",\"model\":\"Galaxy Player 50\"},{\"regex\":\"YP-GB70D\",\"model\":\"Galaxy Player 70 Plus\"}]},\"Wizz\":{\"regex\":\"(DV-PTB1080)(?:[);/ ]|$)\",\"device\":\"portable media player\",\"model\":\"$1\"},\"SONOS\":{\"regex\":\"Sonos/.+\\\\((?:ZP.+)\\\\)|Sonos;\",\"device\":\"portable media player\",\"models\":[{\"regex\":\"\\\\((ZPS(?:[13569]|1[1-578]|2[03])|ZP90)\\\\)\",\"model\":\"$1\"},{\"regex\":\"Sonos;Play5;\",\"model\":\"Play:5\"},{\"regex\":\"Sonos;One;\",\"model\":\"One\"}]}}");

},{}],"gSgGA":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const oss_json_1 = __importDefault(require("../../fixtures/regexes/oss.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const operating_system_json_1 = __importDefault(require("./fixtures/operating-system.json"));
const desktopOsArray = [
    "AmigaOS",
    "IBM",
    "GNU/Linux",
    "Mac",
    "Unix",
    "Windows",
    "BeOS",
    "Chrome OS"
];
const shortOsNames = operating_system_json_1.default.operatingSystem;
const osFamilies = operating_system_json_1.default.osFamilies;
class OperatingSystemParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                name: "",
                version: "",
                platform: this.parsePlatform(userAgent)
            };
            for (const operatingSystem of oss_json_1.default){
                const match = user_agent_1.userAgentParser(operatingSystem.regex, userAgent);
                if (!match) continue;
                result.name = variable_replacement_1.variableReplacement(operatingSystem.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(operatingSystem.version, match), this.options.versionTruncation);
                if (result.name === "lubuntu") result.name = "Lubuntu";
                if (result.name === "debian") result.name = "Debian";
                if (result.name === "YunOS") result.name = "YunOs";
                return result;
            }
            return null;
        };
        this.parsePlatform = (userAgent)=>{
            if (user_agent_1.userAgentParser("arm|aarch64|Watch ?OS|Watch1,[12]", userAgent)) return "ARM";
            if (user_agent_1.userAgentParser("mips", userAgent)) return "MIPS";
            if (user_agent_1.userAgentParser("sh4", userAgent)) return "SuperH";
            if (user_agent_1.userAgentParser("WOW64|x64|win64|amd64|x86_?64", userAgent)) return "x64";
            if (user_agent_1.userAgentParser("(?:i[0-9]|x)86|i86pc", userAgent)) return "x86";
            return "";
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = OperatingSystemParser;
OperatingSystemParser.getDesktopOsArray = ()=>desktopOsArray
;
OperatingSystemParser.getOsFamily = (osName)=>{
    const osShortName = OperatingSystemParser.getOsShortName(osName);
    for (const [osFamily, shortNames] of Object.entries(osFamilies)){
        if (shortNames.includes(osShortName)) return osFamily;
    }
    return "";
};
OperatingSystemParser.getOsShortName = (osName)=>{
    for (const [shortName, name] of Object.entries(shortOsNames)){
        if (name === osName) return shortName;
    }
    return "";
};

},{"../../fixtures/regexes/oss.json":"hhctA","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","./fixtures/operating-system.json":"jM6kk"}],"hhctA":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"Grid OS (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"GridOS\",\"version\":\"$1\"},{\"regex\":\"CaixaMagica\",\"name\":\"Caixa Mágica\",\"version\":\"\"},{\"regex\":\"Mageia; Linux\",\"name\":\"Mageia\",\"version\":\"\"},{\"regex\":\"(?:WH|WhaleTV/)(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Whale OS\",\"version\":\"$1\"},{\"regex\":\"Tizen[ /]?(\\\\d+[\\\\.\\\\d]+)?\",\"name\":\"Tizen\",\"version\":\"$1\"},{\"regex\":\"Sailfish|Jolla\",\"name\":\"Sailfish OS\",\"version\":\"\"},{\"regex\":\"(?:Ali)?YunOS[ /]?(\\\\d+[\\\\.\\\\d]+)?\",\"name\":\"YunOS\",\"version\":\"$1\"},{\"regex\":\"Windows Phone;FBSV/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Windows Phone\",\"version\":\"$1\"},{\"regex\":\"(?:Windows Phone (?:OS)?|wds)[ /]?(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Windows Phone\",\"version\":\"$1\"},{\"regex\":\"XBLWP7|Windows Phone\",\"name\":\"Windows Phone\",\"version\":\"\"},{\"regex\":\"Windows CE(?: (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Windows CE\",\"version\":\"$1\"},{\"regex\":\"(?:IEMobile|Windows ?Mobile)(?: (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Windows Mobile\",\"version\":\"$1\"},{\"regex\":\"Windows NT 6.2; ARM;\",\"name\":\"Windows RT\",\"version\":\"\"},{\"regex\":\"Windows NT 6.3; ARM;\",\"name\":\"Windows RT\",\"version\":\"8.1\"},{\"regex\":\"Windows IoT 10.0\",\"name\":\"Windows IoT\",\"version\":\"10\"},{\"regex\":\"KAIOS(?:/(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"KaiOS\",\"version\":\"$1\"},{\"regex\":\"RazoDroiD(?: v(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"RazoDroiD\",\"version\":\"$1\"},{\"regex\":\"MildWild(?: CM-(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"MildWild\",\"version\":\"$1\"},{\"regex\":\"CyanogenMod(?:[\\\\-/](?:CM)?(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"CyanogenMod\",\"version\":\"$1\"},{\"regex\":\"(?:.*_)?MocorDroid(?:(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"MocorDroid\",\"version\":\"$1\"},{\"regex\":\"Fire OS(?:/(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"Fire OS\",\"version\":\"$1\"},{\"regex\":\"AFTSO001\",\"name\":\"Fire OS\",\"version\":\"7\"},{\"regex\":\"FydeOS\",\"name\":\"FydeOS\",\"version\":\"\"},{\"regex\":\"(?:Podbean|Podimo)(?:.+)?/Android\",\"name\":\"Android\",\"version\":\"\"},{\"regex\":\"Pinterest for Android/.+; (\\\\d(?:[\\\\d\\\\.]+)?)\\\\)$\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"Android; (\\\\d+[\\\\.\\\\d]*); Mobile;\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"[ ]([\\\\d\\\\.]+)\\\\) AppleWebKit.*ROBLOX Android App\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"(?:(?:Orca-)?Android|Adr)[ /]?(?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"(?:Allview_TX1_Quasar|Cosmote_My_mini_Tab) (\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"Android ?(?:jelly bean|Kit Kat|S.O. Ginger Bread|The FireCyano|:) (\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"(?:Orca-Android|FB4A).*FBSV/(\\\\d+[\\\\.\\\\d]*);\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\" Adr |Android|Silk-Accelerated=[a-z]{4,5}\",\"name\":\"Android\",\"version\":\"\"},{\"regex\":\"(?:TwitterAndroid).*[ /](?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"BeyondPod|AntennaPod|Podkicker|DoggCatcher|Player FM|okhttp|Podcatcher Deluxe|.+K_?Android_?TV_|Sonos/.+\\\\(ACR_\",\"name\":\"Android\",\"version\":\"\"},{\"regex\":\"Linux; Andr0id[; ](\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"Linux; diordnA[; ](\\\\d+[\\\\.\\\\d]*)\",\"name\":\"Android\",\"version\":\"$1\"},{\"regex\":\"AmigaOS[ ]?(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"AmigaOS\",\"version\":\"$1\"},{\"regex\":\"AmigaOS|AmigaVoyager|Amiga-AWeb\",\"name\":\"AmigaOS\",\"version\":\"\"},{\"regex\":\"ThreadX(?:/(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"ThreadX\",\"version\":\"$1\"},{\"regex\":\"Nucleus(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"MTK / Nucleus\",\"version\":\"$1\"},{\"regex\":\"MTK(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?\",\"name\":\"MTK / Nucleus\",\"version\":\"$1\"},{\"regex\":\"MRE/(\\\\d+)\\\\.(\\\\d+).*;MAUI\",\"name\":\"MRE\",\"version\":\"$1.$2\"},{\"regex\":\"dvkbuntu\",\"name\":\"DVKBuntu\",\"version\":\"\"},{\"regex\":\"Helio/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Lumin OS\",\"version\":\"$1\"},{\"regex\":\"HasCodingOs (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"HasCodingOS\",\"version\":\"$1\"},{\"regex\":\"PCLinuxOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"PCLinuxOS\",\"version\":\"$1\"},{\"regex\":\"(Ordissimo|webissimo3)\",\"name\":\"Ordissimo\",\"version\":\"\"},{\"regex\":\"(?:Win|Sistema )Fenix\",\"name\":\"Fenix\",\"version\":\"\"},{\"regex\":\"TOS; Linux\",\"name\":\"TmaxOS\",\"version\":\"\"},{\"regex\":\"Maemo\",\"name\":\"Maemo\",\"version\":\"\"},{\"regex\":\"Arch ?Linux(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Arch Linux\",\"version\":\"$1\"},{\"regex\":\"VectorLinux(?: package)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"VectorLinux\",\"version\":\"$1\"},{\"regex\":\"Linux; .*((?:Debian|Knoppix|Mint|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack))[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"$1\",\"version\":\"$2\"},{\"regex\":\"Deepin[ /](\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Deepin\",\"version\":\"$1\"},{\"regex\":\"(Debian|Knoppix|Mint(?! Browser)|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack|Freebox)(?:(?: Enterprise)? Linux)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"$1\",\"version\":\"$2\"},{\"regex\":\"OS ROSA; Linux\",\"name\":\"Rosa\",\"version\":\"\"},{\"regex\":\"WEBOS(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"webOS\",\"version\":\"$1\"},{\"regex\":\"Web0S; Linux/SmartTV.+Chrome/68\",\"name\":\"webOS\",\"version\":\"5\"},{\"regex\":\"Web0S; Linux/SmartTV.+Chrome/53\",\"name\":\"webOS\",\"version\":\"4\"},{\"regex\":\"Web0S; Linux/SmartTV.+Chrome/38\",\"name\":\"webOS\",\"version\":\"3\"},{\"regex\":\"Web0S; Linux/SmartTV.+Safari/538\",\"name\":\"webOS\",\"version\":\"2\"},{\"regex\":\"Web0S; Linux/SmartTV.+Safari/537\",\"name\":\"webOS\",\"version\":\"1\"},{\"regex\":\"(?:Web0S; .*WEBOS|webOS|web0S|Palm webOS|hpwOS)(?:[/]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"webOS\",\"version\":\"$1\"},{\"regex\":\"(?:PalmOS|Palm OS)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?|Palm\",\"name\":\"palmOS\",\"version\":\"$1\"},{\"regex\":\"Xiino(?:.*v\\\\. (\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"palmOS\",\"version\":\"$1\"},{\"regex\":\"MorphOS(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"MorphOS\",\"version\":\"$1\"},{\"regex\":\"FBW.+FBSV/(\\\\d+[\\\\.\\\\d]*);\",\"name\":\"Windows\",\"version\":\"$1\"},{\"regex\":\"mingw32\",\"name\":\"Windows\",\"version\":\"\"},{\"regex\":\"Windows/(\\\\d+\\\\.\\\\d+)\",\"name\":\"Windows\",\"version\":\"$1\"},{\"regex\":\"CYGWIN_NT-10.0|Windows NT 10.0|Windows 10\",\"name\":\"Windows\",\"version\":\"10\"},{\"regex\":\"CYGWIN_NT-6.4|Windows NT 6.4|Windows 10|win10\",\"name\":\"Windows\",\"version\":\"10\"},{\"regex\":\"CYGWIN_NT-6.3|Windows NT 6.3|Windows 8.1\",\"name\":\"Windows\",\"version\":\"8.1\"},{\"regex\":\"CYGWIN_NT-6.2|Windows NT 6.2|Windows 8\",\"name\":\"Windows\",\"version\":\"8\"},{\"regex\":\"CYGWIN_NT-6.1|Windows NT 6.1|Windows 7|win7\",\"name\":\"Windows\",\"version\":\"7\"},{\"regex\":\"CYGWIN_NT-6.0|Windows NT 6.0|Windows Vista\",\"name\":\"Windows\",\"version\":\"Vista\"},{\"regex\":\"CYGWIN_NT-5.2|Windows NT 5.2|Windows Server 2003 / XP x64\",\"name\":\"Windows\",\"version\":\"Server 2003\"},{\"regex\":\"CYGWIN_NT-5.1|Windows NT 5.1|Windows XP\",\"name\":\"Windows\",\"version\":\"XP\"},{\"regex\":\"CYGWIN_NT-5.0|Windows NT 5.0|Windows 2000\",\"name\":\"Windows\",\"version\":\"2000\"},{\"regex\":\"CYGWIN_NT-4.0|Windows NT 4.0|WinNT|Windows NT\",\"name\":\"Windows\",\"version\":\"NT\"},{\"regex\":\"CYGWIN_ME-4.90|Win 9x 4.90|Windows ME\",\"name\":\"Windows\",\"version\":\"ME\"},{\"regex\":\"CYGWIN_98-4.10|Win98|Windows 98\",\"name\":\"Windows\",\"version\":\"98\"},{\"regex\":\"CYGWIN_95-4.0|Win32|Win95|Windows 95|Windows_95\",\"name\":\"Windows\",\"version\":\"95\"},{\"regex\":\"Windows 3.1\",\"name\":\"Windows\",\"version\":\"3.1\"},{\"regex\":\"Windows\",\"name\":\"Windows\",\"version\":\"\"},{\"regex\":\"Haiku\",\"name\":\"Haiku OS\",\"version\":\"\"},{\"regex\":\"(?:Watch1,[12]/|Watch OS,|watchOS[ /])(\\\\d+[\\\\.\\\\d]*)\",\"name\":\"watchOS\",\"version\":\"$1\"},{\"regex\":\"iPad/([89]|1[012]).(\\\\d+[\\\\.\\\\d]*)\",\"name\":\"iOS\",\"version\":\"$1.$2\"},{\"regex\":\"Pinterest for iOS/.+; (\\\\d(?:[\\\\d\\\\.]+)?)\\\\)$\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"CFNetwork/.+ Darwin/20.4.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"14.5\"},{\"regex\":\"CFNetwork/.+ Darwin/20.3.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"14.4\"},{\"regex\":\"CFNetwork/.+ Darwin/20.2.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"14.3\"},{\"regex\":\"CFNetwork/.+ Darwin/20.1.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"14.2\"},{\"regex\":\"CFNetwork/.+ Darwin/20.0.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"14.0\"},{\"regex\":\"CFNetwork/.+ Darwin/19.6.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.6\"},{\"regex\":\"CFNetwork/.+ Darwin/19.5.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.5\"},{\"regex\":\"CFNetwork/.+ Darwin/19.4.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.4\"},{\"regex\":\"CFNetwork/.+ Darwin/19.3.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.3.1\"},{\"regex\":\"CFNetwork/.+ Darwin/19.2.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.3\"},{\"regex\":\"CFNetwork/.+ Darwin/19.0.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"13.0\"},{\"regex\":\"CFNetwork/.+ Darwin/18.7.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"12.4\"},{\"regex\":\"CFNetwork/.+ Darwin/18.6.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"12.3\"},{\"regex\":\"CFNetwork/.+ Darwin/18.5.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"12.2\"},{\"regex\":\"CFNetwork/.+ Darwin/18.2.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"12.1\"},{\"regex\":\"CFNetwork/.+ Darwin/18.0.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"12.0\"},{\"regex\":\"CFNetwork/.+ Darwin/17.7.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"11.4.1\"},{\"regex\":\"CFNetwork/.+ Darwin/17.6.0(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"11.4\"},{\"regex\":\"CFNetwork/889(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"11.1\"},{\"regex\":\"CFNetwork/887(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"11.0\"},{\"regex\":\"CFNetwork/811(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"10.3\"},{\"regex\":\"CFNetwork/808\\\\.3\",\"name\":\"iOS\",\"version\":\"10.3\"},{\"regex\":\"CFNetwork/808\\\\.2\",\"name\":\"iOS\",\"version\":\"10.2\"},{\"regex\":\"CFNetwork/808\\\\.1\",\"name\":\"iOS\",\"version\":\"10.1\"},{\"regex\":\"CFNetwork/808\\\\.0\",\"name\":\"iOS\",\"version\":\"10.0\"},{\"regex\":\"CFNetwork/808\",\"name\":\"iOS\",\"version\":\"10\"},{\"regex\":\"CFNetwork/758\\\\.4\\\\.3\",\"name\":\"iOS\",\"version\":\"9.3.2\"},{\"regex\":\"CFNetwork/758\\\\.3\\\\.15\",\"name\":\"iOS\",\"version\":\"9.3\"},{\"regex\":\"CFNetwork/758\\\\.2\\\\.[78]\",\"name\":\"iOS\",\"version\":\"9.2\"},{\"regex\":\"CFNetwork/758\\\\.1\\\\.6\",\"name\":\"iOS\",\"version\":\"9.1\"},{\"regex\":\"CFNetwork/758\\\\.0\\\\.2\",\"name\":\"iOS\",\"version\":\"9.0\"},{\"regex\":\"CFNetwork/711\\\\.5\\\\.6\",\"name\":\"iOS\",\"version\":\"8.4.1\"},{\"regex\":\"CFNetwork/711\\\\.4\\\\.6\",\"name\":\"iOS\",\"version\":\"8.4\"},{\"regex\":\"CFNetwork/711\\\\.3\\\\.18\",\"name\":\"iOS\",\"version\":\"8.3\"},{\"regex\":\"CFNetwork/711\\\\.2\\\\.23\",\"name\":\"iOS\",\"version\":\"8.2\"},{\"regex\":\"CFNetwork/711\\\\.1\\\\.1[26]\",\"name\":\"iOS\",\"version\":\"8.1\"},{\"regex\":\"CFNetwork/711\\\\.0\\\\.6\",\"name\":\"iOS\",\"version\":\"8.0\"},{\"regex\":\"CFNetwork/672\\\\.1\",\"name\":\"iOS\",\"version\":\"7.1\"},{\"regex\":\"CFNetwork/672\\\\.0\",\"name\":\"iOS\",\"version\":\"7.0\"},{\"regex\":\"CFNetwork/609\\\\.1\",\"name\":\"iOS\",\"version\":\"6.1\"},{\"regex\":\"CFNetwork/60[29]\",\"name\":\"iOS\",\"version\":\"6.0\"},{\"regex\":\"CFNetwork/548\\\\.1\",\"name\":\"iOS\",\"version\":\"5.1\"},{\"regex\":\"CFNetwork/548\\\\.0\",\"name\":\"iOS\",\"version\":\"5.0\"},{\"regex\":\"CFNetwork/485\\\\.13\",\"name\":\"iOS\",\"version\":\"4.3\"},{\"regex\":\"CFNetwork/485\\\\.12\",\"name\":\"iOS\",\"version\":\"4.2\"},{\"regex\":\"CFNetwork/485\\\\.10\",\"name\":\"iOS\",\"version\":\"4.1\"},{\"regex\":\"CFNetwork/485\\\\.2\",\"name\":\"iOS\",\"version\":\"4.0\"},{\"regex\":\"CFNetwork/467\\\\.12\",\"name\":\"iOS\",\"version\":\"3.2\"},{\"regex\":\"CFNetwork/459\",\"name\":\"iOS\",\"version\":\"3.1\"},{\"regex\":\"iPhone/(\\\\d+[\\\\.\\\\d]*) hw/\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"iOS(\\\\d+\\\\.\\\\d+\\\\.\\\\d+)\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"iOS(\\\\d+)\\\\.(\\\\d+)0\",\"name\":\"iOS\",\"version\":\"$1.$2\"},{\"regex\":\"iPhone OS ([0-9]{1})([0-9]{1})([0-9]{1})\",\"name\":\"iOS\",\"version\":\"$1.$2.$3\"},{\"regex\":\"(?:CPU OS|iPh(?:one)?[ _]OS|iOS)[ _/](\\\\d+(?:[_\\\\.]\\\\d+)*)\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"(?:FBIOS|Messenger(?:Lite)?ForiOS).*FBSV/ ?(\\\\d+[\\\\.\\\\d]*);\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"(?:Apple-)?(?:iPhone|iPad|iPod)(?:.*Mac OS X.*Version/(\\\\d+\\\\.\\\\d+)|; Opera)?\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"(?:Podcasts/(?:[\\\\d\\\\.]+)|Instacast(?:HD)?/(?:\\\\d\\\\.[\\\\d\\\\.abc]+)|Pocket Casts, iOS|\\\\(iOS\\\\)|iOS; Opera|Overcast|Castro|Podcat|iCatcher|RSSRadio/|MobileSafari/)(?!.*x86_64)\",\"name\":\"iOS\",\"version\":\"\"},{\"regex\":\"iTunes-(iPod|iPad|iPhone)/(?:[\\\\d\\\\.]+)\",\"name\":\"iOS\",\"version\":\"\"},{\"regex\":\"iOS/Version ([\\\\d\\\\.]+)\",\"name\":\"iOS\",\"version\":\"$1\"},{\"regex\":\"Sonos/.+\\\\(ICRU_\",\"name\":\"iOS\",\"version\":\"\"},{\"regex\":\"CFNetwork/.+ Darwin/20.2.0.*(x86_64)|(x86_64-apple-)?darwin20.2.0\",\"name\":\"Mac\",\"version\":\"11.1\"},{\"regex\":\"CFNetwork/.+ Darwin/20.[01].0.*(x86_64)|(x86_64-apple-)?darwin20.[01].0\",\"name\":\"Mac\",\"version\":\"11.0\"},{\"regex\":\"CFNetwork/.+ Darwin/19.6.0.*(x86_64)|(x86_64-apple-)?darwin19.6.0\",\"name\":\"Mac\",\"version\":\"10.15.6\"},{\"regex\":\"CFNetwork/.+ Darwin/19.5.0.*(x86_64)|(x86_64-apple-)?darwin19.5.0\",\"name\":\"Mac\",\"version\":\"10.15.5\"},{\"regex\":\"CFNetwork/.+ Darwin/19.4.0.*(x86_64)|(x86_64-apple-)?darwin19.4.0\",\"name\":\"Mac\",\"version\":\"10.15.4\"},{\"regex\":\"CFNetwork/.+ Darwin/19.3.0.*(x86_64)|(x86_64-apple-)?darwin19.3.0\",\"name\":\"Mac\",\"version\":\"10.15.3\"},{\"regex\":\"CFNetwork/.+ Darwin/19.2.0.*(x86_64)|(x86_64-apple-)?darwin19.2.0\",\"name\":\"Mac\",\"version\":\"10.15.2\"},{\"regex\":\"CFNetwork/(?:108[258]|109[18]|1103).*(x86_64)\",\"name\":\"Mac\",\"version\":\"10.15\"},{\"regex\":\"CFNetwork/.+ Darwin/18.2.0.*(x86_64)|(x86_64-apple-)?darwin18.2.0\",\"name\":\"Mac\",\"version\":\"10.14.1\"},{\"regex\":\"CFNetwork/(?:96[29]|97[14568]).*(x86_64)\",\"name\":\"Mac\",\"version\":\"10.14\"},{\"regex\":\"CFNetwork/.+ Darwin/17.7.0.*(x86_64)|(x86_64-apple-)?darwin17.7.0\",\"name\":\"Mac\",\"version\":\"10.13.6\"},{\"regex\":\"CFNetwork/.+ Darwin/17.6.0.*(x86_64)|(x86_64-apple-)?darwin17.6.0\",\"name\":\"Mac\",\"version\":\"10.13.5\"},{\"regex\":\"CFNetwork/.+ Darwin/17.5.0.*(x86_64)|(x86_64-apple-)?darwin17.5.0\",\"name\":\"Mac\",\"version\":\"10.13.4\"},{\"regex\":\"CFNetwork/.+ Darwin/17.4.0.*(x86_64)|(x86_64-apple-)?darwin17.4.0\",\"name\":\"Mac\",\"version\":\"10.13.3\"},{\"regex\":\"CFNetwork/.+ Darwin/17.3.0.*(x86_64)|(x86_64-apple-)?darwin17.3.0\",\"name\":\"Mac\",\"version\":\"10.13.2\"},{\"regex\":\"CFNetwork/.+ Darwin/17.2.0.*(x86_64)|(x86_64-apple-)?darwin17.2.0\",\"name\":\"Mac\",\"version\":\"10.13.1\"},{\"regex\":\"CFNetwork/(?:887|889|893|897|901|902).*(x86_64)\",\"name\":\"Mac\",\"version\":\"10.13\"},{\"regex\":\"CFNetwork/.+ Darwin/16.7.0.*(x86_64)|(x86_64-apple-)?darwin16.7.0\",\"name\":\"Mac\",\"version\":\"10.12.6\"},{\"regex\":\"CFNetwork/.+ Darwin/16.6.0.*(x86_64)|(x86_64-apple-)?darwin16.6.0\",\"name\":\"Mac\",\"version\":\"10.12.5\"},{\"regex\":\"CFNetwork/.+ Darwin/16.5.0.*(x86_64)|(x86_64-apple-)?darwin16.5.0\",\"name\":\"Mac\",\"version\":\"10.12.4\"},{\"regex\":\"CFNetwork/.+ Darwin/16.3.0.*(x86_64)|(x86_64-apple-)?darwin16.3.0\",\"name\":\"Mac\",\"version\":\"10.12.3\"},{\"regex\":\"CFNetwork/.+ Darwin/16.2.0.*(x86_64)|(x86_64-apple-)?darwin16.2.0\",\"name\":\"Mac\",\"version\":\"10.12.2\"},{\"regex\":\"CFNetwork/.+ Darwin/16.1.0.*(x86_64)|(x86_64-apple-)?darwin16.1.0\",\"name\":\"Mac\",\"version\":\"10.12.1\"},{\"regex\":\"CFNetwork/811.*(x86_64)\",\"name\":\"Mac\",\"version\":\"10.12\"},{\"regex\":\"CFNetwork/807\",\"name\":\"Mac\",\"version\":\"10.12\"},{\"regex\":\"CFNetwork/.+ Darwin/15.6.0.*(x86_64)|(x86_64-apple-)?darwin15.6.0\",\"name\":\"Mac\",\"version\":\"10.11.6\"},{\"regex\":\"CFNetwork/.+ Darwin/15.5.0.*(x86_64)|(x86_64-apple-)?darwin15.5.0\",\"name\":\"Mac\",\"version\":\"10.11.5\"},{\"regex\":\"CFNetwork/.+ Darwin/15.4.0.*(x86_64)|(x86_64-apple-)?darwin15.4.0\",\"name\":\"Mac\",\"version\":\"10.11.4\"},{\"regex\":\"CFNetwork/.+ Darwin/15.3.0.*(x86_64)|(x86_64-apple-)?darwin15.3.0\",\"name\":\"Mac\",\"version\":\"10.11.3\"},{\"regex\":\"CFNetwork/.+ Darwin/15.2.0.*(x86_64)|(x86_64-apple-)?darwin15.2.0\",\"name\":\"Mac\",\"version\":\"10.11.2\"},{\"regex\":\"CFNetwork/760\",\"name\":\"Mac\",\"version\":\"10.11\"},{\"regex\":\"CFNetwork/.+ Darwin/14.5.0.*(x86_64)|(x86_64-apple-)?darwin14.5.0\",\"name\":\"Mac\",\"version\":\"10.10.5\"},{\"regex\":\"CFNetwork/.+ Darwin/14.4.0.*(x86_64)|(x86_64-apple-)?darwin14.4.0\",\"name\":\"Mac\",\"version\":\"10.10.4\"},{\"regex\":\"CFNetwork/.+ Darwin/14.3.0.*(x86_64)|(x86_64-apple-)?darwin14.3.0\",\"name\":\"Mac\",\"version\":\"10.10.3\"},{\"regex\":\"CFNetwork/.+ Darwin/14.1.0.*(x86_64)|(x86_64-apple-)?darwin14.1.0\",\"name\":\"Mac\",\"version\":\"10.10.2\"},{\"regex\":\"CFNetwork/720\",\"name\":\"Mac\",\"version\":\"10.10\"},{\"regex\":\"CFNetwork/.+ Darwin/13.4.0.*(x86_64)|(x86_64-apple-)?darwin13.4.0\",\"name\":\"Mac\",\"version\":\"10.9.5\"},{\"regex\":\"CFNetwork/.+ Darwin/13.3.0.*(x86_64)|(x86_64-apple-)?darwin13.3.0\",\"name\":\"Mac\",\"version\":\"10.9.4\"},{\"regex\":\"CFNetwork/.+ Darwin/13.2.0.*(x86_64)|(x86_64-apple-)?darwin13.2.0\",\"name\":\"Mac\",\"version\":\"10.9.3\"},{\"regex\":\"CFNetwork/.+ Darwin/13.1.0.*(x86_64)|(x86_64-apple-)?darwin13.1.0\",\"name\":\"Mac\",\"version\":\"10.9.2\"},{\"regex\":\"CFNetwork/673\",\"name\":\"Mac\",\"version\":\"10.9\"},{\"regex\":\"CFNetwork/.+ Darwin/12.5.0.*(x86_64)|(x86_64-apple-)?darwin12.5.0\",\"name\":\"Mac\",\"version\":\"10.8.5\"},{\"regex\":\"CFNetwork/.+ Darwin/12.4.0.*(x86_64)|(x86_64-apple-)?darwin12.4.0\",\"name\":\"Mac\",\"version\":\"10.8.4\"},{\"regex\":\"CFNetwork/.+ Darwin/12.3.0.*(x86_64)|(x86_64-apple-)?darwin12.3.0\",\"name\":\"Mac\",\"version\":\"10.8.3\"},{\"regex\":\"CFNetwork/.+ Darwin/12.2.0.*(x86_64)|(x86_64-apple-)?darwin12.2.0\",\"name\":\"Mac\",\"version\":\"10.8.2\"},{\"regex\":\"CFNetwork/.+ Darwin/12.1.0.*(x86_64)|(x86_64-apple-)?darwin12.1.0\",\"name\":\"Mac\",\"version\":\"10.8.1\"},{\"regex\":\"CFNetwork/596\",\"name\":\"Mac\",\"version\":\"10.8\"},{\"regex\":\"CFNetwork/.+ Darwin/11.5.0.*(x86_64)|(x86_64-apple-)?darwin11.5.0\",\"name\":\"Mac\",\"version\":\"10.7.5\"},{\"regex\":\"CFNetwork/.+ Darwin/11.4.0.*(x86_64)|(x86_64-apple-)?darwin11.4.0\",\"name\":\"Mac\",\"version\":\"10.7.4\"},{\"regex\":\"CFNetwork/.+ Darwin/11.3.0.*(x86_64)|(x86_64-apple-)?darwin11.3.0\",\"name\":\"Mac\",\"version\":\"10.7.3\"},{\"regex\":\"CFNetwork/.+ Darwin/11.2.0.*(x86_64)|(x86_64-apple-)?darwin11.2.0\",\"name\":\"Mac\",\"version\":\"10.7.2\"},{\"regex\":\"CFNetwork/.+ Darwin/11.1.0.*(x86_64)|(x86_64-apple-)?darwin11.1.0\",\"name\":\"Mac\",\"version\":\"10.7.1\"},{\"regex\":\"CFNetwork/520\",\"name\":\"Mac\",\"version\":\"10.7\"},{\"regex\":\"CFNetwork/454\",\"name\":\"Mac\",\"version\":\"10.6\"},{\"regex\":\"CFNetwork/(?:438|422|339|330|221|220|217)\",\"name\":\"Mac\",\"version\":\"10.5\"},{\"regex\":\"CFNetwork/12[89]\",\"name\":\"Mac\",\"version\":\"10.4\"},{\"regex\":\"CFNetwork/1\\\\.2\",\"name\":\"Mac\",\"version\":\"10.3\"},{\"regex\":\"CFNetwork/1\\\\.1\",\"name\":\"Mac\",\"version\":\"10.2\"},{\"regex\":\"Mac[ +]OS[ +]?X(?:[ /](?:Version )?(\\\\d+(?:[_\\\\.]\\\\d+)+))?\",\"name\":\"Mac\",\"version\":\"$1\"},{\"regex\":\"Mac (?:OS/)?(\\\\d+(?:[_\\\\.]\\\\d+)+)\",\"name\":\"Mac\",\"version\":\"$1\"},{\"regex\":\"macOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Mac\",\"version\":\"$1\"},{\"regex\":\"Darwin|Macintosh|Mac_PowerPC|PPC|Mac PowerPC|iMac|MacBook|macOS|Sonos/.+\\\\(MDCR_\",\"name\":\"Mac\",\"version\":\"\"},{\"regex\":\"SeewoOS x86_64 (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"SeewoOS\",\"version\":\"$1\"},{\"regex\":\"CrOS [a-z0-9_]+ .* Chrome/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Chrome OS\",\"version\":\"$1\"},{\"regex\":\"(?:BB10;.+Version|Black[Bb]erry[0-9a-z]+|Black[Bb]erry.+Version)/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"BlackBerry OS\",\"version\":\"$1\"},{\"regex\":\"RIM Tablet OS (\\\\d+[\\\\.\\\\d]+)\",\"name\":\"BlackBerry Tablet OS\",\"version\":\"$1\"},{\"regex\":\"RIM Tablet OS|QNX|Play[Bb]ook\",\"name\":\"BlackBerry Tablet OS\",\"version\":\"\"},{\"regex\":\"BlackBerry\",\"name\":\"BlackBerry OS\",\"version\":\"\"},{\"regex\":\"bPod\",\"name\":\"BlackBerry OS\",\"version\":\"\"},{\"regex\":\"BeOS\",\"name\":\"BeOS\",\"version\":\"\"},{\"regex\":\"Symbian/3.+NokiaBrowser/7\\\\.3\",\"name\":\"Symbian^3\",\"version\":\"Anna\"},{\"regex\":\"Symbian/3.+NokiaBrowser/7\\\\.4\",\"name\":\"Symbian^3\",\"version\":\"Belle\"},{\"regex\":\"Symbian/3\",\"name\":\"Symbian^3\",\"version\":\"\"},{\"regex\":\"(?:Series ?60|SymbOS|S60)(?:[ /]?(\\\\d+[\\\\.\\\\d]+|V\\\\d+))?\",\"name\":\"Symbian OS Series 60\",\"version\":\"$1\"},{\"regex\":\"Series40\",\"name\":\"Symbian OS Series 40\",\"version\":\"\"},{\"regex\":\"SymbianOS/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"Symbian OS\",\"version\":\"$1\"},{\"regex\":\"MeeGo|WeTab\",\"name\":\"MeeGo\",\"version\":\"\"},{\"regex\":\"Symbian(?: OS)?|SymbOS\",\"name\":\"Symbian OS\",\"version\":\"\"},{\"regex\":\"Nokia\",\"name\":\"Symbian\",\"version\":\"\"},{\"regex\":\"(?:Mobile|Tablet);.+Firefox/\\\\d+\\\\.\\\\d+\",\"name\":\"Firefox OS\",\"version\":\"\"},{\"regex\":\"RISC OS(?:-NC)?(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"RISC OS\",\"version\":\"$1\"},{\"regex\":\"Inferno(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Inferno\",\"version\":\"$1\"},{\"regex\":\"bada(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Bada\",\"version\":\"$1\"},{\"regex\":\"(?:Brew(?!-Applet)(?: MP)?|BMP)(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Brew\",\"version\":\"$1\"},{\"regex\":\"GoogleTV(?:[ /](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Google TV\",\"version\":\"$1\"},{\"regex\":\"AppleTV(?:/?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Apple TV\",\"version\":\"$1\"},{\"regex\":\"WebTV/(\\\\d+[\\\\.\\\\d]+)\",\"name\":\"WebTV\",\"version\":\"$1\"},{\"regex\":\"RemixOS 5.1.1\",\"name\":\"Remix OS\",\"version\":\"1\"},{\"regex\":\"RemixOS 6.0\",\"name\":\"Remix OS\",\"version\":\"2\"},{\"regex\":\"RemixOS\",\"name\":\"Remix OS\",\"version\":\"\"},{\"regex\":\"(?:SunOS|Solaris)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Solaris\",\"version\":\"$1\"},{\"regex\":\"AIX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"AIX\",\"version\":\"$1\"},{\"regex\":\"HP-UX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"HP-UX\",\"version\":\"$1\"},{\"regex\":\"FreeBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"FreeBSD\",\"version\":\"$1\"},{\"regex\":\"NetBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"NetBSD\",\"version\":\"$1\"},{\"regex\":\"OpenBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"OpenBSD\",\"version\":\"$1\"},{\"regex\":\"DragonFly(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"DragonFly\",\"version\":\"$1\"},{\"regex\":\"Syllable(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"Syllable\",\"version\":\"$1\"},{\"regex\":\"IRIX(?:;64)?(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"IRIX\",\"version\":\"$1\"},{\"regex\":\"OSF1(?:[/ ]?v?(\\\\d+[\\\\.\\\\d]+))?\",\"name\":\"OSF1\",\"version\":\"$1\"},{\"regex\":\"Nintendo (Wii|Switch)\",\"name\":\"Nintendo\",\"version\":\"$1\"},{\"regex\":\"PlayStation ?([34])\",\"name\":\"PlayStation\",\"version\":\"$1\"},{\"regex\":\"Xbox|KIN\\\\.(?:One|Two)\",\"name\":\"Xbox\",\"version\":\"360\"},{\"regex\":\"Nitro|Nintendo ([3]?DS[i]?)\",\"name\":\"Nintendo Mobile\",\"version\":\"$1\"},{\"regex\":\"PlayStation ((?:Portable|Vita))\",\"name\":\"PlayStation Portable\",\"version\":\"$1\"},{\"regex\":\"OS/2\",\"name\":\"OS/2\",\"version\":\"\"},{\"regex\":\"Linux(?:OS)?[^a-z]\",\"name\":\"GNU/Linux\",\"version\":\"\"}]");

},{}],"jM6kk":[function(require,module,exports) {
module.exports = JSON.parse("{\"operatingSystem\":{\"AIX\":\"AIX\",\"AND\":\"Android\",\"AMG\":\"AmigaOS\",\"ATV\":\"Apple TV\",\"ARL\":\"Arch Linux\",\"BTR\":\"BackTrack\",\"SBA\":\"Bada\",\"BEO\":\"BeOS\",\"BLB\":\"BlackBerry OS\",\"QNX\":\"BlackBerry Tablet OS\",\"BMP\":\"Brew\",\"CES\":\"CentOS\",\"COS\":\"Chrome OS\",\"CYN\":\"CyanogenMod\",\"DEB\":\"Debian\",\"DEE\":\"Deepin\",\"DFB\":\"DragonFly\",\"FED\":\"Fedora\",\"FOS\":\"Firefox OS\",\"FIR\":\"Fire OS\",\"FRE\":\"Freebox\",\"BSD\":\"FreeBSD\",\"FYD\":\"FydeOS\",\"GNT\":\"Gentoo\",\"GTV\":\"Google TV\",\"HPX\":\"HP-UX\",\"HAI\":\"Haiku OS\",\"IRI\":\"IRIX\",\"INF\":\"Inferno\",\"KOS\":\"KaiOS\",\"KNO\":\"Knoppix\",\"KBT\":\"Kubuntu\",\"LIN\":\"GNU/Linux\",\"LBT\":\"Lubuntu\",\"VLN\":\"VectorLinux\",\"MAC\":\"Mac\",\"MAE\":\"Maemo\",\"MDR\":\"Mandriva\",\"SMG\":\"MeeGo\",\"MCD\":\"MocorDroid\",\"MIN\":\"Mint\",\"MLD\":\"MildWild\",\"MOR\":\"MorphOS\",\"NBS\":\"NetBSD\",\"MTK\":\"MTK / Nucleus\",\"MRE\":\"MRE\",\"WII\":\"Nintendo\",\"NDS\":\"Nintendo Mobile\",\"OS2\":\"OS/2\",\"T64\":\"OSF1\",\"OBS\":\"OpenBSD\",\"ORD\":\"Ordissimo\",\"PSP\":\"PlayStation Portable\",\"PS3\":\"PlayStation\",\"RHT\":\"Red Hat\",\"ROS\":\"RISC OS\",\"RSO\":\"Rosa\",\"REM\":\"Remix OS\",\"RZD\":\"RazoDroiD\",\"SAB\":\"Sabayon\",\"SSE\":\"SUSE\",\"SAF\":\"Sailfish OS\",\"SEE\":\"SeewoOS\",\"SLW\":\"Slackware\",\"SOS\":\"Solaris\",\"SYL\":\"Syllable\",\"SYM\":\"Symbian\",\"SYS\":\"Symbian OS\",\"S40\":\"Symbian OS Series 40\",\"S60\":\"Symbian OS Series 60\",\"SY3\":\"Symbian^3\",\"TDX\":\"ThreadX\",\"TIZ\":\"Tizen\",\"TOS\":\"TmaxOS\",\"UBT\":\"Ubuntu\",\"WAS\":\"watchOS\",\"WTV\":\"WebTV\",\"WHS\":\"Whale OS\",\"WIN\":\"Windows\",\"WCE\":\"Windows CE\",\"WIO\":\"Windows IoT\",\"WMO\":\"Windows Mobile\",\"WPH\":\"Windows Phone\",\"WRT\":\"Windows RT\",\"XBX\":\"Xbox\",\"XBT\":\"Xubuntu\",\"YNS\":\"YunOs\",\"IOS\":\"iOS\",\"POS\":\"palmOS\",\"WOS\":\"webOS\"},\"osFamilies\":{\"Android\":[\"AND\",\"CYN\",\"FIR\",\"REM\",\"RZD\",\"MLD\",\"MCD\",\"YNS\"],\"AmigaOS\":[\"AMG\",\"MOR\"],\"Apple TV\":[\"ATV\"],\"BlackBerry\":[\"BLB\",\"QNX\"],\"Brew\":[\"BMP\"],\"BeOS\":[\"BEO\",\"HAI\"],\"Chrome OS\":[\"COS\",\"FYD\",\"SEE\"],\"Firefox OS\":[\"FOS\",\"KOS\"],\"Gaming Console\":[\"WII\",\"PS3\"],\"Google TV\":[\"GTV\"],\"IBM\":[\"OS2\"],\"iOS\":[\"IOS\",\"WAS\"],\"RISC OS\":[\"ROS\"],\"GNU/Linux\":[\"LIN\",\"ARL\",\"DEB\",\"KNO\",\"MIN\",\"UBT\",\"KBT\",\"XBT\",\"LBT\",\"FED\",\"RHT\",\"VLN\",\"MDR\",\"GNT\",\"SAB\",\"SLW\",\"SSE\",\"CES\",\"BTR\",\"SAF\",\"ORD\",\"TOS\",\"RSO\",\"DEE\",\"FRE\"],\"Mac\":[\"MAC\"],\"Mobile Gaming Console\":[\"PSP\",\"NDS\",\"XBX\"],\"Real-time OS\":[\"MTK\",\"TDX\",\"MRE\"],\"Other Mobile\":[\"WOS\",\"POS\",\"SBA\",\"TIZ\",\"SMG\",\"MAE\"],\"Symbian\":[\"SYM\",\"SYS\",\"SY3\",\"S60\",\"S40\"],\"Unix\":[\"SOS\",\"AIX\",\"HPX\",\"BSD\",\"NBS\",\"OBS\",\"DFB\",\"SYL\",\"IRI\",\"T64\",\"INF\"],\"WebTV\":[\"WTV\"],\"Windows\":[\"WIN\"],\"Windows Mobile\":[\"WPH\",\"WMO\",\"WCE\",\"WRT\",\"WIO\"],\"Other Smart TV\":[\"WHS\"]}}");

},{}],"9mXz9":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const vendorfragments_json_1 = __importDefault(require("../../fixtures/regexes/vendorfragments.json"));
const user_agent_1 = require("../../utils/user-agent");
class VendorFragmentParser {
    constructor(){
        this.parse = (userAgent)=>{
            for (const [brand, vendorFragment] of Object.entries(vendorfragments_json_1.default))for (const regex of vendorFragment){
                const match = user_agent_1.userAgentParser(regex, userAgent);
                if (!match) continue;
                return brand;
            }
            return "";
        };
    }
}
exports.default = VendorFragmentParser;

},{"../../fixtures/regexes/vendorfragments.json":"2BasV","../../utils/user-agent":"5QvTF"}],"2BasV":[function(require,module,exports) {
module.exports = JSON.parse("{\"Dell\":[\"MDDR(JS)?\",\"MDDC(JS)?\",\"MDDS(JS)?\"],\"Acer\":[\"MAAR(JS)?\"],\"Sony\":[\"MASE(JS)?\",\"MASP(JS)?\",\"MASA(JS)?\"],\"Asus\":[\"MAAU\",\"NP0[26789]\",\"ASJB\",\"ASU2(JS)?\"],\"Samsung\":[\"MASM(JS)?\",\"SMJB\"],\"Lenovo\":[\"MALC(JS)?\",\"MALE(JS)?\",\"MALN(JS)?\",\"LCJB\",\"LEN2\"],\"Toshiba\":[\"MATM(JS)?\",\"MATB(JS)?\",\"MATP(JS)?\",\"TNJB\",\"TAJB\"],\"Medion\":[\"MAMD\"],\"MSI\":[\"MAMI(JS)?\",\"MAM3\"],\"Gateway\":[\"MAGW(JS)?\"],\"Fujitsu\":[\"MAFS(JS)?\",\"FSJB\"],\"Compaq\":[\"CPDTDF\",\"CPNTDF(JS?)\",\"CMNTDF(JS)?\",\"CMDTDF(JS)?\"],\"HP\":[\"HPCMHP\",\"HPNTDF(JS)?\",\"HPDTDF(JS)?\"],\"Hyrican\":[\"MANM(JS)?\"],\"Ordissimo\":[\"Ordissimo\",\"webissimo3\"]}");

},{}],"gL7by":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const bots_json_1 = __importDefault(require("../../fixtures/regexes/bots.json"));
const user_agent_1 = require("../../utils/user-agent");
class BotParser {
    constructor(){
        this.parse = (userAgent)=>{
            var _a, _b, _c, _d;
            for (const bot of bots_json_1.default){
                const match = user_agent_1.userAgentParser(bot.regex, userAgent);
                if (!match) continue;
                return {
                    name: bot.name,
                    category: bot.category || "",
                    url: bot.url || "",
                    producer: {
                        name: ((_b = (_a = bot) === null || _a === void 0 ? void 0 : _a.producer) === null || _b === void 0 ? void 0 : _b.name) || "",
                        url: ((_d = (_c = bot) === null || _c === void 0 ? void 0 : _c.producer) === null || _d === void 0 ? void 0 : _d.url) || ""
                    }
                };
            }
            return null;
        };
    }
}
module.exports = BotParser;

},{"../../fixtures/regexes/bots.json":"htHnN","../../utils/user-agent":"5QvTF"}],"htHnN":[function(require,module,exports) {
module.exports = JSON.parse("[{\"regex\":\"360Spider(-Image|-Video)?\",\"name\":\"360Spider\",\"category\":\"Search bot\",\"url\":\"https://www.so.com/help/help_3_2.html\",\"producer\":{\"name\":\"Online Media Group, Inc.\",\"url\":\"\"}},{\"regex\":\"Aboundex\",\"name\":\"Aboundexbot\",\"category\":\"Search bot\",\"url\":\"http://www.aboundex.com/crawler/\",\"producer\":{\"name\":\"Aboundex.com\",\"url\":\"http://www.aboundex.com\"}},{\"regex\":\"AcoonBot\",\"name\":\"Acoon\",\"category\":\"Search bot\",\"url\":\"http://www.acoon.de/robot.asp\",\"producer\":{\"name\":\"Acoon GmbH\",\"url\":\"http://www.acoon.de\"}},{\"regex\":\"AddThis\\\\.com\",\"name\":\"AddThis.com\",\"category\":\"Social Media Agent\",\"url\":\"\",\"producer\":{\"name\":\"Clearspring Technologies, Inc.\",\"url\":\"http://www.clearspring.com\"}},{\"regex\":\"AhrefsBot\",\"name\":\"aHrefs Bot\",\"category\":\"Crawler\",\"url\":\"https://ahrefs.com/robot\",\"producer\":{\"name\":\"Ahrefs Pte Ltd\",\"url\":\"https://ahrefs.com/robot\"}},{\"regex\":\"ia_archiver|alexabot|verifybot\",\"name\":\"Alexa Crawler\",\"category\":\"Search bot\",\"url\":\"https://support.alexa.com/hc/en-us/sections/200100794-Crawlers\",\"producer\":{\"name\":\"Alexa Internet\",\"url\":\"https://www.alexa.com\"}},{\"regex\":\"alexa site audit\",\"name\":\"Alexa Site Audit\",\"category\":\"Site Monitor\",\"url\":\"https://support.alexa.com/hc/en-us/articles/200450194\",\"producer\":{\"name\":\"Alexa Internet\",\"url\":\"https://www.alexa.com\"}},{\"regex\":\"Amazon[ -]Route ?53[ -]Health[ -]Check[ -]Service\",\"name\":\"Amazon Route53 Health Check\",\"category\":\"Service Agent\",\"producer\":{\"name\":\"Amazon Web Services\",\"url\":\"https://aws.amazon.com/\"}},{\"regex\":\"AmorankSpider\",\"name\":\"Amorank Spider\",\"category\":\"Crawler\",\"url\":\"http://amorank.com/webcrawler.html\",\"producer\":{\"name\":\"Amorank\",\"url\":\"http://www.amorank.com\"}},{\"regex\":\"ApacheBench\",\"name\":\"ApacheBench\",\"category\":\"Benchmark\",\"url\":\"https://httpd.apache.org/docs/2.4/programs/ab.html\",\"producer\":{\"name\":\"The Apache Software Foundation\",\"url\":\"https://www.apache.org/foundation/\"}},{\"regex\":\"Applebot\",\"name\":\"Applebot\",\"category\":\"Crawler\",\"url\":\"https://support.apple.com/en-us/HT204683\",\"producer\":{\"name\":\"Apple Inc\",\"url\":\"https://www.apple.com\"}},{\"regex\":\"AppSignalBot\",\"name\":\"AppSignalBot\",\"category\":\"Site Monitor\",\"url\":\"https://docs.appsignal.com/uptime-monitoring/\",\"producer\":{\"name\":\"AppSignal\",\"url\":\"https://appsignal.com/\"}},{\"regex\":\"Arachni\",\"name\":\"Arachni\",\"category\":\"Security Checker\",\"url\":\"https://www.arachni-scanner.com/\",\"producer\":{\"name\":\"Sarosys LLC\",\"url\":\"https://www.sarosys.com/\"}},{\"regex\":\"AspiegelBot\",\"name\":\"AspiegelBot\",\"category\":\"Crawler\",\"url\":\"https://aspiegel.com/\",\"producer\":{\"name\":\"Huawei\",\"url\":\"https://www.huawei.com/\"}},{\"regex\":\"Castro 2, Episode Duration Lookup\",\"name\":\"Castro 2\",\"category\":\"Service Agent\",\"url\":\"http://supertop.co/castro/\",\"producer\":{\"name\":\"Supertop\",\"url\":\"http://supertop.co\"}},{\"regex\":\"Curious George\",\"name\":\"Analytics SEO Crawler\",\"category\":\"Crawler\",\"url\":\"http://www.analyticsseo.com/crawler\",\"producer\":{\"name\":\"Analytics SEO\",\"url\":\"http://www.analyticsseo.com\"}},{\"regex\":\"archive\\\\.org_bot|special_archiver\",\"name\":\"archive.org bot\",\"category\":\"Crawler\",\"url\":\"https://archive.org/details/archive.org_bot\",\"producer\":{\"name\":\"The Internet Archive\",\"url\":\"https://archive.org\"}},{\"regex\":\"Ask Jeeves/Teoma\",\"name\":\"Ask Jeeves\",\"category\":\"Search bot\",\"url\":\"\",\"producer\":{\"name\":\"Ask Jeeves Inc.\",\"url\":\"http://www.ask.com\"}},{\"regex\":\"Backlink-Check\\\\.de\",\"name\":\"Backlink-Check.de\",\"category\":\"Crawler\",\"url\":\"http://www.backlink-check.de/bot.html\",\"producer\":{\"name\":\"Mediagreen Medienservice\",\"url\":\"http://www.backlink-check.de\"}},{\"regex\":\"BacklinkCrawler\",\"name\":\"BacklinkCrawler\",\"category\":\"Crawler\",\"url\":\"http://www.backlinktest.com/crawler.html\",\"producer\":{\"name\":\"2.0Promotion GbR\",\"url\":\"http://www.backlinktest.com\"}},{\"regex\":\"baiduspider(-image)?|baidu Transcoder|baidu.*spider\",\"name\":\"Baidu Spider\",\"category\":\"Search bot\",\"url\":\"http://www.baidu.com/search/spider.htm\",\"producer\":{\"name\":\"Baidu\",\"url\":\"http://www.baidu.com\"}},{\"regex\":\"BazQux\",\"name\":\"BazQux Reader\",\"url\":\"https://bazqux.com/fetcher\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"MSNBot|msrbot|bingbot|BingPreview|msnbot-(UDiscovery|NewsBlogs)|adidxbot\",\"name\":\"BingBot\",\"category\":\"Search bot\",\"url\":\"http://search.msn.com/msnbot.htmn\",\"producer\":{\"name\":\"Microsoft Corporation\",\"url\":\"http://www.microsoft.com\"}},{\"regex\":\"Blekkobot\",\"name\":\"Blekkobot\",\"category\":\"Search bot\",\"url\":\"http://blekko.com/about/blekkobot\",\"producer\":{\"name\":\"Blekko\",\"url\":\"http://blekko.com\"}},{\"regex\":\"BLEXBot(Test)?\",\"name\":\"BLEXBot Crawler\",\"category\":\"Crawler\",\"url\":\"http://webmeup-crawler.com\",\"producer\":{\"name\":\"WebMeUp\",\"url\":\"http://webmeup.com\"}},{\"regex\":\"Bloglovin\",\"name\":\"Bloglovin\",\"url\":\"http://www.bloglovin.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Blogtrottr\",\"name\":\"Blogtrottr\",\"url\":\"\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"Blogtrottr Ltd\",\"url\":\"https://blogtrottr.com/\"}},{\"regex\":\"BoardReader Blog Indexer\",\"name\":\"BoardReader Blog Indexer\",\"category\":\"Crawler\",\"producer\":{\"name\":\"BoardReader\",\"url\":\"https://boardreader.com/\"}},{\"regex\":\"BountiiBot\",\"name\":\"Bountii Bot\",\"category\":\"Search bot\",\"url\":\"http://bountii.com/contact.php\",\"producer\":{\"name\":\"Bountii Inc.\",\"url\":\"http://bountii.com\"}},{\"regex\":\"Browsershots\",\"name\":\"Browsershots\",\"category\":\"Service Agent\",\"url\":\"http://browsershots.org/faq\",\"producer\":{\"name\":\"Browsershots.org\",\"url\":\"http://browsershots.org\"}},{\"regex\":\"BUbiNG\",\"name\":\"BUbiNG\",\"category\":\"Crawler\",\"url\":\"http://law.di.unimi.it/BUbiNG.html\",\"producer\":{\"name\":\"The Laboratory for Web Algorithmics (LAW)\",\"url\":\"http://law.di.unimi.it/software.php#buging\"}},{\"regex\":\"(?<!HTC)[ _]Butterfly/\",\"name\":\"Butterfly Robot\",\"category\":\"Search bot\",\"url\":\"http://labs.topsy.com/butterfly\",\"producer\":{\"name\":\"Topsy Labs\",\"url\":\"http://labs.topsy.com\"}},{\"regex\":\"CareerBot\",\"name\":\"CareerBot\",\"category\":\"Crawler\",\"url\":\"http://www.career-x.de/bot.html\",\"producer\":{\"name\":\"career-x GmbH\",\"url\":\"http://www.career-x.de\"}},{\"regex\":\"CCBot\",\"name\":\"ccBot crawler\",\"category\":\"Crawler\",\"url\":\"http://commoncrawl.org/faq/\",\"producer\":{\"name\":\"reddit inc.\",\"url\":\"http://www.reddit.com\"}},{\"regex\":\"Cliqzbot\",\"name\":\"Cliqzbot\",\"category\":\"Crawler\",\"url\":\"http://cliqz.com/company/cliqzbot\",\"producer\":{\"name\":\"10betterpages GmbH\",\"url\":\"http://cliqz.com\"}},{\"regex\":\"Cloudflare-AMP\",\"name\":\"CloudFlare AMP Fetcher\",\"category\":\"Crawler\",\"url\":\"https://amp.cloudflare.com/doc/fetcher.html\",\"producer\":{\"name\":\"CloudFlare\",\"url\":\"http://www.cloudflare.com\"}},{\"regex\":\"CloudflareDiagnostics\",\"name\":\"Cloudflare Diagnostics\",\"category\":\"Site Monitor\",\"url\":\"https://www.cloudflare.com/\",\"producer\":{\"name\":\"Cloudflare\",\"url\":\"https://www.cloudflare.com\"}},{\"regex\":\"CloudFlare-AlwaysOnline\",\"name\":\"CloudFlare Always Online\",\"category\":\"Site Monitor\",\"url\":\"http://www.cloudflare.com/always-online\",\"producer\":{\"name\":\"CloudFlare\",\"url\":\"http://www.cloudflare.com\"}},{\"regex\":\"coccoc.com\",\"name\":\"Cốc Cốc Bot\",\"url\":\"https://help.coccoc.com/en/search-engine/coccoc-robots\",\"category\":\"Search bot\",\"producer\":{\"name\":\"Cốc Cốc\",\"url\":\"https://coccoc.com/\"}},{\"regex\":\"collectd\",\"name\":\"Collectd\",\"url\":\"https://collectd.org/\",\"category\":\"Site Monitor\",\"producer\":{\"name\":\"Collectd\",\"url\":\"https://collectd.org/\"}},{\"regex\":\"CommaFeed\",\"name\":\"CommaFeed\",\"url\":\"http://www.commafeed.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"CSS Certificate Spider\",\"name\":\"CSS Certificate Spider\",\"category\":\"Crawler\",\"url\":\"http://www.css-security.com/certificatespider/\",\"producer\":{\"name\":\"Certified Security Solutions\",\"url\":\"https://www.css-security.com/company/about-us/\"}},{\"regex\":\"Datadog Agent\",\"name\":\"Datadog Agent\",\"url\":\"https://github.com/DataDog/dd-agent\",\"category\":\"Site Monitor\",\"producer\":{\"name\":\"Datadog\",\"url\":\"https://www.datadoghq.com/\"}},{\"regex\":\"Datanyze\",\"name\":\"Datanyze\",\"url\":\"\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Datanyze\",\"url\":\"https://www.datanyze.com\"}},{\"regex\":\"Dataprovider\",\"name\":\"Dataprovider\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Dataprovider B.V.\",\"url\":\"https://www.dataprovider.com/\"}},{\"regex\":\"Daum(oa)?[ /][0-9]\",\"name\":\"Daum\",\"category\":\"Search bot\",\"url\":\"http://tab.search.daum.net/aboutWebSearch_en.html\",\"producer\":{\"name\":\"Daum Communications Corp.\",\"url\":\"http://www.kakaocorp.com/main\"}},{\"regex\":\"Dazoobot\",\"name\":\"Dazoobot\",\"category\":\"Search bot\",\"url\":\"\",\"producer\":{\"name\":\"DAZOO.FR\",\"url\":\"http://dazoo.fr\"}},{\"regex\":\"discobot(-news)?\",\"name\":\"Discobot\",\"category\":\"Search bot\",\"url\":\"http://discoveryengine.com/discobot.html\",\"producer\":{\"name\":\"Discovery Engine\",\"url\":\"http://discoveryengine.com\"}},{\"regex\":\"Domain Re-Animator Bot|support@domainreanimator.com\",\"name\":\"Domain Re-Animator Bot\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Domain Re-Animator, LLC\",\"url\":\"http://domainreanimator.com\"}},{\"regex\":\"DotBot\",\"name\":\"DotBot\",\"category\":\"Crawler\",\"url\":\"http://www.opensiteexplorer.org/dotbot\",\"producer\":{\"name\":\"SEOmoz, Inc.\",\"url\":\"http://moz.com/\"}},{\"regex\":\"DuckDuck(?:Go-Favicons-)?Bot\",\"name\":\"DuckDuckGo Bot\",\"category\":\"Search bot\",\"url\":\"https://duckduckgo.com/duckduckbot\",\"producer\":{\"name\":\"DuckDuckGo\",\"url\":\"https://duckduckgo.com/\"}},{\"regex\":\"EasouSpider\",\"name\":\"Easou Spider\",\"category\":\"Search bot\",\"url\":\"http://www.easou.com/search/spider.html\",\"producer\":{\"name\":\"easou ICP\",\"url\":\"http://www.easou.com\"}},{\"regex\":\"eCairn-Grabber\",\"name\":\"eCairn-Grabber\",\"category\":\"Crawler\",\"producer\":{\"name\":\"eCairn\",\"url\":\"https://ecairn.com\"}},{\"regex\":\"EMail Exractor\",\"name\":\"EMail Exractor\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"evc-batch\",\"name\":\"evc-batch\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"eVenture Capital Partners II, LLC\",\"url\":\"http://www.eventures.vc/\"}},{\"regex\":\"Exabot(-Thumbnails|-Images)?|ExaleadCloudview\",\"name\":\"ExaBot\",\"category\":\"Crawler\",\"url\":\"http://www.exabot.com/go/robot\",\"producer\":{\"name\":\"Dassault Systèmes\",\"url\":\"http://www.3ds.com\"}},{\"regex\":\"ExactSeek Crawler\",\"name\":\"ExactSeek Crawler\",\"category\":\"Search bot\",\"url\":\"http://www.exactseek.com\",\"producer\":{\"name\":\"Jayde Online, Inc.\",\"url\":\"http://www.jaydeonlineinc.com\"}},{\"regex\":\"Ezooms\",\"name\":\"Ezooms\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"SEOmoz, Inc.\",\"url\":\"http://moz.com/\"}},{\"regex\":\"facebookexternalhit|facebookplatform|facebookexternalua\",\"name\":\"Facebook External Hit\",\"category\":\"Social Media Agent\",\"url\":\"https://www.facebook.com/externalhit_uatext.php\",\"producer\":{\"name\":\"Facebook\",\"url\":\"http://www.facebook.com\"}},{\"regex\":\"Feedbin\",\"name\":\"Feedbin\",\"url\":\"http://feedbin.com/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"FeedBurner\",\"name\":\"FeedBurner\",\"url\":\"http://www.feedburner.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Feed Wrangler\",\"name\":\"Feed Wrangler\",\"url\":\"https://feedwrangler.net/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"David Smith & Developing Perspective, LLC\",\"url\":\"https://david-smith.org\"}},{\"regex\":\"(Meta)?Feedly(Bot|App)?\",\"name\":\"Feedly\",\"url\":\"http://www.feedly.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Feedspot\",\"name\":\"Feedspot\",\"url\":\"http://www.feedspot.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Fever/[0-9]\",\"name\":\"Fever\",\"url\":\"http://feedafever.com/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"FlipboardProxy|FlipboardRSS\",\"name\":\"Flipboard\",\"url\":\"http://flipboard.com/browserproxy\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"Flipboard\",\"url\":\"http://flipboard.com/\"}},{\"regex\":\"Findxbot\",\"name\":\"Findxbot\",\"category\":\"Crawler\",\"url\":\"http://www.findxbot.com\"},{\"regex\":\"FreshRSS\",\"name\":\"FreshRSS\",\"category\":\"Feed Fetcher\",\"url\":\"https://freshrss.org/\"},{\"regex\":\"Genieo\",\"name\":\"Genieo Web filter\",\"category\":\"\",\"url\":\"http://www.genieo.com/webfilter.html\",\"producer\":{\"name\":\"Genieo\",\"url\":\"http://www.genieo.com\"}},{\"regex\":\"GigablastOpenSource\",\"name\":\"Gigablast\",\"category\":\"Search bot\",\"url\":\"https://github.com/gigablast/open-source-search-engine\",\"producer\":{\"name\":\"Matt Wells\",\"url\":\"http://www.gigablast.com/faq.html\"}},{\"regex\":\"Gluten Free Crawler\",\"name\":\"Gluten Free Crawler\",\"category\":\"Crawler\",\"url\":\"http://glutenfreepleasure.com/\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"ichiro/mobile goo\",\"name\":\"Goo\",\"category\":\"Search bot\",\"url\":\"http://search.goo.ne.jp/option/use/sub4/sub4-1\",\"producer\":{\"name\":\"NTT Resonant\",\"url\":\"http://goo.ne.jp\"}},{\"regex\":\"Google Favicon\",\"name\":\"Google Favicon\",\"category\":\"Crawler\"},{\"regex\":\"Google Search Console\",\"name\":\"Google Search Console\",\"category\":\"Crawler\",\"url\":\"https://search.google.com/search-console/about\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"Google Page Speed Insights\",\"name\":\"Google PageSpeed Insights\",\"category\":\"Site Monitor\",\"url\":\"http://developers.google.com/speed/pagespeed/insights/\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"google_partner_monitoring\",\"name\":\"Google Partner Monitoring\",\"category\":\"Site Monitor\",\"url\":\"\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"Google-Cloud-Scheduler\",\"name\":\"Google Cloud Scheduler\",\"category\":\"Crawler\",\"url\":\"https://cloud.google.com/scheduler\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"https://www.google.com\"}},{\"regex\":\"Google-Structured-Data-Testing-Tool\",\"name\":\"Google Structured Data Testing Tool\",\"category\":\"Validator\",\"url\":\"https://search.google.com/structured-data/testing-tool\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"GoogleStackdriverMonitoring\",\"name\":\"Google Stackdriver Monitoring\",\"category\":\"Site Monitor\",\"url\":\"https://cloud.google.com/monitoring\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"https://www.google.com\"}},{\"regex\":\"via ggpht\\\\.com GoogleImageProxy\",\"name\":\"Gmail Image Proxy\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"SeznamEmailProxy\",\"name\":\"Seznam Email Proxy\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Seznam.cz, a.s.\",\"url\":\"http://www.seznam.cz/\"}},{\"regex\":\"Seznam-Zbozi-robot\",\"name\":\"Seznam Zbozi.cz\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Seznam.cz, a.s.\",\"url\":\"https://www.zbozi.cz/\"}},{\"regex\":\"Heurekabot-Feed\",\"name\":\"Heureka Feed\",\"category\":\"Crawler\",\"url\":\"https://sluzby.heureka.cz/napoveda/heurekabot/\",\"producer\":{\"name\":\"Heureka.cz, a.s.\",\"url\":\"https://www.heureka.cz/\"}},{\"regex\":\"ShopAlike\",\"name\":\"ShopAlike\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Visual Meta\",\"url\":\"https://www.shopalike.cz/\"}},{\"regex\":\"AdsBot-Google(-Mobile)?|Adwords-(DisplayAds|Express|Instant)|Google Web Preview|Google[ -]Publisher[ -]Plugin|Google-(Ads-Qualify|Adwords|AMPHTML|Assess|HotelAdsVerifier|Read-Aloud|Shopping-Quality|Site-Verification|speakr|Test|Youtube-Links)|(APIs|DuplexWeb|Feedfetcher|Mediapartners)-Google|Googlebot(-Mobile|-Image|-Video|-News)?|GoogleProducer|Google.*/\\\\+/web/snippet\",\"name\":\"Googlebot\",\"category\":\"Search bot\",\"url\":\"http://www.google.com/bot.html\",\"producer\":{\"name\":\"Google Inc.\",\"url\":\"http://www.google.com\"}},{\"regex\":\"heritrix\",\"name\":\"Heritrix\",\"category\":\"Crawler\",\"url\":\"https://webarchive.jira.com/wiki/display/Heritrix/Heritrix\",\"producer\":{\"name\":\"The Internet Archive\",\"url\":\"https://archive.org\"}},{\"regex\":\"HubSpot \",\"name\":\"HubSpot\",\"category\":\"Crawler\",\"producer\":{\"name\":\"HubSpot Inc.\",\"url\":\"https://www.hubspot.com\"}},{\"regex\":\"HTTPMon\",\"name\":\"HTTPMon\",\"category\":\"Site Monitor\",\"url\":\"http://www.httpmon.com\",\"producer\":{\"name\":\"towards GmbH\",\"url\":\"http://www.towards.ch/\"}},{\"regex\":\"ICC-Crawler\",\"name\":\"ICC-Crawler\",\"category\":\"Crawler\",\"url\":\"http://www.nict.go.jp/en/univ-com/plan/crawl.html\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"inoreader.com\",\"name\":\"inoreader\",\"category\":\"Feed Reader\",\"url\":\"https://www.inoreader.com\"},{\"regex\":\"iisbot\",\"name\":\"IIS Site Analysis\",\"category\":\"Crawler\",\"url\":\"http://www.iis.net/iisbot.html\",\"producer\":{\"name\":\"Microsoft Corporation\",\"url\":\"http://www.microsoft.com\"}},{\"regex\":\"ips-agent\",\"name\":\"IPS Agent\",\"category\":\"Crawler\",\"producer\":{\"name\":\"VeriSign, Inc\",\"url\":\"http://www.verisign.com/\"}},{\"regex\":\"IP-Guide\\\\.com\",\"name\":\"IP-Guide Crawler\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"\",\"url\":\"https://ip-guide.com\"}},{\"regex\":\"kouio\",\"name\":\"Kouio\",\"url\":\"http://kouio.com/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"larbin\",\"name\":\"Larbin web crawler\",\"category\":\"Crawler\",\"url\":\"http://larbin.sourceforge.net\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"([A-z0-9]*)-Lighthouse\",\"name\":\"Lighthouse\",\"category\":\"Site Monitor\",\"url\":\"https://developers.google.com/web/tools/lighthouse\",\"producer\":{\"name\":\"Lighthouse\",\"url\":\"https://developers.google.com/web/tools/lighthouse\"}},{\"regex\":\"linkdexbot(-mobile)?|linkdex\\\\.com\",\"name\":\"Linkdex Bot\",\"category\":\"Search bot\",\"url\":\"http://www.linkdex.com/bots\",\"producer\":{\"name\":\"Mojeek Ltd.\",\"url\":\"http://www.mojeek.com\"}},{\"regex\":\"LinkedInBot\",\"name\":\"LinkedIn Bot\",\"category\":\"Social Media Agent\",\"url\":\"http://www.linkedin.com\",\"producer\":{\"name\":\"LinkedIn\",\"url\":\"http://www.linkedin.com\"}},{\"regex\":\"ltx71\",\"name\":\"LTX71\",\"url\":\"http://ltx71.com/\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Mail\\\\.RU(_Bot)?\",\"name\":\"Mail.Ru Bot\",\"category\":\"Search bot\",\"url\":\"http://help.mail.ru/webmaster/indexing/robots/types_robots\",\"producer\":{\"name\":\"Mail.Ru Group\",\"url\":\"http://corp.mail.ru\"}},{\"regex\":\"magpie-crawler\",\"name\":\"Magpie-Crawler\",\"category\":\"Social Media Agent\",\"url\":\"http://www.brandwatch.com/magpie-crawler/\",\"producer\":{\"name\":\"Brandwatch\",\"url\":\"http://www.brandwatch.com\"}},{\"regex\":\"MagpieRSS\",\"name\":\"MagpieRSS\",\"url\":\"http://magpierss.sourceforge.net/\",\"category\":\"Feed Parser\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"masscan\",\"name\":\"masscan\",\"url\":\"https://github.com/robertdavidgraham/masscan\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Robert Graham\",\"url\":\"https://github.com/robertdavidgraham\"}},{\"regex\":\"Mastodon/\",\"name\":\"Mastodon Bot\",\"category\":\"Social Media Agent\"},{\"regex\":\"meanpathbot\",\"name\":\"Meanpath Bot\",\"category\":\"Search bot\",\"url\":\"http://www.meanpath.com/meanpathbot.html\",\"producer\":{\"name\":\"Meanpath\",\"url\":\"http://www.meanpath.com\"}},{\"regex\":\"MetaJobBot\",\"name\":\"MetaJobBot\",\"category\":\"Crawler\",\"url\":\"http://www.metajob.at/the/crawler\",\"producer\":{\"name\":\"MetaJob\",\"url\":\"http://www.metajob.at\"}},{\"regex\":\"MetaInspector\",\"name\":\"MetaInspector\",\"category\":\"Crawler\",\"url\":\"https://github.com/jaimeiniesta/metainspector\"},{\"regex\":\"MixrankBot\",\"name\":\"Mixrank Bot\",\"category\":\"Crawler\",\"url\":\"http://mixrank.com\",\"producer\":{\"name\":\"Online Media Group, Inc.\",\"url\":\"\"}},{\"regex\":\"MJ12bot\",\"name\":\"MJ12 Bot\",\"category\":\"Search bot\",\"url\":\"http://majestic12.co.uk/bot.php\",\"producer\":{\"name\":\"Majestic-12\",\"url\":\"http://majestic12.co.uk\"}},{\"regex\":\"Mnogosearch\",\"name\":\"Mnogosearch\",\"category\":\"Search bot\",\"url\":\"http://www.mnogosearch.org/\",\"producer\":{\"name\":\"Lavtech.Com Corp.\",\"url\":\"\"}},{\"regex\":\"MojeekBot\",\"name\":\"MojeekBot\",\"category\":\"Search bot\",\"url\":\"http://www.mojeek.com/bot.html\",\"producer\":{\"name\":\"Mojeek Ltd.\",\"url\":\"http://www.mojeek.com\"}},{\"regex\":\"munin\",\"name\":\"Munin\",\"category\":\"Site Monitor\",\"url\":\"http://munin-monitoring.org/\",\"producer\":{\"name\":\"Munin\",\"url\":\"http://munin-monitoring.org/\"}},{\"regex\":\"NalezenCzBot\",\"name\":\"NalezenCzBot\",\"category\":\"Crawler\",\"url\":\"http://www.nalezen.cz/about-crawler\",\"producer\":{\"name\":\"Jaroslav Kuboš\",\"url\":\"\"}},{\"regex\":\"check_http/v\",\"name\":\"Nagios check_http\",\"category\":\"Site Monitor\",\"url\":\"https://nagios.org\",\"producer\":{\"name\":\"Nagios Plugins Development Team\",\"url\":\"https://nagios.org\"}},{\"regex\":\"nbertaupete95\\\\(at\\\\)gmail.com\",\"name\":\"nbertaupete95\",\"category\":\"Crawler\"},{\"regex\":\"Netcraft( Web Server Survey| SSL Server Survey|SurveyAgent)\",\"name\":\"Netcraft Survey Bot\",\"category\":\"Search bot\",\"url\":\"\",\"producer\":{\"name\":\"Netcraft\",\"url\":\"http://www.netcraft.com\"}},{\"regex\":\"netEstate NE Crawler\",\"name\":\"netEstate\",\"category\":\"Crawler\",\"url\":\"http://www.website-datenbank.de/Impressum\",\"producer\":{\"name\":\"netEstate GmbH\",\"url\":\"https://www.netestate.de/en/\"}},{\"regex\":\"Netvibes\",\"name\":\"Netvibes\",\"url\":\"http://www.netvibes.com/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"NewsBlur .*(Fetcher|Finder)\",\"name\":\"NewsBlur\",\"url\":\"http://www.newsblur.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"NewsGatorOnline\",\"name\":\"NewsGator\",\"url\":\"http://www.newsgator.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"nlcrawler\",\"name\":\"NLCrawler\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Northern Light\",\"url\":\"http://northernlight.com\"}},{\"regex\":\"Nmap Scripting Engine\",\"name\":\"Nmap\",\"category\":\"Security Checker\",\"url\":\"https://nmap.org/book/nse.html\",\"producer\":{\"name\":\"Nmap\",\"url\":\"https://nmap.org/\"}},{\"regex\":\"Nuzzel\",\"name\":\"Nuzzel\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Nuzzel\",\"url\":\"https://www.nuzzel.com/\"}},{\"regex\":\"Octopus [0-9]\",\"name\":\"Octopus\"},{\"regex\":\"omgili(?:bot)?\",\"name\":\"Omgili bot\",\"category\":\"Search bot\",\"url\":\"http://www.omgili.com/Crawler.html\",\"producer\":{\"name\":\"Omgili\",\"url\":\"http://www.omgili.com\"}},{\"regex\":\"OpenindexSpider\",\"name\":\"Openindex Spider\",\"category\":\"Search bot\",\"url\":\"http://www.openindex.io/en/webmasters/spider.html\",\"producer\":{\"name\":\"Openindex B.V.\",\"url\":\"http://www.openindex.io\"}},{\"regex\":\"spbot\",\"name\":\"OpenLinkProfiler\",\"category\":\"Crawler\",\"url\":\"http://openlinkprofiler.org/bot\",\"producer\":{\"name\":\"Axandra GmbH\",\"url\":\"http://www.axandra.com\"}},{\"regex\":\"OpenWebSpider\",\"name\":\"OpenWebSpider\",\"category\":\"Crawler\",\"url\":\"http://www.openwebspider.org\",\"producer\":{\"name\":\"OpenWebSpider Lab\",\"url\":\"http://lab.openwebspider.org\"}},{\"regex\":\"OrangeBot|VoilaBot\",\"name\":\"Orange Bot\",\"category\":\"Search bot\",\"url\":\"http://lemoteur.orange.fr\",\"producer\":{\"name\":\"Orange\",\"url\":\"http://www.orange.fr\"}},{\"regex\":\"PaperLiBot\",\"name\":\"PaperLiBot\",\"category\":\"Search bot\",\"url\":\"http://support.paper.li/entries/20023257-what-is-paper-li\",\"producer\":{\"name\":\"Smallrivers SA\",\"url\":\"http://www.paper.li\"}},{\"regex\":\"phantomas/\",\"name\":\"Phantomas\",\"category\":\"Site Monitor\",\"url\":\"https://github.com/macbre/phantomas\"},{\"regex\":\"phpservermon\",\"name\":\"PHP Server Monitor\",\"category\":\"Site Monitor\",\"url\":\"https://github.com/phpservermon/phpservermon\",\"producer\":{\"name\":\"PHP Server Monitor\",\"url\":\"http://www.phpservermonitor.org/\"}},{\"regex\":\"PocketParser\",\"name\":\"PocketParser\",\"category\":\"Read-it-later Service\",\"url\":\"https://getpocket.com/pocketparser_ua\",\"producer\":{\"name\":\"Pocket\",\"url\":\"https://getpocket.com/\"}},{\"regex\":\"PritTorrent\",\"name\":\"PritTorrent\",\"category\":\"Crawler\",\"url\":\"https://github.com/astro/prittorrent\",\"producer\":{\"name\":\"Bitlove\",\"url\":\"http://bitlove.org/\"}},{\"regex\":\"PRTG Network Monitor\",\"name\":\"PRTG Network Monitor\",\"category\":\"Network Monitor\",\"url\":\"https://www.paessler.com/prtg\",\"producer\":{\"name\":\"Paessler AG\",\"url\":\"https://www.paessler.com\"}},{\"regex\":\"psbot(-page)?\",\"name\":\"Picsearch bot\",\"category\":\"Search bot\",\"url\":\"http://www.picsearch.com/bot.html\",\"producer\":{\"name\":\"Picsearch\",\"url\":\"http://www.picsearch.com\"}},{\"regex\":\"Pingdom(?:\\\\.com|TMS)\",\"name\":\"Pingdom Bot\",\"category\":\"Site Monitor\",\"url\":\"\",\"producer\":{\"name\":\"Pingdom AB\",\"url\":\"https://www.pingdom.com\"}},{\"regex\":\"Quora Link Preview\",\"name\":\"Quora Link Preview\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Quora\",\"url\":\"http://www.quora.com\"}},{\"regex\":\"Quora-Bot\",\"name\":\"Quora Bot\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Quora\",\"url\":\"https://www.quora.com/\"}},{\"regex\":\"RamblerMail\",\"name\":\"RamblerMail Image Proxy\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Rambler&Co\",\"url\":\"https://rambler-co.ru/\"}},{\"regex\":\"QuerySeekerSpider\",\"name\":\"QuerySeekerSpider\",\"category\":\"Crawler\",\"url\":\"http://queryseeker.com/bot.html\",\"producer\":{\"name\":\"QueryEye Inc.\",\"url\":\"http://queryeye.com\"}},{\"regex\":\"Qwantify\",\"name\":\"Qwantify\",\"category\":\"Crawler\",\"url\":\"https://www.qwant.com/\",\"producer\":{\"name\":\"Qwant Corporation\",\"url\":\"https://www.qwant.com/\"}},{\"regex\":\"Rainmeter\",\"name\":\"Rainmeter\",\"category\":\"Crawler\",\"url\":\"https://www.rainmeter.net\"},{\"regex\":\"redditbot\",\"name\":\"Reddit Bot\",\"category\":\"Social Media Agent\",\"url\":\"http://www.reddit.com/feedback\",\"producer\":{\"name\":\"reddit inc.\",\"url\":\"http://www.reddit.com\"}},{\"regex\":\"Riddler\",\"name\":\"Riddler\",\"category\":\"Security search bot\",\"url\":\"https://riddler.io/about\",\"producer\":{\"name\":\"F-Secure\",\"url\":\"https://www.f-secure.com\"}},{\"regex\":\"rogerbot\",\"name\":\"Rogerbot\",\"category\":\"Crawler\",\"url\":\"http://moz.com/help/pro/what-is-rogerbot-\",\"producer\":{\"name\":\"SEOmoz, Inc.\",\"url\":\"http://moz.com/\"}},{\"regex\":\"ROI Hunter\",\"name\":\"ROI Hunter\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Roihunter a.s.\",\"url\":\"http://roihunter.com/\"}},{\"regex\":\"SafeDNSBot\",\"name\":\"SafeDNSBot\",\"category\":\"Crawler\",\"url\":\"https://www.safedns.com/searchbot\",\"producer\":{\"name\":\"SafeDNS, Inc.\",\"url\":\"https://www.safedns.com/\"}},{\"regex\":\"Scrapy\",\"name\":\"Scrapy\",\"category\":\"Crawler\",\"url\":\"http://scrapy.org\"},{\"regex\":\"Screaming Frog SEO Spider\",\"name\":\"Screaming Frog SEO Spider\",\"category\":\"Crawler\",\"url\":\"http://www.screamingfrog.co.uk/seo-spider\",\"producer\":{\"name\":\"Screaming Frog Ltd\",\"url\":\"http://www.screamingfrog.co.uk\"}},{\"regex\":\"ScreenerBot\",\"name\":\"ScreenerBot\",\"category\":\"Crawler\",\"url\":\"http://www.screenerbot.com\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"SemrushBot\",\"name\":\"Semrush Bot\",\"category\":\"Crawler\",\"url\":\"http://www.semrush.com/bot.html\",\"producer\":{\"name\":\"SEMrush\",\"url\":\"http://www.semrush.com\"}},{\"regex\":\"SensikaBot\",\"name\":\"Sensika Bot\",\"category\":\"\",\"url\":\"\",\"producer\":{\"name\":\"Sensika\",\"url\":\"http://sensika.com\"}},{\"regex\":\"SEOENG(World)?Bot\",\"name\":\"SEOENGBot\",\"category\":\"Crawler\",\"url\":\"http://www.seoengine.com/seoengbot.htm\",\"producer\":{\"name\":\"SEO Engine\",\"url\":\"http://www.seoengine.com\"}},{\"regex\":\"SEOkicks-Robot\",\"name\":\"SEOkicks-Robot\",\"category\":\"Crawler\",\"url\":\"http://www.seokicks.de/robot.html\",\"producer\":{\"name\":\"SEOkicks\",\"url\":\"https://www.seokicks.de/\"}},{\"regex\":\"seoscanners\\\\.net\",\"name\":\"Seoscanners.net\",\"category\":\"Crawler\",\"url\":\"\"},{\"regex\":\"SkypeUriPreview\",\"name\":\"Skype URI Preview\",\"category\":\"Service Agent\",\"url\":\"\",\"producer\":{\"name\":\"Skype Communications S.à.r.l.\",\"url\":\"https://www.skype.com\"}},{\"regex\":\"SeznamBot|SklikBot|Seznam screenshot-generator\",\"name\":\"Seznam Bot\",\"category\":\"Search bot\",\"url\":\"http://www.mapy.cz/cz/seznambot.html\",\"producer\":{\"name\":\"Seznam.cz, a.s.\",\"url\":\"http://www.seznam.cz/\"}},{\"regex\":\"shopify-partner-homepage-scraper\",\"name\":\"Shopify Partner\",\"category\":\"Crawler\",\"url\":\"https://www.shopify.com/partners\",\"producer\":{\"name\":\"Shopify\",\"url\":\"https://www.shopify.com/\"}},{\"regex\":\"ShopWiki\",\"name\":\"ShopWiki\",\"category\":\"Search tools\",\"url\":\"http://www.shopwiki.com/wiki/Help:Bot\",\"producer\":{\"name\":\"ShopWiki Corp.\",\"url\":\"http://www.shopwiki.com\"}},{\"regex\":\"SilverReader\",\"name\":\"SilverReader\",\"url\":\"http://silverreader.com\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"SimplePie\",\"name\":\"SimplePie\",\"url\":\"http://www.simplepie.org\",\"category\":\"Feed Parser\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"SISTRIX Crawler\",\"name\":\"SISTRIX Crawler\",\"category\":\"Crawler\",\"url\":\"http://crawler.sistrix.net\",\"producer\":{\"name\":\"SISTRIX GmbH\",\"url\":\"http://www.sistrix.de\"}},{\"regex\":\"compatible; (?:SISTRIX )?Optimizer\",\"name\":\"SISTRIX Optimizer\",\"category\":\"Crawler\",\"url\":\"https://optimizer.sistrix.com\",\"producer\":{\"name\":\"SISTRIX GmbH\",\"url\":\"http://www.sistrix.de\"}},{\"regex\":\"SiteSucker\",\"name\":\"SiteSucker\",\"category\":\"Crawler\",\"url\":\"http://ricks-apps.com/osx/sitesucker/\"},{\"regex\":\"sixy.ch\",\"name\":\"Sixy.ch\",\"category\":\"Site Monitor\",\"url\":\"http://sixy.ch\",\"producer\":{\"name\":\"Manuel Kasper\",\"url\":\"https://neon1.net/\"}},{\"regex\":\"Slackbot|Slack-ImgProxy\",\"name\":\"Slackbot\",\"category\":\"Crawler\",\"url\":\"https://api.slack.com/robots\",\"producer\":{\"name\":\"Slack Technologies\",\"url\":\"http://slack.com\"}},{\"regex\":\"(Sogou (web|inst|Pic) spider)|New-Sogou-Spider\",\"name\":\"Sogou Spider\",\"category\":\"Search bot\",\"url\":\"http://www.sogou.com/docs/help/webmasters.htm\",\"producer\":{\"name\":\"Sohu, Inc.\",\"url\":\"http://www.sogou.com\"}},{\"regex\":\"Sosospider|Sosoimagespider\",\"name\":\"Soso Spider\",\"category\":\"Search bot\",\"url\":\"http://help.soso.com/webspider.htm\",\"producer\":{\"name\":\"Tencent Holdings\",\"url\":\"http://www.soso.com\"}},{\"regex\":\"Sprinklr\",\"name\":\"Sprinklr\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Sprinklr, Inc.\",\"url\":\"https://www.sprinklr.com/\"}},{\"regex\":\"sqlmap/\",\"name\":\"sqlmap\",\"category\":\"Security Checker\",\"url\":\"http://sqlmap.org/\",\"producer\":{\"name\":\"sqlmap\",\"url\":\"http://sqlmap.org/\"}},{\"regex\":\"SSL Labs\",\"name\":\"SSL Labs\",\"category\":\"Validator\",\"url\":\"https://www.ssllabs.com/about/assessment.html\",\"producer\":{\"name\":\"SSL Labs\",\"url\":\"https://www.ssllabs.com/about/assessment.html\"}},{\"regex\":\"StatusCake\",\"name\":\"StatusCake\",\"category\":\"Site Monitor\",\"url\":\"https://www.statuscake.com\",\"producer\":{\"name\":\"StatusCake\",\"url\":\"https://www.statuscake.com\"}},{\"regex\":\"Superfeedr bot\",\"name\":\"Superfeedr Bot\",\"category\":\"Feed Fetcher\",\"url\":\"\",\"producer\":{\"name\":\"Superfeedr\",\"url\":\"https://superfeedr.com/\"}},{\"regex\":\"Sparkler/[0-9]\",\"name\":\"Sparkler\",\"category\":\"Crawler\",\"url\":\"https://github.com/USCDataScience/sparkler\"},{\"regex\":\"Spinn3r\",\"name\":\"Spinn3r\",\"category\":\"Crawler\",\"url\":\"http://spinn3r.com/robot\",\"producer\":{\"name\":\"Tailrank Inc\",\"url\":\"http://spinn3r.com\"}},{\"regex\":\"SputnikBot\",\"name\":\"Sputnik Bot\",\"category\":\"Crawler\",\"url\":\"\"},{\"regex\":\"SputnikFaviconBot\",\"name\":\"Sputnik Favicon Bot\",\"category\":\"Crawler\",\"url\":\"\"},{\"regex\":\"SputnikImageBot\",\"name\":\"Sputnik Image Bot\",\"category\":\"Crawler\",\"url\":\"\"},{\"regex\":\"SurveyBot\",\"name\":\"Survey Bot\",\"category\":\"Search bot\",\"url\":\"http://www.domaintools.com/webmasters/surveybot.php\",\"producer\":{\"name\":\"Domain Tools\",\"url\":\"http://www.domaintools.com\"}},{\"regex\":\"TarmotGezgin\",\"name\":\"Tarmot Gezgin\",\"url\":\"http://www.tarmot.com/gezgin/\",\"category\":\"Search bot\"},{\"regex\":\"TelegramBot\",\"name\":\"TelegramBot\",\"url\":\"https://telegram.org/blog/bot-revolution\"},{\"regex\":\"TLSProbe\",\"name\":\"TLSProbe\",\"url\":\"https://scan.trustnet.venafi.com/\",\"category\":\"Security search bot\",\"producer\":{\"name\":\"Venafi TrustNet\",\"url\":\"https://www.venafi.com\"}},{\"regex\":\"TinEye-bot\",\"name\":\"TinEye Crawler\",\"category\":\"Search bot\",\"url\":\"http://www.tineye.com/crawler.html\",\"producer\":{\"name\":\"Idée Inc.\",\"url\":\"http://ideeinc.com\"}},{\"regex\":\"Tiny Tiny RSS\",\"name\":\"Tiny Tiny RSS\",\"url\":\"http://tt-rss.org\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"theoldreader.com\",\"name\":\"theoldreader\",\"category\":\"Feed Reader\",\"url\":\"https://theoldreader.com\"},{\"regex\":\"trendictionbot\",\"name\":\"Trendiction Bot\",\"category\":\"Crawler\",\"url\":\"http://www.trendiction.de/bot\",\"producer\":{\"name\":\"Talkwalker Inc.\",\"url\":\"http://www.talkwalker.com\"}},{\"regex\":\"TurnitinBot\",\"name\":\"TurnitinBot\",\"category\":\"Crawler\",\"url\":\"http://www.turnitin.com/robot/crawlerinfo.html\",\"producer\":{\"name\":\"iParadigms, LLC.\",\"url\":\"http://www.turnitin.com\"}},{\"regex\":\"TweetedTimes Bot\",\"name\":\"TweetedTimes Bot\",\"category\":\"Crawler\",\"url\":\"http://tweetedtimes.com\",\"producer\":{\"name\":\"TweetedTimes\",\"url\":\"http://tweetedtimes.com/\"}},{\"regex\":\"TweetmemeBot\",\"name\":\"Tweetmeme Bot\",\"category\":\"Crawler\",\"url\":\"http://tweetmeme.com/\",\"producer\":{\"name\":\"Mediasift\",\"url\":\"\"}},{\"regex\":\"Twingly Recon\",\"name\":\"Twingly Recon\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Twingly\",\"url\":\"https://www.twingly.com\"}},{\"regex\":\"Twitterbot\",\"name\":\"Twitterbot\",\"category\":\"Social Media Agent\",\"url\":\"https://dev.twitter.com/docs/cards/getting-started\",\"producer\":{\"name\":\"Twitter\",\"url\":\"http://www.twitter.com\"}},{\"regex\":\"UniversalFeedParser\",\"name\":\"UniversalFeedParser\",\"category\":\"Feed Fetcher\",\"url\":\"https://github.com/kurtmckee/feedparser\",\"producer\":{\"name\":\"Kurt McKee\",\"url\":\"https://github.com/kurtmckee\"}},{\"regex\":\"via secureurl\\\\.fwdcdn\\\\.com\",\"name\":\"UkrNet Mail Proxy\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"UkrNet Ltd\",\"url\":\"https://www.ukr.net/\"}},{\"regex\":\"Uptimebot\",\"name\":\"Uptimebot\",\"category\":\"Site Monitor\",\"url\":\"https://uptime.com/uptimebot\",\"producer\":{\"name\":\"Uptime\",\"url\":\"https://uptime.com\"}},{\"regex\":\"UptimeRobot\",\"name\":\"Uptime Robot\",\"category\":\"Site Monitor\",\"url\":\"\",\"producer\":{\"name\":\"Uptime Robot\",\"url\":\"http://uptimerobot.com\"}},{\"regex\":\"URLAppendBot\",\"name\":\"URLAppendBot\",\"category\":\"Crawler\",\"url\":\"http://www.profound.net/urlappendbot.html\",\"producer\":{\"name\":\"Profound Networks\",\"url\":\"http://www.profound.net\"}},{\"regex\":\"Vagabondo\",\"name\":\"Vagabondo\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"WiseGuys\",\"url\":\"http://www.wise-guys.nl/\"}},{\"regex\":\"vkShare; \",\"name\":\"VK Share Button\",\"category\":\"Crawler\",\"url\":\"http://vk.com/dev/Share\",\"producer\":{\"name\":\"VK\",\"url\":\"http://vk.com/\"}},{\"regex\":\"VSMCrawler\",\"name\":\"Visual Site Mapper Crawler\",\"category\":\"Crawler\",\"url\":\"http://www.visualsitemapper.com/crawler\",\"producer\":{\"name\":\"Alentum Software Ltd.\",\"url\":\"http://www.alentum.com\"}},{\"regex\":\"Jigsaw\",\"name\":\"W3C CSS Validator\",\"category\":\"Validator\",\"url\":\"http://jigsaw.w3.org/css-validator\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"W3C_I18n-Checker\",\"name\":\"W3C I18N Checker\",\"category\":\"Validator\",\"url\":\"http://validator.w3.org/i18n-checker\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"W3C-checklink\",\"name\":\"W3C Link Checker\",\"category\":\"Validator\",\"url\":\"http://validator.w3.org/checklink\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"W3C_Validator|Validator.nu\",\"name\":\"W3C Markup Validation Service\",\"category\":\"Validator\",\"url\":\"http://validator.w3.org/services\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"W3C-mobileOK\",\"name\":\"W3C MobileOK Checker\",\"category\":\"Validator\",\"url\":\"http://validator.w3.org/mobile\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"W3C_Unicorn\",\"name\":\"W3C Unified Validator\",\"category\":\"Validator\",\"url\":\"http://validator.w3.org/unicorn\",\"producer\":{\"name\":\"W3C\",\"url\":\"http://www.w3.org\"}},{\"regex\":\"Wappalyzer\",\"name\":\"Wappalyzer\",\"url\":\"https://github.com/AliasIO/Wappalyzer\",\"producer\":{\"name\":\"AliasIO\",\"url\":\"https://github.com/AliasIO\"}},{\"regex\":\"PTST/\",\"name\":\"WebPageTest\",\"category\":\"Site Monitor\",\"url\":\"https://www.webpagetest.org\"},{\"regex\":\"WeSEE(:Search)?\",\"name\":\"WeSEE:Search\",\"category\":\"Search bot\",\"url\":\"http://www.wesee.com/bot\",\"producer\":{\"name\":\"WeSEE Ltd\",\"url\":\"http://www.wesee.com\"}},{\"regex\":\"WebbCrawler\",\"name\":\"WebbCrawler\",\"category\":\"Crawler\",\"url\":\"http://badcheese.com/crawler.html\",\"producer\":{\"name\":\"Steve Webb\",\"url\":\"http://badcheese.com\"}},{\"regex\":\"websitepulse[+ ]checker\",\"name\":\"WebSitePulse\",\"category\":\"Site Monitor\",\"url\":\"http://badcheese.com/crawler.html\",\"producer\":{\"name\":\"WebSitePulse\",\"url\":\"http://www.websitepulse.com/\"}},{\"regex\":\"WordPress\",\"name\":\"WordPress\",\"category\":\"Service Agent\",\"url\":\"https://wordpress.org/\",\"producer\":{\"name\":\"Wordpress.org\",\"url\":\"https://wordpress.org/\"}},{\"regex\":\"Wotbox\",\"name\":\"Wotbox\",\"category\":\"Search bot\",\"url\":\"http://www.wotbox.com/bot/\",\"producer\":{\"name\":\"Wotbox\",\"url\":\"http://www.wotbox.com\"}},{\"regex\":\"XenForo\",\"name\":\"XenForo\",\"category\":\"Service Agent\",\"url\":\"https://xenforo.com/\",\"producer\":{\"name\":\"XenForo Ltd.\",\"url\":\"https://xenforo.com/\"}},{\"regex\":\"yacybot\",\"name\":\"YaCy\",\"category\":\"Search bot\",\"url\":\"http://yacy.net/bot.html\",\"producer\":{\"name\":\"YaCy\",\"url\":\"http://yacy.net\"}},{\"regex\":\"Yahoo! Slurp|Yahoo!-AdCrawler\",\"name\":\"Yahoo! Slurp\",\"category\":\"Search bot\",\"url\":\"http://help.yahoo.com/ysearch/slurp\",\"producer\":{\"name\":\"Yahoo! Inc.\",\"url\":\"http://www.yahoo.com\"}},{\"regex\":\"Yahoo Link Preview|Yahoo:LinkExpander:Slingstone\",\"name\":\"Yahoo! Link Preview\",\"category\":\"Crawler\",\"url\":\"https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html\",\"producer\":{\"name\":\"Yahoo! Inc.\",\"url\":\"http://www.yahoo.com\"}},{\"regex\":\"YahooMailProxy\",\"name\":\"Yahoo! Mail Proxy\",\"category\":\"Service Agent\",\"url\":\"https://help.yahoo.com/kb/yahoo-mail-proxy-SLN28749.html\",\"producer\":{\"name\":\"Yahoo! Inc.\",\"url\":\"http://www.yahoo.com\"}},{\"regex\":\"YahooCacheSystem\",\"name\":\"Yahoo! Cache System\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Yahoo! Inc.\",\"url\":\"http://www.yahoo.com\"}},{\"regex\":\"Y!J-BRW\",\"name\":\"Yahoo! Japan BRW\",\"category\":\"Crawler\",\"url\":\"https://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/~/ウェブページにアクセスするシステムのユーザーエージェントについて\",\"producer\":{\"name\":\"Yahoo! Japan Corp.\",\"url\":\"https://www.yahoo.co.jp/\"}},{\"regex\":\"Yandex(SpravBot|ScreenshotBot|MobileBot|AccessibilityBot|ForDomain|Vertis|Market|Catalog|Calendar|Sitelinks|AdNet|Pagechecker|Webmaster|Media|Video|Bot|Images|Antivirus|Direct|Blogs|Favicons|ImageResizer|Verticals|News(links)?|Metrika|\\\\.Gazeta Bot)|YaDirectFetcher|YandexTurbo|YandexTracker|YandexSearchShop|YandexRCA|YandexPartner|YandexOntoDBAPI|YandexOntoDB|YandexMobileScreenShotBot\",\"name\":\"Yandex Bot\",\"category\":\"Search bot\",\"url\":\"http://www.yandex.com/bots\",\"producer\":{\"name\":\"Yandex LLC\",\"url\":\"http://company.yandex.com\"}},{\"regex\":\"Yeti|NaverJapan\",\"name\":\"Yeti/Naverbot\",\"category\":\"Search bot\",\"url\":\"http://help.naver.com/robots/\",\"producer\":{\"name\":\"Naver\",\"url\":\"http://www.naver.com\"}},{\"regex\":\"YoudaoBot\",\"name\":\"Youdao Bot\",\"category\":\"Search bot\",\"url\":\"http://www.youdao.com/help/webmaster/spider\",\"producer\":{\"name\":\"NetEase, Inc.\",\"url\":\"http://corp.163.com\"}},{\"regex\":\"YOURLS v[0-9]\",\"name\":\"Yourls\",\"category\":\"Crawler\",\"url\":\"http://yourls.org\"},{\"regex\":\"YRSpider|YYSpider\",\"name\":\"Yunyun Bot\",\"category\":\"Search bot\",\"url\":\"http://www.yunyun.com/SiteInfo.php?r=about\",\"producer\":{\"name\":\"YunYun\",\"url\":\"http://www.yunyun.com\"}},{\"regex\":\"zgrab\",\"name\":\"zgrab\",\"category\":\"Security Checker\",\"url\":\"https://github.com/zmap/zgrab\"},{\"regex\":\"Zookabot\",\"name\":\"Zookabot\",\"category\":\"Crawler\",\"url\":\"http://zookabot.com\",\"producer\":{\"name\":\"Hwacha ApS\",\"url\":\"http://hwacha.dk\"}},{\"regex\":\"ZumBot\",\"name\":\"ZumBot\",\"category\":\"Search bot\",\"url\":\"http://help.zum.com/inquiry\",\"producer\":{\"name\":\"ZUM internet\",\"url\":\"http://www.zuminternet.com/\"}},{\"regex\":\"YottaaMonitor\",\"name\":\"Yottaa Site Monitor\",\"category\":\"Site Monitor\",\"url\":\"http://www.yottaa.com/products/site-monitor\",\"producer\":{\"name\":\"Yottaa\",\"url\":\"http://www.yottaa.com/\"}},{\"regex\":\"Yahoo Ad monitoring.*yahoo-ad-monitoring-SLN24857.*\",\"name\":\"Yahoo Gemini\",\"category\":\"Crawler\",\"url\":\"https://help.yahoo.com/kb/yahoo-ad-monitoring-SLN24857.html\",\"producer\":{\"name\":\"Yahoo! Inc.\",\"url\":\"http://www.yahoo.com\"}},{\"regex\":\".*Java.*outbrain\",\"name\":\"Outbrain\",\"category\":\"Crawler\",\"url\":\"\",\"producer\":{\"name\":\"Outbrain\",\"url\":\"http://www.outbrain.com/\"}},{\"regex\":\"HubPages.*crawlingpolicy\",\"name\":\"HubPages\",\"category\":\"Crawler\",\"url\":\"http://hubpages.com/help/crawlingpolicy\",\"producer\":{\"name\":\"HubPages\",\"url\":\"http://hubpages.com/\"}},{\"regex\":\"Pinterest(bot)?/\\\\d\\\\.\\\\d.*www\\\\.pinterest\\\\.com.*\",\"name\":\"Pinterest\",\"url\":\"http://www.pinterest.com/bot.html\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Pinterest\",\"url\":\"http://www.pinterest.com/\"}},{\"regex\":\"Site24x7\",\"name\":\"Site24x7 Website Monitoring\",\"category\":\"Site Monitor\",\"url\":\"https://www.site24x7.com/site24x7-faq.html\",\"producer\":{\"name\":\"Site24x7\",\"url\":\"https://www.site24x7.com\"}},{\"regex\":\"s~snapchat-proxy\",\"name\":\"Snapchat Proxy\",\"category\":\"Crawler\",\"url\":\"https://www.snapchat.com\",\"producer\":{\"name\":\"Snapchat Inc.\",\"url\":\"https://www.snapchat.com\"}},{\"regex\":\"Let's Encrypt validation server\",\"name\":\"Let's Encrypt Validation\",\"category\":\"Service Agent\",\"url\":\"https://letsencrypt.org/how-it-works/\",\"producer\":{\"name\":\"Let's Encrypt\",\"url\":\"https://letsencrypt.org\"}},{\"regex\":\"GrapeshotCrawler\",\"name\":\"Grapeshot\",\"category\":\"Crawler\",\"url\":\"https://www.grapeshot.com/crawler\",\"producer\":{\"name\":\"Grapeshot\",\"url\":\"https://www.grapeshot.com\"}},{\"regex\":\"www\\\\.monitor\\\\.us\",\"name\":\"Monitor.Us\",\"category\":\"Site Monitor\",\"url\":\"http://www.monitor.us\",\"producer\":{\"name\":\"Monitor.Us\",\"url\":\"http://www.monitor.us\"}},{\"regex\":\"Catchpoint( bot)?\",\"name\":\"Catchpoint\",\"category\":\"Site Monitor\",\"url\":\"\",\"producer\":{\"name\":\"Catchpoint Systems\",\"url\":\"http://www.catchpoint.com/\"}},{\"regex\":\"bitlybot\",\"name\":\"BitlyBot\",\"category\":\"Crawler\",\"url\":\"https://bitly.com\",\"producer\":{\"name\":\"Bitly, Inc.\",\"url\":\"https://bitly.com\"}},{\"regex\":\"Zao/\",\"name\":\"Zao\",\"category\":\"Crawler\"},{\"regex\":\"lycos\",\"name\":\"Lycos\"},{\"regex\":\"Slurp\",\"name\":\"Inktomi Slurp\"},{\"regex\":\"Speedy Spider\",\"name\":\"Speedy\"},{\"regex\":\"ScoutJet\",\"name\":\"ScoutJet\"},{\"regex\":\"nrsbot|netresearch\",\"name\":\"NetResearchServer\"},{\"regex\":\"scooter\",\"name\":\"Scooter\"},{\"regex\":\"gigabot\",\"name\":\"Gigabot\"},{\"regex\":\"charlotte\",\"name\":\"Charlotte\"},{\"regex\":\"Pompos\",\"name\":\"Pompos\"},{\"regex\":\"ichiro\",\"name\":\"ichiro\"},{\"regex\":\"PagePeeker\",\"name\":\"PagePeeker\"},{\"regex\":\"WebThumbnail\",\"name\":\"WebThumbnail\"},{\"regex\":\"Willow Internet Crawler\",\"name\":\"Willow Internet Crawler\"},{\"regex\":\"EmailWolf\",\"name\":\"EmailWolf\"},{\"regex\":\"NetLyzer FastProbe\",\"name\":\"NetLyzer FastProbe\"},{\"regex\":\"AdMantX.*admantx\\\\.com\",\"name\":\"ADMantX\"},{\"regex\":\"Server Density Service Monitoring.*\",\"name\":\"Server Density\"},{\"regex\":\"RSSRadio \\\\(Push Notification Scanner;support@dorada\\\\.co\\\\.uk\\\\)\",\"name\":\"RSSRadio Bot\"},{\"regex\":\"(A6-Indexer|nuhk|TsolCrawler|Yammybot|Openbot|Gulper Web Bot|grub-client|Download Demon|SearchExpress|Microsoft URL Control|borg|altavista|dataminr.com|tweetedtimes.com|TrendsmapResolver|teoma|blitzbot|oegp|furlbot|http%20client|polybot|htdig|mogimogi|larbin|scrubby|searchsight|seekbot|semanticdiscovery|snappy|vortex(?! Build)|zeal|fast-webcrawler|converacrawler|dataparksearch|findlinks|BrowserMob|HttpMonitor|ThumbShotsBot|URL2PNG|ZooShot|GomezA|Google SketchUp|Read%20Later|RackspaceBot|robots|SeopultContentAnalyzer|7Siters|centuryb.o.t9|InterNaetBoten|EasyBib AutoCite|Bidtellect|tomnomnom/meg)\",\"name\":\"Generic Bot\"},{\"regex\":\"^sentry\",\"name\":\"Sentry Bot\",\"producer\":{\"name\":\"Sentry\",\"url\":\"https://sentry.io\"}},{\"regex\":\"^Spotify\",\"name\":\"Spotify\",\"producer\":{\"name\":\"Spotify\",\"url\":\"https://www.spotify.com\"}},{\"regex\":\"The Knowledge AI\",\"name\":\"The Knowledge AI\",\"category\":\"Crawler\"},{\"regex\":\"Embedly\",\"name\":\"Embedly\",\"category\":\"Crawler\",\"url\":\"https://support.embed.ly/hc/en-us\",\"producer\":{\"name\":\"A Medium, Corp.\",\"url\":\"https://medium.com/\"}},{\"regex\":\"BrandVerity\",\"name\":\"BrandVerity\",\"category\":\"Crawler\",\"url\":\"https://www.brandverity.com/why-is-brandverity-visiting-me\",\"producer\":{\"name\":\"BrandVerity, Inc.\",\"url\":\"https://www.brandverity.com/\"}},{\"regex\":\"Kaspersky Lab CFR link resolver\",\"name\":\"Kaspersky\",\"category\":\"Security Checker\",\"url\":\"https://www.kaspersky.com/\",\"producer\":{\"name\":\"AO Kaspersky Lab\",\"url\":\"https://www.kaspersky.com/\"}},{\"regex\":\"eZ Publish Link Validator\",\"name\":\"eZ Publish Link Validator\",\"category\":\"Crawler\",\"url\":\"https://ez.no/\",\"producer\":{\"name\":\"eZ Systems AS\",\"url\":\"https://ez.no/\"}},{\"regex\":\"woorankreview\",\"name\":\"WooRank\",\"category\":\"Search bot\",\"url\":\"https://www.woorank.com/\",\"producer\":{\"name\":\"WooRank sprl\",\"url\":\"https://www.woorank.com/\"}},{\"regex\":\"(Match|LinkCheck) by Siteimprove.com\",\"name\":\"Siteimprove\",\"category\":\"Search bot\",\"url\":\"https://siteimprove.com/\",\"producer\":{\"name\":\"Siteimprove GmbH\",\"url\":\"https://siteimprove.com/\"}},{\"regex\":\"CATExplorador\",\"name\":\"CATExplorador\",\"category\":\"Search bot\",\"url\":\"https://fundacio.cat/ca/domini/\",\"producer\":{\"name\":\"Fundació puntCAT\",\"url\":\"https://fundacio.cat/ca/domini/\"}},{\"regex\":\"Buck\",\"name\":\"Buck\",\"category\":\"Search bot\",\"url\":\"https://hypefactors.com/\",\"producer\":{\"name\":\"Hypefactors A/S\",\"url\":\"https://hypefactors.com/\"}},{\"regex\":\"tracemyfile\",\"name\":\"TraceMyFile\",\"category\":\"Search bot\",\"url\":\"https://www.tracemyfile.com/\",\"producer\":{\"name\":\"Idee Inc.\",\"url\":\"http://ideeinc.com/\"}},{\"regex\":\"zelist.ro feed parser\",\"name\":\"Ze List\",\"url\":\"https://www.zelist.ro/\",\"category\":\"Feed Fetcher\",\"producer\":{\"name\":\"Treeworks SRL\",\"url\":\"https://www.tree.ro/\"}},{\"regex\":\"weborama-fetcher\",\"name\":\"Weborama\",\"category\":\"Search bot\",\"url\":\"https://weborama.com/\",\"producer\":{\"name\":\"Weborama SA\",\"url\":\"https://weborama.com/\"}},{\"regex\":\"BoardReader Favicon Fetcher\",\"name\":\"BoardReader\",\"category\":\"Search bot\",\"url\":\"https://boardreader.com/\",\"producer\":{\"name\":\"Effyis Inc\",\"url\":\"https://boardreader.com/\"}},{\"regex\":\"IDG/IT\",\"name\":\"IDG/IT\",\"category\":\"Search bot\",\"url\":\"https://spaziodati.eu/\",\"producer\":{\"name\":\"SpazioDati S.r.l.\",\"url\":\"https://spaziodati.eu/\"}},{\"regex\":\"Bytespider\",\"name\":\"Bytespider\",\"category\":\"Search bot\",\"url\":\"https://bytedance.com/\",\"producer\":{\"name\":\"ByteDance Ltd.\",\"url\":\"https://bytedance.com/\"}},{\"regex\":\"WikiDo\",\"name\":\"WikiDo\",\"category\":\"Search bot\",\"url\":\"https://www.wikido.com/\",\"producer\":{\"name\":\"Fotolitografie Fiorentine di Becchi Antonio s.n.c.\",\"url\":\"https://www.wikido.com/\"}},{\"regex\":\"AwarioSmartBot\",\"name\":\"Awario\",\"category\":\"Search bot\",\"url\":\"https://awario.com/bots.html\",\"producer\":{\"name\":\"Awario\",\"url\":\"https://awario.com/\"}},{\"regex\":\"AwarioRssBot\",\"name\":\"Awario\",\"category\":\"Feed Fetcher\",\"url\":\"https://awario.com/bots.html\",\"producer\":{\"name\":\"Awario\",\"url\":\"https://awario.com/\"}},{\"regex\":\"oBot\",\"name\":\"oBot\",\"category\":\"Search bot\",\"url\":\"https://www.xforce-security.com/crawler/\",\"producer\":{\"name\":\"IBM Germany Research & Development GmbH\",\"url\":\"https://exchange.xforce.ibmcloud.com/\"}},{\"regex\":\"SMTBot\",\"name\":\"SMTBot\",\"category\":\"Search bot\",\"url\":\"https://www.similartech.com/smtbot\",\"producer\":{\"name\":\"SimilarTech Ltd.\",\"url\":\"https://www.similartech.com/\"}},{\"regex\":\"LCC\",\"name\":\"LCC\",\"category\":\"Search bot\",\"url\":\"https://corpora.uni-leipzig.de/crawler_faq.html\",\"producer\":{\"name\":\"Universität Leipzig\",\"url\":\"https://www.uni-leipzig.de/\"}},{\"regex\":\"Startpagina-Linkchecker\",\"name\":\"Startpagina Linkchecker\",\"category\":\"Search bot\",\"url\":\"https://www.startpagina.nl/linkchecker\",\"producer\":{\"name\":\"Startpagina B.V.\",\"url\":\"https://www.startpagina.nl/\"}},{\"regex\":\"GTmetrix\",\"name\":\"GTmetrix\",\"category\":\"Crawler\",\"url\":\"https://gtmetrix.com/\",\"producer\":{\"name\":\"Carbon60 Operating Co. Ltd.\",\"url\":\"https://www.carbon60.com/\"}},{\"regex\":\"Nutch\",\"name\":\"Nutch-based Bot\",\"category\":\"Crawler\",\"url\":\"https://nutch.apache.org\",\"producer\":{\"name\":\"The Apache Software Foundation\",\"url\":\"https://www.apache.org/foundation/\"}},{\"regex\":\"Seobility\",\"name\":\"Seobility\",\"category\":\"Crawler\",\"url\":\"https://www.seobility.net/en/faq/?category=crawling#!aboutourbot\"},{\"regex\":\"Vercelbot\",\"name\":\"Vercel Bot\",\"category\":\"Service bot\",\"url\":\"https://vercel.com\"},{\"regex\":\"Grammarly\",\"name\":\"Grammarly\",\"category\":\"Service bot\",\"url\":\"https://www.grammarly.com\"},{\"regex\":\"Robozilla\",\"name\":\"Robozilla\",\"category\":\"Crawler\"},{\"regex\":\"Domains Project\",\"name\":\"Domains Project\",\"category\":\"Crawler\",\"url\":\"https://domainsproject.org\"},{\"regex\":\"PetalBot\",\"name\":\"Petal Bot\",\"category\":\"Crawler\",\"url\":\"https://aspiegel.com/petalbot\"},{\"regex\":\"SerendeputyBot\",\"name\":\"Serendeputy Bot\",\"category\":\"Crawler\",\"url\":\"https://serendeputy.com/about/serendeputy-bot\"},{\"regex\":\"ias-va.*admantx.*service-fetcher\",\"name\":\"ADmantX Service Fetcher\",\"category\":\"Service bot\",\"url\":\"https://www.admantx.com/service-fetcher.html\"},{\"regex\":\"SemanticScholarBot\",\"name\":\"Semantic Scholar Bot\",\"category\":\"Crawler\",\"url\":\"https://www.semanticscholar.org/crawler\"},{\"regex\":\"VelenPublicWebCrawler\",\"name\":\"Velen Public Web Crawler\",\"category\":\"Crawler\",\"url\":\"https://hunter.io/robot\"},{\"regex\":\"Barkrowler\",\"name\":\"Barkrowler\",\"category\":\"Crawler\",\"url\":\"http://www.exensa.com/crawl\"},{\"regex\":\"BDCbot\",\"name\":\"BDCbot\",\"category\":\"Crawler\",\"url\":\"https://bigweb.bigdatacorp.com.br/pages/faq.aspx\",\"producer\":{\"name\":\"BIG Data Solucoes Em Tecnologia de Informatica LTDA\",\"url\":\"https://bigdatacorp.com.br/\"}},{\"regex\":\"adbeat\",\"name\":\"Adbeat\",\"category\":\"Crawler\",\"url\":\"https://www.adbeat.com/operation_policy\",\"producer\":{\"name\":\"PPC Labs LLC\",\"url\":\"https://www.adbeat.com/\"}},{\"regex\":\"BW/(?:(\\\\d+[\\\\.\\\\d]+))\",\"name\":\"BuiltWith\",\"category\":\"Crawler\",\"url\":\"https://builtwith.com/biup\",\"producer\":{\"name\":\"BuiltWith Pty Ltd\",\"url\":\"https://builtwith.com/\"}},{\"regex\":\"https://whatis.contentkingapp.com\",\"name\":\"ContentKing\",\"category\":\"Site Monitor\",\"url\":\"https://whatis.contentkingapp.com/\",\"producer\":{\"name\":\"ContentKing BV\",\"url\":\"https://www.contentkingapp.com/\"}},{\"regex\":\"MicroAdBot\",\"name\":\"MicroAdBot\",\"category\":\"Crawler\",\"url\":\"https://www.microad.co.jp/\",\"producer\":{\"name\":\"MicroAd, Inc.\",\"url\":\"https://www.microad.co.jp/\"}},{\"regex\":\"PingAdmin.Ru\",\"name\":\"PingAdmin.Ru\",\"category\":\"Site Monitor\",\"url\":\"https://ping-admin.ru/\"},{\"regex\":\"notifyninja.+monitoring\",\"name\":\"Notify Ninja\",\"category\":\"Site Monitor\",\"url\":\"http://notifyninja.com\"},{\"regex\":\"WebDataStats\",\"name\":\"WebDataStats\",\"category\":\"Crawler\",\"url\":\"https://webdatastats.com/policy.html\",\"producer\":{\"name\":\"WebTehRazrabotka LLC\",\"url\":\"https://webdatastats.com/\"}},{\"regex\":\"parse.ly scraper\",\"name\":\"parse.ly\",\"category\":\"Crawler\",\"url\":\"https://www.parse.ly/help/integration/crawler\",\"producer\":{\"name\":\"Parsely, Inc.\",\"url\":\"https://www.parse.ly/\"}},{\"regex\":\"Nimbostratus-Bot\",\"name\":\"Nimbostratus Bot\",\"category\":\"Site Monitor\",\"url\":\"http://cloudsystemnetworks.com\"},{\"regex\":\"HeartRails_Capture/\\\\d\",\"name\":\"Heart Rails Capture\",\"category\":\"Service Agent\",\"url\":\"http://capture.heartrails.com\"},{\"regex\":\"Project-Resonance\",\"name\":\"Project Resonance\",\"category\":\"Crawler\",\"url\":\"http://project-resonance.com\"},{\"regex\":\"DataXu/\\\\d\",\"name\":\"DataXu\",\"category\":\"Service Agent\",\"url\":\"https://advertising.roku.com/dataxu\",\"producer\":{\"name\":\"Roku, Inc.\",\"url\":\"https://roku.com\"}},{\"regex\":\"Cocolyzebot\",\"name\":\"Cocolyzebot\",\"category\":\"Crawler\",\"url\":\"https://cocolyze.com/en/cocolyzebot\",\"producer\":{\"name\":\"VSI INNOVATION SAS\",\"url\":\"https://vsi-innovation.com/\"}},{\"regex\":\"veryhip\",\"name\":\"VeryHip\",\"category\":\"Crawler\",\"url\":\"https://veryhip.com/\",\"producer\":{\"name\":\"VeryHip\",\"url\":\"https://veryhip.com/\"}},{\"regex\":\"LinkpadBot\",\"name\":\"LinkpadBot\",\"category\":\"Crawler\",\"url\":\"https://www.linkpad.org/\",\"producer\":{\"name\":\"Solomono LLC\",\"url\":\"https://www.linkpad.org/\"}},{\"regex\":\"MuscatFerret\",\"name\":\"MuscatFerret\",\"category\":\"Crawler\",\"url\":\"http://www.webtop.com/\"},{\"regex\":\"PageThing.com\",\"name\":\"PageThing\",\"category\":\"Crawler\",\"url\":\"https://www.pagething.com/\",\"producer\":{\"name\":\"SPECIALNOISE LTD\",\"url\":\"https://www.specialnoise.com/\"}},{\"regex\":\"ArchiveBox\",\"name\":\"ArchiveBox\",\"url\":\"https://archivebox.io/\",\"category\":\"Crawler\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"Choosito\",\"name\":\"Choosito\",\"url\":\"https://www.choosito.com/\",\"category\":\"Crawler\",\"producer\":{\"name\":\"Choosito! Inc.\",\"url\":\"https://www.choosito.com/\"}},{\"regex\":\"datagnionbot\",\"name\":\"datagnionbot\",\"url\":\"https://www.datagnion.com/bot.html\",\"category\":\"Crawler\",\"producer\":{\"name\":\"DATAGNION GMBH\",\"url\":\"https://www.datagnion.com/\"}},{\"regex\":\"WhatCMS\",\"name\":\"WhatCMS\",\"url\":\"https://whatcms.org/\",\"category\":\"Crawler\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"httpx\",\"name\":\"httpx\",\"url\":\"https://github.com/projectdiscovery/httpx\",\"category\":\"Crawler\",\"producer\":{\"name\":\"\",\"url\":\"\"}},{\"regex\":\"scaninfo@expanseinc.com\",\"name\":\"Expanse\",\"category\":\"Security Checker\",\"url\":\"https://expanse.co/\",\"producer\":{\"name\":\"Expanse Inc.\",\"url\":\"https://expanse.co/\"}},{\"regex\":\"HuaweiWebCatBot\",\"name\":\"HuaweiWebCatBot\",\"category\":\"Crawler\",\"url\":\"https://isecurity.huawei.com\",\"producer\":{\"name\":\"Huawei Technologies Co., Ltd.\",\"url\":\"https://huawei.com\"}},{\"regex\":\"Hatena-Favicon\",\"name\":\"Hatena Favicon\",\"category\":\"Crawler\",\"url\":\"https://www.hatena.ne.jp/faq/\",\"producer\":{\"name\":\"Hatena Co., Ltd.\",\"url\":\"https://www.hatena.ne.jp\"}},{\"regex\":\"RyowlEngine/(\\\\d+)\",\"name\":\"Ryowl\",\"category\":\"Crawler\",\"url\":\"https://ryowl.org\"},{\"regex\":\"OdklBot/(\\\\d+)\",\"name\":\"Odnoklassniki Bot\",\"category\":\"Crawler\",\"url\":\"https://odnoklassniki.ru\"},{\"regex\":\"Mediatoolkitbot\",\"name\":\"Mediatoolkit Bot\",\"category\":\"Crawler\",\"url\":\"https://mediatoolkit.com\"},{\"regex\":\"ZoominfoBot\",\"name\":\"ZoominfoBot\",\"category\":\"Crawler\",\"url\":\"https://www.zoominfo.com\"},{\"regex\":\"WeViKaBot/([\\\\d+\\\\.])\",\"name\":\"WeViKaBot\",\"category\":\"Crawler\",\"url\":\"http://www.wevika.de\"},{\"regex\":\"SEOkicks\",\"name\":\"SEOkicks\",\"category\":\"Crawler\",\"url\":\"https://www.seokicks.de/robot.html\"},{\"regex\":\"Plukkie/([\\\\d+\\\\.])\",\"name\":\"Plukkie\",\"category\":\"Crawler\",\"url\":\"http://www.botje.com/plukkie.htm\"},{\"regex\":\"proximic;\",\"name\":\"Comscore\",\"category\":\"Crawler\",\"url\":\"https://www.comscore.com/Web-Crawler\"},{\"regex\":\"SurdotlyBot/([\\\\d+\\\\.])\",\"name\":\"SurdotlyBot\",\"category\":\"Crawler\",\"url\":\"http://sur.ly/bot.html\"},{\"regex\":\"Gowikibot/([\\\\d+\\\\.])\",\"name\":\"Gowikibot\",\"category\":\"Crawler\",\"url\":\"http:/www.gowikibot.com\"},{\"regex\":\"SabsimBot/([\\\\d+\\\\.])\",\"name\":\"SabsimBot\",\"category\":\"Crawler\",\"url\":\"https://sabsim.com\"},{\"regex\":\"LumtelBot/([\\\\d+\\\\.])\",\"name\":\"LumtelBot\",\"category\":\"Crawler\",\"url\":\"https://umtel.com\"},{\"regex\":\"PiplBot\",\"name\":\"PiplBot\",\"category\":\"Crawler\",\"url\":\"http://www.pipl.com/bot\"},{\"regex\":\"woobot/([\\\\d+\\\\.])\",\"name\":\"WooRank\",\"category\":\"Crawler\",\"url\":\"https://www.woorank.com/bot\"},{\"regex\":\"[a-z0-9\\\\-_]*((?<!cu|power[ _]|m[ _])bot(?![ _]TAB|[ _]?5[0-9])|crawler|crawl|checker|archiver|transcoder|spider)([^a-z]|$)\",\"name\":\"Generic Bot\"}]");

},{}],"glMh9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.versionCompare = (v1, v2, operator)=>{
    //      discuss at: http://locutus.io/php/version_compare/
    //      original by: Philippe Jausions (http://pear.php.net/user/jausions)
    //      original by: Aidan Lister (http://aidanlister.com/)
    //      reimplemented by: Kankrelune (http://www.webfaktory.info/)
    //      improved by: Brett Zamir (http://brett-zamir.me)
    //      improved by: Scott Baker
    //      improved by: Theriault (https://github.com/Theriault)
    //      example 1: version_compare('8.2.5rc', '8.2.5a')
    //      returns 1: 1
    //      example 2: version_compare('8.2.50', '8.2.52', '<')
    //      returns 2: true
    //      example 3: version_compare('5.3.0-dev', '5.3.0')
    //      returns 3: -1
    //      example 4: version_compare('4.1.0.52','4.01.0.51')
    //      returns 4: 1
    // Important: compare must be initialized at 0.
    let i;
    let x;
    let compare = 0;
    // vm maps textual PHP versions to negatives so they're less than 0.
    // PHP currently defines these as CASE-SENSITIVE. It is important to
    // leave these as negatives so that they can come before numerical versions
    // and as if no letters were there to begin with.
    // (1alpha is < 1 and < 1.1 but > 1dev1)
    // If a non-numerical value can't be mapped to this table, it receives
    // -7 as its value.
    const vm = {
        "dev": -6,
        "alpha": -5,
        "a": -5,
        "beta": -4,
        "b": -4,
        "RC": -3,
        "rc": -3,
        "#": -2,
        "p": 1,
        "pl": 1
    };
    // This function will be called to prepare each version argument.
    // It replaces every _, -, and + with a dot.
    // It surrounds any nonsequence of numbers/dots with dots.
    // It replaces sequences of dots with a single dot.
    //    version_compare('4..0', '4.0') === 0
    // Important: A string of 0 length needs to be converted into a value
    // even less than an unexisting value in vm (-7), hence [-8].
    // It's also important to not strip spaces because of this.
    //   version_compare('', ' ') === 1
    const prepVersion = (v)=>{
        v = ("" + v).replace(/[_\-+]/g, ".");
        v = v.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
        return !v.length ? [
            -8
        ] : v.split(".");
    };
    // This converts a version component to a number.
    // Empty component becomes 0.
    // Non-numerical component becomes a negative number.
    // Numerical component becomes itself as an integer.
    const numVersion = (v)=>{
        return !v ? 0 : isNaN(v) ? vm[v] || -7 : parseInt(v, 10);
    };
    v1 = prepVersion(v1);
    v2 = prepVersion(v2);
    x = Math.max(v1.length, v2.length);
    for(i = 0; i < x; i++){
        if (v1[i] === v2[i]) continue;
        v1[i] = numVersion(v1[i]);
        v2[i] = numVersion(v2[i]);
        if (v1[i] < v2[i]) {
            compare = -1;
            break;
        } else if (v1[i] > v2[i]) {
            compare = 1;
            break;
        }
    }
    if (!operator) return compare;
    // Important: operator is CASE-SENSITIVE.
    // "No operator" seems to be treated as "<."
    // Any other values seem to make the function return null.
    switch(operator){
        case ">":
        case "gt":
            return compare > 0;
        case ">=":
        case "ge":
            return compare >= 0;
        case "<=":
        case "le":
            return compare <= 0;
        case "===":
        case "=":
        case "eq":
            return compare === 0;
        case "<>":
        case "!==":
        case "ne":
            return compare !== 0;
        case "":
        case "<":
        case "lt":
            return compare < 0;
        default:
            return null;
    }
};

},{}]},["7mgxS","h7u1C"], "h7u1C", "parcelRequirebbc2")

//# sourceMappingURL=index.b71e74eb.js.map