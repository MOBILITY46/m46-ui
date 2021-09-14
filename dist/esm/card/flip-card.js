import * as React from 'react';
import { Box as ChakraBox } from '@chakra-ui/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useFlipCard } from './use-flip-card';
import { useFlipCardContext, FlipCardContextProvider } from './context';

var Box = props => /*#__PURE__*/React.createElement(motion.div, {
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

export var FlipCard = props => {
  var context = useFlipCard();
  return /*#__PURE__*/React.createElement(FlipCardContextProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(ChakraBox, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(AnimatePresence, null, context.face === 'front' && /*#__PURE__*/React.createElement(Box, {
    key: 0
  }, props.front), context.face === 'back' && /*#__PURE__*/React.createElement(Box, {
    key: 1
  }, props.back))));
};
export var FlipCardTrigger = props => {
  var {
    getTriggerProps
  } = useFlipCardContext();
  var child = React.Children.only(props.children);
  return /*#__PURE__*/React.cloneElement(child, getTriggerProps(child.props, child.ref));
};
//# sourceMappingURL=flip-card.js.map