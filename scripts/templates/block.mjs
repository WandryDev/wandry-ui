export const getBlockTemplate = () => {
  const blockFNName = "Page";

  return `"use client";
import * as React from "react";

const ${blockFNName} = (props) => {
  return ();
}

export default ${blockFNName};
`;
};
