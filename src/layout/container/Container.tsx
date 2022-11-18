import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React from "react";
import { TabExperience } from "../component/tabExperience/TabExperience";
import { Project } from "../component/Project/Project";
import { ProjectsViews } from "../component/Project/ProjectsViews";
import { Skill } from "../component/skill/Skill";
import { COLORFONT, FONTS } from "../../constants";
import { Introduction } from "../component/introduction/Introduction";
import { AboutMe } from "../component/aboutMe/AboutMe";

export const Container = () => {
  return (
    <Box sx={{ width: { xs: "100%", md: "100%", lg: "76%" }, display: "flex", flexDirection: "column", gap: "6em", ml: '12%' }}>
      {/* introduction */}
      <Box>
      <Introduction />
      </Box>
      {/* end introduction */}
      {/* about me */}
      <div id="aboutMe"></div>
      <Box>
        <Typography color="#61eace" variant="h3" sx={FONTS.playfair}>
          About Me
        </Typography>
        <AboutMe />
      </Box>
      {/* end about me */}
      {/* experience */}
      <div id="experience"></div>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", gap: '20px' }}>
        <Typography color={COLORFONT.green} variant="h3" sx={FONTS.playfair}>
          Experience
        </Typography>
        <TabExperience />
      </Box>
      {/* end experience */}
      {/* skill */}
      <div id="mySkill"></div>
      <Box>
        <Typography color={COLORFONT.green} variant="h3" sx={FONTS.playfair}>
          MY Skill
        </Typography>
        <Skill />
      </Box>
      {/* end skill */}
      {/* project */}
      <div id="project"></div>
      <Box>
        <Typography color={COLORFONT.green} variant="h3" sx={FONTS.playfair}>
          MY Project
        </Typography>
        <ProjectsViews />
        <Project />
      </Box>
      {/* end project */}
      {/* contact */}
      <div id="contact"></div>
      <Box>
        <Typography color={COLORFONT.green} variant="h3" sx={FONTS.playfair}>
          Contact Me
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: '20px' }}>
          <img src="https://i.ibb.co/5KGLPXM/WhatsApp.png" alt="WhatsApp" width="40px" height="40px" />
          <Typography color={COLORFONT.grey}>0857-7143-4475</Typography>
        </Stack>
         <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: '10px' }}>
          <img src="https://i.ibb.co/G3dp4jH/gmail.png" alt="WhatsApp" width="40px" height="40px" />
          <Typography color={COLORFONT.grey}>mahathirtama.ahmad@gmail.com</Typography>
        </Stack>
      </Box>
      {/* end contact */}
      {/* footer */}
      <Box sx={{ ml: '45%' }}>
         <Typography color={COLORFONT.grey}>make by Mahathirtama Ahmad</Typography>
      </Box>
      {/* end footer */}
    </Box>
  );
};
