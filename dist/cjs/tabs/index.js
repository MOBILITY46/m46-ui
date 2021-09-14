"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _styles = require("./styles");

var _theme = require("../theme");

var _pager = require("./pager");

var _excluded = ["colorScheme"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = function Tabs(_ref) {
  var _ref$colorScheme = _ref.colorScheme,
      colorScheme = _ref$colorScheme === void 0 ? 'primary' : _ref$colorScheme,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, React.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var childRefs = (0, React.useRef)(new Map());
  var tabListRef = (0, React.useRef)(null);

  var _useState3 = (0, React.useState)({
    left: 0,
    right: 0,
    hasValue: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      slider = _useState4[0],
      setSlider = _useState4[1];

  var _useMeasure = (0, _utils.useMeasure)(),
      bounds = _useMeasure.bounds,
      ref = _useMeasure.ref;

  var _useState5 = (0, React.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      scrollOffset = _useState6[0],
      setScrollOffset = _useState6[1];

  var tabNames = Object.keys(props.tabs || {});
  (0, React.useEffect)(function () {
    var target = childRefs.current.get(value);
    var container = tabListRef.current;

    if (target) {
      var cRect = container === null || container === void 0 ? void 0 : container.getBoundingClientRect(); // when container is `display: none`, width === 0.
      // ignore this case

      if (!cRect || cRect.width === 0) {
        return;
      }

      var tRect = target.getBoundingClientRect();
      var left = tRect.left - cRect.left;
      var right = cRect.right - tRect.right;
      var _slider = {
        hasValue: true,
        left: left,
        right: right
      };
      setSlider(_slider);
    }
  }, []);
  (0, React.useEffect)(function () {
    var target = childRefs.current.get(value);
    var container = tabListRef.current;

    if (target) {
      var cRect = container === null || container === void 0 ? void 0 : container.getBoundingClientRect(); // when container is `display: none`, width === 0.
      // ignore this case

      if (!cRect || cRect.width === 0) {
        return;
      }

      var tRect = target.getBoundingClientRect();
      var left = tRect.left - cRect.left;
      var right = cRect.right - tRect.right;
      var _slider2 = {
        hasValue: true,
        left: left,
        right: right
      };

      if (value === 0) {
        setSlider(_slider2);
        return;
      }

      if (right < tRect.width && value > 1) {
        _slider2.left -= tRect.width;
        _slider2.right += tRect.width;
        setScrollOffset(function (o) {
          return o -= tRect.width;
        });
      } else if (left < tRect.width) {
        _slider2.left += tRect.width;
        _slider2.right -= tRect.width;
        setScrollOffset(function (o) {
          return o += tRect.width;
        });
      }

      console.log(scroll);
      setSlider(_slider2);
    }
  }, [value, bounds]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_styles.TabContainer, {
    ref: ref
  }, /*#__PURE__*/React.createElement(_styles.TabList, {
    ref: tabListRef
  }, /*#__PURE__*/React.createElement(_styles.TabItemWrapper, {
    animate: {
      x: scrollOffset
    }
  }, (tabNames || []).map(function (tab, i) {
    return /*#__PURE__*/React.createElement(_styles.TabItem, {
      color: colorScheme,
      key: tab,
      isActive: i === value,
      transition: {
        duration: 0.3
      },
      whileTap: {
        backgroundColor: _theme.colors['gray']['400']
      },
      ref: function ref(el) {
        return childRefs.current.set(i, el);
      },
      onTap: function onTap() {
        return setValue(i);
      }
    }, tab);
  })), slider.hasValue && /*#__PURE__*/React.createElement(_styles.Slider, {
    color: colorScheme,
    transition: {
      tension: 190,
      friction: 70,
      mass: 0.4
    },
    initial: false,
    animate: {
      left: slider.left,
      right: slider.right
    }
  }))), /*#__PURE__*/React.createElement(_pager.Pager, {
    value: value
  }, tabNames.map(function (tab) {
    return /*#__PURE__*/React.createElement("li", {
      key: tab
    }, props.tabs[tab]);
  })));
};

exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map