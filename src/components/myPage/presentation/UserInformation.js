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
          label="아이디"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          value={id}
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="이름"
          variant="standard"
          placeholder="이름을 입력해 주세요"
          InputLabelProps={{
            shrink: true,
          }}
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="이메일"
          variant="standard"
          placeholder="이메일을 입력해 주세요"
          InputLabelProps={{
            shrink: true,
          }}
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <TextField
          label="소속"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          value={department}
        />
      </div>
      <div>
        <TextField
          label="권한"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          value={authority}
        />
      </div>
      <div>
        <TextField
          label="생일"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon
                  color="primary"
                  onClick={onClickCalendar}
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
