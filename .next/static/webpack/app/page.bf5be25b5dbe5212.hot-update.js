"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/animation/Car.jsx":
/*!**************************************!*\
  !*** ./components/animation/Car.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/model */ \"(app-pages-browser)/./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Car = ()=>{\n    _s();\n    const refBody = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container } = refBody;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    const easeOutCirc = (x)=>{\n        return Math.sqrt(1 - Math.pow(x - 1, 4));\n    };\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_3__.AxesHelper(3);\n    // scene.add(axesHelper);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container } = refBody;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputColorSpace = three__WEBPACK_IMPORTED_MODULE_3__.SRGBColorSpace;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            const scale = scH * 0.01 + 4.8;\n            console.log(scale, scH);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale / 2, 0.01, 5000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff, 1);\n            ambientLight.position.set(3, 2, 5);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/porsche.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 2;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center pt-0 flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[40vh] h-[40vh]\",\n            ref: refBody,\n            children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n                lineNumber: 128,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Car, \"2nFeHbgTbvZmKeRxspSA1kN4OE8=\");\n_c = Car;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\nvar _c;\n$RefreshReg$(_c, \"Car\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYW5pbWF0aW9uL0Nhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdFO0FBQ3pDO0FBQ007QUFDcUM7QUFDMUI7QUFFaEQsTUFBTVUsTUFBTTs7SUFDVixNQUFNQyxVQUFVUiw2Q0FBTUE7SUFDdEIsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUE7SUFDeEMsTUFBTSxDQUFDWSxTQUFTQyxVQUFVLEdBQUdiLCtDQUFRQTtJQUNyQyxNQUFNLENBQUNjLE9BQU8sR0FBR2QsK0NBQVFBLENBQUMsSUFBSUMsMENBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSztJQUN2RCxNQUFNLENBQUNlLHNCQUFzQixHQUFHaEIsK0NBQVFBLENBQ3RDLElBQUlDLDBDQUFhLENBQ2YsS0FBS2dCLEtBQUtDLEdBQUcsQ0FBQyxNQUFNRCxLQUFLRSxFQUFFLEdBQzNCLElBQ0EsS0FBS0YsS0FBS0csR0FBRyxDQUFDLE1BQU1ILEtBQUtFLEVBQUU7SUFHL0IsTUFBTSxDQUFDRSxNQUFNLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJRyx3Q0FBS0E7SUFDbEMsTUFBTSxDQUFDbUIsV0FBV0MsWUFBWSxHQUFHdkIsK0NBQVFBO0lBQ3pDLE1BQU13QixxQkFBcUIzQixrREFBV0EsQ0FBQztRQUNyQyxNQUFNLEVBQUU0QixTQUFTQyxTQUFTLEVBQUUsR0FBR25CO1FBQy9CLElBQUltQixhQUFhaEIsVUFBVTtZQUN6QixNQUFNaUIsTUFBTUQsVUFBVUUsV0FBVztZQUNqQyxNQUFNQyxNQUFNSCxVQUFVSSxZQUFZO1lBRWxDcEIsU0FBU3FCLE9BQU8sQ0FBQ0osS0FBS0U7UUFDeEI7SUFDRixHQUFHO1FBQUNuQjtLQUFTO0lBRWIsTUFBTXNCLGNBQWMsQ0FBQ0M7UUFDbkIsT0FBT2hCLEtBQUtpQixJQUFJLENBQUMsSUFBSWpCLEtBQUtrQixH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Q0YsR0FBRztRQUFDZDtRQUFVYztLQUFtQjtJQUVqQyxxQkFDRSw4REFBQ3VEO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7WUFBNEJDLEtBQUsxRTtzQkFDN0NDLHlCQUFXLDhEQUFDNkQ7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0E3SE0vRDtLQUFBQTtBQStITiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9DYXIuanN4P2E1YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgTGlnaHQsIFNjZW5lIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uLy4uL2xpYi9tb2RlbFwiO1xuXG5jb25zdCBDYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkJvZHkgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpO1xuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwLFxuICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgIClcbiAgKTtcbiAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBTY2VuZSgpKTtcbiAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZCb2R5O1xuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgIH1cbiAgfSwgW3JlbmRlcmVyXSk7XG5cbiAgY29uc3QgZWFzZU91dENpcmMgPSAoeCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSk7XG4gIH07XG4gIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlcigzKTtcbiAgLy8gc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkJvZHk7XG4gICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgICAgcmVuZGVyZXIub3V0cHV0Q29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcik7XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMSArIDQuODtcbiAgICAgIGNvbnNvbGUubG9nKHNjYWxlLCBzY0gpO1xuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSAvIDIsXG4gICAgICAgIDAuMDEsXG4gICAgICAgIDUwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpO1xuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSk7XG5cbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICAgIGFtYmllbnRMaWdodC5wb3NpdGlvbi5zZXQoMywgMiwgNSk7XG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG4gICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICBzZXRDb250cm9scyhjb250cm9scyk7XG5cbiAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsIFwiL3BvcnNjaGUuZ2xiXCIsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlLFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHJlcSA9IG51bGw7XG4gICAgICBsZXQgZnJhbWUgPSAwO1xuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWU7XG5cbiAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCkge1xuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb247XG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwO1xuXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAyO1xuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID1cbiAgICAgICAgICAgIHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKTtcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9XG4gICAgICAgICAgICBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZCk7XG4gICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bm1vdW50XCIpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpO1xuICAgICAgICByZW5kZXJlci5kaXNwb3NlKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtMCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctWzQwdmhdIGgtWzQwdmhdXCIgcmVmPXtyZWZCb2R5fT5cbiAgICAgICAge2xvYWRpbmcgJiYgPHA+bG9hZGluZy4uLjwvcD59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUSFJFRSIsIkxpZ2h0IiwiU2NlbmUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIkNhciIsInJlZkJvZHkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIk1hdGgiLCJzaW4iLCJQSSIsImNvcyIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiZWFzZU91dENpcmMiLCJ4Iiwic3FydCIsInBvdyIsImF4ZXNIZWxwZXIiLCJBeGVzSGVscGVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRDb2xvclNwYWNlIiwiU1JHQkNvbG9yU3BhY2UiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2V0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/animation/Car.jsx\n"));

/***/ })

});