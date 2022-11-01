import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Settings,
  ManageAccounts,
  AdminPanelSettings,
} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function ConfigurationTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      style={{ margin: "1rem" }}
    >

      <Tab
        icon={<Settings />}
        label="환경설정"
        sx={{ fontFamily: "KakaoBold" }}
        href="/config/environment/admin"
      />
      <Tab
        icon={<ManageAccounts />}
        label="사용자관리"
        sx={{ fontFamily: "KakaoBold" }}
        href="/config/user-management"
      />
      <Tab
        icon={<AdminPanelSettings />}
        label="운영관리"
        sx={{ fontFamily: "KakaoBold" }}
        href="/config/environment/operation"
      />
    </Tabs>
  );
}
