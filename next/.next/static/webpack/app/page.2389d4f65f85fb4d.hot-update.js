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

/***/ "(app-client)/./app/src/components/toaster/toaster.tsx":
/*!************************************************!*\
  !*** ./app/src/components/toaster/toaster.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Collapse/Collapse.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-client)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-client)/./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-client)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _app_src_redux_reducers_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/src/redux/reducers/toaster */ \"(app-client)/./app/src/redux/reducers/toaster.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Toaster = ()=>{\n    _s();\n    const toasterConfig = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.toaster).toaster;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (toasterConfig.close) {\n            setOpen(false);\n            dispatch((0,_app_src_redux_reducers_toaster__WEBPACK_IMPORTED_MODULE_3__.setToaster)({\n                close: false\n            }));\n        }\n    }, [\n        toasterConfig\n    ]);\n    if (toasterConfig.message) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            sx: {\n                width: \"60%\",\n                position: \"sticky\",\n                top: \"10px\",\n                margin: \"0 auto\",\n                zIndex: \"2\",\n                height: \"0px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                in: open,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"filled\",\n                    severity: toasterConfig.type,\n                    action: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        \"aria-label\": \"close\",\n                        color: \"inherit\",\n                        size: \"small\",\n                        onClick: ()=>{\n                            setOpen(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            fontSize: \"inherit\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0),\n                    sx: {\n                        mb: 2\n                    },\n                    children: toasterConfig.message\n                }, void 0, false, {\n                    fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/toaster/toaster.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/toaster/toaster.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dimakred/Desktop/DuntriXIV/next/app/src/components/toaster/toaster.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined);\n    } else {\n        return null;\n    }\n};\n_s(Toaster, \"bUMFFu3Ddr1k2KGXczy6ZkJCQpY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Toaster;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toaster);\nvar _c;\n$RefreshReg$(_c, \"Toaster\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9jb21wb25lbnRzL3RvYXN0ZXIvdG9hc3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV3RDtBQUNoQjtBQUNVO0FBQ1I7QUFDVztBQUNPO0FBRTVELE1BQU1VLFVBQVU7O0lBQ1osTUFBTUMsZ0JBQWdCSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFlQSxNQUFNQyxPQUFPLEVBQUVBLE9BQU87SUFDeEUsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxjQUFjTSxLQUFLLEVBQUU7WUFDckJELFFBQVE7WUFDUkYsU0FBU0wsMkVBQVVBLENBQUM7Z0JBQ2hCUSxPQUFPO1lBQ1g7UUFDSjtJQUNKLEdBQUc7UUFBQ047S0FBYztJQUVsQixJQUFJQSxjQUFjTyxPQUFPLEVBQUU7UUFDdkIscUJBQ0ksOERBQUNsQixxREFBR0E7WUFBQ21CLElBQUk7Z0JBQ0xDLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLEtBQUs7Z0JBQ0xDLFFBQVE7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLFFBQVE7WUFDWjtzQkFDSSw0RUFBQ3hCLHFEQUFRQTtnQkFBQ3lCLElBQUlYOzBCQUNWLDRFQUFDWiwyREFBS0E7b0JBQ0Z3QixTQUFRO29CQUNSQyxVQUFVakIsY0FBY2tCLElBQUk7b0JBQzVCQyxzQkFDSSw4REFBQzVCLHFEQUFVQTt3QkFDUDZCLGNBQVc7d0JBQ1hDLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0xDLFNBQVM7NEJBQ0xsQixRQUFRO3dCQUNaO2tDQUVBLDRFQUFDWixpRUFBU0E7NEJBQUMrQixVQUFTOzs7b0JBRzVCaEIsSUFBSTt3QkFBQ2lCLElBQUk7b0JBQUM7OEJBRVR6QixjQUFjTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0lBSzFDLE9BQU87UUFDSCxPQUFPO0lBQ1g7QUFDSjtHQWxETVI7O1FBQ29CRixvREFBV0E7UUFDaEJELG9EQUFXQTs7O0tBRjFCRztBQW9ETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3JjL2NvbXBvbmVudHMvdG9hc3Rlci90b2FzdGVyLnRzeD9jYjAxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQge0JveCwgQ29sbGFwc2UsIEljb25CdXR0b259IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7c2V0VG9hc3Rlcn0gZnJvbSBcIkAvYXBwL3NyYy9yZWR1eC9yZWR1Y2Vycy90b2FzdGVyXCI7XG5cbmNvbnN0IFRvYXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9hc3RlckNvbmZpZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS50b2FzdGVyKS50b2FzdGVyO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0b2FzdGVyQ29uZmlnLmNsb3NlKSB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFRvYXN0ZXIoe1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9LCBbdG9hc3RlckNvbmZpZ10pO1xuXG4gICAgaWYgKHRvYXN0ZXJDb25maWcubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgICAgICAgdG9wOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6ICcyJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk9e3RvYXN0ZXJDb25maWcudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7bWI6IDJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9hc3RlckNvbmZpZy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdGVyOyJdLCJuYW1lcyI6WyJCb3giLCJDb2xsYXBzZSIsIkljb25CdXR0b24iLCJBbGVydCIsIkNsb3NlSWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFRvYXN0ZXIiLCJUb2FzdGVyIiwidG9hc3RlckNvbmZpZyIsInN0YXRlIiwidG9hc3RlciIsImRpc3BhdGNoIiwib3BlbiIsInNldE9wZW4iLCJjbG9zZSIsIm1lc3NhZ2UiLCJzeCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJtYXJnaW4iLCJ6SW5kZXgiLCJoZWlnaHQiLCJpbiIsInZhcmlhbnQiLCJzZXZlcml0eSIsInR5cGUiLCJhY3Rpb24iLCJhcmlhLWxhYmVsIiwiY29sb3IiLCJzaXplIiwib25DbGljayIsImZvbnRTaXplIiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/src/components/toaster/toaster.tsx\n"));

/***/ })

});