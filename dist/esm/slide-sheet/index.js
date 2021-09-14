var _excluded = ["id", "maskClosable"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { createPortal } from 'react-dom';
import { SlideSheetComponent } from './component';
export { Props as SlideSheetProps } from './types';
export var SlideSheet = _ref => {
  var {
    id = 'default',
    maskClosable = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var elementId = "m46-slide-sheet-".concat(id);

  if (typeof window !== 'undefined') {
    var _document, _document$getElementB, _document$getElementB2, _document2;

    (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.call(_document, elementId)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.remove();
    var containerDomNode = document.createElement('div');
    containerDomNode.setAttribute('id', elementId);
    (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.body.appendChild(containerDomNode);
    return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(SlideSheetComponent, _extends({
      id: elementId,
      maskClosable: maskClosable
    }, props)), containerDomNode);
  } else {
    return null;
  }
};
//# sourceMappingURL=index.js.map