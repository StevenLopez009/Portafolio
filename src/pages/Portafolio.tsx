import { Box, Grid, Typography } from "@mui/material";
import trabajo1 from "../assets/trabajo1.png";
import trabajo2 from "../assets/trabajo2.png";
import trabajo3 from "../assets/trabajo3.png";
import trabajo4 from "../assets/trabajo4.png";
import { Link } from "react-router-dom";

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
              <Box
                sx={{
                  height: "100%",
                  backgroundImage: `url(${trabajo1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "30px",
                    width: "80px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{ color: "black", textAlign: "center" }}>
                    REACT
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "20px",
                    zIndex: 0,
                  }}
                />
              </Box>
            </Grid>
            <Grid item sx={{ flex: 1, paddingBottom: 1 }}>
              <Link
                to="https://demo.templatemonster.com/es/demo/253125.html?_gl=1*1l6uzd1*_ga*MTY2MzYzODA3OC4xNzMwMTMyMjU3*_ga_FTPYEGT5LY*MTczMDEzMjI1Ny4xLjEuMTczMDEzMjI1Ny42MC4wLjA."
                target="_blank"
                style={{
                  textDecoration: "none",
                  height: "100%",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundImage: `url(${trabajo3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      height: "30px",
                      width: "80px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      zIndex: 1,
                    }}
                  >
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      REACT
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: "30px",
                      width: "80px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      position: "absolute",
                      bottom: 60,
                      right: 20,
                      zIndex: 1,
                    }}
                  >
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      NODE
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "20px",
                      zIndex: 0,
                    }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: "100%",
                  backgroundImage: `url(${trabajo4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "30px",
                    width: "80px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{ color: "black", textAlign: "center" }}>
                    REACT
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "20px",
                    zIndex: 0,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4} sx={{ height: "100%", paddingLeft: 1 }}>
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${trabajo2})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "30px",
                width: "80px",
                backgroundColor: "white",
                borderRadius: "10px",
                position: "absolute",
                bottom: 20,
                right: 20,
                zIndex: 1,
              }}
            >
              <Typography sx={{ color: "black", textAlign: "center" }}>
                REACT
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "20px",
                zIndex: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portafolio;
