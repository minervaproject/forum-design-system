import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import { Box } from "./box";

const displayName = "Flex";

const useStyles = createUseStyles({
  root: (props) => ({
    display: props.inline ? "inline-flex" : "flex",
    flexDirection: props.direction,
    flexFlow: props.flow,
    flexWrap: props.wrap,
  }),
});

const Flex = forwardRef((props, ref) => {
  const { children, className, cname = displayName, ...rest } = props;
  const css = useStyles(props);

  return (
    <Box className={clsx(css.root, className)} cname={cname} ref={ref} {...rest}>
      {children}
    </Box>
  );
});
Flex.displayName = displayName;

export { Flex };
