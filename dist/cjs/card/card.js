"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var React = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _motion = require("../motion");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = (0, _styled["default"])(_motion.MotionBox)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: minmax(min-content, 2rem) auto minmax(min-content, 2rem);\n  overflow: hidden;\n  width: 320px;\n  height: 420px;\n  margin: 1rem;\n  transform-style: preserve-3d;\n\n  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n"])));
var BodyWrapper = (0, _styled["default"])(_motion.MotionBox)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* for Internet Explorer, Edge */\n  scrollbar-width: none; /* for Firefox */\n  overflow-y: scroll;\n  padding: 10px;\n  background-color: #fff;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));
var HeaderWrapper = (0, _styled["default"])(_motion.MotionBox)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n"])));
var FooterWrapper = (0, _styled["default"])(_motion.MotionBox)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5;\n"])));

var Card = function Card(props) {
  return /*#__PURE__*/React.createElement(CardWrapper, {
    role: "card",
    drag: true,
    dragConstraints: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(HeaderWrapper, null, props.content.header), /*#__PURE__*/React.createElement(BodyWrapper, null, props.content.body), /*#__PURE__*/React.createElement(FooterWrapper, null, props.content.footer));
};

exports.Card = Card;
//# sourceMappingURL=card.js.map