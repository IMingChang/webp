import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import TokenIcon from '@mui/icons-material/Token';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import api from '../api/api'


// const initData = [
//   {
//     avatar_url: null
//   }
// ]

export default function BasicGrid() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState();
  console.log(data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    api("users/cjwu").read()
      .then(function (res) {
        console.log(res.data);
        console.log(res.data.avatar_url);
        setData(res.data);
      })
      .then(function (res) {
      })
  }, [])

  return (
    <Container >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            {!data?.avatar_url ? (
              <Skeleton variant="circular" width={300} height={300} />
            ) : (
              <>
                <img
                  src={data.avatar_url}
                  srcSet={data.avatar_url}
                  alt="avatar"
                  style={{ borderRadius: '50%', marginTop:'30px' }}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <Box width={300}>
                  <Typography variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.login}
                  </Typography>
                  <Button variant="outlined" sx={{ width: '100%', my: 2 }}>Learn More</Button>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <PeopleAltIcon fontSize="small" />
                    &ensp;{data.followers}&ensp;
                    <Link href="#" underline="none">
                      followers
                    </Link>
                    &ensp;•&ensp;{data.following}&ensp;
                    <Link href="#" underline="none">
                      following
                    </Link>
                    &ensp;•&ensp;
                    <StarBorderIcon fontSize="small" />&ensp;0
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon fontSize="small" />&ensp;{data.location}
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon fontSize="small" />&ensp;{data.email}
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinkIcon fontSize="small" />
                    <Link href={data.blog} underline="none">
                      &ensp;{data.blog}
                    </Link>
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                  </Typography>
                </Box>
              </>
            )}
          </Grid>
          <Grid item xs={8} >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab icon={<MenuBookIcon />} iconPosition="start" label="Overview" {...a11yProps(0)} />
              <Tab icon={<BookIcon />} iconPosition="start" label="Repositories" {...a11yProps(1)} />
              <Tab icon={<AutoAwesomeMosaicIcon />} iconPosition="start" label="Projects" {...a11yProps(2)} />
              <Tab icon={<TokenIcon />} iconPosition="start" label="Packages" {...a11yProps(3)} />
              <Tab icon={<StarBorderIcon />} iconPosition="start" label="Stars" {...a11yProps(4)} />
            </Tabs>

            <Box sx={{ width: "100vw", borderBottom: 1, borderColor: 'divider', position: 'absolute', zIndex: '-99', left: '0px' }}></Box>
            <TabPanel value={value} index={0}>
              Overview
            </TabPanel>
            <TabPanel value={value} index={1}>
              Repositories
            </TabPanel>
            <TabPanel value={value} index={2}>
              Projects
            </TabPanel>
            <TabPanel value={value} index={3}>
              Packages
            </TabPanel>
            <TabPanel value={value} index={4}>
              Stars
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}