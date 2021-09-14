import * as React from 'react';
import { PagerContainer, PagerAnimtedContainer, Page } from './styles';
export function Pager(_ref) {
  var {
    children,
    value
  } = _ref;
  return /*#__PURE__*/React.createElement(PagerContainer, null, /*#__PURE__*/React.createElement(PagerAnimtedContainer, {
    transition: {
      tension: 190,
      friction: 70,
      mass: 0.4
    },
    initial: false,
    animate: {
      x: value * -100 + '%'
    }
  }, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement(Page, {
    key: i,
    "aria-hidden": value !== i,
    tabIndex: value === i ? 0 : -1
  }, child))));
}
//# sourceMappingURL=pager.js.map