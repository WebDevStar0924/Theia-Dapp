import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import logo from "../../assets/svg/logo.svg";
import Container from "../container/Container";
import { hoverTxtShadow, hoverZoom } from "../../utils/Animations";
import "./_footer.scss";

const data = [
  {
    href: "https://discord.gg/b2ADVX5hPZ",
    name: "Discord",
    logo: <SiDiscord className="footerLink-icon" />,
  },
  {
    href: "https://twitter.com/Theia_Labs",
    name: "Twitter",
    logo: <FaTwitter className="footerLink-icon" />,
  },
  {
    href: "https://medium.com/@theia.finance",
    name: "Medium",
    logo: <BsMedium className="footerLink-icon" />,
  },
  {
    href: "https://t.me/THEIAfinance",
    name: "Telegram",
    logo: <FaTelegramPlane className="footerLink-icon" />,
  },
];
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname !== "/mint" && pathname !== "/404" && (
        <>
          <div style={{ marginTop: "5rem" }} />
          <div className="footer">
            <motion.div whileHover={hoverZoom}>
              <Link to="/">
                <img className="footer__img" src={logo} alt="" />
              </Link>
            </motion.div>
            <div className="footer__links">
              {data.map((item, index) => (
                <motion.div
                  whileHover={hoverTxtShadow}
                  key={index}
                  className="footer__links__link"
                >
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <span className="footer__links__link__icon">
                      {item.logo}
                    </span>
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <motion.span
                whileHover={hoverTxtShadow}
                className="footer-bottom__link"
                style={{ padding: "0 10px" }}
              >
                Terms
              </motion.span>
              <motion.span
                whileHover={hoverTxtShadow}
                className="footer-bottom__link"
              >
                <Link to="/privacy-policy">Privacy</Link>{" "}
              </motion.span>
            </div>
            <div className="footer-bottom__year">
              © 2022 Theia Finance. All rights Reserved.
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Footer;
