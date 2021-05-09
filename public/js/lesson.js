/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(12);

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lesson = function (_React$Component) {
    _inherits(Lesson, _React$Component);

    function Lesson() {
        _classCallCheck(this, Lesson);

        return _possibleConstructorReturn(this, (Lesson.__proto__ || Object.getPrototypeOf(Lesson)).apply(this, arguments));
    }

    _createClass(Lesson, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "lesson container z-depth-1" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "lesson-title col l12 m12 s12" },
                        React.createElement(
                            "h1",
                            null,
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col l12 m12 s12 lesson-excercises" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "lesson-excercises-title col l12 m12 s12" },
                                React.createElement(
                                    "h2",
                                    null,
                                    this.props.localization.excercises
                                )
                            ),
                            React.createElement(
                                "div",
                                null,
                                this.props.excercises.map(function (excercise) {
                                    return React.createElement(
                                        "div",
                                        { className: "item col l3 m6 s12" },
                                        React.createElement(
                                            "div",
                                            { className: "card z-depth-2" },
                                            React.createElement(
                                                "div",
                                                { className: "card-content" },
                                                React.createElement(
                                                    "span",
                                                    { className: "card-title" },
                                                    excercise.title
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    excercise.description
                                                )
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "card-action" },
                                                React.createElement(
                                                    "a",
                                                    { className: "btn waves-effect waves-light btn-block", href: "#" },
                                                    _this2.props.localization.open
                                                )
                                            )
                                        )
                                    );
                                })
                            )
                        ),
                        React.createElement("div", { className: "divider" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col l12 m12 s12 lesson-description" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col l12 m12 s12" },
                                React.createElement(
                                    "h2",
                                    null,
                                    this.props.localization.lesson
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement("div", { className: "col l12 m12 s12",
                                dangerouslySetInnerHTML: { __html: this.props.description } })
                        )
                    )
                )
            );
        }
    }]);

    return Lesson;
}(React.Component);

var obj = {
    title: "Present",
    excercises: [{ title: "Glagoli 1. grupe", description: "Vežba građenje glagola koji se zavrsavaju na -er" }, { title: "Glagoli 2. grupe", description: "Vežba građenje glagola koji se zavrsavaju na -ir" }, { title: "Glagoli 3. grupe", description: "Vežba građenje glagola koji se zavrsavaju na -re" }],
    description: "<h1>dfghjjjj</h1><p>Presents fdskfsdf kgfdgfdg</p>"
};
var loc = {
    excercises: "Vežbanja",
    lesson: "Lekcija",
    description: "Opis lekcije",
    open: "Otvori"
};
console.log(obj);
console.log("1");
ReactDOM.render(React.createElement(Lesson, _extends({}, obj, { localization: loc })), document.querySelector("#app"));

/***/ })

/******/ });