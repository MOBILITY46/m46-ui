"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

var _ = require("../");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Components/Tabs',
  component: _.Tabs,
  argTypes: {
    colorScheme: {
      options: ['primary', 'secondary', 'tertiary']
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};
exports["default"] = _default;
var tabs = {
  'Tab 1': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.200",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 2': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.300",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 3': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.400",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 4': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.500",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 5': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.600",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 6': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "red.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 7': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 8': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 9': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 10': /*#__PURE__*/React.createElement(_react2.Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  })
};

var Example = function Example(args) {
  var props = Object.assign({}, args, {
    tabs: tabs
  });
  return /*#__PURE__*/React.createElement(_.Tabs, props);
};

exports.Example = Example;
//# sourceMappingURL=tabs.stories.js.map