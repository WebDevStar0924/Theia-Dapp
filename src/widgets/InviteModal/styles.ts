import styled from 'styled-components'

export const StyledInviteContent = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #101828;
    margin-top: 12px;
  }

  .description {
    font-family: 'Inter', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    margin-top: 16px;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 12px;
    margin-top: 32px;

    button {
      flex: 1;
    }
  }
`
