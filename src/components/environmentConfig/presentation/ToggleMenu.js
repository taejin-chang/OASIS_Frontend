import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ToggleMenu = ({
  alignment,
  handleClickAdminButton,
  handleClickUserButton,
  adminButtonClicked,
  userButtonClicked,
}) => {
  return (
    <div>
      <ButtonGroup aria-label="Platform" color="success">
        <Link to="/config/environment/admin" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            value="environmentConfiguration"
            style={{
              width: "90px",
              fontFamily: "Kakao",
              color: "#000000",
              backgroundColor: adminButtonClicked ? "#c2e66d" : "#efefef",
            }}
            onClick={handleClickAdminButton}
          >
            환경 설정
          </Button>
        </Link>
        <Link to="/config/environment/user" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            value="userConfiguration"
            style={{
              width: "90px",
              fontFamily: "Kakao",
              color: "#000000",
              backgroundColor: userButtonClicked ? "#c2e66d" : "#efefef",
            }}
            onClick={handleClickUserButton}
          >
            사용자 설정
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default ToggleMenu;
