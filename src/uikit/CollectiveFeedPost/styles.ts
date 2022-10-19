import styled from 'styled-components'

export const CollectiveFeedPostWrapper = styled.div`
  display: flex;
  padding: 8px 13px;
  flex-direction: row;
  display: flex;
  position: relative;
  flex-direction: column;
  .inputLayout{
       
    .ql-toolbar.ql-snow {
      border: none ;  
      width: 100%;    
      font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      padding: 5px;
      position: absolute;
      bottom: 10px;
      left: 140px;
      margin-left: 83px;
      .ql-formats{
        margin-right: 0px;
        button{
          margin-right: 5px;
         
        }
      }

    }
    
    .ql-container.ql-snow {
      border:none;
    }
    .ql-editor{
      min-width: 300px;
      max-width: 550px;
      
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }
    .ql-editor.ql-blank::before {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #475467;
    }    
    .ql-toolbar .ql-stroke {
      fill: none;
      stroke: #475467;
    }
    
    .ql-toolbar .ql-fill {
        fill: #475467;
        stroke: none;
    }
    
    .ql-toolbar .ql-picker {
        color: #475467;
    }
    .userNftAvatar{
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
      clip-path: polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%);
      width: 56px;
      height: 56px;
      margin-right: 8px;
    }
    .postInput{
      max-width: 180px;
      display:flex;
      margin-right: 10px;
      .inputWrapper{
        box-shadow: none;
        border: none;
        padding: 0px;
        width: 180px;
        input{
          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color:#475467;
          }
          ::-moz-placeholder { /* Firefox 19+ */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color:#475467;
          }
          :-ms-input-placeholder { /* IE 10+ */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color:#475467;
          }
          :-moz-placeholder { /* Firefox 18- */
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color:#475467;
          }
        }
      }
    }    
  }
  .collectiveSelectionLayout{
    margin-left: 56px;
    position: relative;
    padding: 5px 0px;
    border-top: solid 1px #e4e7ec;
    border-bottom: solid 1px #e4e7ec;
    .defaultCollectiveItem{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;      
      color: #3538CD;
    }
    
    .collectiveInput{
      display:flex;
      .inputWrapper{
        box-shadow: none;
        border: none;
        padding: 0px;
        height: 24px;
        input{
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;      
          color: #3538CD;
        }
      }      
    }
  }
  .formLayout{
    margin-bottom: 10px;
    margin-left: 56px;
    display:flex;
    flex-direction: column;
    position: relative;
    .EmojiPickerReact {
      position: absolute;
      left: 20%;
      top: 42px;
      z-index: 1000;
      --epr-emoji-size: 20px;
      
    }
    
    .imageListLayout{
      margin-top: 16px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: auto auto;      
      .imageCard{
        margin: 4px;        
        position: relative;
        .closeImageButton {
          position: absolute;
          margin-top: 6px;
          z-index: 10;
          margin-left: 6px;
          width: 35px;
          height: 35px;
          min-width:35px;
          padding: 0px;
          background: transparent;
        }
        img{                    
          border-radius: 16px;
          object-fit: cover;        
        }
        a{
          border-radius:16px;
        }
      }      
    }
    
  }
  .toolBoxLayout{
    margin-left: 56px;
    justify-content: space-between;
    .toolButtonGroup{
      
      .toolBoxButton{
      width: 36px;
      height:36px;
      :active {
        background-color: #f2f4f7;
      }
      }
    }
    .postButton{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 24px;
      gap: 8px;
      min-width: 88px;
      height: 36px;        
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 200px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      cursor: pointer;
      background:  #E4E7EC;
      :hover{
        background: #344054;
      }
      :active{
        background: #101828;    
      }
      
      

    }
  }
  
}
  
`
