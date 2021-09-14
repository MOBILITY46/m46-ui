import ResizeObserver from 'resize-observer-polyfill';
import { useCallbackRef } from './use-callback-ref';
import { useState, useLayoutEffect } from 'react';
export function useMeasure() {
  var [element, attachRef] = useCallbackRef();
  var [bounds, setBounds] = useState({});
  useLayoutEffect(() => {
    function onResize(_ref) {
      var [entry] = _ref;
      var {
        width,
        height
      } = entry.contentRect;
      setBounds({
        height,
        width
      });
    }

    var observer = new ResizeObserver(onResize);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);
  return {
    bounds,
    ref: attachRef
  };
}
//# sourceMappingURL=use-measure.js.map