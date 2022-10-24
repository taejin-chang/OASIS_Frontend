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
    workLogList: [
      {
        date: "2022.10.24",
        contents: ["회의 1시간", "리액트 스터디"],
        isModify: false,
      },
      {
        date: "2022.09.11",
        contents: ["티타임", "EE-WIN 개발 이슈 처리"],
        isModify: true,
      },
    ],
  });
  const {
    loginUserName,
    selectedUserName,
    userNameList,
    workDate,
    workLogList,
  } = data;

  useEffect(() => {
    if (selectedUserName === "")
      setData({ ...data, selectedUserName: loginUserName });
  }, [data, loginUserName, selectedUserName, userNameList]);

  const handleClickCalendar = () => {
    console.log("handleClickCalendar");
  };

  const handleClickModification = () => {
    console.log("handleClickModification");
  };

  const handleClickRemoval = () => {
    console.log("handleClickRemoval");
  };

  const handleChangeWorkLog = () => {};

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
      <WorkLogList
        workLogList={workLogList}
        handleClickModification={handleClickModification}
        handleClickRemoval={handleClickRemoval}
        handleChangeWorkLog={handleChangeWorkLog}
      />
    </div>
  );
};

export default WorkLog;
