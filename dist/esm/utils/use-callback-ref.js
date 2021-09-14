import { useState, useCallback } from 'react';
export function useCallbackRef() {
  var [ref, setRef] = useState(null);
  var fn = useCallback(node => {
    setRef(node);
  }, []);
  return [ref, fn];
}
//# sourceMappingURL=use-callback-ref.js.map