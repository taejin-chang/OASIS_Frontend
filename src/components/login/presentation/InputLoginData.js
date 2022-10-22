import * as React from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const InputLoginData = ({
    inputEmail,
    inputPassword,
    onChangeInputEmail,
    onChangeInputPassword
}) => {
    return (
        <>
            <TextField
                margin="normal"
                fullWidth
                // id="email"
                label="아이디(이메일)을 입력해주세요"
                // name="email"
                // autoComplete="email"
                autoFocus
                value={inputEmail}
                onChange={onChangeInputEmail}
            />
            <TextField
                margin="normal"
                fullWidth
                name="password"
                label="비밀번호를 입력해주세요"
                type="password"
                id="password"
                // autoComplete="current-password"
                value={inputPassword}
                onChange={onChangeInputPassword}
            />
            <br/>
            <Grid container textAlign="center">
                <Grid item xs>
                    <Link href="/find-id"
                          style={{
                        color: "inherit",
                        fontFamily: "Kakao",
                        textDecoration: "none"
                    }}>
                        아이디 찾기
                    </Link>
                    <span> | </span>
                    <Link href="/find-pw"
                          style={{
                              color: "inherit",
                              fontFamily: "Kakao",
                              textDecoration: "none"
                          }}>
                        비밀번호 찾기
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default InputLoginData;