import * as React from 'react';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
var tickVariants = {
  pressed: isChecked => ({
    pathLength: isChecked ? 0.85 : 0.2
  }),
  checked: {
    pathLength: 1
  },
  unchecked: {
    pathLength: 0
  }
};
var boxVariants = {
  hover: {
    scale: 1.05,
    strokeWidth: 60
  },
  pressed: {
    scale: 0.95,
    strokeWidth: 35
  },
  checked: {
    stroke: '#1E90FF'
  },
  unchecked: {
    stroke: '#ddd',
    strokeWidth: 50
  }
};
export var Checkbox = props => {
  var [isChecked, setIsChecked] = useState(false);
  var pathLength = useMotionValue(0);
  var opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return /*#__PURE__*/React.createElement(Box, {
    w: props.size || '24px'
  }, /*#__PURE__*/React.createElement(motion.svg, {
    initial: false,
    animate: isChecked ? 'checked' : 'unchecked',
    whileHover: "hover",
    whileTap: "pressed",
    viewBox: "0 0 440 440",
    width: "100%",
    height: "100%",
    onClick: () => setIsChecked(!isChecked)
  }, /*#__PURE__*/React.createElement(motion.path, {
    d: "M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z",
    fill: "transparent",
    strokeWidth: "50",
    stroke: "#FF008C",
    variants: boxVariants
  }), /*#__PURE__*/React.createElement(motion.path, {
    d: "M 0 128.666 L 128.658 257.373 L 341.808 0",
    transform: "translate(54.917 88.332) rotate(-4 170.904 128.687)",
    fill: "transparent",
    strokeWidth: "65",
    stroke: "hsl(0, 0%, 100%)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    variants: tickVariants,
    style: {
      pathLength,
      opacity
    },
    custom: isChecked
  }), /*#__PURE__*/React.createElement(motion.path, {
    d: "M 0 128.666 L 128.658 257.373 L 341.808 0",
    transform: "translate(54.917 68.947) rotate(-4 170.904 128.687)",
    fill: "transparent",
    strokeWidth: "65",
    stroke: "#7700FF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    variants: tickVariants,
    style: {
      pathLength,
      opacity
    },
    custom: isChecked
  })));
};
//# sourceMappingURL=checkbox.js.map