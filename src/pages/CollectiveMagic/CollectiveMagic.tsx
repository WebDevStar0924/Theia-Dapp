import { MagicContainter } from "./styles";
import { ReactComponent as MagicIcon } from "./magicIcon.svg";
import { Header } from "../../layout/Header";
import ExternalInput from "../../components/ExternalInput";
import { MotionButton } from "../../components/MotionButton/styles";
import { useNavigate } from "react-router-dom";

export default function CollectiveMagic() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <MagicContainter>
        <div className={"heading"}>WELCOME.</div>
        <div className={"magicForm"}>
          <MagicIcon style={{ margin: "auto" }} />
          <ExternalInput value={""} type={"active"} placeholder={"Email"} />
          <MotionButton
            bgColor={"#5D5FEF"}
            color={"#fff"}
            onClick={() => navigate("/collective/create")}
          >
            Log In / Sign Up
          </MotionButton>
          <div style={{ margin: "auto" }}>OR</div>
          <MotionButton bgColor={"#fff"} borderColor={"#c4c4c4"} color={"#000"}>
            Phone
          </MotionButton>
        </div>
      </MagicContainter>
    </>
  );
}
