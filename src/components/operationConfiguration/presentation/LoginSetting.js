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
    FormLabel, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const LoginSetting = () => {

    const classes = {};
    return (
        <Card
            className={classes.root}
            variant="outlined"
            style={{height: "100%"}}
        >
            <CardContent>
                <Box sx={{my: 1, mx: 1}}>
                    <Typography variant="h5" style={{fontFamily: "Kakao"}}>
                        로그인 설정
                    </Typography>
                </Box>
                <Divider/>
                <Grid item sx={{my: 1, mx: 1}}>
                    <Typography color="textSecondary" gutterBottom variant="h6" component="div" style={{fontFamily: "Kakao"}}>
                        비밀번호 정책 설정
                    </Typography>

                <FormControl sx={{ mx: 1 }} component="fieldset" variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox name="prevPassword" />
                        }
                            label={<div>
                                <Typography sx={{my: 1, mx: 1}} variant="body2" component="div" display="inline">
                                    이전 비밀번호 사용
                                </Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                        </div>}

                        />

                    </FormGroup>
                </FormControl>
                </Grid>
                <Typography variant="body2" component="p">
                    Company
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}

export default LoginSetting;