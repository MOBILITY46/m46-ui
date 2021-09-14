var _excluded = ["colorScheme"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useMeasure } from '../utils';
import { TabContainer, TabList, TabItem, Slider, TabItemWrapper } from './styles';
import { colors } from '../theme';
import { Pager } from './pager';
export var Tabs = _ref => {
  var {
    colorScheme = 'primary'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var [value, setValue] = useState(0);
  var childRefs = useRef(new Map());
  var tabListRef = useRef(null);
  var [slider, setSlider] = useState({
    left: 0,
    right: 0,
    hasValue: false
  });
  var {
    bounds,
    ref
  } = useMeasure();
  var [scrollOffset, setScrollOffset] = useState(0);
  var tabNames = Object.keys(props.tabs || {});
  useEffect(() => {
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
        left,
        right
      };
      setSlider(_slider);
    }
  }, []);
  useEffect(() => {
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
        left,
        right
      };

      if (value === 0) {
        setSlider(_slider2);
        return;
      }

      if (right < tRect.width && value > 1) {
        _slider2.left -= tRect.width;
        _slider2.right += tRect.width;
        setScrollOffset(o => o -= tRect.width);
      } else if (left < tRect.width) {
        _slider2.left += tRect.width;
        _slider2.right -= tRect.width;
        setScrollOffset(o => o += tRect.width);
      }

      console.log(scroll);
      setSlider(_slider2);
    }
  }, [value, bounds]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabContainer, {
    ref: ref
  }, /*#__PURE__*/React.createElement(TabList, {
    ref: tabListRef
  }, /*#__PURE__*/React.createElement(TabItemWrapper, {
    animate: {
      x: scrollOffset
    }
  }, (tabNames || []).map((tab, i) => /*#__PURE__*/React.createElement(TabItem, {
    color: colorScheme,
    key: tab,
    isActive: i === value,
    transition: {
      duration: 0.3
    },
    whileTap: {
      backgroundColor: colors['gray']['400']
    },
    ref: el => childRefs.current.set(i, el),
    onTap: () => setValue(i)
  }, tab))), slider.hasValue && /*#__PURE__*/React.createElement(Slider, {
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
  }))), /*#__PURE__*/React.createElement(Pager, {
    value: value
  }, tabNames.map(tab => /*#__PURE__*/React.createElement("li", {
    key: tab
  }, props.tabs[tab]))));
};
//# sourceMappingURL=index.js.map