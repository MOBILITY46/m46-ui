var _excluded = ["children", "isOpen", "id", "debug", "maskClosable"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { animate, AnimatePresence, useDragControls, useMotionValue } from 'framer-motion';
import { Wrapper, DraggableContainer, Sheet, Content, Mask } from './styles';
export var SlideSheetComponent = _ref => {
  var {
    children,
    isOpen,
    id,
    debug,
    maskClosable
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var sheetY = useMotionValue(0);
  var [sheetHeight, setSheetHeight] = useState(0);
  var controls = useDragControls();
  var sheetRef = useRef(null);

  var handleClose = () => {
    props.onClose();
  };

  useEffect(() => {
    var _sheetRef$current$off, _sheetRef$current;

    setSheetHeight((_sheetRef$current$off = sheetRef === null || sheetRef === void 0 ? void 0 : (_sheetRef$current = sheetRef.current) === null || _sheetRef$current === void 0 ? void 0 : _sheetRef$current.offsetHeight) !== null && _sheetRef$current$off !== void 0 ? _sheetRef$current$off : 0);
  }, [sheetRef, isOpen]);
  var maxDrag = sheetHeight / 3;

  var removeToDom = () => {
    if (typeof window !== 'undefined') {
      var _document, _document$getElementB, _document$getElementB2;

      (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.call(_document, id)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.remove();
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AnimatePresence, {
    onExitComplete: () => removeToDom()
  }, isOpen && /*#__PURE__*/React.createElement(Wrapper, {
    transition: {
      duration: 0.2
    },
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }, /*#__PURE__*/React.createElement(DraggableContainer, {
    id: "draggable-container",
    ref: sheetRef,
    style: {
      y: sheetY
    },
    drag: "y",
    dragControls: controls,
    variants: {
      visible: {
        y: 0
      },
      hidden: {
        y: sheetHeight
      }
    },
    dragConstraints: {
      top: 0,
      bottom: sheetHeight
    },
    onDragStart: (e, info) => {
      var _sheetRef$current2;

      if (!(sheetRef !== null && sheetRef !== void 0 && (_sheetRef$current2 = sheetRef.current) !== null && _sheetRef$current2 !== void 0 && _sheetRef$current2.contains(e.target))) {
        // @ts-ignore
        controls === null || controls === void 0 ? void 0 : controls.componentControls.forEach(entry => {
          entry.stop(e, info);
        });
      }
    },
    onDragEnd: () => {
      if (sheetY.get() < maxDrag) {
        animate(sheetY, 0, {
          type: 'spring'
        });
      } else {
        animate(sheetY, sheetHeight, {
          type: 'spring'
        });
        setTimeout(() => {
          handleClose();
        }, 500);
      }
    }
  }, /*#__PURE__*/React.createElement(Mask, _extends({
    transition: {
      duration: 0.2
    },
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 0.2
    },
    exit: {
      opacity: 0
    },
    debug: debug
  }, maskClosable ? {
    onTap: () => {
      animate(sheetY, sheetHeight, {
        type: 'spring'
      });
      handleClose();
    }
  } : {})), /*#__PURE__*/React.createElement(Sheet, {
    initial: {
      y: '100%'
    },
    animate: {
      y: 0
    },
    exit: {
      y: '100%'
    },
    transition: {
      duration: 0.2
    }
  }, /*#__PURE__*/React.createElement(Content, null, children)))), !isOpen && /*#__PURE__*/React.createElement("div", null)));
};
//# sourceMappingURL=component.js.map