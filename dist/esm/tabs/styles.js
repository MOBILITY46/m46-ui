var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../theme';
import { Box } from '@chakra-ui/react';
export var TabContainer = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  box-shadow: none;\n  margin-bottom: 1rem;\n"])));
export var TabList = styled(Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n"])));
export var TabItem = styled(motion.button)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  min-width: 120px;\n  display: inline;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizelegibility;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: none;\n  cursor: pointer;\n  text-decoration: none;\n  border-width: initial;\n  border-style: none;\n  border-color: initial;\n  border-image: initial;\n  padding: 10px 1rem;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n  text-overflow: ellipsis;\n  line-height: 1.5;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: ", ";\n  margin: 0px;\n  overflow: hidden;\n"])), p => p.isActive ? colors[p.color]['600'] : colors[p.color]['500']);
export var TabItemWrapper = styled(motion(Box))(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n\n  ::-webkit-scrollbar {\n    width: 0 !important;\n    height: 0 !important;\n  }\n"])));
export var Slider = styled(motion(Box))(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 2px;\n  margin-left: 0;\n  margin-right: 0;\n  bottom: 0;\n  position: absolute;\n  background-color: #1e90ff;\n  background-color: ", ";\n"])), p => colors[p.color]['500']);
export var PagerContainer = styled(Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n"])));
export var PagerAnimtedContainer = styled(motion(Box))(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  flex-direction: row;\n  direction: ltr;\n  will-change: transform;\n  min-height: 0;\n  flex: 1;\n  display: flex;\n"])));
export var Page = styled.ul(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-self: stretch;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  height: 100%;\n  overflow: hidden;\n  outline: none;\n  li {\n    list-style: none;\n  }\n"])));
//# sourceMappingURL=styles.js.map