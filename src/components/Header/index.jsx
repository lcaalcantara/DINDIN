import "./style.css";
import Profile from "../../assets/profile.svg";
import Logo from "../../assets/logo.svg";
import Logout from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";

function Header({ handleEditProfile }) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <header>
      <div className="width-limit content-header">
        <img src={Logo} alt="logo" />
        <div className="container-signout">
          <div
            className="profile-area"
            onClick={handleEditProfile}
          >
            <img src={Profile} alt="profile" />
            <strong>Lucas</strong>
          </div>
          <img
            src={Logout}
            alt="logout"
            className="signout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
