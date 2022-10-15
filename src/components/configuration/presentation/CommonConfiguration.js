import SwitchItem from "./SwitchItem";
import { Divider, Chip } from "@mui/material";

const CommonConfiguration = () => {
  return (
    <div>
      <Divider>
        <Chip label="일반 설정" style={{ fontSize: "1rem" }} />
      </Divider>
      <SwitchItem itemName="알람 모드" checked={true} fullWidth={true} />
    </div>
  );
};

export default CommonConfiguration;
