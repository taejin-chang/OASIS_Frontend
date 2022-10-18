import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Oasis
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function FindPw() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            // email: data.get('email'),
            // password: data.get('password'),
        });
    };

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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="이메일을 입력해 주세요."
                                name="email"
                                autoComplete="email"
                                autoFocus
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#c2e66d",
                                    color: "#000000",
                                    fontFamily: "Kakao",
                                }}
                            >
                                비밀번호 찾기
                            </Button>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>



    );
}