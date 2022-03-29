import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import { useHtmlAttrs } from "../hooks";
import { border, palette, shadow, space, spacing } from "../style";

const displayName = "Icon";

const sizeMap = { lg: space[4], md: space[3], sm: space[2] };

const defaultViewbox = "0 0 16 16";

const useStyles = createUseStyles({
  root: (props) => {
    const { bgColor, color, round, width, height, size = "md" } = props;
    return {
      ...border(props),
      ...spacing(props),
      background: bgColor ? palette[bgColor] : undefined,
      borderRadius: round ? "50%" : space[1],
      boxShdaow: props.shadow && shadow[props.shadow],
      fill: color ? palette[color] || color : "inherit",
      height: height || sizeMap[size],
      width: width || sizeMap[size],
    };
  },
});

const Icon = forwardRef((props, ref) => {
  const {
    style = {},
    children,
    className,
    viewBox = defaultViewbox,
    cname = displayName,
    htmlAttrs,
  } = props;
  const kebabbedHtmlAttrs = useHtmlAttrs(htmlAttrs);
  const css = useStyles(props);
  return (
    <svg
      className={clsx(css.root, className)}
      cname={cname}
      style={style}
      ref={ref}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...kebabbedHtmlAttrs}
    >
      {children}
    </svg>
  );
});
Icon.displayName = displayName;

export { Icon };
