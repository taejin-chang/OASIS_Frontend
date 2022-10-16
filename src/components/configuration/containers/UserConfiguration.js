import CommonConfiguration from "../presentation/Common";
import Save from "../../common/presentation/Save";
import ToggleMenu from "../presentation/ToggleMenu";
import { useState } from "react";

const UserConfiguration = () => {
  const [data, setData] = useState({
    alarmModeChecked: false,
    toggleMenuAlignment: "environmentConfiguration",
  });
  const { alarmModeChecked, toggleMenuAlignment } = data;

  const handleChangeToggleMenu = (e, newAlignment) => {
    console.log("handleChangeToggleMenu");
    setData({ ...data, toggleMenuAlignment: newAlignment });
  };

  const handleChangeAlarmMode = (e) => {
    console.log("handleChangeAlarmMode, " + e.target.checked);
    setData({ ...data, alarmModeChecked: e.target.checked });
  };

  const handleClickSave = () => {
    console.log("handleClickSave");
  };

  return (
    <div style={{ width: "800px" }}>
      <div style={{ margin: "1em" }}>
        <ToggleMenu
          alignment={toggleMenuAlignment}
          handleChange={handleChangeToggleMenu}
        />
      </div>
      <div style={{ width: "80%", margin: "1em" }}>
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
