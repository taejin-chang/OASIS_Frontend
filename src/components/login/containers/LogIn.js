import React, { useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import oasisLogo from "../../../styles/oasisLogo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLoginData from "../presentation/InputLoginData";
import LoginBtn from "../presentation/LoginBtn";
import CopyrightLogo from "../presentation/CopyrightLogo";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import TextField from "@mui/material/TextField";

const LogIn = () => {
  const [data, setData] = useState({
    // inputEmail:"",
    // inputPassword:""
  });

  const { inputEmail, inputPassword } = data;

  const onChangeInputEmail = (e) => {
    setData({ inputEmail: e.target.value });
  };

  const onChangeInputPassword = (e) => {
    setData({ inputPassword: e.target.value });
  };

  const onLogin = () => {
    console.log("ID : " + inputEmail);
    console.log("PW : " + inputPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img className="" src={oasisLogo} alt="user icon" />
          </div>
          <InputLoginData
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            inputEmail={inputEmail}
            inputPassword={inputPassword}
            onChangeInputEmail={onChangeInputEmail}
            onChangeInputPassword={onChangeInputPassword}
          />
          <LoginBtn onClickLogin={onLogin} />
        </Box>
        <br />
        <CopyrightLogo sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
