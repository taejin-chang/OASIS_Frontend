import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Container from "@mui/material/Container";
import {styled} from "@mui/material/styles";
import LoginSetting from "../presentation/LoginSetting";
import AttendancePolicySetting from "../presentation/AttendancePolicySetting";
import HolidayPolicySetting from "../presentation/HolidayPolicySetting";

const OperationConfiguration = () => {

    const EmptySpace = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));


    const YourCard = () => {
        const classes = {};
        return (
            <Card
                className={classes.root}
                variant="outlined"
                style={{height: "100%"}}
            >
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Customer Profile
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Sarah Doria
                    </Typography>
                    <Typography color="textSecondary">
                        Position
                    </Typography>
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
    };


    return (
        <Container>
            <br />

            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="stretch"
            >
                <Grid item xs={6}>
                    <Grid style={{height: "100%"}}>
                        <LoginSetting />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <AttendancePolicySetting />
                        </Grid>
                        <Grid item xs={12}>
                            <HolidayPolicySetting />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );

}

export default OperationConfiguration;