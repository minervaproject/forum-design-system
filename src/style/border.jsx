import { isPlainObject } from "lodash-es";

import { palette } from "./variables";

function border(props) {
  const { borderBottom, borderLeft, borderRight, borderTop } = props;
  return {
    border: makeBorderObj(props.border),
    borderBottom: makeBorderObj(borderBottom),
    borderLeft: makeBorderObj(borderLeft),
    borderRight: makeBorderObj(borderRight),
    borderTop: makeBorderObj(borderTop),
  };
}

function makeBorderObj(prop) {
  if (prop === true) return { color: palette.black, style: "solid", width: 1 };
  if (isPlainObject(prop)) {
    const { color = "black", style = "solid", width = 1 } = prop;
    return { color: palette[color], style, width };
  }
  return undefined;
}

export { border };
