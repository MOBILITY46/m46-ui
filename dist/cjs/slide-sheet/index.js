"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SlideSheetProps", {
  enumerable: true,
  get: function get() {
    return _types.Props;
  }
});
exports.SlideSheet = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _component = require("./component");

var _types = require("./types");

var _excluded = ["id", "maskClosable"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SlideSheet = function SlideSheet(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'default' : _ref$id,
      _ref$maskClosable = _ref.maskClosable,
      maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
      props = _objectWithoutProperties(_ref, _excluded);

  var elementId = "m46-slide-sheet-".concat(id);

  if (typeof window !== 'undefined') {
    var _document, _document$getElementB, _document$getElementB2, _document2;

    (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.call(_document, elementId)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.remove();
    var containerDomNode = document.createElement('div');
    containerDomNode.setAttribute('id', elementId);
    (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.body.appendChild(containerDomNode);
    return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(_component.SlideSheetComponent, _extends({
      id: elementId,
      maskClosable: maskClosable
    }, props)), containerDomNode);
  } else {
    return null;
  }
};

exports.SlideSheet = SlideSheet;
//# sourceMappingURL=index.js.map