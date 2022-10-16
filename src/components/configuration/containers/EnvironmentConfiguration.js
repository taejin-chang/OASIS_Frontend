import PageView from "../presentation/PageView";
import Connect from "../presentation/Connect";
import Save from "../../common/presentation/Save";
import ToggleMenu from "../presentation/ToggleMenu";
import { useState } from "react";

const EnvironmentConfiguration = () => {
  const [data, setData] = useState({
    toggleMenuAlignment: "environmentConfiguration",
    alarmPageViewChecked: false,
    chartPageViewChecked: false,
    useSlackChecked: false,
    useSmtpChecked: false,
    useTlsChecked: false,
    slackUrl: "",
    slackChannel: "",
    smtpServer: "",
    smtpPort: "",
  });
  const {
    toggleMenuAlignment,
    alarmPageViewChecked,
    chartPageViewChecked,
    useSlackChecked,
    useSmtpChecked,
    useTlsChecked,
    slackUrl,
    slackChannel,
    smtpServer,
    smtpPort,
  } = data;

  const handleChangeToggleMenu = (e, newAlignment) => {
    console.log("handleChangeToggleMenu");
    setData({ ...data, toggleMenuAlignment: newAlignment });
  };

  const handleChangeAlarmPageView = (e) => {
    console.log("handleChangeAlarmPageView");
    setData({ ...data, alarmPageViewChecked: e.target.checked });
  };

  const handleChangeChartPageView = (e) => {
    console.log("handleChangeChartPageView");
    setData({ ...data, chartPageViewChecked: e.target.checked });
  };

  const handleChangeUseSlack = (e) => {
    console.log("handleChangeUseSlack");
    setData({ ...data, useSlackChecked: e.target.checked });
  };

  const handleChangeUseSmtp = (e) => {
    console.log("handleChangeUseSmtp");
    setData({ ...data, useSmtpChecked: e.target.checked });
  };

  const handleChangeUseTls = (e) => {
    console.log("handleChangeUseTls");
    setData({ ...data, useTlsChecked: e.target.checked });
  };

  const handleChangeSlackUrl = (e) => {
    console.log("handleChangeSlackUrl");
    setData({ ...data, slackUrl: e.target.value });
  };

  const handleChangeSlackChannel = (e) => {
    console.log("handleChangeSlackChannel");
    setData({ ...data, slackChannel: e.target.value });
  };

  const handleChangeSmtpServer = (e) => {
    console.log("handleChangeSmtpServer");
    setData({ ...data, smtpServer: e.target.value });
  };

  const handleChangeSmtpPort = (e) => {
    console.log("handleChangeSmtpPort");
    setData({ ...data, smtpPort: e.target.value });
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
        <PageView
          alarmPageViewChecked={alarmPageViewChecked}
          chartPageViewChecked={chartPageViewChecked}
          handleChangeAlarmPageView={handleChangeAlarmPageView}
          handleChangeChartPageView={handleChangeChartPageView}
        />
      </div>
      <div style={{ width: "80%", margin: "1em" }}>
        <Connect
          useSlackChecked={useSlackChecked}
          useSmtpChecked={useSmtpChecked}
          useTlsChecked={useTlsChecked}
          slackUrl={slackUrl}
          slackChannel={slackChannel}
          smtpServer={smtpServer}
          smtpPort={smtpPort}
          handleChangeUseSlack={handleChangeUseSlack}
          handleChangeUseSmtp={handleChangeUseSmtp}
          handleChangeUseTls={handleChangeUseTls}
          handleChangeSlackUrl={handleChangeSlackUrl}
          handleChangeSlackChannel={handleChangeSlackChannel}
          handleChangeSmtpServer={handleChangeSmtpServer}
          handleChangeSmtpPort={handleChangeSmtpPort}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <Save buttonName="저장" onClickSave={handleClickSave} />
      </div>
    </div>
  );
};

export default EnvironmentConfiguration;
