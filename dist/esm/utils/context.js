import * as React from 'react';

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var {
    errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    name
  } = options;
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