import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Tabs } from '../';
export default {
  title: 'Components/Tabs',
  component: Tabs,
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
var tabs = {
  'Tab 1': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.200",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 2': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.300",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 3': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.400",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 4': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.500",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 5': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.600",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 6': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "red.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 7': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 8': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 9': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  }),
  'Tab 10': /*#__PURE__*/React.createElement(Box, {
    m: 1,
    backgroundColor: "purple.700",
    h: "300px",
    p: 2,
    borderRadius: 4
  })
};
export var Example = args => {
  var props = Object.assign({}, args, {
    tabs
  });
  return /*#__PURE__*/React.createElement(Tabs, props);
};
//# sourceMappingURL=tabs.stories.js.map