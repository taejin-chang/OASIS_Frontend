import { TextField } from "@mui/material";

const InputPassword = ({
  currentPassword,
  newPassword,
  confirmPassword,
  onChangeCurrentPassword,
  onChangeNewPassword,
  onChangeConfirmPassword,
}) => {
  return (
    <div>
      <div>
        <TextField
          required
          fullWidth
          label="현재 비밀번호"
          variant="standard"
          placeholder="비밀번호를 입력해 주세요"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{
            shrink: true,
            style: { fontFamily: "Kakao" },
          }}
          onChange={onChangeCurrentPassword}
          value={currentPassword}
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          label="새 비밀번호"
          variant="standard"
          placeholder="비밀번호를 입력해 주세요"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{
            shrink: true,
            style: { fontFamily: "Kakao" },
          }}
          onChange={onChangeNewPassword}
          value={newPassword}
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          label="새 비밀번호 확인"
          variant="standard"
          placeholder="비밀번호를 입력해 주세요"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{
            shrink: true,
            style: { fontFamily: "Kakao" },
          }}
          onChange={onChangeConfirmPassword}
          value={confirmPassword}
        />
      </div>
    </div>
  );
};

export default InputPassword;
