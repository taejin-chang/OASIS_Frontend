import { Divider, Typography } from "@mui/material";

const Calendar = () => {
  return (
    <div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ fontFamily: "Kakao" }}
      >
        캘린더
      </Typography>
      <Divider />
    </div>
  );
};

export default Calendar;
