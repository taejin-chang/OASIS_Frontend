import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const InputFindPw = ({ inputEmail, onSubmitFindPw }) => {

    return (
        <>
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
                        value={inputEmail}
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
                        onSubmit={onSubmitFindPw}
                    >
                        비밀번호 찾기
                    </Button>
                </Grid>
            </Grid>
            <br/>
            <br/>
        </>
    );
};

export default InputFindPw;