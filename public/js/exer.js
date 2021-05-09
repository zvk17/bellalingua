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
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 118:
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

var _ProgressBar = __webpack_require__(122);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _FontAwesome = __webpack_require__(47);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _FillComponent = __webpack_require__(119);

var _FillComponent2 = _interopRequireDefault(_FillComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Keyboard from "./Keyboard.jsx";


var Exercise = function (_React$Component) {
    _inherits(Exercise, _React$Component);

    function Exercise() {
        _classCallCheck(this, Exercise);

        var _this = _possibleConstructorReturn(this, (Exercise.__proto__ || Object.getPrototypeOf(Exercise)).call(this));

        _this.state = { rightAnswerPercentage: "", isSubmitted: false };
        _this.elements = [];
        _this.clickHandler = _this.clickHandler.bind(_this);
        _this.getRef = _this.getRef.bind(_this);
        _this.addFill = _this.addFill.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.progressBar = null;
        return _this;
    }

    _createClass(Exercise, [{
        key: "getRef",
        value: function getRef(c) {
            this.elements.push(c);
        }
    }, {
        key: "buildFills",
        value: function buildFills() {
            var _this2 = this;

            return this.props.fills.map(function (item, key) {
                return React.createElement(_FillComponent2.default, { key: key, ref: _this2.getRef, q: item });
            });
        }
    }, {
        key: "loadKeys",
        value: function loadKeys(URL) {
            var _this3 = this;

            return; ///XXX
            fetch(this.props.keyboardURL, { method: "GET" }).then(function (res) {
                if (res.ok) {
                    return res.json();
                }
                throw err;
            }).then(function (json) {
                _this3.elements.forEach(function (ele) {
                    ele.keyboard.setState({
                        keys: json
                    });
                });
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {

            this.loadKeys(this.props.keyboardURL);
            console.log("hello");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "exercise  " + (this.state.isSubmitted ? "submitted" : "") },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col l12 m12 s12" },
                        React.createElement(
                            "h1",
                            null,
                            this.props.title
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row questions" },
                    this.buildFills()
                ),
                this.state.isSubmitted && this.showResults(),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col l6 m12 s12" },
                        React.createElement(
                            "button",
                            { className: "waves-effect waves-light btn btn-block ", onClick: this.clickHandler },
                            "Proveri"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col l6 m12 s12" },
                        React.createElement(
                            "button",
                            { className: "waves-effect waves-light btn btn-block", onClick: this.reset },
                            "Resetuj"
                        )
                    )
                )
            );
        }
    }, {
        key: "showResults",
        value: function showResults() {
            var _this4 = this;

            return React.createElement(_ProgressBar2.default, { key: function key(k) {
                    _this4.progressBar = k;
                }, percentage: this.state.rightAnswerPercentage });
        }
    }, {
        key: "addFill",
        value: function addFill(str) {
            this.props.fills.push(new Fill(str));
            this.forceUpdate();
        }
    }, {
        key: "reset",
        value: function reset() {
            this.elements.forEach(function (e) {
                e.clear();
            });
            this.setState({
                isSubmitted: false,
                rightAnswerPercentage: 0
            });
        }
    }, {
        key: "clickHandler",
        value: function clickHandler() {
            var rightAnswers = 0;
            var totalQuestions = 0;
            if (this.progressBar) {
                this.progressBar.forceUpdate();
            }
            this.elements.forEach(function (element) {
                if (element.isAnswerRight()) rightAnswers++;
                totalQuestions++;
            });
            this.setState({
                isSubmitted: true,
                rightAnswerPercentage: Math.round(rightAnswers / totalQuestions * 100)
            });
        }
    }]);

    return Exercise;
}(React.Component);

exports.default = Exercise;

/***/ }),

/***/ 119:
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

