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

/***/ "(app-client)/./app/src/components/main/filters/search-filter/search-filter.tsx":
/*!*************************************************************************!*\
  !*** ./app/src/components/main/filters/search-filter/search-filter.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/InputAdornment/InputAdornment.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Search */ \"(app-client)/./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-client)/./node_modules/react-router-dom/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchFilter = ()=>{\n    _s();\n    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const searchQuery = searchParams.get(\"name\");\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchQuery || \"\");\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const isFiltersSelected = searchParams.get(\"duty\") && searchParams.get(\"expansion\") && searchParams.get(\"sort\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleSearchFilter(value);\n    }, [\n        value\n    ]);\n    const handleChange = (event)=>{\n        handleSearchFilter(event.target.value);\n    };\n    const handleSearchFilter = (value)=>{\n        setValue(value);\n        clearTimeout(timer);\n        const timerId = setTimeout(()=>{\n            if (value) {\n                searchParams.set(\"name\", value.trim());\n            } else {\n                searchParams.delete(\"name\");\n            }\n            setSearchParams(searchParams);\n        }, 1000);\n        // @ts-ignore\n        setTimer(timerId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        sx: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            marginTop: \"10px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            disabled: !isFiltersSelected,\n            id: \"outlined-controlled\",\n            label: \"Enter duty name\",\n            value: value,\n            onChange: handleChange,\n            InputProps: {\n                endAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    position: \"end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            },\n            sx: {\n                width: \"30%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/search-filter/search-filter.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/search-filter/search-filter.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchFilter, \"uVffWPmfjNp2cwiZ9TlpQa0/h4Q=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = SearchFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchFilter);\nvar _c;\n$RefreshReg$(_c, \"SearchFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9zZWFyY2gtZmlsdGVyL3NlYXJjaC1maWx0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBQ1A7QUFDSDtBQUNIO0FBRWpELE1BQU1PLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILGlFQUFlQTtJQUN2RCxNQUFNSSxjQUFjRixhQUFhRyxHQUFHLENBQUM7SUFDckMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDTSxlQUFlO0lBQ2xELE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNWSxvQkFBb0JSLGFBQWFHLEdBQUcsQ0FBQyxXQUFXSCxhQUFhRyxHQUFHLENBQUMsZ0JBQWdCSCxhQUFhRyxHQUFHLENBQUM7SUFFeEdSLGdEQUFTQSxDQUFDO1FBQ05jLG1CQUFtQkw7SUFDdkIsR0FBRztRQUFDQTtLQUFNO0lBRVYsTUFBTU0sZUFBZSxDQUFDQztRQUNsQkYsbUJBQW1CRSxNQUFNQyxNQUFNLENBQUNSLEtBQUs7SUFDekM7SUFFQSxNQUFNSyxxQkFBcUIsQ0FBQ0w7UUFDeEJDLFNBQVNEO1FBRVRTLGFBQWFQO1FBRWIsTUFBTVEsVUFBVUMsV0FBVztZQUN2QixJQUFJWCxPQUFPO2dCQUNQSixhQUFhZ0IsR0FBRyxDQUFDLFFBQVFaLE1BQU1hLElBQUk7WUFDdkMsT0FBTztnQkFDSGpCLGFBQWFrQixNQUFNLENBQUM7WUFDeEI7WUFDQWpCLGdCQUFnQkQ7UUFDcEIsR0FBRztRQUVILGFBQWE7UUFDYk8sU0FBU087SUFDYjtJQUVBLHFCQUNJLDhEQUFDdEIscURBQUlBO1FBQUMyQixTQUFTO1FBQUNDLElBQUk7WUFBQ0MsT0FBTztZQUFRQyxnQkFBZ0I7WUFBVUMsV0FBVztRQUFNO2tCQUMzRSw0RUFBQzdCLHFEQUFTQTtZQUNOOEIsVUFBVSxDQUFDaEI7WUFDWGlCLElBQUc7WUFDSEMsT0FBTTtZQUNOdEIsT0FBT0E7WUFDUHVCLFVBQVVqQjtZQUNWa0IsWUFBWTtnQkFDUkMsNEJBQWMsOERBQUNwQyxxREFBY0E7b0JBQUNxQyxVQUFTOzhCQUFNLDRFQUFDakMsa0VBQVVBOztZQUM1RDtZQUNBdUIsSUFBSTtnQkFBQ0MsT0FBTztZQUFLOzs7Ozs7Ozs7OztBQUlqQztHQWpETXRCOztRQUNzQ0QsNkRBQWVBOzs7S0FEckRDO0FBbUROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zcmMvY29tcG9uZW50cy9tYWluL2ZpbHRlcnMvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLnRzeD8zZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JpZCwgSW5wdXRBZG9ybm1lbnQsIFRleHRGaWVsZH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7Q2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xuaW1wb3J0IHt1c2VTZWFyY2hQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IFNlYXJjaEZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCduYW1lJyk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShzZWFyY2hRdWVyeSB8fCAnJyk7XG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IGlzRmlsdGVyc1NlbGVjdGVkID0gc2VhcmNoUGFyYW1zLmdldCgnZHV0eScpICYmIHNlYXJjaFBhcmFtcy5nZXQoJ2V4cGFuc2lvbicpICYmIHNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGhhbmRsZVNlYXJjaEZpbHRlcih2YWx1ZSk7XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGhhbmRsZVNlYXJjaEZpbHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaEZpbHRlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKHZhbHVlKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5zZXQoJ25hbWUnLCB2YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKCduYW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzZXRUaW1lcih0aW1lcklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3t3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogJzEwcHgnfX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0ZpbHRlcnNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNvbnRyb2xsZWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgZHV0eSBuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+PFNlYXJjaEljb24gLz48L0lucHV0QWRvcm5tZW50PixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN4PXt7d2lkdGg6ICczMCUnfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjsiXSwibmFtZXMiOlsiR3JpZCIsIklucHV0QWRvcm5tZW50IiwiVGV4dEZpZWxkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZWFyY2hJY29uIiwidXNlU2VhcmNoUGFyYW1zIiwiU2VhcmNoRmlsdGVyIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwic2VhcmNoUXVlcnkiLCJnZXQiLCJ2YWx1ZSIsInNldFZhbHVlIiwidGltZXIiLCJzZXRUaW1lciIsImlzRmlsdGVyc1NlbGVjdGVkIiwiaGFuZGxlU2VhcmNoRmlsdGVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lcklkIiwic2V0VGltZW91dCIsInNldCIsInRyaW0iLCJkZWxldGUiLCJjb250YWluZXIiLCJzeCIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJkaXNhYmxlZCIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsIklucHV0UHJvcHMiLCJlbmRBZG9ybm1lbnQiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/main/filters/search-filter/search-filter.tsx\n"));

/***/ })

});