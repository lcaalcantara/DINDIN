import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Logout from "../../assets/logout.svg";
import Profile from "../../assets/profile.svg";
import { clearStorage, getItem } from "../../utils/storage";
import "./style.css";

function Header({ handleEditProfile }) {
  const navigate = useNavigate();
  const userName = getItem('userName')

  function handleLogout() {
    clearStorage();
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
            <strong>{userName}</strong>
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
