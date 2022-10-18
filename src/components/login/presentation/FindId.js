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

export default function FindId() {
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <TextField
                                required
                                fullWidth
                                id="phoneNumber"
                                label="휴대폰 번호(01011112222)"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
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
                                인증요청
                                </Button>
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <Typography
                            gutterBottom
                            variant="h10"
                            component="div"
                            style={{ fontFamily: "Kakao" }}
                            textAlign="center"
                        >
                            인증번호가 전송되었습니다.
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="인증번호 입력"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
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
                                    인증
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>



    );
}