import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props} fill={"none"}>
      <path
        d="M1.20005 0.843751L9.00005 8.15625L16.8 0.843751"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
