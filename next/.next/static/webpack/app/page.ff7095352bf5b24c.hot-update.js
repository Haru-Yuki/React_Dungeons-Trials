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

/***/ "(app-client)/./app/src/components/main/filters/expansion-filter/expansion-filter.tsx":
/*!*******************************************************************************!*\
  !*** ./app/src/components/main/filters/expansion-filter/expansion-filter.tsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Tabs/Tabs.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Tab/Tab.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-client)/./node_modules/react-router-dom/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ExpansionFilter = (props)=>{\n    _s();\n    const { expansionFilter } = props;\n    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const typeQuery = searchParams.get(\"type\");\n    const expansionQuery = typeQuery === \"Duties\" ? searchParams.get(\"expansion\") : searchParams.get(\"quest\");\n    console.log(expansionFilter);\n    const isDutySelected = !!searchParams.get(\"duty\");\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expansionQuery || false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleExpansionFilter(expansionQuery);\n    }, [\n        expansionQuery\n    ]);\n    const handleChange = (event, newValue)=>{\n        handleExpansionFilter(newValue);\n    };\n    const handleExpansionFilter = (value)=>{\n        setValue(value || false);\n        if (value) {\n            switch(typeQuery){\n                case \"Duties\":\n                    searchParams.set(\"expansion\", value);\n                    setSearchParams(searchParams);\n                    break;\n                case \"Quests\":\n                    searchParams.set(\"quest\", value);\n                    setSearchParams(searchParams);\n                    break;\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            maxWidth: \"calc(100vw - 650px)\",\n            color: \"white\"\n        },\n        value: value,\n        onChange: handleChange,\n        textColor: \"primary\",\n        indicatorColor: \"primary\",\n        variant: \"scrollable\",\n        scrollButtons: \"auto\",\n        children: [\n            expansionFilter.map((filter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    disabled: !isDutySelected,\n                    value: filter.value,\n                    label: filter.filterName,\n                    sx: {\n                        color: \"text.primary\"\n                    }\n                }, filter.key, false, {\n                    fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/expansion-filter/expansion-filter.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, undefined)),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/expansion-filter/expansion-filter.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ExpansionFilter, \"5SIKZuzCalSJuFf6xTD+VWpfKcI=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = ExpansionFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpansionFilter);\nvar _c;\n$RefreshReg$(_c, \"ExpansionFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9leHBhbnNpb24tZmlsdGVyL2V4cGFuc2lvbi1maWx0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNUO0FBRVM7QUFFakQsTUFBTU0sa0JBQWtCLENBQUNDOztJQUNyQixNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHRDtJQUU1QixNQUFNLENBQUNFLGNBQWNDLGdCQUFnQixHQUFHTCxpRUFBZUE7SUFDdkQsTUFBTU0sWUFBWUYsYUFBYUcsR0FBRyxDQUFDO0lBQ25DLE1BQU1DLGlCQUFpQkYsY0FBYyxXQUFXRixhQUFhRyxHQUFHLENBQUMsZUFBZUgsYUFBYUcsR0FBRyxDQUFDO0lBQ2pHRSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osTUFBTVEsaUJBQWlCLENBQUMsQ0FBQ1AsYUFBYUcsR0FBRyxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQUNXLGtCQUFrQjtJQUVyRFosZ0RBQVNBLENBQUM7UUFDTmtCLHNCQUFzQk47SUFDMUIsR0FBRztRQUFDQTtLQUFlO0lBRW5CLE1BQU1PLGVBQWUsQ0FBQ0MsT0FBNkJDO1FBQy9DSCxzQkFBc0JHO0lBQzFCO0lBRUEsTUFBTUgsd0JBQXdCLENBQUNGO1FBQzNCQyxTQUFTRCxTQUFTO1FBRWxCLElBQUlBLE9BQU87WUFDUCxPQUFRTjtnQkFDSixLQUFLO29CQUNERixhQUFhYyxHQUFHLENBQUMsYUFBYU47b0JBQzlCUCxnQkFBZ0JEO29CQUNoQjtnQkFDSixLQUFLO29CQUNEQSxhQUFhYyxHQUFHLENBQUMsU0FBU047b0JBQzFCUCxnQkFBZ0JEO29CQUNoQjtZQUNSO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTCxxREFBSUE7UUFDRG9CLElBQU07WUFDRkMsVUFBVTtZQUNWQyxPQUFPO1FBQ1g7UUFDQVQsT0FBT0E7UUFDUFUsVUFBVVA7UUFDVlEsV0FBVTtRQUNWQyxnQkFBZTtRQUNmQyxTQUFRO1FBQ1JDLGVBQWM7O1lBRWpCdkIsZ0JBQWdCd0IsR0FBRyxDQUFDLENBQUNDLHVCQUNsQiw4REFBQzlCLHFEQUFHQTtvQkFBQytCLFVBQVUsQ0FBQ2xCO29CQUFpQ0MsT0FBT2dCLE9BQU9oQixLQUFLO29CQUFFa0IsT0FBT0YsT0FBT0csVUFBVTtvQkFBRVosSUFBSTt3QkFDaEdFLE9BQU87b0JBQ1g7bUJBRnFDTyxPQUFPSSxHQUFHOzs7OztZQUdqRDs7Ozs7OztBQUdWO0dBdkRNL0I7O1FBR3NDRCw2REFBZUE7OztLQUhyREM7QUF5RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9leHBhbnNpb24tZmlsdGVyL2V4cGFuc2lvbi1maWx0ZXIudHN4P2FiZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RhYiwgVGFic30gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7RXhwYW5zaW9uRmlsdGVyTW9kZWx9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvZmlsdGVycy5tb2RlbFwiO1xuaW1wb3J0IHt1c2VTZWFyY2hQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEV4cGFuc2lvbkZpbHRlciA9IChwcm9wczoge2V4cGFuc2lvbkZpbHRlcjogQXJyYXk8RXhwYW5zaW9uRmlsdGVyTW9kZWw+fSkgPT4ge1xuICAgIGNvbnN0IHsgZXhwYW5zaW9uRmlsdGVyIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgICBjb25zdCB0eXBlUXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlJyk7XG4gICAgY29uc3QgZXhwYW5zaW9uUXVlcnkgPSB0eXBlUXVlcnkgPT09ICdEdXRpZXMnID8gc2VhcmNoUGFyYW1zLmdldCgnZXhwYW5zaW9uJykgOiBzZWFyY2hQYXJhbXMuZ2V0KCdxdWVzdCcpO1xuICAgIGNvbnNvbGUubG9nKGV4cGFuc2lvbkZpbHRlcik7XG4gICAgY29uc3QgaXNEdXR5U2VsZWN0ZWQgPSAhIXNlYXJjaFBhcmFtcy5nZXQoJ2R1dHknKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGV4cGFuc2lvblF1ZXJ5IHx8IGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGhhbmRsZUV4cGFuc2lvbkZpbHRlcihleHBhbnNpb25RdWVyeSk7XG4gICAgfSwgW2V4cGFuc2lvblF1ZXJ5XSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGhhbmRsZUV4cGFuc2lvbkZpbHRlcihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXhwYW5zaW9uRmlsdGVyID0gKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKHZhbHVlIHx8IGZhbHNlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZVF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRHV0aWVzJzpcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLnNldCgnZXhwYW5zaW9uJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUXVlc3RzJzpcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLnNldCgncXVlc3QnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJzXG4gICAgICAgICAgICBzeCA9IHt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMHZ3IC0gNjUwcHgpJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXG4gICAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAge2V4cGFuc2lvbkZpbHRlci5tYXAoKGZpbHRlcikgPT5cbiAgICAgICAgICAgIDxUYWIgZGlzYWJsZWQ9eyFpc0R1dHlTZWxlY3RlZH0ga2V5PXtmaWx0ZXIua2V5fSB2YWx1ZT17ZmlsdGVyLnZhbHVlfSBsYWJlbD17ZmlsdGVyLmZpbHRlck5hbWV9IHN4PXt7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd0ZXh0LnByaW1hcnknXG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICApfTtcbiAgICAgICAgPC9UYWJzPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5zaW9uRmlsdGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFiIiwiVGFicyIsInVzZVNlYXJjaFBhcmFtcyIsIkV4cGFuc2lvbkZpbHRlciIsInByb3BzIiwiZXhwYW5zaW9uRmlsdGVyIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwidHlwZVF1ZXJ5IiwiZ2V0IiwiZXhwYW5zaW9uUXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaXNEdXR5U2VsZWN0ZWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlRXhwYW5zaW9uRmlsdGVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInNldCIsInN4IiwibWF4V2lkdGgiLCJjb2xvciIsIm9uQ2hhbmdlIiwidGV4dENvbG9yIiwiaW5kaWNhdG9yQ29sb3IiLCJ2YXJpYW50Iiwic2Nyb2xsQnV0dG9ucyIsIm1hcCIsImZpbHRlciIsImRpc2FibGVkIiwibGFiZWwiLCJmaWx0ZXJOYW1lIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/main/filters/expansion-filter/expansion-filter.tsx\n"));

/***/ })

});