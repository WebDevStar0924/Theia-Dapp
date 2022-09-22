import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props} fill="none">
      <path
        d="M1.64337 8.11561C1.64337 11.7744 4.77975 14.7404 8.64868 14.7404C12.5176 14.7404 15.654 11.7744 15.654 8.11561C15.654 4.45684 12.5176 1.49081 8.64868 1.49081C5.79618 1.49081 3.34188 3.10311 2.2492 5.41662"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <path
        d="M10.3351 5.0724C9.83117 4.82212 9.25741 4.68051 8.64868 4.68051C6.64257 4.68051 5.0163 6.21845 5.0163 8.11559C5.0163 10.0127 6.64257 11.5507 8.64868 11.5507C10.6548 11.5507 12.2811 10.0127 12.2811 8.11559C12.2811 7.79943 12.2359 7.49325 12.1513 7.2025"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <ellipse
        cx="1.77308"
        cy="6.76603"
        rx="1.42701"
        ry="1.3495"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <ellipse
        cx="11.373"
        cy="6.03001"
        rx="1.42701"
        ry="1.3495"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <ellipse
        cx="11.1136"
        cy="1.85877"
        rx="0.908095"
        ry="0.85877"
        fill="white"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <ellipse
        cx="5.40535"
        cy="9.71039"
        rx="0.908095"
        ry="0.85877"
        fill="white"
        stroke={props.fill}
        strokeWidth="0.5"
      />
      <ellipse
        cx="11.3729"
        cy="14.1269"
        rx="0.908095"
        ry="0.85877"
        fill="white"
        stroke={props.fill}
        strokeWidth="0.5"
      />
    </Svg>
  );
};

export default Icon;
