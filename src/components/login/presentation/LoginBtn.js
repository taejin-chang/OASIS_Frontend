import Button from "@mui/material/Button";
import * as React from "react";
import { Link } from "react-router-dom";

const LoginBtn = ({ onClickLogin }) => {
  return (
    <Link to="/calendar" style={{ width: "100%", textDecoration: "none" }}>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#c2e66d",
          color: "#000000",
          fontFamily: "Kakao",
        }}
        type="submit"
        fullWidth
        sx={{ mt: 4, mb: 2 }}
        size="large"
        onClick={onClickLogin}
      >
        로그인
      </Button>
    </Link>
  );
};

export default LoginBtn;
