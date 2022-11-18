import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { SeederSkill } from "./SeederSkill";
import { Ul, Small } from "./StyledAnimation";
import Link from "@mui/material/Link/Link";
import { COLORFONT } from "../../../constants";

export const Skill = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e: any) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
    <Box sx={{ display: { xs: "none", sm: "none", lg: 'block' }, ml: '-20%' }}>
      <Ul>
        {SeederSkill.map((skill, i) => (
          <li key={i}>
            <span><Link
                underline="none"
                href="#"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                {skill.title}
              </Link></span>
            <div className="img-cont">
              <img src={skill.link} alt={skill.title} />
            </div>
          </li>
        ))}
      </Ul>

      <div style={{ left: `${position.x}px`, top: `${position.y}px` }} className="cursor"></div>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", lg: 'none' }, ml: '-50%' }}>
      <Small>
        {SeederSkill.map((skill, i) => (
          <li key={i}>
            <span><Link
                underline="none"
                href="#"
                color={COLORFONT.grey}
                sx={{
                  "&:hover": {
                    color: "#61eace",
                  },
                }}
              >
                {skill.title}
              </Link></span>
            <div className="img-cont">
              <img src={skill.link} alt={skill.title} />
            </div>
          </li>
        ))}
      </Small>

      <div style={{ left: `${position.x}px`, top: `${position.y}px` }} className="cursor"></div>
      </Box>
      </>
  );
};
