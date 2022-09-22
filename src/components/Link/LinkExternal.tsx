import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      <OpenNewIcon color="link" mr="4px" />
      {children}
    </Link>
  );
};

export default LinkExternal;
