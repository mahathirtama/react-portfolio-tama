import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./layout/component/topBar/TopBar";
import { Container } from "./layout/container/Container";
import { LeftSide } from "./layout/container/LeftSide";
import { RightSide } from "./layout/container/RightSide";
import { BrowserRouter } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar/Avatar";

export const Layout = () => {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000);
  }, []);
  return (
    <>
      {loadingScreen ? (
        <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0a192f" }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '1em' }}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: '#61eace' }}>M</Avatar>
          </Box>
          <Box sx={{ width: '15%' }}>
            <LinearProgress color="secondary" sx={{ "	.MuiLinearProgress-barColorSecondary": { backgroundColor: "#61eace" }, ".MuiLinearProgress-colorSecondary": { backgroundColor: "#c1cbea" } }} />
          </Box>
        </Box>
      ) : (
          <BrowserRouter>
          <Box sx={{ backgroundColor: "#0a192f", width: '100%', display: 'flex', flexDirection: 'column' }}>
            <TopBar />
            <Box sx={{ my: "10em", width: '100%' }}>
              <Stack direction="row">
                <LeftSide />
                <Container />
                <RightSide />
              </Stack>
            </Box>
            </Box>
            </BrowserRouter>
      )}
    </>
  );
};
