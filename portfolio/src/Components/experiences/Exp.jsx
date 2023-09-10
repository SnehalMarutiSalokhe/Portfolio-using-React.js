
// import React from 'react';
import "./Exp.css";
import { Steps } from 'antd';

import colorSharp from "../../assets/img/color-sharp.png";


import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const titleColor = 'White'; 
const descriptionColor = 'gray'; 



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function Exp() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <div className =".Exp-container">
      <img className="Exp-image-left" src={colorSharp} alt="colorsharp" />

       <div className ="Exp">
          <Steps current={2} percent={60}>
            <Steps.Step
              title={<span style={{ color: titleColor }}>Content Writer</span>}
              description={<span style={{ color: descriptionColor }}>GeeksForGeeks</span>}
            />
            <Steps.Step
              title={<span style={{ color: titleColor }}>Web developer</span>}
              description={<span style={{ color: descriptionColor }}>CodeClause</span>}
            />
            <Steps.Step
              title={<span style={{ color: titleColor }}>Software trainee</span>}
              description={<span style={{ color: descriptionColor }}>Collab Vison Infosolution</span>}
            />
          </Steps>
       </div>


  <div className="Exp-detail">

  {/* <Box sx={{  width: auto }} className = "Exp-bg"> */}
  <Box  className = "Exp-bg">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#697bb6"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Content Writting" {...a11yProps(0)} />
          <Tab label="Web developer" {...a11yProps(1)} />
          <Tab label="Software trainee" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <h5>Content Writer</h5>
            <p>GeeksforGeeks</p>
            <p>Apr 2023 - Jul 2023 (3 months)</p>
            <p><big> <u>Skill:</u></big> Computer sciennce Fundamentals</p>
            <p>During this time period, I wrote some articles for the GeeksforGeeks website.</p>

          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
           
            <h5>Web Developer</h5>
            <p>CodeClause</p>
            <p>May 2023 - Jun 2023 (2 months)</p>
            <p><big> <u>Skill:</u></big> HTML,CSS,JavaScript</p>

            <p>I worked as web development Intern.</p>

          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>      

            <h5>Software Trainee</h5>
            <p>Collab Vision Infosolutions</p>
            <p>Jul 2023 - Present (1 month)</p>
            <p><big> <u>Skill:</u></big> React.js , HTML,CSS,JavaScript </p>

            <p>I worked as a React developer intern</p>

          </TabPanel>

      </SwipeableViews>

    </Box>
  {/* <img className="Exp-image-left" src={colorSharp} alt="colorsharp" />  */}
  </div>

  {/* <img className="Exp-image-left" src={colorSharp} alt="colorsharp" /> */}

    </div>
  )
}



