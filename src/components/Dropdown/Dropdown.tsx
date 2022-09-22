import { useEffect, useRef, useState } from "react";
import ChevronDown from "../Svg/Icons/ChevronDown";
import ChevronUp from "../Svg/Icons/ChevronUp";
import { StyledWrapper } from "./styles";
import { dropdownProps } from "./types";

export default function Dropdown(props: dropdownProps) {
  const { label, activeItem, type, onChange, placeholder, dropdownlist, icon } =
    props;
  const [showMenus, setShowMenus] = useState(false);
  const [title, setTitle] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (evt) => {
    if (dropdownRef.current && !dropdownRef.current.contains(evt.target)) {
      setShowMenus(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <StyledWrapper
      props={props}
      ref={dropdownRef}
      className={props.className ?? ""}
    >
      {label && <div className={"label"}>{label}</div>}
      <div
        className={"inputWrapper"}
        style={{ background: showMenus ? "#344054" : "white" }}
        onClick={() => {
          setShowMenus(!showMenus);
        }}
      >
        {activeItem?.startIcon && activeItem.startIcon}
        <input
          value={title}
          placeholder={placeholder}
          readOnly
          style={{ color: showMenus ? "white" : "black" }}
        />
        {activeItem?.endIcon && activeItem.endIcon}
        {icon ? (
          icon
        ) : (
          <>
            {showMenus && type !== "disabled" ? (
              <ChevronUp style={{ fill: "white" }} />
            ) : (
              <ChevronDown />
            )}
          </>
        )}
      </div>

      {showMenus && type !== "disabled" && (
        <div className={"dropdown-menu"}>
          {dropdownlist.map((item) => (
            <div
              className={"dropdown-item"}
              key={`dropdown_${item.value}`}
              onClick={(e) => {
                e.preventDefault();
                onChange && onChange(item);
                setTitle(item.label);
                setShowMenus(false);
              }}
            >
              {item.startIcon && item.startIcon}
              <div>{item.label}</div>
              {item.endIcon && item.endIcon}
            </div>
          ))}
        </div>
      )}
    </StyledWrapper>
  );
}
