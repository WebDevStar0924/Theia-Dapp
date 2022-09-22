import { FaTwitter } from "react-icons/fa";
import { Flex } from "../../../components/Flex";
import { MotionButton } from "../../../components/MotionButton/styles";
import { HandsUpIcon } from "../../../components/Svg";
import sampleImg from "../assets/sampleImg.png";
import { SocialTabWrapper } from "../styles";
import { CollectiveInfo } from "../types";

interface iProps {
  collectiveInfo: CollectiveInfo;
}

export default function SocialTab(props: iProps) {
  return (
    <SocialTabWrapper>
      <div className={"sideContent"}>
        <div className={"subTitle"}>Updates</div>
        <div className={"updatesList"}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div className={"updateItem"} key={`update_${idx}`}>
              <img src={sampleImg} alt={"sample"} className={"icon"} />
              <div className={"updateContent"}>
                <div className={"max"}>
                  Max <span className={"creator"}>Creator</span>
                </div>
                <div className={"updateText"}>
                  We are on track of reaching the Q2 Roadmap goals
                </div>
                <div>
                  <span className={"updateTime"}>Friday 2:20pm</span>
                  <span className={"updateFavorite"}>
                    <HandsUpIcon width={"13px"} />
                    13
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"sideContent"}>
        <div className={"subTitle"}>Upcoming Events</div>
        <div className={"eventList"}>
          {[1, 2, 3].map((idx) => (
            <div className={"eventItem"} key={`event_${idx}`}>
              <div className={"eventContent"}>
                <div className={"eventTitle"}>
                  Community Ama <span className={"eventTag"}>Online</span>
                </div>
                <div className={"eventTime"}>
                  Monday, Oct 18, 11:00AM - 12:00PM (GMT -4)
                </div>
                <div className={"eventText"}>Get to know the team!</div>
              </div>
              <div className={"eventActions"}>
                <MotionButton
                  bgColor={"#05603A"}
                  color={"#fff"}
                  fontSize={"8px"}
                  size={"sm"}
                >
                  BUY TICKETS
                </MotionButton>
                <MotionButton
                  bgColor={"#101828"}
                  color={"#fff"}
                  fontSize={"8px"}
                  size={"sm"}
                >
                  ADD TO CALENDAR
                </MotionButton>
              </div>
            </div>
          ))}
        </div>
        <div className={"subTitle"}>Feed</div>
        <div className={"feedList"}>
          {[1, 2, 3].map((idx) => (
            <div className={"feedItem"} key={`feed_${idx}`}>
              <div className={"feedIcon"}>
                <FaTwitter width={"40px"} />
              </div>
              <div className={"feedContent"}>
                <div className={"feedText"}>
                  We are releasing a new collaboration shortly, very excited to
                  share this!
                </div>
                <Flex
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <span className={"feedTime"}>Friday 2:20pm</span>
                  <span className={"feedFavorite"}>
                    <HandsUpIcon width={"13px"} /> 2
                  </span>
                </Flex>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SocialTabWrapper>
  );
}
