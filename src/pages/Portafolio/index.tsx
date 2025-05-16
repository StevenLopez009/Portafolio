import { Box, Grid } from "@mui/material";
import trabajo1 from "../../assets/trabajo1.png";
import trabajo2 from "../../assets/trabajo2.png";
import trabajo3 from "../../assets/trabajo3.png";
import trabajo4 from "../../assets/trabajo4.png";
import ProjectCard from "./components/ProjectCard";


const Portafolio = () => {
  
  return (
    <Box id="portfolio" sx={{ minHeight: "100vh", paddingTop: "10vh" }}>
      <Grid container spacing={2} sx={{ minHeight: "90vh", px: 2 }}>
        <Grid item  md={8} sx={{ display: { xs: "none", md: "block" }, minHeight: "90vh", px: 2,  }}
        >
         <Grid container direction="column" spacing={2} sx={{ height: '100%' }}>
         <Grid item sx={{ flex: 1 }}>
            <ProjectCard
                image={trabajo1}
                label="REACT"
                url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
              />
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <ProjectCard
                image={trabajo3}
                label="REACT"
                url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
              />
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <ProjectCard
                image={trabajo4}
                label="REACT"
                url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }} >
          <ProjectCard
            image={trabajo2}
            label="REACT"
            url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
          />
        </Grid>

        {/* Vista MÓVIL (xs) */}
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <ProjectCard
            image={trabajo1}
            label="REACT"
            url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <ProjectCard
            image={trabajo2}
            label="REACT"
            url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <ProjectCard
            image={trabajo3}
            label="REACT"
            url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <ProjectCard
            image={trabajo4}
            label="REACT"
            url="https://airplanes-jy0ifa198-stevens-projects-6b1ecd0d.vercel.app/"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portafolio;
