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
      <table>
        <tbody>
          <tr>
            <td>
              <TextField
                label="아이디"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                value={id}
              />
            </td>
          </tr>
          <tr>
            <td>
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
            </td>
          </tr>
          <tr>
            <td>
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
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="소속"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                value={department}
              />
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="권한"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                value={authority}
              />
            </td>
          </tr>
          <tr>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInformation;
