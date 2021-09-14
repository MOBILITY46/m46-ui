function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Button, HeartIcon } from '../';
export default {
  title: 'Components/Button',
  component: Button,
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

var Template = args => {
  console.log('args', args);
  return /*#__PURE__*/React.createElement(Button, args);
};

export var Default = args => /*#__PURE__*/React.createElement(Template, args, "Default");
export var WithLeftIcon = args => /*#__PURE__*/React.createElement(Template, _extends({}, args, {
  leftIcon: /*#__PURE__*/React.createElement(HeartIcon, null)
}), "Left icon");
export var WithRightIcon = args => /*#__PURE__*/React.createElement(Template, _extends({}, args, {
  rightIcon: /*#__PURE__*/React.createElement(HeartIcon, null)
}), "Right icon");
//# sourceMappingURL=button.stories.js.map