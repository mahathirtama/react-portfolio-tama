import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { COLORFONT } from "../../../constants";
import { Link } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography color={COLORFONT.grey}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const TabExperience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "#0a192f", display: { xs: "none", sm: "flex", lg: "flex" }, height: 224 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider", "	.MuiTabs-indicator": { backgroundColor: "#61eace" }, ".MuiTab-root.Mui-selected": { color: "#61eace" } }}
        >
          <Tab label="NusaNet" sx={{ color: "#c1cbea" }} />
          <Tab label="BPS" sx={{ color: "#c1cbea" }} />
          <Tab label="Systeric" sx={{ color: "#c1cbea" }} />
        </Tabs>
        <TabPanel value={value} index={0}>
           when SMK i intern in {" "}
          <Link underline="none" href="https://www.nusa.net.id/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            NUSANET
          </Link> {" "}
          for three months, my role is Technical Engineering,
        </TabPanel>
         <TabPanel value={value} index={1}>
          when University I intern in BPS or {" "}
          <Link underline="none" href="https://jakselkota.bps.go.id/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            Badan Pusat Statistic in South Jakarta
          </Link>{" "}
          for three months, my role is IPDS or Integrasi Pengolahan Diseminasi Statistik
        </TabPanel>
       <TabPanel value={value} index={2}>
          while six month I intern in {" "}
          <Link underline="none" href="https://www.systeric.com/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            PT Systeric Teknologi Indonesia
          </Link>
          , my role is Frontend
        </TabPanel>
      </Box>

      {/* media */}

      <Box sx={{ width: "100%", display: { xs: "block", sm: "none", lg: "none" } }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ ".MuiTabs-indicator": { backgroundColor: "#61eace" }, ".MuiTab-root.Mui-selected": { color: "#61eace" }, display: { xs: "block", sm: "none", lg: "none" } }}
          >
            <Tab label="NusaNet" sx={{ color: "#c1cbea" }} />
            <Tab label="BPS" sx={{ color: "#c1cbea" }} />
            <Tab label="Systeric" sx={{ color: "#c1cbea" }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          when SMK i intern in
          <Link underline="none" href="https://www.nusa.net.id/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            NUSANET
          </Link>
          for three months, my role is Technical Engineering,
        </TabPanel>
        <TabPanel value={value} index={1}>
          when University I intern in BPS or
          <Link underline="none" href="https://jakselkota.bps.go.id/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            Badan Pusat Statistic in South Jakarta
          </Link>{" "}
          for three months, my role is IPDS or Integrasi Pengolahan Diseminasi Statistik
        </TabPanel>
        <TabPanel value={value} index={2}>
          while six month I intern in
          <Link underline="none" href="https://www.systeric.com/" target="_blank" rel="noopener noreferrer" color={COLORFONT.green}>
            PT Systeric Teknologi Indonesia
          </Link>
          , my role is Frontend
        </TabPanel>
      </Box>
    </>
  );
};
