import styled from 'styled-components'

export const ReadMoreWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat';
  display: flex;
  word-break: break-word;
  padding: 0 16px;
  margin-top: 16px;
  div {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }

  .blur {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
  }
`
