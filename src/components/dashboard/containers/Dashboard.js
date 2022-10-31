import { Divider, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: "Kakao" }}
        >
          통계
        </Typography>
        <Divider />
      </div>
    </div>
  );
};

export default Dashboard;
