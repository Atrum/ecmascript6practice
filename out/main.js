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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Employee = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _person = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Employee = exports.Employee = function (_Person) {
    _inherits(Employee, _Person);

    function Employee(name, position, salary) {
        _classCallCheck(this, Employee);

        var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name));

        _this.position = position;
        _this.salary = salary;
        return _this;
    }

    _createClass(Employee, [{
        key: 'getInfo',
        value: function getInfo() {
            return _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), 'getInfo', this).call(this) + (this.position + ' ' + this.salary);
        }
    }, {
        key: 'bonus',
        value: function bonus() {
            return new Promise(function (resolve) {
                return setTimeout(function () {
                    return resolve(Math.round(Math.random() * 1000));
                }, 1000);
            });
        }
    }, {
        key: 'total',
        value: function total() {
            var _this2 = this;

            return new Promise(function (resolve) {
                return _this2.bonus().then(function (bonus) {
                    return resolve(_this2.salary + bonus);
                });
            });
        }
    }]);

    return Employee;
}(_person.Person);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Employees = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _employee = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _employees = [];

var Employees = exports.Employees = function () {
    function Employees() {
        _classCallCheck(this, Employees);
    }

    _createClass(Employees, null, [{
        key: 'add',
        value: function add(employee) {
            if (!employee instanceof _employee.Employee) throw 'Can add only employees';
            _employees.push(employee);
        }
    }, {
        key: 'list',
        value: function list() {
            return [].concat(_employees);
        }
    }, {
        key: 'remove',
        value: function remove(employee) {
            var idx = _employees.findIndex(employee);
            _employees.splice(idx, 1);
        }
    }, {
        key: 'averageSalary',
        value: function averageSalary() {
            return Math.round(_employees.map(function (e) {
                return e.salary;
            }).reduce(function (a, b) {
                return a + b;
            }) / _employees.length);
        }
    }]);

    return Employees;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this._name = name;
    }

    _createClass(Person, [{
        key: "getInfo",
        value: function getInfo() {
            return "person: " + this.name + " ";
        }
    }, {
        key: "name",
        set: function set(name) {
            if (name.length < 3) throw "incorrect name " + name;
            this._name = name;
        },
        get: function get() {
            return this._name;
        }
    }]);

    return Person;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _employees = __webpack_require__(1);

var _employee = __webpack_require__(0);

_employees.Employees.add(new _employee.Employee("Pancho", "Developer", 1000));
_employees.Employees.add(new _employee.Employee("Lucho", "Manager", 1200));
_employees.Employees.add(new _employee.Employee("Daniel", "Developer", 1300));

var employees = _employees.Employees.list();
var html = "";

// Task 2
html += '<br> Average salary: ' + _employees.Employees.averageSalary() + ' <br>';

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    var _loop = function _loop() {
        var e = _step.value;

        // Task 1
        html += e.getInfo() + "<br>";

        // Task 3
        e.total().then(function (total) {
            html += e.name + ' total: ' + total + ' <br>';
            render();
        });
    };

    for (var _iterator = employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function render() {
    document.getElementById("employees").innerHTML = html;
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map