"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithRightIcon = exports.WithLeftIcon = exports.Default = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _ = require("../");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Components/Button',
  component: _.Button,
  argTypes: {
    colorScheme: {
      options: ['primary', 'secondary', 'tertiary']
    },
    variant: {
      options: ['solid', 'ghost', 'outline', 'link']
    },
    rounded: {
      options: [true, false]
    },
    leftIcon: {
      table: {
        disable: true
      }
    },
    rightIcon: {
      table: {
        disable: true
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  console.log('args', args);
  return /*#__PURE__*/React.createElement(_.Button, args);
};

var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Template, args, "Default");
};

exports.Default = Default;

var WithLeftIcon = function WithLeftIcon(args) {
  return /*#__PURE__*/React.createElement(Template, _extends({}, args, {
    leftIcon: /*#__PURE__*/React.createElement(_.HeartIcon, null)
  }), "Left icon");
};

exports.WithLeftIcon = WithLeftIcon;

var WithRightIcon = function WithRightIcon(args) {
  return /*#__PURE__*/React.createElement(Template, _extends({}, args, {
    rightIcon: /*#__PURE__*/React.createElement(_.HeartIcon, null)
  }), "Right icon");
};

exports.WithRightIcon = WithRightIcon;
//# sourceMappingURL=button.stories.js.map