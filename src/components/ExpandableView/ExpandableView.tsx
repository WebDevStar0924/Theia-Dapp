import { ReactElement, useState } from 'react'
import styled from 'styled-components'

interface iProps {
  header: ReactElement
  content?: ReactElement
  disabled?: boolean
  headerClick?: () => void
}

const ExpandableViewWrapper = styled.div`
  overflow: hidden;
  .header {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #101828;
    padding: 12px 16px;
    background: #f2f4f7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    position: relative;
    &:hover {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        padding: 2px;
        background: linear-gradient(
          90.04deg,
          #677172 0%,
          #6e8082 28.16%,
          #b9b5b5 53.98%,
          #78726b 79.6%,
          #5f5e64 104.68%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        mask-composite: exclude;
        pointer-events: none;
      }

      & > div {
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        color: #101828;
        background: linear-gradient(
          90.04deg,
          #677172 0%,
          #6e8082 28.16%,
          #b9b5b5 53.98%,
          #78726b 79.6%,
          #5f5e64 104.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
    background: #ffffff;
    border-radius: 16px;
    margin-top: 16px;
  }
`
export default function ExpandableView(props: iProps) {
  const { header, content, disabled, headerClick } = props
  const [isExpand, setExpand] = useState(false)
  return (
    <ExpandableViewWrapper onClick={() => headerClick && headerClick()}>
      <div
        onClick={() => !disabled && setExpand(!isExpand)}
        style={{ cursor: 'pointer' }}
        className="header"
      >
        {header}
      </div>
      {isExpand && content && <div className={'content'}>{content}</div>}
    </ExpandableViewWrapper>
  )
}
