import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

function useUpdate(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

export default useUpdate;
