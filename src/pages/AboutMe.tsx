import { Box, Button, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        paddingTop: "10vh",
        minHeight: "100vh",
      }}
    >
      <h2>
        Turning complex problems <br /> into simple design
      </h2>

      <Grid container spacing={2}>
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
              Passion for Design
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
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Innovative Solutions
            </Typography>
          </Box>
        </Grid>

        {/* Box 3 */}
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
              Efficient Workflows
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
            <Typography variant="h6" sx={{ textAlign: "justify" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. <br />
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
              <br /> Steven Lopez Mancera
              <br />
              <Box
                component="span"
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
              >
                Phone:
              </Box>
              <br /> 3161534971
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
              <br /> Madrid, Cundinamarca
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
