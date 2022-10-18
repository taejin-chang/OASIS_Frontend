import { Switch } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#c2e66d",
    "&:hover": {
      backgroundColor: alpha("#c2e66d", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#c2e66d",
  },
}));

const SwitchItem = ({ itemName, checked, fullWidth, handleChange }) => {
  return (
    <div>
      <div style={{ padding: "7px 0", float: "left" }}>
        <label>{itemName}</label>
      </div>
      <div style={{ textAlign: fullWidth ? "right" : "" }}>
        <GreenSwitch checked={checked} onChange={handleChange} />
      </div>
    </div>
  );
};

export default SwitchItem;
