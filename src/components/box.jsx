import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import { useHtmlAttrs } from "../hooks";
import { border, palette, shadow, spacing } from "../style";

const displayName = "Box";

const useStyles = createUseStyles({
  root: (props) => ({
    ...border(props),
    ...spacing(props),
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    backgroundColor: props.bgColor ? palette[props.bgColor] : undefined,
    borderRadius: props.borderRadius,
    boxShdaow: props.shadow && shadow[props.shadow],
    color: props.color ? palette[props.color] : undefined,
    display: props.inline ? "inline-block" : "block",
    height: props.fullHeight ? "100%" : undefined,
    justifyContent: props.justifyContent,
    justifySelf: props.justify,
    minHeight: 1,
    overflow: props.overflow,
    textOverflow: props.textOverflow,
    whiteSpace: props.whiteSpace,
  }),
});

const Box = forwardRef((props, ref) => {
  const {
    children,
    className,
    cname = displayName,
    htmlAttrs,
    name,
    onBlur,
    onClick,
    onContextMenu,
    onDoubleClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    style,
    role,
    value,
    title,
  } = props;
  const css = useStyles(props);
  const kebabbedHtmlAttrs = useHtmlAttrs(htmlAttrs);

  return (
    <div
      {...kebabbedHtmlAttrs}
      className={clsx(css.root, className)}
      cname={cname}
      name={name}
      onBlur={onBlur}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      ref={ref}
      role={role}
      title={title}
      value={value}
      style={style}
    >
      {children}
    </div>
  );
});
Box.displayName = displayName;

export { Box };
