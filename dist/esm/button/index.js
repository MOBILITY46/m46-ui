var _excluded = ["colorScheme", "variant", "rounded"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * A Chakra button with some overridden values.
 */
export var Button = _ref => {
  var {
    colorScheme = 'primary',
    variant = 'solid',
    rounded = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var p = Object.assign({}, props, {
    variant,
    fontSize: '1.125rem',
    borderRadius: rounded ? '10px' : 0,
    fontWeight: 500,
    colorScheme
  });
  return /*#__PURE__*/React.createElement(ChakraButton, p);
};
//# sourceMappingURL=index.js.map