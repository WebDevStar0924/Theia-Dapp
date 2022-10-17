import styled from 'styled-components'

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 106px;
  height: 40px;
  align-items: center;
  background: #e4e7ec;
  border-radius: 30px;
  padding: 3px 2px 3px 2px;
  &.active {
    background: #1d2939;
  }

  .switchItemDark {
    display: flex;
    align-items: center;
    color: #101828;
    width: 53px;
    height: 33px;
    cursor: pointer;
    border-radius: 20px;
    justify-content: center;
    &.active {
      background: white;
    }
  }
  .switchItemLight {
    align-items: center;
    display: flex;
    color: #101828;
    width: 53px;
    height: 33px;
    cursor: pointer;
    justify-content: center;
    border-radius: 20px;
    &.active {
      background: #1d2939;
      color: #ffffff;
    }
  }
`
