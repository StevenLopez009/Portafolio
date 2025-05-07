import { Box, Grid } from "@mui/material";
import trabajo1 from "../../assets/trabajo1.png";
import trabajo2 from "../../assets/trabajo2.png";
import trabajo3 from "../../assets/trabajo3.png";
import trabajo4 from "../../assets/trabajo4.png";
import ProjectCard from "./components/ProjectCard";


const Portafolio = () => {
  

  return (
    <Box
      id="portfolio"
      sx={{ width: "100%", minHeight: "100vh", paddingTop: "10vh" }}
    >
      <Grid container sx={{ height: "90vh", padding: 1 }}>
        <Grid item xs={8} sx={{ height: "100%", paddingRight: 1 }}>
          <Grid container direction="column" sx={{ height: "100%" }}>
            <Grid item sx={{ flex: 1, paddingBottom: 1 }}>
              <ProjectCard image={trabajo1} label="REACT" url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"/>
            </Grid>
            <Grid item sx={{ flex: 1, paddingBottom: 1 }}>
              <ProjectCard image={trabajo3} label="REACT" url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"/>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <ProjectCard image={trabajo4} label="REACT" url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ height: "100%", paddingLeft: 1 }}>
          <ProjectCard image={trabajo2} label="REACT" url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portafolio;
