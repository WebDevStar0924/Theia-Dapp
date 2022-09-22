import { useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { LayoutWrapper } from "./styles";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <LayoutWrapper
      bgColor={location.pathname === "/mint" ? "#101828" : "#f9fafb"}
    >
      <Header />
      <div className={"contentView"}>
        {location.pathname === "/home" && <Sidebar />}

        <div className={"componentsView"} id="componentsView">
          {children}
        </div>
      </div>
    </LayoutWrapper>
  );
}
