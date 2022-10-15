import InputItem from "./InputItem";
import SwitchItem from "./SwitchItem";
import { Divider, Chip, FormControlLabel, Checkbox } from "@mui/material";

const Connect = () => {
  return (
    <div>
      <Divider>
        <Chip label="연동" style={{ fontSize: "1rem" }} />
      </Divider>
      <SwitchItem itemName="Slack" checked={true} />
      <div style={{ margin: "1em" }}>
        <InputItem itemName="URL" />
        <InputItem itemName="Channel" />
      </div>
      <SwitchItem itemName="SMTP" checked={false} />
      <div style={{ margin: "1em" }}>
        <InputItem itemName="Server" disabled={true} />
        <InputItem itemName="Port" disabled={true} />
        <InputItem itemName="발신자" disabled={true} />
        <FormControlLabel
          label="TLS 사용"
          control={
            <Checkbox
              checked={true}
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
