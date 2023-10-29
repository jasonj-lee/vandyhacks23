"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/mainLanding/page",{

/***/ "(app-pages-browser)/./app/mainLanding/page.tsx":
/*!**********************************!*\
  !*** ./app/mainLanding/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ mainLand; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction mainLand() {\n    _s();\n    const [medInfo, setMedInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function allergySubmit(event) {\n        event.preventDefault();\n        const formData = event.target.elements.allergyField.value;\n        fetch(\"http://localhost:8000/addAllergy\", {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                allergy: \"peanuts\"\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            alert(data.worked);\n        }).catch((err)=>console.error(err));\n    }\n    function conditionSubmit(event) {\n        event.preventDefault();\n        const formData = event.target.elements.conditionField.value;\n        fetch(\"http://localhost:8000/addCondition\", {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                cond: formData\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            alert(data.worked);\n        }).catch((err)=>console.error(err));\n    }\n    function medSubmit(event) {\n        event.preventDefault();\n        const formData = event.target.elements.medField.value;\n        alert(formData);\n        fetch(\"http://localhost:8000/addMed\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                med: formData\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            setMedInfo(data);\n        }).catch((err)=>console.error(err));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"allergies\",\n                onSubmit: allergySubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter an allergy: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"allergyField\",\n                        name: \"allergyField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"conditions\",\n                onSubmit: conditionSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter a medical condition: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"conditionField\",\n                        name: \"conditionField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"medicines\",\n                onSubmit: medSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter a drug: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"medField\",\n                        name: \"medField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: medInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(mainLand, \"EhI84McijouMQsRB5NPGNeW9bgQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYWluTGFuZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHa0Q7QUFFbkMsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTSSxjQUFjQyxLQUFVO1FBQzdCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVdGLE1BQU1HLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLENBQUNDLEtBQUs7UUFDekRDLE1BQU0sb0NBQW9DO1lBQ3RDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBQ0MsU0FBUTtZQUFTO1FBQzNDLEdBQ0tDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDSEMsTUFBTUQsS0FBS0UsTUFBTTtRQUN6QixHQUFHQyxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDbEM7SUFFQSxTQUFTRyxnQkFBZ0J4QixLQUFVO1FBQy9CQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVdGLE1BQU1HLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDcUIsY0FBYyxDQUFDbkIsS0FBSztRQUMzREMsTUFBTSxzQ0FBc0M7WUFDeENDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFDYyxNQUFLeEI7WUFBUTtRQUN2QyxHQUNLWSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0hDLE1BQU1ELEtBQUtFLE1BQU07UUFDekIsR0FBR0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xDO0lBRUEsU0FBU00sVUFBVTNCLEtBQVU7UUFDekJBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBV0YsTUFBTUcsTUFBTSxDQUFDQyxRQUFRLENBQUN3QixRQUFRLENBQUN0QixLQUFLO1FBQ3JEWSxNQUFNaEI7UUFDTkssTUFBTSxnQ0FBZ0M7WUFDbENDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFDaUIsS0FBSzNCO1lBQVE7UUFDdkMsR0FDS1ksSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNIbkIsV0FBV21CO1FBQ25CLEdBQUdHLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0MsUUFBUUMsS0FBSyxDQUFDRjtJQUNsQztJQUVBLHFCQUNJLDhEQUFDUzs7MEJBQ0csOERBQUNDO2dCQUFLQyxXQUFVO2dCQUFZQyxVQUFVbEM7O2tDQUNsQyw4REFBQ21DO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFlQyxNQUFLOzs7Ozs7a0NBQzFDLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0w7Z0JBQUtDLFdBQVU7Z0JBQWFDLFVBQVVUOztrQ0FDbkMsOERBQUNVO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFpQkMsTUFBSzs7Ozs7O2tDQUM1Qyw4REFBQ0M7d0JBQU9ILE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFHMUIsOERBQUNMO2dCQUFLQyxXQUFVO2dCQUFZQyxVQUFVTjs7a0NBQ2xDLDhEQUFDTztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsSUFBRzt3QkFBV0MsTUFBSzs7Ozs7O2tDQUN0Qyw4REFBQ0M7d0JBQU9ILE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFHMUIsOERBQUNJOzBCQUNJM0M7Ozs7Ozs7Ozs7OztBQUlqQjtHQWhGd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tYWluTGFuZGluZy9wYWdlLnRzeD9hNzg3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgQW55TXhSZWNvcmQgfSBmcm9tIFwiZG5zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5MYW5kKCkge1xyXG4gICAgY29uc3QgW21lZEluZm8sIHNldE1lZEluZm9dID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cclxuICAgIGZ1bmN0aW9uIGFsbGVyZ3lTdWJtaXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cy5hbGxlcmd5RmllbGQudmFsdWU7IFxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkZEFsbGVyZ3lcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2FsbGVyZ3k6J3BlYW51dHMnfSkgXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLndvcmtlZCk7IFxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25kaXRpb25TdWJtaXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cy5jb25kaXRpb25GaWVsZC52YWx1ZTtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZGRDb25kaXRpb25cIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2NvbmQ6Zm9ybURhdGF9KSAgXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLndvcmtlZCk7IFxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZWRTdWJtaXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cy5tZWRGaWVsZC52YWx1ZTsgXHJcbiAgICAgICAgYWxlcnQoZm9ybURhdGEpOyBcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZGRNZWRcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVkOiBmb3JtRGF0YX0pIFxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVkSW5mbyhkYXRhKTsgIFxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhbGxlcmdpZXNcIiBvblN1Ym1pdD17YWxsZXJneVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW50ZXIgYW4gYWxsZXJneTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWxsZXJneUZpZWxkXCIgbmFtZT1cImFsbGVyZ3lGaWVsZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29uZGl0aW9uc1wiIG9uU3VibWl0PXtjb25kaXRpb25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIGEgbWVkaWNhbCBjb25kaXRpb246IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbmRpdGlvbkZpZWxkXCIgbmFtZT1cImNvbmRpdGlvbkZpZWxkXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZWRpY2luZXNcIiBvblN1Ym1pdD17bWVkU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBhIGRydWc6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1lZEZpZWxkXCIgbmFtZT1cIm1lZEZpZWxkXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8dGV4dD5cclxuICAgICAgICAgICAgICAgIHttZWRJbmZvfVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtYWluTGFuZCIsIm1lZEluZm8iLCJzZXRNZWRJbmZvIiwiYWxsZXJneVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsInRhcmdldCIsImVsZW1lbnRzIiwiYWxsZXJneUZpZWxkIiwidmFsdWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFsbGVyZ3kiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJhbGVydCIsIndvcmtlZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiY29uZGl0aW9uU3VibWl0IiwiY29uZGl0aW9uRmllbGQiLCJjb25kIiwibWVkU3VibWl0IiwibWVkRmllbGQiLCJtZWQiLCJtYWluIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJidXR0b24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/mainLanding/page.tsx\n"));

/***/ })

});