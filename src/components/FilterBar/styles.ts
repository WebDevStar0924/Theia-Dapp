import styled from 'styled-components'

export const FilterBarWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e4e7ec;
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-gap: 24px;
  max-width: 720px;

  .saveBtn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 40px;
    height: 40px;
    border: 2px solid #e4e7ec;
    filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
    border-radius: 200px;

    &:hover {
      border: 2px solid #677172;
      filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
      border-radius: 200px;
      color: #101828;
      background: linear-gradient(
        90.04deg,
        #677172 0%,
        #6e8082 28.16%,
        #b9b5b5 53.98%,
        #78726b 79.6%,
        #5f5e64 104.68%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    &.active {
      background: #101828;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 200px;
      border-color: #101828;
      color: #ffffff;
      &:hover {
        color: #101828 !important;
        background: #fff !important;
        -webkit-background-clip: inherit;
        -webkit-text-fill-color: inherit;
        background-clip: inherit;
        text-fill-color: inherit;
      }
    }
  }
`
