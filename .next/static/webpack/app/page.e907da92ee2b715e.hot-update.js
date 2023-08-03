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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"(app-pages-browser)/./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/model */ \"(app-pages-browser)/./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Car = ()=>{\n    _s();\n    const refBody = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container } = refBody;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    const easeOutCirc = (x)=>{\n        return Math.sqrt(1 - Math.pow(x - 1, 4));\n    };\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_3__.AxesHelper(3);\n    // scene.add(axesHelper);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container } = refBody;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputColorSpace = three__WEBPACK_IMPORTED_MODULE_3__.SRGBColorSpace;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            const scale = scH * 0.01 + 4.8;\n            console.log(scale, scH);\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale / 2, 0.01, 5000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff, 60);\n            ambientLight.position.set(0, 0, 0);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/porsche.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 2;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center pt-0 flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-auto w-[40vh] h-[40vh]\",\n            ref: refBody,\n            children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n                lineNumber: 128,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jesseleonard/code/portfolio2/components/animation/Car.jsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Car, \"2nFeHbgTbvZmKeRxspSA1kN4OE8=\");\n_c = Car;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\nvar _c;\n$RefreshReg$(_c, \"Car\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYW5pbWF0aW9uL0Nhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdFO0FBQ3pDO0FBQ007QUFDcUM7QUFDMUI7QUFFaEQsTUFBTVUsTUFBTTs7SUFDVixNQUFNQyxVQUFVUiw2Q0FBTUE7SUFDdEIsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUE7SUFDeEMsTUFBTSxDQUFDWSxTQUFTQyxVQUFVLEdBQUdiLCtDQUFRQTtJQUNyQyxNQUFNLENBQUNjLE9BQU8sR0FBR2QsK0NBQVFBLENBQUMsSUFBSUMsMENBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSztJQUN2RCxNQUFNLENBQUNlLHNCQUFzQixHQUFHaEIsK0NBQVFBLENBQ3RDLElBQUlDLDBDQUFhLENBQ2YsS0FBS2dCLEtBQUtDLEdBQUcsQ0FBQyxNQUFNRCxLQUFLRSxFQUFFLEdBQzNCLElBQ0EsS0FBS0YsS0FBS0csR0FBRyxDQUFDLE1BQU1ILEtBQUtFLEVBQUU7SUFHL0IsTUFBTSxDQUFDRSxNQUFNLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJRyx3Q0FBS0E7SUFDbEMsTUFBTSxDQUFDbUIsV0FBV0MsWUFBWSxHQUFHdkIsK0NBQVFBO0lBQ3pDLE1BQU13QixxQkFBcUIzQixrREFBV0EsQ0FBQztRQUNyQyxNQUFNLEVBQUU0QixTQUFTQyxTQUFTLEVBQUUsR0FBR25CO1FBQy9CLElBQUltQixhQUFhaEIsVUFBVTtZQUN6QixNQUFNaUIsTUFBTUQsVUFBVUUsV0FBVztZQUNqQyxNQUFNQyxNQUFNSCxVQUFVSSxZQUFZO1lBRWxDcEIsU0FBU3FCLE9BQU8sQ0FBQ0osS0FBS0U7UUFDeEI7SUFDRixHQUFHO1FBQUNuQjtLQUFTO0lBRWIsTUFBTXNCLGNBQWMsQ0FBQ0M7UUFDbkIsT0FBT2hCLEtBQUtpQixJQUFJLENBQUMsSUFBSWpCLEtBQUtrQixH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Q0YsR0FBRztRQUFDZDtRQUFVYztLQUFtQjtJQUVqQyxxQkFDRSw4REFBQ3VEO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7WUFBNEJDLEtBQUsxRTtzQkFDN0NDLHlCQUFXLDhEQUFDNkQ7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0E3SE0vRDtLQUFBQTtBQStITiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGlvbi9DYXIuanN4P2E1YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgTGlnaHQsIFNjZW5lIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uLy4uL2xpYi9tb2RlbFwiO1xuXG5jb25zdCBDYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkJvZHkgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpO1xuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwLFxuICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgIClcbiAgKTtcbiAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBTY2VuZSgpKTtcbiAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZCb2R5O1xuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgIH1cbiAgfSwgW3JlbmRlcmVyXSk7XG5cbiAgY29uc3QgZWFzZU91dENpcmMgPSAoeCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSk7XG4gIH07XG4gIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgVEhSRUUuQXhlc0hlbHBlcigzKTtcbiAgLy8gc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkJvZHk7XG4gICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgICAgcmVuZGVyZXIub3V0cHV0Q29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcik7XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMSArIDQuODtcbiAgICAgIGNvbnNvbGUubG9nKHNjYWxlLCBzY0gpO1xuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSAvIDIsXG4gICAgICAgIDAuMDEsXG4gICAgICAgIDUwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpO1xuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSk7XG5cbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCA2MCk7XG4gICAgICBhbWJpZW50TGlnaHQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpO1xuXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCBcIi9wb3JzY2hlLmdsYlwiLCB7XG4gICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxuICAgICAgICBjYXN0U2hhZG93OiBmYWxzZSxcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCByZXEgPSBudWxsO1xuICAgICAgbGV0IGZyYW1lID0gMDtcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lO1xuXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uO1xuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMDtcblxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMjtcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9XG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZCk7XG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPVxuICAgICAgICAgICAgcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpO1xuICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9scy51cGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidW5tb3VudFwiKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbcmVuZGVyZXIsIGhhbmRsZVdpbmRvd1Jlc2l6ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTAgZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LVs0MHZoXSBoLVs0MHZoXVwiIHJlZj17cmVmQm9keX0+XG4gICAgICAgIHtsb2FkaW5nICYmIDxwPmxvYWRpbmcuLi48L3A+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVEhSRUUiLCJMaWdodCIsIlNjZW5lIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJDYXIiLCJyZWZCb2R5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsInRhcmdldCIsIlZlY3RvcjMiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJNYXRoIiwic2luIiwiUEkiLCJjb3MiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsImVhc2VPdXRDaXJjIiwieCIsInNxcnQiLCJwb3ciLCJheGVzSGVscGVyIiwiQXhlc0hlbHBlciIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0Q29sb3JTcGFjZSIsIlNSR0JDb2xvclNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInNldCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/animation/Car.jsx\n"));

/***/ })

});