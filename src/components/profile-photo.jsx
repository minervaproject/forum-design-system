import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { createUseStyles } from "react-jss";

import { palette, spacing } from "../style";

import { Flex } from "./flex";
import { Text } from "./text";

const displayName = "ProfilePhoto";

const sizeDict = { xl: 100, lg: 48, md: 32, sm: 24 };
const textDict = { xl: "h2", lg: "body", md: "body-xs", sm: "body-xs" };

const useStyles = createUseStyles({
  img: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  root: (props) => ({
    ...spacing(props),
    background: `linear-gradient(${palette.blackTint70}, ${palette.blackTint40})`,
    borderRadius: "50%",
    height: sizeDict[props.size || "md"],
    minHeight: sizeDict[props.size || "md"], // flex parents can mess with this
    minWidth: sizeDict[props.size || "md"], // flex parents can mess with this
    overflow: "hidden",
    width: sizeDict[props.size || "md"],
  }),
});

const ProfilePhoto = forwardRef((props, ref) => {
  const { className, cname = displayName, initials, size = "md", src, ...rest } = props;
  const css = useStyles(props);
  const [error, setError] = useState(false);

  return (
    <Flex
      alignItems="center"
      className={clsx(css.root, className)}
      cname={cname}
      inline
      justifyContent="center"
      ref={ref}
      {...rest}
    >
      {error || !src || (src.includes("default-avatar") && initials) ? (
        <Text color="white" kind={textDict[size]}>
          {initials}
        </Text>
      ) : (
        <img
          alt={initials}
          className={css.img}
          onError={handleError}
          src={`${window.Settings.s3PicturesBaseUrl}${src}`}
        />
      )}
    </Flex>
  );

  function handleError() {
    setError(true);
  }
});
ProfilePhoto.displayName = displayName;

export { ProfilePhoto };
