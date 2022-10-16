import React, { useState } from "react";
import InputPassword from "../presentation/InputPassword";
import Save from "../../common/presentation/Save";

const ChangePassword = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { currentPassword, newPassword, confirmPassword } = data;

  const onChangeCurrentPassword = (e) => {
    console.log("onChangeCurrentPassword");
    setData({ setCurrentPassword: e.target.value });
  };
  const onChangeNewPassword = (e) => {
    console.log("onChangeNewPassword");
    setData({ newPassword: e.target.value });
  };
  const onChangeConfirmPassword = (e) => {
    console.log("onChangeConfirmPassword");
    setData({ setConfirmPassword: e.target.value });
  };
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div style={{ width: "500px" }}>
      <div style={{ width: "60%", padding: "20px" }}>
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
