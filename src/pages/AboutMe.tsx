import { Box, Button, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "95%",
        paddingTop: "10vh",
        minHeight: "100vh",
      }}
    >
      <h2>About Me</h2>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "150px",
              borderRadius: "20px",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              2
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Years of experience
            </Typography>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={4}>
          <Box
            sx={{
              height: "150px",
              borderRadius: "20px",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              5+
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Projects
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              height: "150px",
              borderRadius: "20px",
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Focused on responsive design
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              marginTop: "20px",
              height: "300px",
              borderRadius: "20px",
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "justify", fontFamily: "cursive" }}
            >
              Specialized in building scalable web applications using React, Vite, 
              and modern tools from the JavaScript ecosystem. Strong attention to detail, 
              performance, and code maintainability.
              <br />
              <Button
                href="/assets/CVSTEVENLOPEZ.pdf"
                download="CVSTEVENLOPEZ.pdf"
                sx={{
                  marginTop: "20px",
                  color: "#fff",
                  borderRadius: 2,
                }}
              >
                Download CV
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              marginTop: "20px",
              height: "300px",
              borderRadius: "20px",
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              <Box
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                Name:
              </Box>
              <br /> Steven López Mancera
              <br />
              <Box
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                Phone:
              </Box>
              <br /> +57 316 153 4971
              <br />
              <Box
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                Email:
              </Box>
              <br /> stevenlopez009r@gmail.com
              <br />
              <Box
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                Location:
              </Box>
              <br /> Bogotá
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
