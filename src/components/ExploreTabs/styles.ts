import styled, { keyframes } from 'styled-components'

interface ListProps {
  direction?: 'vertical' | 'horizontal'
}

export const AllCollectivesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;

  .collectives {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .collectivesList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 60px;
  }
  .moreBtn {
    margin: 16px auto;
    font-family: 'Montserrat', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    text-transform: uppercase;
    color: #101828;
  }
`

const gradientAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const LoadingRoot = styled.div`
  animation: ${gradientAnimation} 2s linear infinite;
  background: linear-gradient(45deg, #298fee, #11c958, #a120bb, #d6612a);
  background-size: 600% 600%;
  color: #fff;
  padding: 8px;
`

export const List = styled.ul<ListProps>`
  display: ${({ direction }) =>
    direction === 'horizontal' ? 'flex' : 'block'};
  list-style: none;
  font-size: 16px;
  margin: 0;
  padding: 6px;
`
export const ListItem = styled.li`
  background-color: #fafafa;
  border: 1px solid #99b4c0;
  padding: 8px;
  margin: 4px;
`

export const ListContainer = styled.div`
  max-height: 500px;
  max-width: 500px;
  overflow: auto;
  background-color: #fafafa;
`
