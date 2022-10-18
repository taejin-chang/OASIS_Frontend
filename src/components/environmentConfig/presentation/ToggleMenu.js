import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const ToggleMenu = ({ alignment, handleChange }) => {
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        aria-label="Platform"
        color="success"
        onChange={handleChange}
        value={alignment}
      >
        <ToggleButton
          value="environmentConfiguration"
          style={{ fontFamily: "Kakao" }}
        >
          환경 설정
        </ToggleButton>
        <ToggleButton value="userConfiguration" style={{ fontFamily: "Kakao" }}>
          사용자 설정
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleMenu;
