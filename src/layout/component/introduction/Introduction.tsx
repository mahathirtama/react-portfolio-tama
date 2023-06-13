import Button from "@mui/material/Button/Button";
import Link from "@mui/material/Link/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { COLORFONT, FONTS } from "../../../constants";


export const Introduction = () => { 
  return (
    <>
      <Stack direction="column" spacing={4} sx={{ display: { xs: "none", sm: "block", lg: 'block' }, }}>
        <Typography color={COLORFONT.green}>hi, my name is</Typography>
        <Typography color={COLORFONT.grey} variant="h2" sx={FONTS.playfair}>
          Mahathirtama Ahmad.
        </Typography>
        <Typography color={COLORFONT.grey} variant="h2">
          I build things for the web.
        </Typography>
        <Typography color={COLORFONT.grey} sx={FONTS.openSans}>
          I'm a software engineer specializing in Web Developer
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center" >
          <Button variant="outlined" color="primary" sx={{ '&.MuiButton-outlinedPrimary': {borderColor: '#61eace'},   "&.MuiButton-outlined": {color: '#61eace'} }}><Link color={COLORFONT.green}  underline="none" href="https://drive.google.com/file/d/1_WTJe7A8PmQ4UcC2EyLfsUghJK215aJU/view" target="_blank" rel="noopener noreferrer" >Resume</Link></Button>
            <Button variant="outlined" color="primary" sx={{ '&.MuiButton-outlinedPrimary': {borderColor: '#61eace'},   "&.MuiButton-outlined": {color: '#61eace'} }}><Link color={COLORFONT.green}  underline="none" href="https://drive.google.com/file/d/1EMTS8eWghd4IG0MteR7LhaMEq_HrXgBf/view" target="_blank" rel="noopener noreferrer" >Certificate</Link></Button>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={4} sx={{ display: { xs: "block", sm: "none", lg: 'none' }, width: '80%' }}>
        <Typography color={COLORFONT.green}>hi, my name is</Typography>
        <Typography color={COLORFONT.grey} variant="h4" sx={FONTS.playfair}>
          Mahathirtama Ahmad.
        </Typography>
        <Typography color={COLORFONT.grey} variant="h4">
          I build things for the web.
        </Typography>
        <Typography color={COLORFONT.grey} sx={FONTS.openSans}>
          I'm a software engineer specializing in Web Developer
        </Typography>
        <Stack direction="row" spacing={3} >
          <Button variant="outlined" color="primary" sx={{ '&.MuiButton-outlinedPrimary': {borderColor: '#61eace'},   "&.MuiButton-outlined": {color: '#61eace'} }}><Link color={COLORFONT.green}  underline="none" href="https://drive.google.com/file/d/1_WTJe7A8PmQ4UcC2EyLfsUghJK215aJU/view" target="_blank" rel="noopener noreferrer" >Resume</Link></Button>
            <Button variant="outlined" color="primary" sx={{ '&.MuiButton-outlinedPrimary': {borderColor: '#61eace'},   "&.MuiButton-outlined": {color: '#61eace'} }}><Link color={COLORFONT.green}  underline="none" href="https://drive.google.com/file/d/1EMTS8eWghd4IG0MteR7LhaMEq_HrXgBf/view" target="_blank" rel="noopener noreferrer" >Certificate</Link></Button>
        </Stack>
      </Stack>
      </>
        
    )
}
