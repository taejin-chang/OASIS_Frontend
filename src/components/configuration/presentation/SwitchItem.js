import { Switch } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#8cbd18",
    "&:hover": {
      backgroundColor: alpha("#8cbd18", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#8cbd18",
  },
}));

const SwitchItem = ({ itemName, checked, fullWidth }) => {
  return (
    <div>
      <div style={{ padding: "9px 0", float: "left" }}>
        <label>{itemName}</label>
      </div>
      <div style={{ textAlign: fullWidth ? "right" : "" }}>
        <GreenSwitch checked={checked} />
      </div>
    </div>
  );
};

export default SwitchItem;
