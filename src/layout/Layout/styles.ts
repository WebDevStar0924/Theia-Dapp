import styled from 'styled-components'

export const LayoutWrapper = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ bgColor }) => bgColor};
  overflow-y: scroll;
  .contentView {
    display: flex;
    padding: 20px 24px 0 24px;
    height: 100%;
    overflow: hidden;
    max-width: 1440px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    .componentsView {
      height: 100%;
      overflow: auto;
      flex: 1;
    }
  }
`
