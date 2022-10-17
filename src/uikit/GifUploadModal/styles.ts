import styled from 'styled-components'

export const GifUploadModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
  height: 800px;
  .modalHeader {
    flex-direction: row;
    position: fixed;
    width: 600px !important;
    background: white;
    border-radius: 16px 16px 0px 0px;
    z-index: 100;
    width: 100%;
    height: 72px;
    padding: 10px;
    align-items: center;
    .closeModalButton {
      margin: 0px 10px;
      cursor: pointer;
    }
    .searchInput {
      .inputWrapper {
        border-radius: 100px;
        width: 100%;
      }
    }
  }
  .gifList {
    margin-top: 72px;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: auto auto;
    overflow-y: scroll;
    img {
      object-fit: cover;
    }
  }
`
