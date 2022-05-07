/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/wasm_bench_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_bench_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_log_e8ba7b992c7ad0eb\": () => (/* binding */ __wbg_log_e8ba7b992c7ad0eb),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"solve_hanoi\": () => (/* binding */ solve_hanoi)\n/* harmony export */ });\n/* harmony import */ var _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bench_bg.wasm */ \"../pkg/wasm_bench_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n/**\n* @param {number} num_of_disks\n* @param {boolean | undefined} debug\n*/\nfunction solve_hanoi(num_of_disks, debug) {\n    _wasm_bench_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.solve_hanoi(num_of_disks, isLikeNone(debug) ? 0xFFFFFF : debug ? 1 : 0);\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_log_e8ba7b992c7ad0eb(arg0) {\n    console.log(getObject(arg0));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://testsite/../pkg/wasm_bench_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hanoi_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hanoi-wasm */ \"../pkg/wasm_bench_bg.js\");\n/* harmony import */ var hanoi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hanoi-js */ \"../js/lib.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hanoi_wasm__WEBPACK_IMPORTED_MODULE_1__]);\nhanoi_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nwindow[\"hanoi\"] = {\n  \"solve_with_wasm\": (num_of_disks, debug) => {\n    console.time(\"wasm_ver\");\n    (0,hanoi_wasm__WEBPACK_IMPORTED_MODULE_1__.solve_hanoi)(num_of_disks, debug);\n    console.timeEnd(\"wasm_ver\");\n  },\n  \"solve_with_js\": (num_of_disks, debug) => {\n    console.time(\"js_ver\");\n    (0,hanoi_js__WEBPACK_IMPORTED_MODULE_0__.solve_hanoi)(num_of_disks, debug);\n    console.timeEnd(\"js_ver\");\n  }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://testsite/./index.js?");

/***/ }),

/***/ "../js/hanoi.js":
/*!**********************!*\
  !*** ../js/hanoi.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HanoiSolver\": () => (/* binding */ HanoiSolver)\n/* harmony export */ });\nclass Disk {\n  constructor(size) {\n    this.size = size;\n  }\n}\n\nclass Stick {\n  disks = [];\n\n  topDisk() {\n    return this.disks[0];\n  }\n\n  take() {\n    if (this.disks.length === 0)\n      throw new Error(\"No disk.\");\n    return this.disks.shift();\n  }\n\n  put(disk) {\n    const topDisk = this.topDisk();\n    if (topDisk && topDisk.size < disk.size)\n      throw new Error(\"The disk is larger than tha base.\");\n    this.disks.unshift(disk);\n  }\n}\n\nclass GameField {\n  STICK_NAMES = [\"src\", \"dst\", \"work\"];\n  sticks = {\n    src: new Stick(),\n    dst: new Stick(),\n    work: new Stick()\n  }\n\n  constructor(disks) {\n    this.sticks.src.disks = Array(disks).fill(0).map((v, i) => new Disk(i + 1));\n  }\n\n  moveDisk(from, to) {\n    const d = this.sticks[from].take();\n    this.sticks[to].put(d);\n  }\n\n  printf() {\n    for (const s in this.sticks) {\n      console.log(`${s}: ${this.sticks[s].disks.map(d => d.size)}`);\n    }\n  }\n\n  isCompleted() {\n    return this.sticks.src.disks.length === 0\n      && this.sticks.work.disks.length === 0;\n  }\n}\n\nclass HanoiSolver {\n  constructor(numOfDisks) {\n    this.numOfDisks = numOfDisks;\n    this.gameField = new GameField(numOfDisks);\n    this.minDiskMoveSteps = numOfDisks % 2 === 0\n      ? [\"work\", \"dst\", \"src\"]    //even case\n      : [\"dst\", \"work\", \"src\"];   //odd case\n  }\n\n  solve(debug) {\n    const traceUnit = this.numOfDisks < 11 ? 100 : 100 * Math.pow(2, (this.numOfDisks - 10));\n    let round = 0;\n    do {\n      if (debug && round % traceUnit === 0)\n        debugPrint(round, this.gameField);\n      round++;\n      this.moveMinDisk();\n      if (this.gameField.isCompleted())\n        break;\n      round++;\n      this.moveOtherAvailableDisk();\n    } while (true)\n    if (debug)\n      debugPrint(round, this.gameField);\n    return round;\n  }\n\n  moveMinDisk() {\n    const currentStickName = this.gameField.STICK_NAMES.find(name => {\n      const d = this.gameField.sticks[name].topDisk();\n      return d && d.size === 1;\n    });\n    const moveToStickIndex = this.minDiskMoveSteps.findIndex(e => e === currentStickName) + 1;\n    const moveToStickName = this.minDiskMoveSteps[moveToStickIndex > 2 ? 0 : moveToStickIndex];\n    this.gameField.moveDisk(currentStickName, moveToStickName);\n  }\n\n  moveOtherAvailableDisk() {\n    const mv = this.gameField.STICK_NAMES.reduce((sum, curr) => {\n      const d = this.gameField.sticks[curr].topDisk();\n      if (!d) {  //the stick has no disk\n        sum.to = curr;\n      } else if (d.size === 1) {\n        //nothing to do\n      } else if (sum && sum.from) {\n        if (d.size < this.gameField.sticks[sum.from].topDisk().size) {\n          sum.to = sum.from;\n          sum.from = curr;\n        } else {\n          sum.to = curr;\n        }\n      } else {\n        sum.from = curr;\n      }\n      return sum;\n\n    }, { from: null, to: null });\n    this.gameField.moveDisk(mv.from, mv.to);\n  }\n}\n\nfunction debugPrint(round, gameField) {\n  console.log(\"round %s\", round);\n  gameField.printf();\n}\n\n//# sourceURL=webpack://testsite/../js/hanoi.js?");

/***/ }),

/***/ "../js/lib.js":
/*!********************!*\
  !*** ../js/lib.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"solve_hanoi\": () => (/* binding */ solve_hanoi)\n/* harmony export */ });\n/* harmony import */ var _hanoi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hanoi.js */ \"../js/hanoi.js\");\n\n\nfunction solve_hanoi(num_of_disks, debug) {\n  const r = new _hanoi_js__WEBPACK_IMPORTED_MODULE_0__.HanoiSolver(num_of_disks).solve(debug);\n  console.log(\"finished. (%s round)\", r);\n}\n\n//# sourceURL=webpack://testsite/../js/lib.js?");

/***/ }),

/***/ "../pkg/wasm_bench_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_bench_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"385d2884d2a9edc235a3\", {\n\t\t\"./wasm_bench_bg.js\": {\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_log_e8ba7b992c7ad0eb\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_e8ba7b992c7ad0eb,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm_bench_bg.js */ \"../pkg/wasm_bench_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"385d2884d2a9edc235a3\", {\n\t\t\"./wasm_bench_bg.js\": {\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbg_log_e8ba7b992c7ad0eb\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_e8ba7b992c7ad0eb,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://testsite/../pkg/wasm_bench_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;