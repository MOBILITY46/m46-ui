"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Variants = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components/Checkbox',
  component: _.Checkbox
};
exports["default"] = _default;

var Basic = function Basic(args) {
  return /*#__PURE__*/_react["default"].createElement(_.Checkbox, args);
};

var Variants = function Variants() {
  return /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    align: "flex-start",
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(Basic, {
    size: '24px'
  }), /*#__PURE__*/_react["default"].createElement(Basic, {
    size: '48px'
  }), /*#__PURE__*/_react["default"].createElement(Basic, {
    size: '94px'
  }), /*#__PURE__*/_react["default"].createElement(Basic, {
    size: '188px'
  }));
};

exports.Variants = Variants;
//# sourceMappingURL=checkbox.stories.js.map