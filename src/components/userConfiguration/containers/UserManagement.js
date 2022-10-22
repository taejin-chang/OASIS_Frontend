import * as React from 'react';
import UserTreeView from "../presentation/UserTreeView";
import Grid from "@mui/material/Grid";
import UserView from "../presentation/UserView";
import {Divider} from "@mui/material";
import SearchBox from "../presentation/SearchBox";

const UserManagement = () => {
    return (
        <>
            <div align="right" style={{ marginRight: "10px" }}>
                <SearchBox/>
            </div>
            <br/>
            <br/>
            <Grid container spacing={2} columns={10}>
                <Grid md={1.5}>
                    <UserTreeView/>
                </Grid>
                <Grid xs={0.5}>
                  <Divider orientation= "vertical"/>
                </Grid>
                <Grid xs={0.5}></Grid>
                <Grid container xs={9}
                      rowGap={5}
                      columnGap={5}
                      marginTop={5}
                      >
                    {[...Array(6)].map((_, index) => (
                        <Grid key={index} {...{ xs: 12, sm: 6, md: 2, lg: 5 }} minHeight={160} rowSpaing={10}>
                            <UserView/>
                        </Grid>
                        ))}
                </Grid>
            </Grid>
        </>
    )
}

export default UserManagement;
