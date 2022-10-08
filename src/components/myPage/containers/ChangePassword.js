import React, { useState } from "react";
import InputPassword from "../components/InputPassword";
import Footer from "../components/Footer";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnNwPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeCurrentPassword = () => {
    console.log("onChangeCurrentPassword");
  };
  const onChangeNewPassword = () => {
    console.log("onChangeNewPassword");
  };
  const onChangeConfirmPassword = () => {
    console.log("onChangeConfirmPassword");
  };
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div>
      <InputPassword
        currentPassword={currentPassword}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        onChangeCurrentPassword={onChangeCurrentPassword}
        onChangeNewPassword={onChangeNewPassword}
        onChangeConfirmPassword={onChangeConfirmPassword}
      />
      <Footer buttonName="변경" onClickSave={onClickSave} />
    </div>
  );
};

export default ChangePassword;
