export function callAllHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function func(event) {
    fns.some(fn => {
      fn === null || fn === void 0 ? void 0 : fn(event);
      return event === null || event === void 0 ? void 0 : event.defaultPrevented;
    });
  };
}
//# sourceMappingURL=functions.js.map