"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideSheetComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _framerMotion = require("framer-motion");

var _styles = require("./styles");

var _excluded = ["children", "isOpen", "id", "debug", "maskClosable"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SlideSheetComponent = function SlideSheetComponent(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      id = _ref.id,
      debug = _ref.debug,
      maskClosable = _ref.maskClosable,
      props = _objectWithoutProperties(_ref, _excluded);

  var sheetY = (0, _framerMotion.useMotionValue)(0);

  var _useState = (0, React.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      sheetHeight = _useState2[0],
      setSheetHeight = _useState2[1];

  var controls = (0, _framerMotion.useDragControls)();
  var sheetRef = (0, React.useRef)(null);

  var handleClose = function handleClose() {
    props.onClose();
  };

  (0, React.useEffect)(function () {
    var _sheetRef$current$off, _sheetRef$current;

    setSheetHeight((_sheetRef$current$off = sheetRef === null || sheetRef === void 0 ? void 0 : (_sheetRef$current = sheetRef.current) === null || _sheetRef$current === void 0 ? void 0 : _sheetRef$current.offsetHeight) !== null && _sheetRef$current$off !== void 0 ? _sheetRef$current$off : 0);
  }, [sheetRef, isOpen]);
  var maxDrag = sheetHeight / 3;

  var removeToDom = function removeToDom() {
    if (typeof window !== 'undefined') {
      var _document, _document$getElementB, _document$getElementB2;

      (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB.call(_document, id)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.remove();
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    onExitComplete: function onExitComplete() {
      return removeToDom();
    }
  }, isOpen && /*#__PURE__*/React.createElement(_styles.Wrapper, {
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
  }, /*#__PURE__*/React.createElement(_styles.DraggableContainer, {
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
    onDragStart: function onDragStart(e, info) {
      var _sheetRef$current2;

      if (!(sheetRef !== null && sheetRef !== void 0 && (_sheetRef$current2 = sheetRef.current) !== null && _sheetRef$current2 !== void 0 && _sheetRef$current2.contains(e.target))) {
        // @ts-ignore
        controls === null || controls === void 0 ? void 0 : controls.componentControls.forEach(function (entry) {
          entry.stop(e, info);
        });
      }
    },
    onDragEnd: function onDragEnd() {
      if (sheetY.get() < maxDrag) {
        (0, _framerMotion.animate)(sheetY, 0, {
          type: 'spring'
        });
      } else {
        (0, _framerMotion.animate)(sheetY, sheetHeight, {
          type: 'spring'
        });
        setTimeout(function () {
          handleClose();
        }, 500);
      }
    }
  }, /*#__PURE__*/React.createElement(_styles.Mask, _extends({
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
    onTap: function onTap() {
      (0, _framerMotion.animate)(sheetY, sheetHeight, {
        type: 'spring'
      });
      handleClose();
    }
  } : {})), /*#__PURE__*/React.createElement(_styles.Sheet, {
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
  }, /*#__PURE__*/React.createElement(_styles.Content, null, children)))), !isOpen && /*#__PURE__*/React.createElement("div", null)));
};

exports.SlideSheetComponent = SlideSheetComponent;
//# sourceMappingURL=component.js.map