"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = exports.Content = exports.Sheet = exports.DraggableContainer = exports.Wrapper = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _framerMotion = require("framer-motion");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _styled["default"])(_framerMotion.motion.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n"])));
exports.Wrapper = Wrapper;
var DraggableContainer = (0, _styled["default"])(_framerMotion.motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n"])));
exports.DraggableContainer = DraggableContainer;
var Sheet = (0, _styled["default"])(_framerMotion.motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n"])));
exports.Sheet = Sheet;

var Content = _styled["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  position: relative;\n  overflow: hidden;\n"])));

exports.Content = Content;
var Mask = (0, _styled["default"])(_framerMotion.motion.div)(function (_ref) {
  var debug = _ref.debug;
  return "\n  ".concat(debug ? "\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);\n    " : '', "\n");
});
exports.Mask = Mask;
//# sourceMappingURL=styles.js.map