var _Keyboard = __webpack_require__(62);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillComponent = function (_React$Component) {
    _inherits(FillComponent, _React$Component);

    function FillComponent() {
        _classCallCheck(this, FillComponent);

        var _this = _possibleConstructorReturn(this, (FillComponent.__proto__ || Object.getPrototypeOf(FillComponent)).call(this));

        _this.state = { answer: "", s: "", class: "" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.insertCharacter = _this.insertCharacter.bind(_this);
        _this.updateInputPosition = _this.updateInputPosition.bind(_this);
        _this.isAnswerRight = _this.isAnswerRight.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.updateClass = _this.updateClass.bind(_this);
        _this.clear = _this.clear.bind(_this);

        _this.keyboard = null;
        _this.input = null;

        _this.inputPosition = {
            start: 0,
            end: 0
        };
        return _this;
    }

    _createClass(FillComponent, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "fillComponent col l12 m12 s12" },
                React.createElement(
                    "span",
                    null,
                    this.props.q.part1
                ),
                React.createElement(
                    "div",
                    { className: "inline input-field" },
                    React.createElement("input", { type: "text",
                        className: this.state.class,
                        onClick: this.updateInputPosition,
                        onKeyUp: this.updateInputPosition,
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        ref: function ref(_ref) {
                            _this2.input = _ref;
                        },
                        value: this.state.answer
                    })
                ),
                React.createElement(
                    "button",
                    { className: "btn hide-on-med-and-down", onMouseDown: function onMouseDown(e) {
                            e.preventDefault();
                            _this2.clear();
                        } },
                    React.createElement(
                        "i",
                        { className: "material-icons" },
                        "close"
                    )
                ),
                React.createElement(_Keyboard2.default, { ref: function ref(_ref2) {
                        _this2.keyboard = _ref2;
                    }, fillComponent: this }),
                React.createElement(
                    "span",
                    null,
                    this.props.q.part2
                )
            );
        }
    }, {
        key: "clear",
        value: function clear() {
            this.setState({
                answer: "",
                s: "",
                class: ""
            });
        }
    }, {
        key: "handleBlur",
        value: function handleBlur() {
            //this.keyboard.close();
        }
    }, {
        key: "updateClass",
        value: function updateClass() {
            if (this.isAnswerRight()) {
                this.setState({ class: "right" });
            } else {
                this.setState({ class: "wrong" });
            }
        }
    }, {
        key: "updateInput",
        value: function updateInput(event) {
            var _this3 = this;

            this.setState({ answer: event.target.value }, function () {
                _this3.updateClass();
            });
        }
    }, {
        key: "insertCharacter",
        value: function insertCharacter(char) {
            var _this4 = this;

            var newString = [this.state.answer.split("").slice(0, this.inputPosition.start).join(""), char, this.state.answer.split("").slice(this.inputPosition.end).join("")].join("");

            Object.assign(this.inputPosition, {
                start: this.inputPosition.start + 1,
                end: this.inputPosition.start + 1

            });
            this.inputShouldUpdate = true;

            this.setState({
                answer: newString
            }, function () {
                _this4.input.setSelectionRange(_this4.inputPosition.start, _this4.inputPosition.end);
            });

            this.updateClass();
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            event.preventDefault();
            this.updateInput(event);
            this.updateClass();
        }
    }, {
        key: "isAnswerRight",
        value: function isAnswerRight() {
            return this.state.answer === this.props.q.answer;
        }
    }, {
        key: "updateInputPosition",
        value: function updateInputPosition(e) {
            Object.assign(this.inputPosition, {
                start: this.input.selectionStart,
                end: this.input.selectionEnd
            });

            this.input.setSelectionRange(this.inputPosition.start, this.inputPosition.end);
        }
    }]);

    return FillComponent;
}(React.Component);

exports.default = FillComponent;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(12);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Exercise = __webpack_require__(118);

var _Exercise2 = _interopRequireDefault(_Exercise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*window.questions = [
    "Je voudrais que tu *reviennes* dans ma vie. (revenir)",
    "Je veux que vous *appreniez* la formation du subjonctif. (apprendre)",
    "J’aimerais que mes élèves *sachent* le français. (savoir)",
    "Il est temps que je *devienne* meilleure. (devenir)",
    "Notre professeur demande que nous *fassions* attention. (faire)",
    " Je regrette que tu ne me *connaisses* pas mieux. (connaȋtre)",
    "J’aimerais que tu me *dises* la vérité. (dire)"
];*/
//window. k = ["ù", "û", "ü", "ÿ", "à", "â", "æ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô", "œ"];


var Fill = function Fill(xsl) {
    _classCallCheck(this, Fill);

    var x = xsl.split("*");
    this.part1 = x[0];
    this.answer = x[1];
    this.part2 = x[2];
};

//ReactDOM.render(<Keyboard keys={k}/>,document.querySelector("#app"));
//questions = questions.map(q => new Fill(q));
//ReactDOM.render(<Exercise title="Excercises" fills={questions} />,
//document.querySelector("#app"));


console.error("Zavrsi showAnswers,dodaj shuffle za zadatke");
window.langApp = {
    Exercise: _Exercise2.default, Fill: Fill
};

/***/ }),

/***/ 122:
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

var ProgressBar = function (_React$Component) {
    _inherits(ProgressBar, _React$Component);

    function ProgressBar() {
        _classCallCheck(this, ProgressBar);

        return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
    }

    _createClass(ProgressBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col l12 m12 s12" },
                    React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement("div", { className: "determinate", style: { width: this.props.percentage + "%" } })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col l12 m12 s12 center-align" },
                    React.createElement(
                        "span",
                        null,
                        this.props.percentage + "%"
                    )
                )
            );
        }
    }]);

    return ProgressBar;
}(React.Component);

exports.default = ProgressBar;

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