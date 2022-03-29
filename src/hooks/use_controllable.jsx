import { useState } from "react";

function useControllable(controlledValue, initialValue, changeHandler) {
  const [uncontrolledValue, setUncontrolledValue] = useState(initialValue);
  const effectiveValue = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  return [effectiveValue, setValue];

  function setValue(newValue, event) {
    setUncontrolledValue(newValue);
    if (changeHandler) changeHandler(newValue, event);
  }
}

export { useControllable };
