import clsx from "clsx";
import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import { useControllable, useHtmlAttrs, useMutableRef } from "../hooks";
import { palette, space, spacing } from "../style";

import { Box } from "./box";
import { Flex } from "./flex";

const displayName = "Input";

const widthMap = { fullWidth: "100%", xl: 500, lg: 240, md: 180, sm: 130, xs: 70 };

const useStyles = createUseStyles({
  input: (props) => ({
    background: "transparent",
    border: "none",
    cursor: props.readOnly && "inherit",
    flexGrow: 1,
    minWidth: 0,
    outline: "none",
    padding: space[3],
  }),
  root: (props) => ({
    ...spacing(props),
    alignItems: "stretch",
    background: props.readOnly ? palette.blackTint97 : palette.white,
    border: { color: palette.blackTint90, style: "solid", width: 1 },
    borderRadius: 2,
    display: "inline-flex",
    height: space[8],
    width: props.width || (props.fullWidth && "100%") || widthMap[props.size ?? "md"],
  }),
});

const Input = forwardRef((props, ref) => {
  const {
    autoFocus,
    autoSelect,
    className,
    cname = displayName,
    disabled,
    focused: controlledFocused,
    htmlAttrs,
    initialValue = "",
    max,
    min,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    placeholder,
    postfix,
    prefix,
    readOnly,
    rootRef,
    step,
    spellCheck,
    type,
    value: controlledValue,
    ...rest
  } = props;
  const kebabbedHtmlAttrs = useHtmlAttrs(htmlAttrs);
  const [focused, setFocused] = useControllable(controlledFocused, false, onChangeFocus);
  const [value, setValue] = useControllable(controlledValue, initialValue, onChange);
  const css = useStyles({ ...props, focused });
  const mutableRef = useMutableRef(ref);

  return (
    <Box className={clsx(css.root, className)} cname={cname} ref={rootRef} {...rest}>
      {prefix ? (
        <Flex alignItems="center" onClick={handleClickFix} pr={3}>
          {prefix}
        </Flex>
      ) : null}
      <input
        autoFocus={autoFocus}
        className={clsx("body-s", css.input)}
        disabled={disabled}
        max={max}
        min={min}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={mutableRef}
        spellCheck={spellCheck}
        step={step}
        type={type}
        value={value === null ? undefined : value}
        {...kebabbedHtmlAttrs}
      />
      {postfix ? (
        <Flex alignItems="center" onClick={handleClickFix} pr={3}>
          {postfix}
        </Flex>
      ) : null}
    </Box>
  );

  function handleBlur(event) {
    setFocused(false, event);
  }

  function handleChange(event) {
    setValue(event.currentTarget.value, event);
  }

  function handleClickFix() {
    mutableRef.current?.focus();
  }

  function handleFocus(event) {
    setFocused(true, event);
    if (autoSelect) mutableRef.current?.select();
  }

  function handleKeyDown(event) {
    onKeyDown?.(event.key, event);
  }

  function onChangeFocus(newFocus, event) {
    if (newFocus) onFocus?.(value, event);
    else onBlur?.(value, event);
  }
});
Input.displayName = displayName;

export { Input };
