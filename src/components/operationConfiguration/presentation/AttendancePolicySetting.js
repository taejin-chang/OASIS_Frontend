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

const AttendancePolicySetting = () => {

    const FormLine = ({checkBoxName, label, style}) => {
        return (<FormControlLabel control={<Checkbox name={checkBoxName}/>} label={label} style={style}/>)
    }

    const [wtfPeriod, setWtfPeriod] = React.useState('');
    const handleWtfPeriod = (e) => {
        setWtfPeriod(e.target.value);
    };

    const saveButtonStyle = {color: "black", fontFamily: "Kakao", marginLeft: "5vh", backgroundColor: "#c2e66d"};

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
                        근태 정책 설정
                    </Typography>
                    <Button variant="contained" color="success" style={saveButtonStyle}>
                        저장
                    </Button>
                </Box>
                <Divider/>
                <Grid item sx={{my: 1, mx: 1}}>

                    <FormControl sx={{mx: 1}} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormLine checkBoxName={"wtfRatio"} label={<div>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    재택근무 비율
                                </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={wtfPeriod}
                                    label="Age"
                                    onChange={handleWtfPeriod}
                                    autoWidth
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                </Select>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    개월 기준
                                </Typography>
                                <Input inputProps={{'aria-label': 'description'}} sx={{width: '30px'}}/>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    % 사용 가능
                                </Typography>
                            </div>}
                            />

                            <FormLine checkBoxName={"availableOverRatio"}
                                      label={<Typography sx={{my: 1, mx: 1}} variant="body2" component="div"
                                                         display="inline">
                                          설정된 재택 근무 비율을 초과한 재택근무 등록 가능
                                      </Typography>}
                            />
                            <FormLine checkBoxName={"availableOverRatio"}
                                      label={
                                          <Typography sx={{my: 1, mx: 1}} variant="body2" component="div"
                                                      display="inline">
                                              비율을 초과한 재택근무 등록 시 사용자 알림
                                          </Typography>}
                                      style={{marginLeft: '5vh'}}
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </CardContent>
        </Card>)
}

export default AttendancePolicySetting;