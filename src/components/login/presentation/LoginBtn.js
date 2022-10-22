import Button from "@mui/material/Button";
import * as React from "react";

const LoginBtn = ({ onClickLogin }) => {

    return(
        <Button
            variant="contained"
            style={{
            backgroundColor: "#c2e66d",
            color: "#000000",
            fontFamily: "Kakao"
            }}
            type="submit"
            fullWidth
            sx={{ mt: 4, mb: 2 }}
            size="large"
            onClick={onClickLogin}
        >
            로그인
        </Button>
    );
};

export default LoginBtn;

