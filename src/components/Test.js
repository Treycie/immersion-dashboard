import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CustomizedInputBase from "./searchBar";

const Test = () => {
  return (
    <>
<CustomizedInputBase/>
<Grid
        container
        alignItems="center"
        margin={30}
        justifyContent="center"
        style={{ marginLeft: "10px" }}
      >
        <Card
          variant="outlined"
          style={{
            margin: "0 10px",
            width: "250px",
            height: "150px",
            borderRadius: "8px"
          }}
        >
          <Grid display="flex" margin="30px">
            <Grid item marginTop={"40px"}>
              <Box mr={2} >
                <Avatar >
                  <TimeToLeaveIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs >
              <Typography variant="h4">300</Typography>
              <Typography variant="">Total Rides</Typography>
              <Typography>
                <ArrowCircleUpIcon color="primary" /> 4%(30 days)
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          variant="outlined"
          style={{
            margin: "0 10px",
            width: "250px",
            height: "150px",
            borderRadius: "8px",
          }}
        >
          <Grid display="flex" margin="30px">
            <Grid item marginTop={"40px"}>
              <Box mr={2}>
                <Avatar>
                  <ArticleIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="h4">500</Typography>
              <Typography variant="">Total Canceled Rides</Typography>
              <Typography>
                <ArrowCircleUpIcon color="primary" /> 4%(30 days)
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          variant="outlined"
          style={{
            margin: "0 10px",
            width: "250px",
            height: "150px",
            borderRadius: "8px",
          }}
        >
          <Grid display="flex" margin="30px">
            <Grid item marginTop={"40px"}>
              <Box mr={2}>
                <Avatar>
                  <CloseIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="h4">65</Typography>
              <Typography>Total rides</Typography>
              <Typography variant="">
                <ArrowCircleDownIcon color="secondary" variant=""/> 25%(30 days)
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          variant="outlined"
          style={{
            margin: "0 10px",
            width: "250px",
            height: "150px",
            borderRadius: "8px",
          }}
        >
          <Grid display="flex" margin="30px">
            <Grid item marginTop={"40px"}>
              <Box mr={2}>
                <Avatar>
                  <TimeToLeaveIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs >
              <Typography variant="h4">128</Typography>
              <Typography>Trips in progress</Typography>
              <Typography variant="">
                <ArrowCircleDownIcon color="secondary" /> 12%(30 days)
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Test;
