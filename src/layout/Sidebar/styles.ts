import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 64px;
  height: 622px;
  background: #ffffff;
  border: 2px solid #e4e7ec;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 28px 8px 52px;
  gap: 10px;

  .menuList {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    .menuItem {
      width: 45px;
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 15px;

      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
      }

      &.disabled {
        background: #e4e7ec;
        border-radius: 10px;
      }
    }
  }

  .socialList {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    .socialItem {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fcfcfd;
      border: 1px solid #e4e7ec;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;
