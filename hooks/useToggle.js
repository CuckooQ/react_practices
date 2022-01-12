import { useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggle(newValue) {
    const updatedValue = typeof value === "boolean" ? !value : newValue;
    setValue(updatedValue);
  }

  return [value, toggle];
}

export default useToggle;
