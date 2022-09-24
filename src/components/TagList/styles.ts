import styled from 'styled-components'

export const TagItemWrapper = styled.div`
  cursor: pointer;
  padding: 5px 16px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #f2f4f7;
  border-radius: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`

export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
`
