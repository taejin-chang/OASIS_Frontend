import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const SelectUser = (selectedUserName, userNameList) => {
  return (
    <FormControl style={{ width: "200px", margin: "0.5rem" }}>
      <InputLabel size="small">사용자명</InputLabel>
      <Select
        multiple
        size="small"
        MenuProps={MenuProps}
        input={<OutlinedInput label="사용자명" />}
      >
        {userNameList &&
          Object.keys(userNameList).map((userName) => (
            <MenuItem key={userName} value={userName}>
              {userName}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectUser;
