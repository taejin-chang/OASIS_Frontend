import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const ToggleMenu = ({ alignment, handleChange }) => {
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        color="success"
        value={alignment}
      >
        <ToggleButton value="environmentConfiguration">환경 설정</ToggleButton>
        <ToggleButton value="userConfiguration">사용자 설정</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ToggleMenu;
