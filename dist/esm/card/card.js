var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from '@emotion/styled';
import { MotionBox } from '../motion';
var CardWrapper = styled(MotionBox)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: minmax(min-content, 2rem) auto minmax(min-content, 2rem);\n  overflow: hidden;\n  width: 320px;\n  height: 420px;\n  margin: 1rem;\n  transform-style: preserve-3d;\n\n  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n"])));
var BodyWrapper = styled(MotionBox)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* for Internet Explorer, Edge */\n  scrollbar-width: none; /* for Firefox */\n  overflow-y: scroll;\n  padding: 10px;\n  background-color: #fff;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));
var HeaderWrapper = styled(MotionBox)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n"])));
var FooterWrapper = styled(MotionBox)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5;\n"])));
export var Card = props => {
  return /*#__PURE__*/React.createElement(CardWrapper, {
    role: "card",
    drag: true,
    dragConstraints: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(HeaderWrapper, null, props.content.header), /*#__PURE__*/React.createElement(BodyWrapper, null, props.content.body), /*#__PURE__*/React.createElement(FooterWrapper, null, props.content.footer));
};
//# sourceMappingURL=card.js.map