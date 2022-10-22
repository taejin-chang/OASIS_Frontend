import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CopyrightLogo from "../presentation/CopyrightLogo";
import InputFindId from "../presentation/InputFindId";

const theme = createTheme();

const FindId = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            // email: data.get('email'),
            // password: data.get('password'),
        });
    };

    const onClickFindId = () => {

    }

    return (
        //max width : 530px , 654px
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <br/>
                <br/>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontFamily: "Kakao" }}
                >
                    아이디(이메일)찾기
                </Typography>
                <Typography
                    gutterBottom
                    variant="h10"
                    component="div"
                    style={{ fontFamily: "Kakao" }}
                >
                    계정에 등록된 휴대폰 번호를 인증하시면 사용중인 계정의 <br/>이메일 주소를 알려드립니다.
                </Typography>
                <br/>
                <InputFindId
                    onSubmit={handleSubmit}
                    onClickFindId={onClickFindId}
                />
                <CopyrightLogo sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>



    );
};

export default FindId;