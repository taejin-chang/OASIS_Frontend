import { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import WorkLogRegistration from "../presentation/WorkLogRegistration";
import WorkLogList from "../presentation/WorkLogList";
import SelectUser from "../presentation/SelectUser";

const WorkLog = () => {
  const [data, setData] = useState({
    loginUserName: "아무개",
    selectedUserName: "",
    userNameList: [],
    workDate: "2022.10.21",
  });
  const { loginUserName, selectedUserName, userNameList, workDate } = data;

  useEffect(() => {
    if (selectedUserName === "")
      setData({ ...data, selectedUserName: loginUserName });
  }, [data, loginUserName, selectedUserName, userNameList]);

  const handleClickCalendar = () => {
    console.log("handleClickCalendar");
  };

  return (
    <div style={{ width: "1000px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ fontFamily: "Kakao" }}
      >
        {selectedUserName}의 업무일지
      </Typography>
      <Divider />
      <div style={{ textAlign: "right" }}>
        <SelectUser
          selectedUserName={selectedUserName}
          userNameList={userNameList}
        />
      </div>
      <WorkLogRegistration
        workDate={workDate}
        handleClickCalendar={handleClickCalendar}
      />
      <WorkLogList />
    </div>
  );
};

export default WorkLog;
