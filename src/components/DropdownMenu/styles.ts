import styled from "styled-components";

export const DropdownMenuCointainer = styled.div`
  position: relative;
  .dropdownToggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 4px;
    cursor: pointer;
    padding: 12px 32px;
  }

  .dropdownMenus {
    padding-top: 24px;
    padding-bottom: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);
    border-radius: 16px;
    position: absolute;
    min-width: 280px;
    left: 0;
    z-index: 1001;

    .dropdownMenuItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 10px;
      padding: 16px;
      cursor: pointer;
      &:hover {
        background-color: #f9fafb;
      }

      .menuTitle {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #101828;
      }
      .menuSubtitle {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #98a2b3;
      }
    }
  }
`;
