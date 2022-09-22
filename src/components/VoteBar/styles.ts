import styled from "styled-components";

export const VoteBarWrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  padding: 8px 4px;
  background-color: ${({ bgColor }) => bgColor ?? "initial"};
  width: 40px;

  .votes {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #101828;
  }
  .voteUp {
    padding: 3px 5px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all ease 0.3s;
    &:hover {
      svg {
        color: #38a169;
      }
      border: 1px solid #d0d5dd;
    }
    &.active {
      border: 2px solid #38a169;
      svg {
        color: #38a169;
      }
    }
  }
  .voteDown {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all ease 0.3s;
    padding: 3px 5px;
    &:hover {
      border: 1px solid #d0d5dd;
      svg {
        color: #f42829;
      }
    }
    &.active {
      border: 2px solid #f42829;
      svg {
        color: #f42829;
      }
    }
  }
`;
