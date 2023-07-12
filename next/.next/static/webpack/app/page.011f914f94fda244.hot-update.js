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

/***/ "(app-client)/./app/src/components/main/filters/filters.tsx":
/*!*****************************************************!*\
  !*** ./app/src/components/main/filters/filters.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _duties_filter_duties_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duties-filter/duties-filter */ \"(app-client)/./app/src/components/main/filters/duties-filter/duties-filter.tsx\");\n/* harmony import */ var _data_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/mocks */ \"(app-client)/./app/src/data/mocks.ts\");\n/* harmony import */ var _expansion_filter_expansion_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expansion-filter/expansion-filter */ \"(app-client)/./app/src/components/main/filters/expansion-filter/expansion-filter.tsx\");\n/* harmony import */ var _sort_filter_sort_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-filter/sort-filter */ \"(app-client)/./app/src/components/main/filters/sort-filter/sort-filter.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _reset_filter_reset_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-filter/reset-filter */ \"(app-client)/./app/src/components/main/filters/reset-filter/reset-filter.tsx\");\n/* harmony import */ var _search_filter_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-filter/search-filter */ \"(app-client)/./app/src/components/main/filters/search-filter/search-filter.tsx\");\n/* harmony import */ var _app_src_components_main_filters_filter_type_filter_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/src/components/main/filters/filter-type/filter-type */ \"(app-client)/./app/src/components/main/filters/filter-type/filter-type.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"(app-client)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Filters = ()=>{\n    _s();\n    const filterType = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.filter).filter.type;\n    const [dutiesFilterData, setDutiesFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(_data_mocks__WEBPACK_IMPORTED_MODULE_2__.DutiesFilterData.duties);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        switch(filterType){\n            case \"Duties\":\n                setDutiesFilterData(_data_mocks__WEBPACK_IMPORTED_MODULE_2__.DutiesFilterData.duties);\n                break;\n            case \"Quests\":\n                setDutiesFilterData(_data_mocks__WEBPACK_IMPORTED_MODULE_2__.DutiesFilterData.quests);\n        }\n    }, [\n        filterType\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        container: true,\n        sx: {\n            justifyContent: \"space-around\",\n            alignItems: \"center\",\n            paddingTop: \"0px\",\n            position: \"sticky\",\n            top: \"10px\",\n            background: \"black\",\n            boxShadow: \"0 5px 10px 20px black\",\n            zIndex: \"1\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_src_components_main_filters_filter_type_filter_type__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_duties_filter_duties_filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                dutiesFilter: dutiesFilterData\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_expansion_filter_expansion_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                expansionFilter: _data_mocks__WEBPACK_IMPORTED_MODULE_2__.ExpansionFilterData\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reset_filter_reset_filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            filterType === \"Duties\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sort_filter_sort_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sortFilter: _data_mocks__WEBPACK_IMPORTED_MODULE_2__.SortFilterData\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search_filter_search_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/filters.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Filters, \"cP1cEurtcxlUlmJKOVYv6o35eTg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n_c = Filters;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filters);\nvar _c;\n$RefreshReg$(_c, \"Filters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9maWx0ZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDaUM7QUFDeEI7QUFDZjtBQUNoQjtBQUNtQjtBQUNHO0FBQzBCO0FBQzNDO0FBQ0U7QUFFMUMsTUFBTWEsVUFBVTs7SUFDWixNQUFNQyxhQUFhSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFlQSxNQUFNQyxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtJQUN4RSxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDWCx5REFBZ0JBLENBQUNtQixNQUFNO0lBRWhGVCxnREFBU0EsQ0FBQztRQUNOLE9BQVFHO1lBQ0osS0FBSztnQkFDREssb0JBQW9CbEIseURBQWdCQSxDQUFDbUIsTUFBTTtnQkFDM0M7WUFDSixLQUFLO2dCQUNERCxvQkFBb0JsQix5REFBZ0JBLENBQUNvQixNQUFNO1FBQ25EO0lBQ0osR0FBRztRQUFDUDtLQUFXO0lBRWYscUJBQ0ksOERBQUNSLHNEQUFJQTtRQUFDZ0IsU0FBUztRQUFDQyxJQUFJO1lBQ2hCQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxXQUFXO1lBQ1hDLFFBQVE7UUFDWjs7MEJBQ0ksOERBQUN0QixnR0FBVUE7Ozs7OzBCQUNYLDhEQUFDVCxvRUFBWUE7Z0JBQUNnQyxjQUFjZDs7Ozs7OzBCQUM1Qiw4REFBQ2QsMEVBQWVBO2dCQUFDNkIsaUJBQWlCL0IsNERBQW1CQTs7Ozs7OzBCQUNyRCw4REFBQ0ssa0VBQVdBOzs7OztZQUNYTyxlQUFlLHlCQUNaLDhEQUFDVCxnRUFBVUE7Z0JBQUM2QixZQUFZL0IsdURBQWNBOzs7Ozs0QkFDdEM7MEJBQ0osOERBQUNLLG9FQUFZQTs7Ozs7Ozs7Ozs7QUFHekI7R0FuQ01LOztRQUNpQkgsb0RBQVdBOzs7S0FENUJHO0FBcUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zcmMvY29tcG9uZW50cy9tYWluL2ZpbHRlcnMvZmlsdGVycy50c3g/MTlhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHV0aWVzRmlsdGVyIGZyb20gXCIuL2R1dGllcy1maWx0ZXIvZHV0aWVzLWZpbHRlclwiO1xuaW1wb3J0IHtEdXRpZXNGaWx0ZXJEYXRhLCBFeHBhbnNpb25GaWx0ZXJEYXRhLCBTb3J0RmlsdGVyRGF0YX0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbW9ja3NcIjtcbmltcG9ydCBFeHBhbnNpb25GaWx0ZXIgZnJvbSBcIi4vZXhwYW5zaW9uLWZpbHRlci9leHBhbnNpb24tZmlsdGVyXCI7XG5pbXBvcnQgU29ydEZpbHRlciBmcm9tIFwiLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlclwiO1xuaW1wb3J0IHtHcmlkfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlc2V0RmlsdGVyIGZyb20gXCIuL3Jlc2V0LWZpbHRlci9yZXNldC1maWx0ZXJcIjtcbmltcG9ydCBTZWFyY2hGaWx0ZXIgZnJvbSBcIi4vc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyXCI7XG5pbXBvcnQgRmlsdGVyVHlwZSBmcm9tIFwiQC9hcHAvc3JjL2NvbXBvbmVudHMvbWFpbi9maWx0ZXJzL2ZpbHRlci10eXBlL2ZpbHRlci10eXBlXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZpbHRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5maWx0ZXIpLmZpbHRlci50eXBlO1xuICAgIGNvbnN0IFtkdXRpZXNGaWx0ZXJEYXRhLCBzZXREdXRpZXNGaWx0ZXJEYXRhXSA9IHVzZVN0YXRlKER1dGllc0ZpbHRlckRhdGEuZHV0aWVzKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnRHV0aWVzJzpcbiAgICAgICAgICAgICAgICBzZXREdXRpZXNGaWx0ZXJEYXRhKER1dGllc0ZpbHRlckRhdGEuZHV0aWVzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1F1ZXN0cyc6XG4gICAgICAgICAgICAgICAgc2V0RHV0aWVzRmlsdGVyRGF0YShEdXRpZXNGaWx0ZXJEYXRhLnF1ZXN0cyk7XG4gICAgICAgIH1cbiAgICB9LCBbZmlsdGVyVHlwZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgICAgICAgdG9wOiAnMTBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCA1cHggMTBweCAyMHB4IGJsYWNrJyxcbiAgICAgICAgICAgIHpJbmRleDogJzEnXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEZpbHRlclR5cGUgLz5cbiAgICAgICAgICAgIDxEdXRpZXNGaWx0ZXIgZHV0aWVzRmlsdGVyPXtkdXRpZXNGaWx0ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPEV4cGFuc2lvbkZpbHRlciBleHBhbnNpb25GaWx0ZXI9e0V4cGFuc2lvbkZpbHRlckRhdGF9IC8+XG4gICAgICAgICAgICA8UmVzZXRGaWx0ZXIgLz5cbiAgICAgICAgICAgIHtmaWx0ZXJUeXBlID09PSAnRHV0aWVzJyA/IChcbiAgICAgICAgICAgICAgICA8U29ydEZpbHRlciBzb3J0RmlsdGVyPXtTb3J0RmlsdGVyRGF0YX0gLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPFNlYXJjaEZpbHRlciAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzOyJdLCJuYW1lcyI6WyJEdXRpZXNGaWx0ZXIiLCJEdXRpZXNGaWx0ZXJEYXRhIiwiRXhwYW5zaW9uRmlsdGVyRGF0YSIsIlNvcnRGaWx0ZXJEYXRhIiwiRXhwYW5zaW9uRmlsdGVyIiwiU29ydEZpbHRlciIsIkdyaWQiLCJSZXNldEZpbHRlciIsIlNlYXJjaEZpbHRlciIsIkZpbHRlclR5cGUiLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlsdGVycyIsImZpbHRlclR5cGUiLCJzdGF0ZSIsImZpbHRlciIsInR5cGUiLCJkdXRpZXNGaWx0ZXJEYXRhIiwic2V0RHV0aWVzRmlsdGVyRGF0YSIsImR1dGllcyIsInF1ZXN0cyIsImNvbnRhaW5lciIsInN4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwidG9wIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInpJbmRleCIsImR1dGllc0ZpbHRlciIsImV4cGFuc2lvbkZpbHRlciIsInNvcnRGaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/main/filters/filters.tsx\n"));

/***/ })

});