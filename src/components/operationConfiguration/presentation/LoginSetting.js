import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent, Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel, Input, InputLabel, Select, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import * as React from 'react';

const LoginSetting = () => {

    const FormLine = ({checkBoxName, label}) => {
        return (<FormControlLabel control={<Checkbox name={checkBoxName}/>} label={label}/>)
    }

    const [prevPasswordCount, setPrevPasswordCount] = React.useState('');
    const handleChangePrevPasswordCount = (e) => {
        setPrevPasswordCount(e.target.value);
    };

    const [passwordChangePeriod, setPasswordChangePeriod] = React.useState('');
    const handlePasswordChangePeriod = (e) => {
        setPasswordChangePeriod(e.target.value);
    };

    const saveButtonStyle = {color:"black", fontFamily: "Kakao", marginLeft: "5vh", backgroundColor:"#c2e66d"};

    const classes = {};
    return (
        <Card
            className={classes.root}
            variant="outlined"
            style={{height: "100%"}}
        >
            <CardContent>
                <Box sx={{my: 1, mx: 1}}>
                    <Typography variant="h5" style={{fontFamily: "Kakao"}} display={"inline"}>
                        로그인 설정
                    </Typography>
                    <Button variant="contained" color="success" style={saveButtonStyle}>
                        저장
                    </Button>
                </Box>
                <Divider/>
                <Grid item sx={{my: 1, mx: 1}}>
                    <Typography color="textSecondary" gutterBottom variant="h6" component="div"
                                style={{fontFamily: "Kakao"}}>
                        비밀번호 정책 설정
                    </Typography>

                    <FormControl sx={{mx: 1}} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormLine checkBoxName={"prevPassword"} label={<div>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    이전 비밀번호
                                </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={prevPasswordCount}
                                    label="Age"
                                    onChange={handleChangePrevPasswordCount}
                                    autoWidth
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                </Select>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    회 까지 사용 불가
                                </Typography>
                            </div>}
                            />

                            <FormLine checkBoxName={"lengthLimit"} label={<div>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    길이 제한
                                </Typography>
                                <Input inputProps={{'aria-label': 'description'}} sx={{width: '30px'}}/>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    자 이상
                                </Typography>
                            </div>}
                            />

                            <FormLine checkBoxName={"specialCharacter"}
                                      label={<Typography sx={{my: 1, mx: 1}} variant="body2" component="div"
                                                         display="inline">
                                          특수문자 포함
                                      </Typography>}
                            />

                            <FormLine checkBoxName={"UpperCase"}
                                      label={<Typography sx={{my: 1, mx: 1}} variant="body2" component="div"
                                                         display="inline">
                                          대문자 포함
                                      </Typography>}
                            />

                            <FormLine checkBoxName={"LowerCase"}
                                      label={<Typography sx={{my: 1, mx: 1}} variant="body2" component="div"
                                                         display="inline">
                                          소문자 포함
                                      </Typography>}
                            />

                            <FormLine checkBoxName={"changePeriod"} label={<div>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    비밀번호 변경 주기
                                </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={passwordChangePeriod}
                                    label="Age"
                                    onChange={handlePasswordChangePeriod}
                                    autoWidth
                                >
                                    <MenuItem value={1}>1개월</MenuItem>
                                    <MenuItem value={3}>3개월</MenuItem>
                                    <MenuItem value={6}>6개월</MenuItem>
                                    <MenuItem value={12}>12개월</MenuItem>
                                </Select>
                            </div>}
                            />

                            <FormLine checkBoxName={"loginLimit"} label={<div>
                                <Input inputProps={{'aria-label': 'description'}} sx={{width: '30px'}}/>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    회 오류 시
                                </Typography>
                                <Input inputProps={{'aria-label': 'description'}} sx={{width: '30px'}}/>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    분간 접속 불가
                                </Typography>
                            </div>}
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <br />
                <Divider/>
                <Grid item sx={{my: 1, mx: 1}}>
                    <Typography color="textSecondary" gutterBottom variant="h6" component="div"
                                style={{fontFamily: "Kakao"}}>
                        세션 타임아웃 설정
                    </Typography>
                    <FormControl>
                        <FormGroup>
                            <FormLine checkBoxName={"loginLimit"} label={<div>
                                <Input inputProps={{'aria-label': 'description'}} sx={{width: '30px'}}/>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    분간 조작이 없을 시 로그아웃
                                </Typography>
                            </div>}
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </CardContent>
        </Card>
    );

}

export default LoginSetting;