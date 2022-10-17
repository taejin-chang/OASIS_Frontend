import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TextField, InputAdornment } from "@mui/material";

const UserInformation = ({
  id,
  name,
  email,
  department,
  authority,
  birthday,
  onClickCalendar,
  onChangeName,
  onChangeEmail,
}) => {
  return (
    <div>
      <div>
        <TextField
          fullWidth
          label="아이디"
          variant="standard"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{ style: { fontFamily: "Kakao" } }}
          InputProps={{
            readOnly: true,
          }}
          value={id}
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          id="standard-required"
          label="이름"
          variant="standard"
          placeholder="이름을 입력해 주세요"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{
            shrink: true,
            style: { fontFamily: "Kakao" },
          }}
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <TextField
          required
          fullWidth
          id="standard-required"
          label="이메일"
          variant="standard"
          placeholder="이메일을 입력해 주세요"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{
            shrink: true,
            style: { fontFamily: "Kakao" },
          }}
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="소속"
          variant="standard"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{ style: { fontFamily: "Kakao" } }}
          InputProps={{
            readOnly: true,
          }}
          value={department}
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="권한"
          variant="standard"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{ style: { fontFamily: "Kakao" } }}
          InputProps={{
            readOnly: true,
          }}
          value={authority}
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="생일"
          variant="standard"
          margin="dense"
          inputProps={{ style: { fontFamily: "Kakao" } }}
          InputLabelProps={{ style: { fontFamily: "Kakao" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon
                  color="primary"
                  onClick={onClickCalendar}
                  style={{ color: "#73aa24" }}
                ></CalendarMonthIcon>
              </InputAdornment>
            ),
            readOnly: true,
          }}
          value={birthday}
        />
      </div>
    </div>
  );
};

export default UserInformation;
