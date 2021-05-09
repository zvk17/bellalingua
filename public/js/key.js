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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(12);

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontAwesome = function (_React$Component) {
    _inherits(FontAwesome, _React$Component);

    function FontAwesome() {
        _classCallCheck(this, FontAwesome);

        return _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));
    }

    _createClass(FontAwesome, [{
        key: "render",
        value: function render() {
            return React.createElement("span", { className: "fa fa-" + this.props.char, "aria-hidden": "true" });
        }
    }]);

    return FontAwesome;
}(React.Component);

exports.default = FontAwesome;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(12);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _FontAwesome = __webpack_require__(47);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keyboard = function (_React$Component) {
    _inherits(Keyboard, _React$Component);

    function Keyboard() {
        _classCallCheck(this, Keyboard);

        var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

        _this.state = {
            shiftPressed: false,
            show: false,
            keys: []
        };
        _this.toggleShow = _this.toggleShow.bind(_this);
        _this.toggleShift = _this.toggleShift.bind(_this);
        _this.close = _this.close.bind(_this);
        return _this;
    }

    _createClass(Keyboard, [{
        key: "createKey",
        value: function createKey(char, func, index) {
            return React.createElement(
                "button",
                { className: "key",
                    key: char,
                    onMouseDown: func },
                char
            );
        }
    }, {
        key: "buildKeys",
        value: function buildKeys() {
            var _this2 = this;

            return this.state.keys.map(function (x, index) {
                return _this2.createKey(_this2.keyCase(x), function (e) {
                    e.preventDefault();
                    _this2.props.fillComponent.insertCharacter(_this2.keyCase(x));
                }, index);
            });
        }
    }, {
        key: "keyCase",
        value: function keyCase(key) {
            if (this.state.shiftPressed) {
                return key.toUpperCase();
            } else {
                return key.toLowerCase();
            }
        }
    }, {
        key: "toggleShow",
        value: function toggleShow() {
            this.setState({
                show: !this.state.show,
                shiftPressed: false
            });
        }
    }, {
        key: "toggleShift",
        value: function toggleShift() {
            this.setState({
                shiftPressed: !this.state.shiftPressed
            });
        }
    }, {
        key: "close",
        value: function close() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "buildShiftButton",
        value: function buildShiftButton() {
            var _this3 = this;

            return React.createElement(
                "button",
                { className: "key " + (this.state.shiftPressed ? "active" : ""),
                    onMouseDown: function onMouseDown(e) {
                        e.preventDefault();
                        _this3.toggleShift();
                    } },
                React.createElement(
                    "span",
                    { className: "material-icons" },
                    "file_upload"
                )
            );
        }
    }, {
        key: "buildCloseButton",
        value: function buildCloseButton() {
            var _this4 = this;

            return React.createElement(
                "span",
                null,
                React.createElement(
                    "button",
                    { onClick: function onClick(e) {
                            e.preventDefault();
                            _this4.props.fillComponent.input.focus();
                            _this4.close();
                        }, className: "keyboard-close" },
                    React.createElement(
                        "span",
                        { className: " large material-icons" },
                        "close"
                    )
                )
            );
        }
    }, {
        key: "buildKeyboard",
        value: function buildKeyboard() {
            return React.createElement(
                "div",
                { className: "keyboard hide-on-med-and-down" },
                React.createElement(
                    "div",
                    { className: "wrapper1", style: this.props.position },
                    React.createElement(
                        "div",
                        { className: "wrapper2 z-depth-3" },
                        this.buildShiftButton(),
                        this.buildKeys(),
                        this.buildCloseButton()
                    )
                )
            );
        }
    }, {
        key: "handleContext",
        value: function handleContext() {
            console.log("context");
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return this.state.keys.length > 1 && React.createElement(
                "span",
                null,
                React.createElement(
                    "span",
                    { className: "hide-on-med-and-down" },
                    React.createElement(
                        "button",
                        { className: "btn hide-on-med-and-down",
                            onClick: function onClick(e) {
                                e.preventDefault();
                                _this5.props.fillComponent.input.focus();
                                _this5.toggleShow();
                            } },
                        React.createElement(
                            "span",
                            { className: "material-icons" },
                            "keyboard"
                        )
                    )
                ),
                this.state.show && this.buildKeyboard()
            );
        }
    }]);

    return Keyboard;
}(React.Component);

exports.default = Keyboard;

/***/ })

/******/ });