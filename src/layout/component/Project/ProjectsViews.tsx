import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "./seederProject";
import { IProject } from "./interfaces";
import { COLORFONT } from "../../../constants";
import { Img } from "./StyledBlur";

export const ProjectsViews = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", lg: 'block' } }}>
      {projects.map((project: IProject, i) => (
        <Stack  key={i} direction={project.position === "left" ? "row" : "row-reverse"} justifyContent="center" sx={{ mt: "5em" }}>
          <Box>
            <Img src={project.link} width="581px" height="359px" alt="Mahathirtama Ahmad" />
          </Box>
          <Stack direction="column" alignItems={project.position === "left" ? "flex-end" : "flex-start"} justifyContent="center" spacing={4} sx={project.position === "left" ? { zIndex: 1, ml: "-150px" } : { zIndex: 1, mr: "-150px" }}>
            <Typography color={COLORFONT.green}>Learn Project</Typography>
            <Typography color="white" variant="h5">{project.title}</Typography>
            <Card variant="outlined" sx={{ backgroundColor: "#112240" }}>
              <CardContent>
                <Typography color={COLORFONT.grey}>{project.description}</Typography>
              </CardContent>
            </Card>
            <Typography variant="body1" color={COLORFONT.grey}>{project.makingWith}</Typography>
            <Stack direction="row">
              <a href={project.linkGithub} target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: "40px", color: "white" }} /></a>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};
