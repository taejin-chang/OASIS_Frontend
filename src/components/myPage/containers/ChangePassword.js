import React, { useState } from "react";
import InputPassword from "../components/InputPassword";
import Footer from "../components/Footer";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnNwPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeCurrentPassword = (e) => {
    console.log("onChangeCurrentPassword");
    setCurrentPassword(e.target.value);
  };
  const onChangeNewPassword = (e) => {
    console.log("onChangeNewPassword");
    setnNwPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    console.log("onChangeConfirmPassword");
    setConfirmPassword(e.target.value);
  };
  const onClickSave = () => {
    console.log("onClickSave");
  };

  return (
    <div>
      <div style={{ width: "100%", textAlign: "center", padding: "20px" }}>
        <InputPassword
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onChangeCurrentPassword={onChangeCurrentPassword}
          onChangeNewPassword={onChangeNewPassword}
          onChangeConfirmPassword={onChangeConfirmPassword}
        />
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ width: "75%", textAlign: "right" }}>
          <Footer buttonName="변경" onClickSave={onClickSave} />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
