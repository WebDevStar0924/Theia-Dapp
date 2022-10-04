import styled from 'styled-components'

export const StyledPostTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 8px;
  gap: 10px;

  background: #fff;

  .creatorAvatar {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  }
  .username {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }
  .userTag {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #ffffff;
    padding: 1px 12px;
    background: #a4bcfd;
    border-radius: 16px;
    @media (max-width: 1024px) {
      font-size: 9px;
    }
  }
  .createTime {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #98a2b3;
    text-transform: uppercase;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
`
