import { Divider } from "@mui/material";
import SwitchItem from "./SwitchItem";

const PageView = () => {
  return (
    <div style={{ width: "100%" }}>
      <p1>페이지 뷰</p1>
      <div style={{ width: "35%", height: "20px" }}>
        <div style={{ padding: "5px 0" }}>
          <Divider />
        </div>
      </div>
      <div style={{ width: "35%", textAlign: "right" }}>
        <p1>일반사용자</p1>
      </div>
      <SwitchItem itemName="알람" checked={true} />
      <SwitchItem itemName="통계" checked={false} />
    </div>
  );
};

export default PageView;
