import { WrapperHeaders } from "./styled";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Subheading } from "../../App";

function Headers() {
  return (
    <WrapperHeaders>
      <div className="logo">
        <img src={logo} alt="Logo" width={48} height={48} />
      </div>

      <div className="line"></div>

      <div className="nav_menu">
        <nav>
          <NavLink to="/" className={({isActive})=> isActive ? "active_link" : ""}>
            <Subheading color="#ffffff" size="16px" lineHeight="19px" className="nav_link">
              <span>00</span> HOME
            </Subheading>
          </NavLink>

          <NavLink to="/destination" className={({isActive})=> isActive ? "active_link" : ""}>
            <Subheading color="#ffffff" size="16px" lineHeight="19px" className="nav_link">
              <span>01</span> DESTINATION
            </Subheading>
          </NavLink>

          <NavLink to="/crew" className={({isActive})=> isActive ? "active_link" : ""}>
            <Subheading color="#ffffff" size="16px" lineHeight="19px" className="nav_link">
              <span>02</span> CREW
            </Subheading>
          </NavLink>

          <NavLink to="/technology" className={({isActive})=> isActive ? "active_link" : ""}>
            <Subheading color="#ffffff" size="16px" lineHeight="19px" className="nav_link">
              <span>03</span> TECHNOLOGY
            </Subheading>
          </NavLink>
        </nav>
      </div>
    </WrapperHeaders>
  );
}

export default Headers;
