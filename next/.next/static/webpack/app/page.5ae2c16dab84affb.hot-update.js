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

/***/ "(app-client)/./app/src/components/main/filters/filter-type/filter-type.tsx":
/*!*********************************************************************!*\
  !*** ./app/src/components/main/filters/filter-type/filter-type.tsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/styles/components/main/filters/filters.module.scss */ \"(app-client)/./app/styles/components/main/filters/filters.module.scss\");\n/* harmony import */ var _app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-client)/./node_modules/react-router-dom/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst FilterType = ()=>{\n    _s();\n    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const [filterType, setFilterType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchParams.get(\"type\") || \"Duties\");\n    const handleChange = (filterType)=>{\n        setFilterType(filterType);\n        searchParams.forEach((param)=>{\n            searchParams.delete(param);\n        });\n        searchParams.set(\"type\", filterType);\n        setSearchParams(searchParams);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: ()=>handleChange(\"Duties\"),\n                checked: filterType === \"Duties\",\n                id: \"filterTypeDuties\",\n                className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeRadio),\n                name: \"filterType\",\n                type: \"radio\"\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"filterTypeDuties\",\n                className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeLabel),\n                children: \"Duties\"\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeDivider)\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: ()=>handleChange(\"Quests\"),\n                checked: filterType === \"Quests\",\n                id: \"filterTypeQuests\",\n                className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeRadio),\n                name: \"filterType\",\n                type: \"radio\"\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"filterTypeQuests\",\n                className: (_app_styles_components_main_filters_filters_module_scss__WEBPACK_IMPORTED_MODULE_3___default().filtersTypeLabel),\n                children: \"Quests\"\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filter-type/filter-type.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FilterType, \"iGJnALpmaw4CznYxFOgoeoHAtaY=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FilterType;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterType);\nvar _c;\n$RefreshReg$(_c, \"FilterType\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9maWx0ZXItdHlwZS9maWx0ZXItdHlwZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThFO0FBQy9DO0FBQ2tCO0FBRWpELE1BQU1HLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsaUVBQWVBO0lBQ3ZELE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQ0csYUFBYUksR0FBRyxDQUFDLFdBQVc7SUFFekUsTUFBTUMsZUFBZSxDQUFDSDtRQUNsQkMsY0FBY0Q7UUFDZEYsYUFBYU0sT0FBTyxDQUFDLENBQUNDO1lBQ2xCUCxhQUFhUSxNQUFNLENBQUNEO1FBQ3hCO1FBQ0FQLGFBQWFTLEdBQUcsQ0FBQyxRQUFRUDtRQUN6QkQsZ0JBQWdCRDtJQUNwQjtJQUVBLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXZixtSEFBeUI7OzBCQUNyQyw4REFBQ2lCO2dCQUFNQyxVQUFVLElBQU1ULGFBQWE7Z0JBQVdVLFNBQVNiLGVBQWU7Z0JBQVVjLElBQUc7Z0JBQW1CTCxXQUFXZixpSEFBdUI7Z0JBQUVzQixNQUFLO2dCQUFhQyxNQUFLOzs7Ozs7MEJBQ2xLLDhEQUFDQztnQkFBTUMsU0FBUTtnQkFBbUJWLFdBQVdmLGlIQUF1QjswQkFBRTs7Ozs7OzBCQUV0RSw4REFBQzJCO2dCQUFHWixXQUFXZixtSEFBeUI7Ozs7OzswQkFFeEMsOERBQUNpQjtnQkFBTUMsVUFBVSxJQUFNVCxhQUFhO2dCQUFXVSxTQUFTYixlQUFlO2dCQUFVYyxJQUFHO2dCQUFtQkwsV0FBV2YsaUhBQXVCO2dCQUFFc0IsTUFBSztnQkFBYUMsTUFBSzs7Ozs7OzBCQUNsSyw4REFBQ0M7Z0JBQU1DLFNBQVE7Z0JBQW1CVixXQUFXZixpSEFBdUI7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdsRjtHQXhCTUc7O1FBQ3NDRCw2REFBZUE7OztLQURyREM7QUEwQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9maWx0ZXItdHlwZS9maWx0ZXItdHlwZS50c3g/Njk5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL2FwcC9zdHlsZXMvY29tcG9uZW50cy9tYWluL2ZpbHRlcnMvZmlsdGVycy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVNlYXJjaFBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgRmlsdGVyVHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gICAgY29uc3QgW2ZpbHRlclR5cGUsIHNldEZpbHRlclR5cGVdID0gdXNlU3RhdGUoc2VhcmNoUGFyYW1zLmdldCgndHlwZScpIHx8ICdEdXRpZXMnKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChmaWx0ZXJUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0RmlsdGVyVHlwZShmaWx0ZXJUeXBlKTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3R5cGUnLCBmaWx0ZXJUeXBlKTtcbiAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJzVHlwZVdyYXBwZXJ9PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoJ0R1dGllcycpfSBjaGVja2VkPXtmaWx0ZXJUeXBlID09PSAnRHV0aWVzJ30gaWQ9XCJmaWx0ZXJUeXBlRHV0aWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyc1R5cGVSYWRpb30gbmFtZT1cImZpbHRlclR5cGVcIiB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWx0ZXJUeXBlRHV0aWVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyc1R5cGVMYWJlbH0+RHV0aWVzPC9sYWJlbD5cblxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcnNUeXBlRGl2aWRlcn0gLz5cblxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoJ1F1ZXN0cycpfSBjaGVja2VkPXtmaWx0ZXJUeXBlID09PSAnUXVlc3RzJ30gaWQ9XCJmaWx0ZXJUeXBlUXVlc3RzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyc1R5cGVSYWRpb30gbmFtZT1cImZpbHRlclR5cGVcIiB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWx0ZXJUeXBlUXVlc3RzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyc1R5cGVMYWJlbH0+UXVlc3RzPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJUeXBlOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsIkZpbHRlclR5cGUiLCJzZWFyY2hQYXJhbXMiLCJzZXRTZWFyY2hQYXJhbXMiLCJmaWx0ZXJUeXBlIiwic2V0RmlsdGVyVHlwZSIsImdldCIsImhhbmRsZUNoYW5nZSIsImZvckVhY2giLCJwYXJhbSIsImRlbGV0ZSIsInNldCIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlcnNUeXBlV3JhcHBlciIsImlucHV0Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaWQiLCJmaWx0ZXJzVHlwZVJhZGlvIiwibmFtZSIsInR5cGUiLCJsYWJlbCIsImh0bWxGb3IiLCJmaWx0ZXJzVHlwZUxhYmVsIiwiaHIiLCJmaWx0ZXJzVHlwZURpdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/main/filters/filter-type/filter-type.tsx\n"));

/***/ })

});