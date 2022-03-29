import { kebabCase } from "lodash-es";
import { useMemo } from "react";

function useHtmlAttrs(attrs) {
  return useMemo(() => {
    if (!attrs) return {};

    const kebabbedAttrs = {};
    Object.entries(attrs).forEach(([key, val]) => {
      kebabbedAttrs[kebabCase(key)] = val;
    });
    return kebabbedAttrs;
  }, [attrs]);
}

export { useHtmlAttrs };
