// import "./styles.scss";
import { EventGoingWrapper } from "./styles";

interface iProps { }

export default function EventGoing(props: iProps) {
  return (
    <EventGoingWrapper>
      <div className="container">
        <div className="containterShape"></div>
        <p className="containerTitle">ratclarinet</p>
      </div>
    </EventGoingWrapper>
  );
}
