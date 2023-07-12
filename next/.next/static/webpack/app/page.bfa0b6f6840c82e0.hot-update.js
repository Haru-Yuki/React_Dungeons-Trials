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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/InputAdornment/InputAdornment.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Search */ \"(app-client)/./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-client)/./node_modules/react-router-dom/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchFilter = ()=>{\n    _s();\n    const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const searchQuery = searchParams.get(\"name\");\n    const typeQuery = searchParams.get(\"type\");\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchQuery || \"\");\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const isFiltersDutySelected = !!searchParams.get(\"duty\") && !!searchParams.get(\"expansion\") && !!searchParams.get(\"sort\");\n    const isFiltersQuestSelected = !!searchParams.get(\"duty\") && !!searchParams.get(\"quest\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(123);\n        handleSearchFilter(value);\n    }, [\n        value,\n        typeQuery\n    ]);\n    const handleChange = (event)=>{\n        handleSearchFilter(event.target.value);\n    };\n    const handleSearchFilter = (value)=>{\n        setValue(value);\n        clearTimeout(timer);\n        const timerId = setTimeout(()=>{\n            if (value) {\n                searchParams.set(\"name\", value.trim());\n            } else {\n                searchParams.delete(\"name\");\n            }\n            setSearchParams(searchParams);\n        }, 1000);\n        // @ts-ignore\n        setTimer(timerId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        container: true,\n        sx: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            marginTop: \"10px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            disabled: !isFiltersDutySelected && !isFiltersQuestSelected,\n            id: \"search\",\n            label: \"Enter duty name\",\n            value: value,\n            onChange: handleChange,\n            InputProps: {\n                endAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    position: \"end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            },\n            sx: {\n                width: \"25%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/search-filter/search-filter.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/main/filters/search-filter/search-filter.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchFilter, \"uVffWPmfjNp2cwiZ9TlpQa0/h4Q=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = SearchFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchFilter);\nvar _c;\n$RefreshReg$(_c, \"SearchFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL21haW4vZmlsdGVycy9zZWFyY2gtZmlsdGVyL3NlYXJjaC1maWx0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBQ1A7QUFDSDtBQUNIO0FBRWpELE1BQU1PLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILGlFQUFlQTtJQUN2RCxNQUFNSSxjQUFjRixhQUFhRyxHQUFHLENBQUM7SUFDckMsTUFBTUMsWUFBWUosYUFBYUcsR0FBRyxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQ00sZUFBZTtJQUNsRCxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsd0JBQXdCLENBQUMsQ0FBQ1QsYUFBYUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDSCxhQUFhRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0gsYUFBYUcsR0FBRyxDQUFDO0lBQ2xILE1BQU1PLHlCQUF5QixDQUFDLENBQUNWLGFBQWFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQ0gsYUFBYUcsR0FBRyxDQUFDO0lBRWhGUixnREFBU0EsQ0FBQztRQUNOZ0IsUUFBUUMsR0FBRyxDQUFDO1FBQ1pDLG1CQUFtQlI7SUFDdkIsR0FBRztRQUFDQTtRQUFPRDtLQUFVO0lBRXJCLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDbEJGLG1CQUFtQkUsTUFBTUMsTUFBTSxDQUFDWCxLQUFLO0lBQ3pDO0lBRUEsTUFBTVEscUJBQXFCLENBQUNSO1FBQ3hCQyxTQUFTRDtRQUVUWSxhQUFhVjtRQUViLE1BQU1XLFVBQVVDLFdBQVc7WUFDdkIsSUFBSWQsT0FBTztnQkFDUEwsYUFBYW9CLEdBQUcsQ0FBQyxRQUFRZixNQUFNZ0IsSUFBSTtZQUN2QyxPQUFPO2dCQUNIckIsYUFBYXNCLE1BQU0sQ0FBQztZQUN4QjtZQUNBckIsZ0JBQWdCRDtRQUNwQixHQUFHO1FBRUgsYUFBYTtRQUNiUSxTQUFTVTtJQUNiO0lBRUEscUJBQ0ksOERBQUMxQixxREFBSUE7UUFBQytCLFNBQVM7UUFBQ0MsSUFBSTtZQUFDQyxPQUFPO1lBQVFDLGdCQUFnQjtZQUFVQyxXQUFXO1FBQU07a0JBQzNFLDRFQUFDakMscURBQVNBO1lBQ05rQyxVQUFVLENBQUNuQix5QkFBeUIsQ0FBQ0M7WUFDckNtQixJQUFHO1lBQ0hDLE9BQU07WUFDTnpCLE9BQU9BO1lBQ1AwQixVQUFVakI7WUFDVmtCLFlBQVk7Z0JBQ1JDLDRCQUFjLDhEQUFDeEMscURBQWNBO29CQUFDeUMsVUFBUzs4QkFBTSw0RUFBQ3JDLGtFQUFVQTs7WUFDNUQ7WUFDQTJCLElBQUk7Z0JBQUNDLE9BQU87WUFBSzs7Ozs7Ozs7Ozs7QUFJakM7R0FwRE0xQjs7UUFDc0NELDZEQUFlQTs7O0tBRHJEQztBQXNETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3JjL2NvbXBvbmVudHMvbWFpbi9maWx0ZXJzL3NlYXJjaC1maWx0ZXIvc2VhcmNoLWZpbHRlci50c3g/M2UyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWQsIElucHV0QWRvcm5tZW50LCBUZXh0RmllbGR9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge0NoYW5nZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcbmltcG9ydCB7dXNlU2VhcmNoUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBTZWFyY2hGaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHR5cGVRdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHNlYXJjaFF1ZXJ5IHx8ICcnKTtcbiAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaXNGaWx0ZXJzRHV0eVNlbGVjdGVkID0gISFzZWFyY2hQYXJhbXMuZ2V0KCdkdXR5JykgJiYgISFzZWFyY2hQYXJhbXMuZ2V0KCdleHBhbnNpb24nKSAmJiAhIXNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKTtcbiAgICBjb25zdCBpc0ZpbHRlcnNRdWVzdFNlbGVjdGVkID0gISFzZWFyY2hQYXJhbXMuZ2V0KCdkdXR5JykgJiYgISFzZWFyY2hQYXJhbXMuZ2V0KCdxdWVzdCcpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coMTIzKTtcbiAgICAgICAgaGFuZGxlU2VhcmNoRmlsdGVyKHZhbHVlKTtcbiAgICB9LCBbdmFsdWUsIHR5cGVRdWVyeV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBoYW5kbGVTZWFyY2hGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2hGaWx0ZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KCduYW1lJywgdmFsdWUudHJpbSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcyk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2V0VGltZXIodGltZXJJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNGaWx0ZXJzRHV0eVNlbGVjdGVkICYmICFpc0ZpbHRlcnNRdWVzdFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIGR1dHkgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPjxTZWFyY2hJY29uIC8+PC9JbnB1dEFkb3JubWVudD4sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzeD17e3dpZHRoOiAnMjUlJ319XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7Il0sIm5hbWVzIjpbIkdyaWQiLCJJbnB1dEFkb3JubWVudCIsIlRleHRGaWVsZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VhcmNoSWNvbiIsInVzZVNlYXJjaFBhcmFtcyIsIlNlYXJjaEZpbHRlciIsInNlYXJjaFBhcmFtcyIsInNldFNlYXJjaFBhcmFtcyIsInNlYXJjaFF1ZXJ5IiwiZ2V0IiwidHlwZVF1ZXJ5IiwidmFsdWUiLCJzZXRWYWx1ZSIsInRpbWVyIiwic2V0VGltZXIiLCJpc0ZpbHRlcnNEdXR5U2VsZWN0ZWQiLCJpc0ZpbHRlcnNRdWVzdFNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNlYXJjaEZpbHRlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xlYXJUaW1lb3V0IiwidGltZXJJZCIsInNldFRpbWVvdXQiLCJzZXQiLCJ0cmltIiwiZGVsZXRlIiwiY29udGFpbmVyIiwic3giLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiZGlzYWJsZWQiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJJbnB1dFByb3BzIiwiZW5kQWRvcm5tZW50IiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/main/filters/search-filter/search-filter.tsx\n"));

/***/ })

});