import CommonConfiguration from "../presentation/Common";
import Save from "../../common/presentation/Save";
import ToggleMenu from "../presentation/ToggleMenu";
import { useState } from "react";

const UserConfiguration = () => {
  const [data, setData] = useState({
    alarmModeChecked: false,
    toggleMenuAlignment: "userConfiguration",
    adminButtonClicked: false,
    userButtonClicked: true,
  });
  const { alarmModeChecked, toggleMenuAlignment } = data;

  const handleChangeAlarmMode = (e) => {
    console.log("handleChangeAlarmMode, " + e.target.checked);
    setData({ ...data, alarmModeChecked: e.target.checked });
  };

  const handleClickSave = () => {
    console.log("handleClickSave");
  };

  return (
    <div style={{ fontFamily: "Kakao" }}>
      <div style={{ margin: "1em" }}>
        <ToggleMenu
          alignment={toggleMenuAlignment}
          adminButtonClicked={false}
          userButtonClicked={true}
        />
      </div>
      <div style={{ width: "800px", margin: "1em" }}>
        <CommonConfiguration
          alarmModeChecked={alarmModeChecked}
          handleChangeAlarmMode={handleChangeAlarmMode}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <Save buttonName="저장" onClickSave={handleClickSave} />
      </div>
    </div>
  );
};

export default UserConfiguration;
