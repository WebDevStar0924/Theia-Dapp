import styled from 'styled-components'

export const VoteBarWrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  padding: 4px 0px;
  background-color: ${({ bgColor }) => bgColor ?? 'initial'};
  width: 40px;
  border-radius: 8px 0 0 8px;

  .votes {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #101828;
  }
  .voteUp {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all ease 0.3s;

    svg {
      path {
        stroke: url(#vote_up_path_not_hover);
      }
      rect {
        stroke: url(#vote_up_rect_not_hover);
      }
    }
    &:hover {
      svg {
        path {
          stroke: url(#vote_up_path_hover);
        }
        rect {
          stroke: url(#vote_up_rect_hover);
        }
      }
    }
    &.active {
      svg {
        path {
          stroke: url(#vote_up_path_hover);
        }
        rect {
          stroke: url(#vote_up_rect_not_hover);
        }
      }
    }
  }
  .voteDown {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all ease 0.3s;

    svg {
      path {
        stroke: url(#vote_down_path_not_active);
      }
      rect {
        stroke: url(#vote_down_rect_stable);
      }
    }
    &:hover {
      svg {
        path {
          stroke: url(#vote_down_path_hover);
        }
        rect {
          stroke: url(#vote_down_rect_hover);
        }
      }
    }
    &.active {
      svg {
        path {
          stroke: url(#vote_down_path_hover);
        }
        rect {
          stroke: url(#vote_down_rect_stable);
        }
      }
    }
  }
`
