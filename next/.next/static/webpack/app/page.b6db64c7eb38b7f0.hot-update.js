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

/***/ "(app-client)/./app/src/data/mocks.ts":
/*!*******************************!*\
  !*** ./app/src/data/mocks.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DutiesFilterData: function() { return /* binding */ DutiesFilterData; },\n/* harmony export */   ExpansionFilterData: function() { return /* binding */ ExpansionFilterData; },\n/* harmony export */   SortFilterData: function() { return /* binding */ SortFilterData; }\n/* harmony export */ });\nconst ExpansionFilterData = {\n    duties: [\n        {\n            filterName: \"Show All\",\n            value: \"ALL\",\n            key: \"ef1\"\n        },\n        {\n            filterName: \"ARR\",\n            value: \"ARR\",\n            key: \"ef2\"\n        },\n        {\n            filterName: \"Heavensward\",\n            value: \"Heavensward\",\n            key: \"ef3\"\n        },\n        {\n            filterName: \"Stormblood\",\n            value: \"Stormblood\",\n            key: \"ef4\"\n        },\n        {\n            filterName: \"Shadowbringers\",\n            value: \"Shadowbringers\",\n            key: \"ef5\"\n        },\n        {\n            filterName: \"Endwalker\",\n            value: \"Endwalker\",\n            key: \"ef6\"\n        }\n    ],\n    quests: {\n        Trials: [\n            {\n                filterName: \"Primal Quests\",\n                value: \"Primal\",\n                key: \"ef7\"\n            },\n            {\n                filterName: \"Warring Triad\",\n                value: \"Warring Triad\",\n                key: \"ef8\"\n            },\n            {\n                filterName: \"The Four Lords\",\n                value: \"The Four Lords\",\n                key: \"ef9\"\n            },\n            ,\n            {\n                filterName: \"The Four Lords\",\n                value: \"The Four Lords\",\n                key: \"ef9\"\n            }\n        ]\n    }\n};\nconst DutiesFilterData = {\n    duties: [\n        {\n            dutyType: \"Dungeons\",\n            value: \"Dungeons\",\n            key: \"dt1\"\n        },\n        {\n            dutyType: \"Trials\",\n            value: \"Trials\",\n            key: \"dt2\"\n        },\n        {\n            dutyType: \"Trials (Extreme)\",\n            value: \"Trials-extreme\",\n            key: \"dt2e\"\n        },\n        {\n            dutyType: \"Normal Raids\",\n            value: \"NormalRaids\",\n            key: \"dt3\"\n        },\n        {\n            dutyType: \"Normal Raids (Savage)\",\n            value: \"NormalRaids-savage\",\n            key: \"dt3e\"\n        },\n        {\n            dutyType: \"Alliance Raids\",\n            value: \"AllianceRaids\",\n            key: \"dt4\"\n        }\n    ],\n    quests: [\n        {\n            dutyType: \"Trials & Dungeons\",\n            value: \"Trials\",\n            key: \"dt2\"\n        },\n        {\n            dutyType: \"Normal Raids\",\n            value: \"NormalRaids\",\n            key: \"dt3\"\n        },\n        {\n            dutyType: \"Alliance Raids\",\n            value: \"AllianceRaids\",\n            key: \"dt4\"\n        }\n    ]\n};\nconst SortFilterData = [\n    {\n        sortOption: \"Level ↓\",\n        value: \"desc\",\n        key: \"sort1\"\n    },\n    {\n        sortOption: \"Level ↑\",\n        value: \"asc\",\n        key: \"sort2\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NyYy9kYXRhL21vY2tzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLHNCQUFzQjtJQUMvQkMsUUFBUTtRQUNKO1lBQ0lDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJRixZQUFZO1lBQ1pDLE9BQU87WUFDUEMsS0FBSztRQUNUO1FBQ0E7WUFDSUYsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLEtBQUs7UUFDVDtRQUNBO1lBQ0lGLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJRixZQUFZO1lBQ1pDLE9BQU87WUFDUEMsS0FBSztRQUNUO1FBQ0E7WUFDSUYsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLEtBQUs7UUFDVDtLQUNIO0lBQ0RDLFFBQVE7UUFDSkMsUUFBUTtZQUNKO2dCQUNJSixZQUFZO2dCQUNaQyxPQUFPO2dCQUNQQyxLQUFLO1lBQ1Q7WUFDQTtnQkFDSUYsWUFBWTtnQkFDWkMsT0FBTztnQkFDUEMsS0FBSztZQUNUO1lBQ0E7Z0JBQ0lGLFlBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLEtBQUs7WUFDVDs7WUFDQTtnQkFDSUYsWUFBWTtnQkFDWkMsT0FBTztnQkFDUEMsS0FBSztZQUNUO1NBQ0g7SUFDTDtBQUNKLEVBQUU7QUFFSyxNQUFNRyxtQkFBbUI7SUFDNUJOLFFBQVE7UUFDSjtZQUNJTyxVQUFVO1lBQ1ZMLE9BQU87WUFDUEMsS0FBSztRQUNUO1FBQ0E7WUFDSUksVUFBVTtZQUNWTCxPQUFPO1lBQ1BDLEtBQUs7UUFDVDtRQUNBO1lBQ0lJLFVBQVU7WUFDVkwsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJSSxVQUFVO1lBQ1ZMLE9BQU87WUFDUEMsS0FBSztRQUNUO1FBQ0E7WUFDSUksVUFBVTtZQUNWTCxPQUFPO1lBQ1BDLEtBQUs7UUFDVDtRQUNBO1lBQ0lJLFVBQVU7WUFDVkwsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7S0FDSDtJQUNEQyxRQUFRO1FBQ0o7WUFDSUcsVUFBVTtZQUNWTCxPQUFPO1lBQ1BDLEtBQUs7UUFDVDtRQUNBO1lBQ0lJLFVBQVU7WUFDVkwsT0FBTztZQUNQQyxLQUFLO1FBQ1Q7UUFDQTtZQUNJSSxVQUFVO1lBQ1ZMLE9BQU87WUFDUEMsS0FBSztRQUNUO0tBQ0g7QUFDTCxFQUFFO0FBRUssTUFBTUssaUJBQWlCO0lBQzFCO1FBQ0lDLFlBQVk7UUFDWlAsT0FBTztRQUNQQyxLQUFLO0lBQ1Q7SUFDQTtRQUNJTSxZQUFZO1FBQ1pQLE9BQU87UUFDUEMsS0FBSztJQUNUO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3JjL2RhdGEvbW9ja3MudHM/ODhiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRXhwYW5zaW9uRmlsdGVyRGF0YSA9IHtcbiAgICBkdXRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyTmFtZTogJ1Nob3cgQWxsJyxcbiAgICAgICAgICAgIHZhbHVlOiAnQUxMJyxcbiAgICAgICAgICAgIGtleTogJ2VmMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyTmFtZTogJ0FSUicsXG4gICAgICAgICAgICB2YWx1ZTogJ0FSUicsXG4gICAgICAgICAgICBrZXk6ICdlZjInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbHRlck5hbWU6ICdIZWF2ZW5zd2FyZCcsXG4gICAgICAgICAgICB2YWx1ZTogJ0hlYXZlbnN3YXJkJyxcbiAgICAgICAgICAgIGtleTogJ2VmMydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyTmFtZTogJ1N0b3JtYmxvb2QnLFxuICAgICAgICAgICAgdmFsdWU6ICdTdG9ybWJsb29kJyxcbiAgICAgICAgICAgIGtleTogJ2VmNCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsdGVyTmFtZTogJ1NoYWRvd2JyaW5nZXJzJyxcbiAgICAgICAgICAgIHZhbHVlOiAnU2hhZG93YnJpbmdlcnMnLFxuICAgICAgICAgICAga2V5OiAnZWY1J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaWx0ZXJOYW1lOiAnRW5kd2Fsa2VyJyxcbiAgICAgICAgICAgIHZhbHVlOiAnRW5kd2Fsa2VyJyxcbiAgICAgICAgICAgIGtleTogJ2VmNidcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcXVlc3RzOiB7XG4gICAgICAgIFRyaWFsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbHRlck5hbWU6ICdQcmltYWwgUXVlc3RzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1ByaW1hbCcsXG4gICAgICAgICAgICAgICAga2V5OiAnZWY3J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lOiAnV2FycmluZyBUcmlhZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdXYXJyaW5nIFRyaWFkJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdlZjgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbHRlck5hbWU6ICdUaGUgRm91ciBMb3JkcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdUaGUgRm91ciBMb3JkcycsXG4gICAgICAgICAgICAgICAga2V5OiAnZWY5J1xuICAgICAgICAgICAgfSwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsdGVyTmFtZTogJ1RoZSBGb3VyIExvcmRzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1RoZSBGb3VyIExvcmRzJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdlZjknXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IER1dGllc0ZpbHRlckRhdGEgPSB7XG4gICAgZHV0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1dHlUeXBlOiAnRHVuZ2VvbnMnLFxuICAgICAgICAgICAgdmFsdWU6ICdEdW5nZW9ucycsXG4gICAgICAgICAgICBrZXk6ICdkdDEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1dHlUeXBlOiAnVHJpYWxzJyxcbiAgICAgICAgICAgIHZhbHVlOiAnVHJpYWxzJyxcbiAgICAgICAgICAgIGtleTogJ2R0MidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZHV0eVR5cGU6ICdUcmlhbHMgKEV4dHJlbWUpJyxcbiAgICAgICAgICAgIHZhbHVlOiAnVHJpYWxzLWV4dHJlbWUnLFxuICAgICAgICAgICAga2V5OiAnZHQyZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZHV0eVR5cGU6ICdOb3JtYWwgUmFpZHMnLFxuICAgICAgICAgICAgdmFsdWU6ICdOb3JtYWxSYWlkcycsXG4gICAgICAgICAgICBrZXk6ICdkdDMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1dHlUeXBlOiAnTm9ybWFsIFJhaWRzIChTYXZhZ2UpJyxcbiAgICAgICAgICAgIHZhbHVlOiAnTm9ybWFsUmFpZHMtc2F2YWdlJyxcbiAgICAgICAgICAgIGtleTogJ2R0M2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1dHlUeXBlOiAnQWxsaWFuY2UgUmFpZHMnLFxuICAgICAgICAgICAgdmFsdWU6ICdBbGxpYW5jZVJhaWRzJyxcbiAgICAgICAgICAgIGtleTogJ2R0NCdcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcXVlc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGR1dHlUeXBlOiAnVHJpYWxzICYgRHVuZ2VvbnMnLFxuICAgICAgICAgICAgdmFsdWU6ICdUcmlhbHMnLFxuICAgICAgICAgICAga2V5OiAnZHQyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkdXR5VHlwZTogJ05vcm1hbCBSYWlkcycsXG4gICAgICAgICAgICB2YWx1ZTogJ05vcm1hbFJhaWRzJyxcbiAgICAgICAgICAgIGtleTogJ2R0MydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZHV0eVR5cGU6ICdBbGxpYW5jZSBSYWlkcycsXG4gICAgICAgICAgICB2YWx1ZTogJ0FsbGlhbmNlUmFpZHMnLFxuICAgICAgICAgICAga2V5OiAnZHQ0J1xuICAgICAgICB9XG4gICAgXVxufTtcblxuZXhwb3J0IGNvbnN0IFNvcnRGaWx0ZXJEYXRhID0gW1xuICAgIHtcbiAgICAgICAgc29ydE9wdGlvbjogJ0xldmVsIOKGkycsXG4gICAgICAgIHZhbHVlOiAnZGVzYycsXG4gICAgICAgIGtleTogJ3NvcnQxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzb3J0T3B0aW9uOiAnTGV2ZWwg4oaRJyxcbiAgICAgICAgdmFsdWU6ICdhc2MnLFxuICAgICAgICBrZXk6ICdzb3J0MidcbiAgICB9XG5dOyJdLCJuYW1lcyI6WyJFeHBhbnNpb25GaWx0ZXJEYXRhIiwiZHV0aWVzIiwiZmlsdGVyTmFtZSIsInZhbHVlIiwia2V5IiwicXVlc3RzIiwiVHJpYWxzIiwiRHV0aWVzRmlsdGVyRGF0YSIsImR1dHlUeXBlIiwiU29ydEZpbHRlckRhdGEiLCJzb3J0T3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/src/data/mocks.ts\n"));

/***/ })

});