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
    FormLabel, Input, InputAdornment, InputLabel, Select, TextField
} from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from "@mui/material/IconButton";


const HolidayPolicySetting = () => {

    const saveButtonStyle = {color: "black", fontFamily: "Kakao", marginLeft: "5vh", backgroundColor: "#c2e66d"};
    const [value, setValue] = React.useState(dayjs('2022-04-07'))
    const classes = {};
    return (<Card
        className={classes.root}
        variant="outlined"
        style={{height: "100%"}}
    >
        <CardContent>
            <Box sx={{my: 1, mx: 1}}>

                <Typography variant="h5" style={{fontFamily: "Kakao"}} display={"inline"}>
                    기타 휴일 설정
                </Typography>

                <Button variant="contained" color="success" style={saveButtonStyle}>
                    저장
                </Button>
            </Box>
            <Divider/>
            <br/>
            <Grid item sx={{my: 0, mx: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    <DatePicker
                        views={['day', 'month', 'year']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} variant="standard"/>}
                    />
                </LocalizationProvider>
                <Input placeholder="휴일 설명을 입력하세요." inputProps="description" style={{marginLeft:"1vw"}}/>
                <IconButton aria-label="delete" size="small" style={{color:"black"}}>
                    <ControlPointIcon />
                </IconButton>
            </Grid>
            <Checkbox
                checked="true"
                onChange=""
                inputProps={{ 'aria-label': 'controlled' }}
                label="정기휴일"
                value="정기휴일 등록"
                abelPlacement="end"
            />

        </CardContent>
    </Card>);
}

export default HolidayPolicySetting;