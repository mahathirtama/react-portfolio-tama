import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { projects } from "./seederProject";
import { IProject } from "./interfaces";
import { COLORFONT } from "../../../constants";
import { Img } from "./StyledBlur";
import GitHubIcon from "@mui/icons-material/GitHub";



export const Project = () => {
  return (
    <Box sx={{ display: { xs: "flex", sm: "flex", lg: 'none' }, flexDirection: "column", width: "80%", justifyContent: "center" }}>
      {projects.map((project: IProject, i) => (
        <Box
          key={i}
          sx={{
            width: "100%",
            height: "480px",
            mr: "10px",
            mt: "80px",
            "&:hover": {
              mt: "-10px",
            },
          }}
        >
          <Card variant="outlined" sx={{ height: "100%", backgroundColor: "#112240" }}>
            <a href={project.linkGithub} target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: "40px", color: "white" }} /></a>
            <Img src={project.link}  width="100%" height="200px" alt="tama" />
            <CardContent>
              <Typography color={COLORFONT.green}>
                {project.title}
              </Typography>
              <Typography color={COLORFONT.grey}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ height: "60px", display: "flex", alignItems: "center", backgroundColor: "#112240", flexDirection: 'column' }}>
            <Typography sx={{ mb: 1.5, ml: "10px" }} color={COLORFONT.green}>
              {project.makingWith}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
