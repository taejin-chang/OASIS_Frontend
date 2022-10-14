import SwitchItem from "./SwitchItem";
import { Divider, Chip } from "@mui/material";

const PageView = () => {
  return (
    <div>
      <Divider>
        <Chip label="페이지 뷰" style={{ fontSize: "1rem" }} />
      </Divider>
      <SwitchItem itemName="알람" checked={true} fullWidth={true} />
      <SwitchItem itemName="통계" checked={false} fullWidth={true} />
    </div>
  );
};

export default PageView;
