"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.PagerAnimtedContainer = exports.PagerContainer = exports.Slider = exports.TabItemWrapper = exports.TabItem = exports.TabList = exports.TabContainer = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _framerMotion = require("framer-motion");

var _theme = require("../theme");

var _react = require("@chakra-ui/react");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabContainer = (0, _styled["default"])(_react.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  box-shadow: none;\n  margin-bottom: 1rem;\n"])));
exports.TabContainer = TabContainer;
var TabList = (0, _styled["default"])(_react.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n"])));
exports.TabList = TabList;
var TabItem = (0, _styled["default"])(_framerMotion.motion.button)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  min-width: 120px;\n  display: inline;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizelegibility;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n  text-decoration: none;\n  border-width: initial;\n  border-style: none;\n  border-color: initial;\n  border-image: initial;\n  padding: 10px 1rem;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n  text-overflow: ellipsis;\n  line-height: 1.5;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: ", ";\n  margin: 0px;\n  overflow: hidden;\n"])), function (p) {
  return p.isActive ? _theme.colors[p.color]['600'] : _theme.colors[p.color]['500'];
});
exports.TabItem = TabItem;
var TabItemWrapper = (0, _styled["default"])((0, _framerMotion.motion)(_react.Box))(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n\n  ::-webkit-scrollbar {\n    width: 0 !important;\n    height: 0 !important;\n  }\n"])));
exports.TabItemWrapper = TabItemWrapper;
var Slider = (0, _styled["default"])((0, _framerMotion.motion)(_react.Box))(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 2px;\n  margin-left: 0;\n  margin-right: 0;\n  bottom: 0;\n  position: absolute;\n  background-color: #1e90ff;\n  background-color: ", ";\n"])), function (p) {
  return _theme.colors[p.color]['500'];
});
exports.Slider = Slider;
var PagerContainer = (0, _styled["default"])(_react.Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n"])));
exports.PagerContainer = PagerContainer;
var PagerAnimtedContainer = (0, _styled["default"])((0, _framerMotion.motion)(_react.Box))(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex-direction: row;\n  direction: ltr;\n  will-change: transform;\n  min-height: 0;\n  flex: 1;\n  display: flex;\n"])));
exports.PagerAnimtedContainer = PagerAnimtedContainer;

var Page = _styled["default"].ul(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-self: stretch;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  height: 100%;\n  overflow: hidden;\n  outline: none;\n  li {\n    list-style: none;\n  }\n"])));

exports.Page = Page;
//# sourceMappingURL=styles.js.map