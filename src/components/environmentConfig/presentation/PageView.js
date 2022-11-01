import SwitchItem from "./SwitchItem";
import { Divider, Chip } from "@mui/material";

const PageView = ({
  alarmPageViewChecked,
  chartPageViewChecked,
  handleChangeAlarmPageView,
  handleChangeChartPageView,
}) => {
  return (
    <div>
      <Divider>
        <Chip
          label="페이지 뷰"
          style={{
            fontSize: "1rem",
            fontFamily: "Kakao",
            backgroundColor: "#c2e66d",
          }}
        />
      </Divider>
      <SwitchItem
        itemName="알람"
        fullWidth={true}
        checked={alarmPageViewChecked}
        handleChange={handleChangeAlarmPageView}
      />
      <SwitchItem
        itemName="통계"
        fullWidth={true}
        checked={chartPageViewChecked}
        handleChange={handleChangeChartPageView}
      />
    </div>
  );
};

export default PageView;
