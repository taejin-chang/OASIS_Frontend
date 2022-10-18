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
import oasisLogo from '../../../styles/oasisLogo.png';

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

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        //max width : 530px , 654px
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                    {/*    <LockOutlinedIcon />*/}
                    {/*</Avatar>*/}
                    <div>
                        <img className="" src={oasisLogo} alt="user icon"/>
                    </div>
                    {/*<Typography component="h1" variant="h5">*/}
                    {/*    Sign in*/}
                    {/*</Typography>*/}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="아이디(이메일)을 입력해주세요"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호를 입력해주세요"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/*<FormControlLabel*/}
                        {/*    control={<Checkbox value="remember" color="primary" />}*/}
                        {/*    label="Remember me"*/}
                        {/*/>*/}
                        <br/>
                        <br/>
                        <Grid container textAlign="center">
                            <Grid item xs>
                                <Link href="#"
                                      style={{
                                    color: "inherit",
                                    fontFamily: "Kakao",
                                    textDecoration: "none"
                                }}>
                                    아이디 찾기
                                </Link>
                                <span> | </span>
                                <Link href="#"
                                      style={{
                                          color: "inherit",
                                          fontFamily: "Kakao",
                                          textDecoration: "none"
                                      }}>
                                    비밀번호 찾기
                                </Link>
                            </Grid>
                        </Grid>
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
                        >
                            로그인
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />

                {/*<Button onClick={handleOpen}>Open modal</Button>*/}
                {/*<Modal*/}
                {/*    open={open}*/}
                {/*    onClose={handleClose}*/}
                {/*    aria-labelledby="modal-modal-title"*/}
                {/*    aria-describedby="modal-modal-description"*/}
                {/*>*/}
                {/*    <Box sx={style}>*/}
                {/*        <Typography id="modal-modal-title" variant="h6" component="h2">*/}
                {/*            Text in a modal*/}
                {/*        </Typography>*/}
                {/*        <Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
                {/*            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
                {/*        </Typography>*/}
                {/*    </Box>*/}
                {/*</Modal>*/}

            </Container>
        </ThemeProvider>



    );
}