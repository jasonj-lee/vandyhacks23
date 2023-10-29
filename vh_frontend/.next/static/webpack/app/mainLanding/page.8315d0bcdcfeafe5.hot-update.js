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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ mainLand; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction mainLand() {\n    _s();\n    const [medInfo, setMedInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function allergySubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        fetch(\"http://localhost:8000/addAllergy\", {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                allergy: \"peanuts\"\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            alert(data.worked);\n        }).catch((err)=>console.error(err));\n    }\n    function conditionSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        fetch(\"http://localhost:8000/addCondition\", {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                allergy: formData\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            alert(data.worked);\n        }).catch((err)=>console.error(err));\n    }\n    function medSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        alert(formData);\n        fetch(\"http://localhost:8000/addMed\", {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                cond: formData\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            setMedInfo(data);\n        }).catch((err)=>console.error(err));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"allergies\",\n                onSubmit: allergySubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter an allergy: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"allergyField\",\n                        name: \"allergyField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"conditions\",\n                onSubmit: conditionSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter a medical condition: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"conditionField\",\n                        name: \"conditionField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"medicines\",\n                onSubmit: medSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Enter a drug: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"medField\",\n                        name: \"medField\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: medInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jaeho\\\\OneDrive\\\\Documents\\\\programming\\\\vandyhacks23\\\\vh_frontend\\\\app\\\\mainLanding\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(mainLand, \"EhI84McijouMQsRB5NPGNeW9bgQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYWluTGFuZGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFFbkMsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTSSxjQUFjQyxLQUFpQztRQUNwREEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7UUFDakRDLE1BQU0sb0NBQW9DO1lBQ3RDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBQ0MsU0FBUTtZQUFTO1FBQzNDLEdBQ0tDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDSEMsTUFBTUQsS0FBS0UsTUFBTTtRQUN6QixHQUFHQyxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDbEM7SUFFQSxTQUFTRyxnQkFBZ0J0QixLQUFpQztRQUN0REEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7UUFDakRDLE1BQU0sc0NBQXNDO1lBQ3hDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBQ0MsU0FBUVQ7WUFBUTtRQUMxQyxHQUNLVSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0hDLE1BQU1ELEtBQUtFLE1BQU07UUFDekIsR0FBR0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xDO0lBRUEsU0FBU0ksVUFBVXZCLEtBQWlDO1FBQ2hEQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUksYUFBYTtRQUNqRFksTUFBTWQ7UUFDTkcsTUFBTSxnQ0FBZ0M7WUFDbENDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFDYyxNQUFNdEI7WUFBUTtRQUN4QyxHQUNLVSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0hqQixXQUFXaUI7UUFDbkIsR0FBR0csS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xDO0lBRUEscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ0M7Z0JBQUtDLFdBQVU7Z0JBQVlDLFVBQVU3Qjs7a0NBQ2xDLDhEQUFDOEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLElBQUc7d0JBQWVDLE1BQUs7Ozs7OztrQ0FDMUMsOERBQUNDO3dCQUFPSCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDTDtnQkFBS0MsV0FBVTtnQkFBYUMsVUFBVU47O2tDQUNuQyw4REFBQ087a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLElBQUc7d0JBQWlCQyxNQUFLOzs7Ozs7a0NBQzVDLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0w7Z0JBQUtDLFdBQVU7Z0JBQVlDLFVBQVVMOztrQ0FDbEMsOERBQUNNO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFXQyxNQUFLOzs7Ozs7a0NBQ3RDLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0k7MEJBQ0l0Qzs7Ozs7Ozs7Ozs7O0FBSWpCO0dBaEZ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21haW5MYW5kaW5nL3BhZ2UudHN4P2E3ODciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluTGFuZCgpIHtcclxuICAgIGNvbnN0IFttZWRJbmZvLCBzZXRNZWRJbmZvXSA9IHVzZVN0YXRlKFwiXCIpOyBcclxuXHJcbiAgICBmdW5jdGlvbiBhbGxlcmd5U3VibWl0KGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkZEFsbGVyZ3lcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2FsbGVyZ3k6J3BlYW51dHMnfSkgXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLndvcmtlZCk7IFxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25kaXRpb25TdWJtaXQoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYWRkQ29uZGl0aW9uXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLCBcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHthbGxlcmd5OmZvcm1EYXRhfSkgIFxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS53b3JrZWQpOyBcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWVkU3VibWl0KGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTsgXHJcbiAgICAgICAgYWxlcnQoZm9ybURhdGEpOyBcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZGRNZWRcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2NvbmQ6IGZvcm1EYXRhfSkgXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZWRJbmZvKGRhdGEpOyAgXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFsbGVyZ2llc1wiIG9uU3VibWl0PXthbGxlcmd5U3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBhbiBhbGxlcmd5OiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhbGxlcmd5RmllbGRcIiBuYW1lPVwiYWxsZXJneUZpZWxkXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb25kaXRpb25zXCIgb25TdWJtaXQ9e2NvbmRpdGlvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW50ZXIgYSBtZWRpY2FsIGNvbmRpdGlvbjogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29uZGl0aW9uRmllbGRcIiBuYW1lPVwiY29uZGl0aW9uRmllbGRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lZGljaW5lc1wiIG9uU3VibWl0PXttZWRTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIGEgZHJ1ZzogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWVkRmllbGRcIiBuYW1lPVwibWVkRmllbGRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0PlxyXG4gICAgICAgICAgICAgICAge21lZEluZm99XHJcbiAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1haW5MYW5kIiwibWVkSW5mbyIsInNldE1lZEluZm8iLCJhbGxlcmd5U3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGxlcmd5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiYWxlcnQiLCJ3b3JrZWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNvbmRpdGlvblN1Ym1pdCIsIm1lZFN1Ym1pdCIsImNvbmQiLCJtYWluIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJidXR0b24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/mainLanding/page.tsx\n"));

/***/ })

});