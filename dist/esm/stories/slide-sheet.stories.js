function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { useState } from 'react';
import { controlDisabled } from './props';
import { SlideSheet, Button } from '../';
export default {
  title: 'Components/SlideSheet',
  component: SlideSheet,
  argTypes: _objectSpread({}, controlDisabled)
};
var style = {
  content: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'blue',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  }
};
export var Example = args => {
  var [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    mr: 3,
    onClick: () => setShow(!show)
  }, "toggle"), show && /*#__PURE__*/React.createElement(SlideSheet, _extends({
    isOpen: show,
    onClose: () => setShow(false)
  }, args), /*#__PURE__*/React.createElement("div", {
    style: style.content
  }, "Hello, World!")));
};
//# sourceMappingURL=slide-sheet.stories.js.map