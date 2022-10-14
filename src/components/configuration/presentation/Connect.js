import InputItem from "./InputItem";
import SwitchItem from "./SwitchItem";
import { Divider, Chip } from "@mui/material";

const Connect = () => {
  return (
    <div>
      <Divider>
        <Chip label="연동" style={{ fontSize: "1rem" }} />
      </Divider>
      <SwitchItem itemName="Slack" checked={true} />
      <InputItem itemName="URL" />
      <InputItem itemName="Channel" />
      <SwitchItem itemName="SMTP" checked={false} />
      <InputItem itemName="Host" disabled={true} />
      <InputItem itemName="Port" disabled={true} />
    </div>
  );
};

export default Connect;
