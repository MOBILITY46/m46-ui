"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipWithCustomContent = exports.Flip = exports.Basic = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

var _reactLoremIpsum = _interopRequireDefault(require("react-lorem-ipsum"));

var _faker = _interopRequireDefault(require("faker"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Components/Card',
  component: _.Card
};
exports["default"] = _default;

var Basic = function Basic() {
  return /*#__PURE__*/React.createElement(_.Card, {
    content: {
      header: /*#__PURE__*/React.createElement(_react2.Heading, null, "Heading"),
      body: /*#__PURE__*/React.createElement(_reactLoremIpsum["default"], {
        p: 4
      }),
      footer: /*#__PURE__*/React.createElement(_.Button, null, "klick me")
    }
  });
};

exports.Basic = Basic;

var Flip = function Flip() {
  return /*#__PURE__*/React.createElement(_.FlipCard, {
    front: /*#__PURE__*/React.createElement(_.Card, {
      content: {
        header: /*#__PURE__*/React.createElement(_react2.Heading, null, "Front"),
        body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactLoremIpsum["default"], {
          p: 2
        }), /*#__PURE__*/React.createElement(_.Button, null, "Some button")),
        footer: /*#__PURE__*/React.createElement(_.FlipCardTrigger, null, /*#__PURE__*/React.createElement(_.Button, null, "Flip"))
      }
    }),
    back: /*#__PURE__*/React.createElement(_.Card, {
      content: {
        header: /*#__PURE__*/React.createElement(_react2.Heading, null, "Back"),
        body: /*#__PURE__*/React.createElement(_reactLoremIpsum["default"], {
          p: 2
        }),
        footer: /*#__PURE__*/React.createElement(_.FlipCardTrigger, null, /*#__PURE__*/React.createElement(_.Button, null, "Flip"))
      }
    })
  });
};

exports.Flip = Flip;

var CustomCardFront = function CustomCardFront() {
  return /*#__PURE__*/React.createElement(_react2.Box, {
    border: "1px solid #ccc",
    width: 375,
    height: 411,
    overflow: "hidden",
    borderRadius: 10
  }, /*#__PURE__*/React.createElement(_react2.Box, {
    h: 0,
    pt: "56.25%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    d: "block",
    background: "url(".concat(_faker["default"].image["abstract"](375, 200), ")")
  }), /*#__PURE__*/React.createElement(_react2.Heading, {
    p: 2
  }, "Something"), /*#__PURE__*/React.createElement(_.FlipCardTrigger, null, /*#__PURE__*/React.createElement(_.Button, {
    size: "lg",
    display: "block",
    m: "2rem auto"
  }, "Flip")));
};

var CustomCardBack = function CustomCardBack() {
  return /*#__PURE__*/React.createElement(_.FlipCardTrigger, null, /*#__PURE__*/React.createElement(_react2.Box, {
    border: "1px solid #ccc",
    backgroundColor: "orange",
    width: 375,
    height: 411,
    overflow: "hidden",
    borderRadius: 10
  }, /*#__PURE__*/React.createElement(_react2.Heading, {
    p: 2
  }, "Something"), /*#__PURE__*/React.createElement(_react2.Text, {
    p: 2
  }, "Something")));
};

var FlipWithCustomContent = function FlipWithCustomContent() {
  return /*#__PURE__*/React.createElement(_.FlipCard, {
    front: /*#__PURE__*/React.createElement(CustomCardFront, null),
    back: /*#__PURE__*/React.createElement(CustomCardBack, null)
  });
};

exports.FlipWithCustomContent = FlipWithCustomContent;
//# sourceMappingURL=card.stories.js.map