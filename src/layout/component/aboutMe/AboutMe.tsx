import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FONTS } from "../../../constants";
import { Img } from "../Project/StyledBlur";

export const AboutMe = () => { 
    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'column', lg: 'row'}, width: {xs: '80%', md: '80%', lg: '96%'} }} alignItems="center" spacing={3} >
        <Stack direction="column" spacing={3}>
          <Typography  color="#c1cbea" sx={FONTS.openSans}>Hello! My name is Mahathirtama Ahmad and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I join university</Typography>
          <Typography  color="#c1cbea" sx={FONTS.openSans}>before that, my background is network engineer, but I interest to make website that taught me a lot about HTML & CSS, now i'm in sixth semester and waiting for graduate</Typography>
          <Typography  color="#c1cbea" sx={FONTS.openSans}>My hobies is playing laptop, I often to spent time with my laptop, thank for that I'm used to coding with a long time </Typography>
        </Stack>

        <Box
          sx={{
            width: "300px",
            height: "300px",
            ml: '-50px'
          }}
        >
          <Img src="https://i.ibb.co/fkj0LpM/mahathirtama-ahmad.png" width="300px" height="300px" alt="Mahathirtama Ahmad" />
          <Box sx={{ width: "300px", height: "300px", border: " solid #61eace", mt: "-280px", ml: "20px" }} />
          
        </Box>
      </Stack>
    )
}