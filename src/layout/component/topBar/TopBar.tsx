import React from "react";
import { Toolbar, Typography, Box, Link, Avatar } from "@mui/material";
import { AppBar } from "./element";
import { COLORFONT, LAYOUT } from "../../../constants";
import { Stack } from "@mui/system";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = () => {

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={{ height: "74px", zIndex: 5, backgroundColor: "transparent", backdropFilter: "blur(20px)", display: { xs: "none", sm: "block", lg: 'block' } }} drawerWidth={LAYOUT.DRAWERWIDTH}>
        <Toolbar>
          <Box sx={{ ml:'3%', mt: '10px' }}>
            <Avatar sx={{ width: 50, height: 50, bgcolor: '#c1cbea' }}>M</Avatar>
          </Box>
          <Stack direction="row" alignItems="center" sx={{ ml: "auto", mr: "12%", mt: '10px' }} spacing={3}>
            <Typography>
              <Link
                underline="none"
                href="#aboutMe"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                About Me
              </Link>
            </Typography>
            <Typography>
              <Link
                underline="none"
                href="#experience"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                Experience
              </Link>
            </Typography>
            <Typography>
              <Link
                underline="none"
                href="#mySkill"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                My Skill
              </Link>
            </Typography>
            <Typography>
              <Link
                underline="none"
                href="#project"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                Project
              </Link>
            </Typography>
            <Typography>
              <Link
                underline="none"
                href="#contact"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                Contact Me
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
