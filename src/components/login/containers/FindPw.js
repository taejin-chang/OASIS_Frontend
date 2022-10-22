import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputFindPw from "../presentation/InputFindPw";
import CopyrightLogo from "../presentation/CopyrightLogo";


const FindPw = () => {

    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            // email: data.get('email'),
            // password: data.get('password'),
        });
    };

    const onSubmitFindPw = () => {

    }

    const inputEmail = () => {

    }

    return (
        //max width : 530px , 654px
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontFamily: "Kakao" }}
                >
                    비밀번호 찾기
                </Typography>
                <Typography
                    gutterBottom
                    variant="h10"
                    component="div"
                    style={{ fontFamily: "Kakao" }}
                >
                    OASIS에 사용중인 아이디(이메일)을 정확히 입력해주세요.<br/>
                    이메일을 통해 비밀번호 수정 링크를 전송해 드립니다.
                </Typography>
                <br/>
                <InputFindPw
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate sx={{ mt: 1 }}
                    onSubmitFindPw ={onSubmitFindPw}
                    inputEmail = {inputEmail}
                />
                <CopyrightLogo/>
            </Container>
        </ThemeProvider>



    );
}

export default FindPw;