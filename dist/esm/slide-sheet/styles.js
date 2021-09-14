var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export var Wrapper = styled(motion.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n"])));
export var DraggableContainer = styled(motion.div)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n"])));
export var Sheet = styled(motion.div)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n"])));
export var Content = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  position: relative;\n  overflow: hidden;\n"])));
export var Mask = styled(motion.div)(_ref => {
  var {
    debug
  } = _ref;
  return "\n  ".concat(debug ? "\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);\n    " : '', "\n");
});
//# sourceMappingURL=styles.js.map