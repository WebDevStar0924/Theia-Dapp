import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 31 31" {...props} fill={"none"}>
      <path
        d="M3.5813 15.7329C3.5813 23.0979 9.46201 29.0685 16.7162 29.0685C23.9705 29.0685 29.8512 23.0979 29.8512 15.7329C29.8512 8.36778 23.9705 2.39722 16.7162 2.39722C11.3678 2.39722 6.76601 5.64275 4.71722 10.2998"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <path
        d="M19.8783 9.60699C18.9334 9.10317 17.8576 8.81812 16.7162 8.81812C12.9548 8.81812 9.90552 11.914 9.90552 15.7329C9.90552 19.5518 12.9548 22.6477 16.7162 22.6477C20.4777 22.6477 23.5269 19.5518 23.5269 15.7329C23.5269 15.0965 23.4423 14.4801 23.2837 13.8948"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <ellipse
        cx="3.82456"
        cy="13.0161"
        rx="2.67564"
        ry="2.71652"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <ellipse
        cx="21.8243"
        cy="11.5346"
        rx="2.67564"
        ry="2.71652"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <ellipse
        cx="21.3379"
        cy="3.13787"
        rx="1.70268"
        ry="1.72869"
        fill="white"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <ellipse
        cx="10.6351"
        cy="18.943"
        rx="1.70268"
        ry="1.72869"
        fill="white"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
      <ellipse
        cx="21.8243"
        cy="27.8334"
        rx="1.70268"
        ry="1.72869"
        fill="white"
        stroke={props.stroke}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default Icon;
