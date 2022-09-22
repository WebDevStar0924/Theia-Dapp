import "@splidejs/react-splide/dist/css/splide.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerBg1 from "../../assets/image/bannerBg1.png";
import Logo from "../Svg/Icons/Logo";
import { BannerWrapper } from "./styles";

export default function Banner() {
  return (
    <BannerWrapper>
      <Carousel
        axis={"vertical"}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        width={"100%"}
        infiniteLoop={true}
      >
        <div className={"bannerContainer"}>
          <img className={"bannerBackground"} src={bannerBg1} alt="bannerBg1" />
          <div className={"blurContainer"}>
            <Logo width={290} />
            <div className={"bannerText"}>A HOME FOR WEB3 COMMUNITIES</div>
          </div>
          <div className={"learnMoreBtn"}>LEARN MORE</div>
        </div>

        <div className={"bannerContainer"}>
          <img className={"bannerBackground"} src={bannerBg1} alt="bannerBg1" />
          <div className={"blurContainer"}>
            <Logo width={290} />
            <div className={"bannerText"}>A HOME FOR WEB3 COMMUNITIES</div>
          </div>
          <div className={"learnMoreBtn"}>LEARN MORE</div>
        </div>

        <div className={"bannerContainer"}>
          <img className={"bannerBackground"} src={bannerBg1} alt="bannerBg1" />
          <div className={"blurContainer"}>
            <Logo width={290} />
            <div className={"bannerText"}>A HOME FOR WEB3 COMMUNITIES</div>
          </div>
          <div className={"learnMoreBtn"}>LEARN MORE</div>
        </div>
      </Carousel>
    </BannerWrapper>
  );
}
