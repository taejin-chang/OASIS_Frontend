import InputItem from "./InputItem";
import SwitchItem from "./SwitchItem";
import { Divider, Chip, FormControlLabel, Checkbox } from "@mui/material";

const Connect = ({
  useSlackChecked,
  useSmtpChecked,
  useTlsChecked,
  slackUrl,
  slackChannel,
  smtpServer,
  smtpPort,
  smtpEmail,
  smtpEmailPassword,
  handleChangeUseSlack,
  handleChangeUseSmtp,
  handleChangeUseTls,
  handleChangeSlackUrl,
  handleChangeSlackChannel,
  handleChangeSmtpServer,
  handleChangeSmtpPort,
  handleChangeSmtpEmail,
  handleChangeSmtpEmailPassword,
}) => {
  return (
    <div>
      <Divider>
        <Chip
          label="연동"
          style={{
            fontSize: "1rem",
            fontFamily: "Kakao",
            backgroundColor: "#c2e66d",
          }}
        />
      </Divider>
      <SwitchItem
        itemName="Slack"
        checked={useSlackChecked}
        handleChange={handleChangeUseSlack}
      />
      <div style={{ margin: "1em" }}>
        <InputItem
          itemName="URL"
          disabled={!useSlackChecked}
          value={slackUrl}
          onChange={handleChangeSlackUrl}
        />
        <InputItem
          itemName="Channel"
          disabled={!useSlackChecked}
          value={slackChannel}
          onChange={handleChangeSlackChannel}
        />
      </div>
      <SwitchItem
        itemName="SMTP"
        checked={useSmtpChecked}
        handleChange={handleChangeUseSmtp}
      />
      <div style={{ margin: "1em" }}>
        <InputItem
          itemName="Server"
          disabled={!useSmtpChecked}
          value={smtpServer}
          onChange={handleChangeSmtpServer}
        />
        <InputItem
          itemName="Port"
          disabled={!useSmtpChecked}
          value={smtpPort}
          onChange={handleChangeSmtpPort}
        />
        <InputItem
          itemName="Email"
          disabled={!useSmtpChecked}
          value={smtpEmail}
          onChange={handleChangeSmtpEmail}
        />
        <InputItem
          itemName="Email Password"
          disabled={!useSmtpChecked}
          value={smtpEmailPassword}
          onChange={handleChangeSmtpEmailPassword}
        />
        <FormControlLabel
          label="TLS 사용"
          sx={{ fontFamily: "Kakao" }}
          control={
            <Checkbox
              checked={useTlsChecked}
              onChange={handleChangeUseTls}
              sx={{
                color: "#8cbd18",
                "&.Mui-checked": {
                  color: "#8cbd18",
                },
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Connect;
