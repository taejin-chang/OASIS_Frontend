import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InputFindId = ({ inputPhoneNumber, onClickFindId }) => {

    return (
        //max width : 530px , 654px
                    <Box component="form" noValidate sx={{ mt: 1 }}>
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
                                value={inputPhoneNumber}
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
                                onClick = {onClickFindId}
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
    );
};

export default InputFindId;