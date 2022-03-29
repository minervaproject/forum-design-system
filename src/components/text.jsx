import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import { palette, spacing } from "../style";

import { Box } from "./box";

const displayName = "Text";

const useStyles = createUseStyles({
  root: (props) => ({
    ...spacing(props),
    color: props.color ? palette[props.color] : undefined,
    display: props.inline ? "inline-block" : undefined,
    fontStyle: props.italic ? "italic" : undefined,
    fontWeight: props.bold ? 600 : undefined,
    overflow: props.overflow,
    textDecoration: props.underline ? "underline" : undefined,
    whiteSpace: props.pre ? "pre" : undefined,
  }),
});

const Text = forwardRef((props, ref) => {
  const { children, className, cname = displayName, kind = "body", ...rest } = props;
  const css = useStyles(props);

  return (
    <Box className={clsx(kind, css.root, className)} cname={cname} ref={ref} {...rest}>
      {children}
    </Box>
  );
});
Text.displayName = displayName;

export { Text };
