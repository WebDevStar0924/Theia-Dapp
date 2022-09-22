import React, { useState } from "react";
import { DropdownMenuCointainer } from "./styles";
import { DropdownMenuProps } from "./types";

export default function DropdownMenu(props: DropdownMenuProps) {
  const { header, menulist } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <DropdownMenuCointainer
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div className={"dropdownToggle"}>{header}</div>
      {showMenu && (
        <div className={"dropdownMenus"}>
          {menulist.map((item, idx) => (
            <div
              className={"dropdownMenuItem"}
              onClick={() => item.onClick && item.onClick()}
              key={`dropdown_${idx}`}
            >
              {item.startIcon && item.startIcon}
              <div>
                <div className={"menuTitle"}>{item.text}</div>
                {item.subtitle && (
                  <div className={"menuSubtitle"}>{item.subtitle}</div>
                )}
              </div>
              {item.endIcon && item.endIcon}
            </div>
          ))}
        </div>
      )}
    </DropdownMenuCointainer>
  );
}
