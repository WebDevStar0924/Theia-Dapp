import { Crown } from "components/Svg";
import { CrownButtonWrapper } from "./styles";

interface iProps {
  active: boolean;
  count: string;
  onClick: (e) => void;
  size: string;
}
export default function CrwonButton(props: iProps) {
  const { active, count, onClick, size } = props;
  return (
    <CrownButtonWrapper active={active} size={size} onClick={onClick}>
      <Crown width={"24px"} />
      <span>{count}</span>
    </CrownButtonWrapper>
  );
}
