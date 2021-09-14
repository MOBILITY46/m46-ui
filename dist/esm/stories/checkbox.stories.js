import React from 'react';
import { VStack } from '@chakra-ui/react';
import { Checkbox } from '../';
export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

var Basic = args => /*#__PURE__*/React.createElement(Checkbox, args);

export var Variants = () => {
  return /*#__PURE__*/React.createElement(VStack, {
    align: "flex-start",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Basic, {
    size: '24px'
  }), /*#__PURE__*/React.createElement(Basic, {
    size: '48px'
  }), /*#__PURE__*/React.createElement(Basic, {
    size: '94px'
  }), /*#__PURE__*/React.createElement(Basic, {
    size: '188px'
  }));
};
//# sourceMappingURL=checkbox.stories.js.map