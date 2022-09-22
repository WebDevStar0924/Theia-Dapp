import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 35 35" {...props}>
      <circle
        cx="17.5"
        cy="17.5"
        r="16.5"
        stroke="#D0D5DD"
        fill="#fff"
        strokeWidth="2"
      />
      <g opacity="0.7">
        <path
          d="M23.75 11.25L11.25 23.75"
          stroke="#475467"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 11.25L23.75 23.75"
          stroke="#475467"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Svg>
  );
};

export default Icon;
