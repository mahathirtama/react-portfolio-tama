import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import Divider from "@mui/material/Divider";

export const RightSide = () => {
  return (
    <Box sx={{ width: "12%", justifyContent: "center", position: "fixed", alignItems: "flex-end", mt: "15%", display: { xs: "none", sm: "none", lg: 'flex' } }}>
      <Stack direction="column" justifyContent="center" alignItems="flex-end" spacing={4}>
        <a href="https://github.com/mahathirtama" target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: "40px", color: "white" }} /></a>
        <a href="https://www.instagram.com/mahathirtama_/" target="_blank" rel="noopener noreferrer" ><InstagramIcon sx={{ fontSize: "40px", color: "white" }} /></a>
        <a href="https://twitter.com/mahathirtama" target="_blank" rel="noopener noreferrer" ><TwitterIcon sx={{ fontSize: "40px", color: "white" }} /></a>
        <a href="https://www.linkedin.com/in/mahathirtama-ahmad-8978b71b8/" target="_blank" rel="noopener noreferrer" ><LinkedInIcon sx={{ fontSize: "40px", color: "white" }} /></a>
        <Divider orientation="vertical" sx={{ color: "white" }} />
      </Stack>
    </Box>
  );
};
