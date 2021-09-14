"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotionButton = exports.MotionFlex = exports.MotionBox = void 0;

var _layout = require("@chakra-ui/layout");

var _react = require("@chakra-ui/react");

var _framerMotion = require("framer-motion");

var MotionBox = (0, _framerMotion.motion)(_layout.Box);
exports.MotionBox = MotionBox;
var MotionFlex = (0, _framerMotion.motion)(_layout.Flex);
exports.MotionFlex = MotionFlex;
var MotionButton = (0, _framerMotion.motion)(_react.Button);
exports.MotionButton = MotionButton;
//# sourceMappingURL=index.js.map