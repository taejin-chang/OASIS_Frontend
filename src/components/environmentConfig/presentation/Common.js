import SwitchItem from "./SwitchItem";
import { Divider, Chip } from "@mui/material";

const CommonConfiguration = ({ alarmModeChecked, handleChangeAlarmMode }) => {
  return (
    <div>
      <Divider>
        <Chip
          label="일반 설정"
          style={{
            fontSize: "1rem",
            fontFamily: "Kakao",
            backgroundColor: "#c2e66d",
          }}
        />
      </Divider>
      <SwitchItem
        itemName="알람 모드"
        fullWidth={true}
        checked={alarmModeChecked}
        handleChange={handleChangeAlarmMode}
      />
    </div>
  );
};

export default CommonConfiguration;
