"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_1__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction IndexPage({ pets  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sanity + Next.js\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Pets\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: pets.map((pet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    pet?.name,\n                                    \" gender: \",\n                                    pet?.gender,\n                                    \" weight:\",\n                                    pet?.weight\n                                ]\n                            }, pet._id, true, {\n                                fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    !pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No pets to show\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 30\n                    }, this),\n                    !pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\xaf\\\\_(ツ)_/\\xaf\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Your data will show up here when you've configured everything correctly\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fkgunabr\\\\source\\\\NotSourceKontroll\\\\Sanity-next\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    projectId: \"1suircmx\",\n    dataset: \"production\",\n    apiVersion: \"2023-02-16\",\n    useCdn: false\n});\nasync function getStaticProps() {\n    const pets = await client.fetch(`*[_type == \"pet\"]`);\n    return {\n        props: {\n            pets\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0MsVUFBVSxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUMxQyxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUNDLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztvQkFDSEosS0FBS0ssTUFBTSxHQUFHLG1CQUNiLDhEQUFDQztrQ0FDRU4sS0FBS08sR0FBRyxDQUFDLENBQUNDLG9CQUNULDhEQUFDQzs7b0NBQWtCRCxLQUFLRTtvQ0FBSztvQ0FBVUYsS0FBS0c7b0NBQU87b0NBQVNILEtBQUtJOzsrQkFBeERKLElBQUlLLEdBQUc7Ozs7Ozs7Ozs7b0JBSXJCLENBQUNiLEtBQUtLLE1BQU0sR0FBRyxtQkFBSyw4REFBQ1M7a0NBQUU7Ozs7OztvQkFDdkIsQ0FBQ2QsS0FBS0ssTUFBTSxHQUFHLG1CQUNkLDhEQUFDVTs7MENBQ0MsOERBQUNBOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNEOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmLENBQUM7QUFFRCxNQUFNRSxTQUFTbEIseURBQVlBLENBQUM7SUFDMUJtQixXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxRQUFRLEtBQUs7QUFDZjtBQUVPLGVBQWVDLGlCQUFpQjtJQUNyQyxNQUFNckIsT0FBTyxNQUFNZ0IsT0FBT00sS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFFbkQsT0FBTztRQUNMQyxPQUFPO1lBQ0x2QjtRQUNGO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tc2FuaXR5LW5leHRqcy1zdGFydGVyLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IHBldHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT5TYW5pdHkgKyBOZXh0LmpzPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMj5QZXRzPC9oMj5cclxuICAgICAgICB7cGV0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3BldHMubWFwKChwZXQpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwZXQuX2lkfT57cGV0Py5uYW1lfSBnZW5kZXI6IHtwZXQ/LmdlbmRlcn0gd2VpZ2h0OntwZXQ/LndlaWdodH08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXBldHMubGVuZ3RoID4gMCAmJiA8cD5ObyBwZXRzIHRvIHNob3c8L3A+fVxyXG4gICAgICAgIHshcGV0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+wq9cXF8o44OEKV8vwq88L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91ciBkYXRhIHdpbGwgc2hvdyB1cCBoZXJlIHdoZW4geW91J3ZlIGNvbmZpZ3VyZWQgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgIGNvcnJlY3RseVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCIxc3VpcmNteFwiLFxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gIGFwaVZlcnNpb246IFwiMjAyMy0wMi0xNlwiLFxyXG4gIHVzZUNkbjogZmFsc2VcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcGV0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBldFwiXWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcGV0c1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIkluZGV4UGFnZSIsInBldHMiLCJoZWFkZXIiLCJoMSIsIm1haW4iLCJoMiIsImxlbmd0aCIsInVsIiwibWFwIiwicGV0IiwibGkiLCJuYW1lIiwiZ2VuZGVyIiwid2VpZ2h0IiwiX2lkIiwicCIsImRpdiIsImNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();