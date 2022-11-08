import { Divider, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const MonthlyCalendar = () => {
  const myEventsList = useState([
    {
      allDay: false,
      title: "",
      start: Date,
      end: Date,
      resource: "",
    },
  ]);

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
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MonthlyCalendar;
