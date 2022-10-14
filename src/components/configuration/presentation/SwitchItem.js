import { Switch } from "@mui/material";

const SwitchItem = ({ itemName, checked }) => {
  return (
    <div style={{ width: "100%", height: "40px" }}>
      <div style={{ width: "30%", padding: "10px 0", float: "left" }}>
        <label>{itemName}</label>
      </div>
      <div style={{ width: "70%", float: "left" }}>
        <Switch checked={checked} />
      </div>
    </div>
  );
};

export default SwitchItem;
