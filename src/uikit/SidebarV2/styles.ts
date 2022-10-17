import styled from 'styled-components'

export const SidebarV2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  height: 622px;
  background: #ffffff;
  padding: 28px 12px 52px;
  gap: 10px;

  .menuList {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    .menuItem {
      width: 56px;
      height: 56px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;

      &:hover {
        background: #f2f4f7;
      }

      &.disabled {
        background: #e4e7ec;
        border-radius: 10px;
      }
      &.active {
        svg {
          path {
            fill: black;
          }
        }
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
`
