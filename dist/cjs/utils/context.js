"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
function createContext() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$errorMessage = options.errorMessage,
      errorMessage = _options$errorMessage === void 0 ? 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider' : _options$errorMessage,
      name = options.name;
  var Context = /*#__PURE__*/React.createContext(undefined);
  Context.displayName = name;

  function useContext() {
    var context = React.useContext(Context);

    if (!context) {
      var _Error$captureStackTr;

      var error = new Error(errorMessage);
      error.name = 'ContextError';
      (_Error$captureStackTr = Error.captureStackTrace) === null || _Error$captureStackTr === void 0 ? void 0 : _Error$captureStackTr.call(Error, error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}
//# sourceMappingURL=context.js.map