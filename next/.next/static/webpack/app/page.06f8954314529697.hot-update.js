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

/***/ "(app-client)/./app/src/api/interceptors/response.interceptor.ts":
/*!**********************************************************!*\
  !*** ./app/src/api/interceptors/response.interceptor.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/store */ \"(app-client)/./app/src/redux/store.ts\");\n/* harmony import */ var _redux_reducers_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/reducers/toaster */ \"(app-client)/./app/src/redux/reducers/toaster.ts\");\n\n\n\nconst addAPIInterceptors = ()=>{\n    axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(undefined, (error)=>{\n        let errorMessage;\n        switch(error.response.status){\n            case 422:\n                errorMessage = \"Error \".concat(error.response.status, \": \").concat(error.response.data.message || error.message, \"\\n                Please check query params in url, there must be a typo in them\");\n        }\n        _redux_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch((0,_redux_reducers_toaster__WEBPACK_IMPORTED_MODULE_2__.setToaster)({\n            type: \"error\",\n            message: errorMessage\n        }));\n        return Promise.reject(error);\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (addAPIInterceptors);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9hcGkvaW50ZXJjZXB0b3JzL3Jlc3BvbnNlLmludGVyY2VwdG9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQ1k7QUFDa0I7QUFFeEQsTUFBTUcscUJBQXFCO0lBQ3ZCSCx5REFBa0IsQ0FBQ0ssUUFBUSxDQUFDQyxHQUFHLENBQUNDLFdBQVUsQ0FBQ0M7UUFDdkMsSUFBSUM7UUFFSixPQUFRRCxNQUFNSCxRQUFRLENBQUNLLE1BQU07WUFDekIsS0FBSztnQkFDREQsZUFBZSxTQUFtQ0QsT0FBMUJBLE1BQU1ILFFBQVEsQ0FBQ0ssTUFBTSxFQUFDLE1BQWlELE9BQTdDRixNQUFNSCxRQUFRLENBQUNNLElBQUksQ0FBQ0MsT0FBTyxJQUFJSixNQUFNSSxPQUFPLEVBQUM7UUFFdkc7UUFFQVgsb0RBQUtBLENBQUNZLFFBQVEsQ0FBQ1gsbUVBQVVBLENBQUM7WUFDdEJZLE1BQU07WUFDTkYsU0FBU0g7UUFDYjtRQUVBLE9BQU9NLFFBQVFDLE1BQU0sQ0FBQ1I7SUFDMUI7QUFDSjtBQUVBLCtEQUFlTCxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NyYy9hcGkvaW50ZXJjZXB0b3JzL3Jlc3BvbnNlLmludGVyY2VwdG9yLnRzPzA1MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7c2V0VG9hc3Rlcn0gZnJvbSBcIi4uLy4uL3JlZHV4L3JlZHVjZXJzL3RvYXN0ZXJcIjtcblxuY29uc3QgYWRkQVBJSW50ZXJjZXB0b3JzID0gKCkgPT4ge1xuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLChlcnJvcikgPT4ge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgJHtlcnJvci5yZXNwb25zZS5zdGF0dXN9OiAke2Vycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIFBsZWFzZSBjaGVjayBxdWVyeSBwYXJhbXMgaW4gdXJsLCB0aGVyZSBtdXN0IGJlIGEgdHlwbyBpbiB0aGVtYFxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0VG9hc3Rlcih7XG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRBUElJbnRlcmNlcHRvcnM7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJzdG9yZSIsInNldFRvYXN0ZXIiLCJhZGRBUElJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsInVuZGVmaW5lZCIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwic3RhdHVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsInR5cGUiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/src/api/interceptors/response.interceptor.ts\n"));

/***/ })

});