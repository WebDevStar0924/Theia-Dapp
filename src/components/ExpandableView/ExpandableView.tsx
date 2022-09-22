import { ChevronDown, ChevronUp } from "components/Svg";
import { ReactElement, useState } from "react";
import styled from "styled-components";

interface iProps {
  header: ReactElement;
  content?: ReactElement;
  disabled?: boolean;
  headerClick?: () => void;
  individual: boolean;
}

const ExpandableViewWrapper = styled.div<{ individual: boolean }>`
  border: ${({ individual }) => (individual ? "2px solid #E4E7EC" : "none")};
  border-radius: 16px;
  overflow: hidden;
  .header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #0f1419;
    padding: 6px 16px;
    background: #f2f4f7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }
`;
export default function ExpandableView(props: iProps) {
  const { header, content, disabled, headerClick, individual } = props;
  const [isExpand, setExpand] = useState(false);
  return (
    <ExpandableViewWrapper
      onClick={() => headerClick && headerClick()}
      individual={individual}
    >
      <div
        onClick={() => !disabled && setExpand(!isExpand)}
        style={{ cursor: "pointer" }}
        className="header"
      >
        {header}
        {isExpand ? <ChevronDown width="24px" /> : <ChevronUp width="24px" />}
      </div>
      {isExpand && content && <div className={"content"}>{content}</div>}
    </ExpandableViewWrapper>
  );
}
