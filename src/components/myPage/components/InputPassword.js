import { TextField } from "@mui/material";

const InputPassword = ({
  currentPassword,
  newPassword,
  confirmPassword,
  onChangeCurrentPassword,
  onChangeNewPassword,
  onChangeConfirmPassword,
}) => {
  const textFieldCommonStyle = {
    width: "30%",
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <TextField
                required
                label="현재 비밀번호"
                variant="standard"
                placeholder="비밀번호를 입력해 주세요"
                InputLabelProps={{
                  shrink: true,
                }}
                style={textFieldCommonStyle}
                onChange={onChangeCurrentPassword}
                value={currentPassword}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                required
                label="새 비밀번호"
                variant="standard"
                placeholder="비밀번호를 입력해 주세요"
                InputLabelProps={{
                  shrink: true,
                }}
                style={textFieldCommonStyle}
                onChange={onChangeNewPassword}
                value={newPassword}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                required
                label="새 비밀번호 확인"
                variant="standard"
                placeholder="비밀번호를 입력해 주세요"
                InputLabelProps={{
                  shrink: true,
                }}
                style={textFieldCommonStyle}
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputPassword;
