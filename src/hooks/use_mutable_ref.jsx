import { useEffect, useRef } from "react";

function useMutableRef(ref) {
  const newRef = useRef(null);

  useEffect(() => {
    if (ref && typeof ref === "function") ref(newRef.current);
  }, [ref]);

  return newRef;
}

export { useMutableRef };
