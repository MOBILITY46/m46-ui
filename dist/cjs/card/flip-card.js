"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipCardTrigger = exports.FlipCard = void 0;

var React = _interopRequireWildcard(require("react"));

var _layout = require("@chakra-ui/layout");

var _framerMotion = require("framer-motion");

var _useFlipCard = require("./use-flip-card");

var _context = require("./context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Box = function Box(props) {
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      rotateY: -180
    },
    exit: {
      rotateY: -180
    },
    animate: {
      rotateY: 0
    },
    transition: {
      rotateY: {
        type: 'tween',
        stiffness: 80,
        damping: 20
      }
    },
    style: {
      position: 'absolute',
      backfaceVisibility: 'hidden'
    }
  }, props.children);
};

var FlipCard = function FlipCard(props) {
  var context = (0, _useFlipCard.useFlipCard)();
  return /*#__PURE__*/React.createElement(_context.FlipCardContextProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(_layout.Box, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, null, context.face === 'front' && /*#__PURE__*/React.createElement(Box, {
    key: 0
  }, props.front), context.face === 'back' && /*#__PURE__*/React.createElement(Box, {
    key: 1
  }, props.back))));
};

exports.FlipCard = FlipCard;

var FlipCardTrigger = function FlipCardTrigger(props) {
  var _useFlipCardContext = (0, _context.useFlipCardContext)(),
      getTriggerProps = _useFlipCardContext.getTriggerProps;

  var child = React.Children.only(props.children);
  return /*#__PURE__*/React.cloneElement(child, getTriggerProps(child.props, child.ref));
};

exports.FlipCardTrigger = FlipCardTrigger;
//# sourceMappingURL=flip-card.js.map