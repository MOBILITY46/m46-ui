"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require("./checkbox");

Object.keys(_checkbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkbox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkbox[key];
    }
  });
});
//# sourceMappingURL=index.js.map