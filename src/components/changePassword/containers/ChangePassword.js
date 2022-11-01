import React, { useState } from "react";
import InputPassword from "../presentation/InputPassword";
import Save from "../../common/presentation/Save";
import { Divider, Typography } from "@mui/material";

const ChangePassword = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { currentPassword, newPassword, confirmPassword } = data;

  const onChangeCurrentPassword = (e) => {
    console.log("onChangeCurrentPassword");
    setData({ ...data, setCurrentPassword: e.target.value });
  };
  const onChangeNewPassword = (e) => {
    console.log("onChangeNewPassword");
    setData({ ...data, newPassword: e.target.value });
  };
  const onChangeConfirmPassword = (e) => {
    console.log("onChangeConfirmPassword");
    setData({ ...data, setConfirmPassword: e.target.value });
  };
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ fontFamily: "Kakao" }}
      >
        비밀번호 변경
      </Typography>
      <Divider />
      <div style={{ width: "300px", margin: "2rem" }}>
        <InputPassword
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onChangeCurrentPassword={onChangeCurrentPassword}
          onChangeNewPassword={onChangeNewPassword}
          onChangeConfirmPassword={onChangeConfirmPassword}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <Save buttonName="변경" onClickSave={onClickSave} />
      </div>
    </div>
  );
};

export default ChangePassword;
