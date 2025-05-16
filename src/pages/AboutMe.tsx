import { Box, Button, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "95%",
        paddingTop: "10vh",
        minHeight: "auto",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      {/* Primera fila en desktop / primera y segunda fila en mobile */}
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Box sx={cardStyle}>
            <Typography variant="h3" textAlign="center">2</Typography>
            <Typography variant="h6" textAlign="center">Years of experience</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} md={4}>
          <Box sx={cardStyle}>
            <Typography variant="h3" textAlign="center">5+</Typography>
            <Typography variant="h6" textAlign="center">Projects</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={cardStyle}>
            <Typography variant="h6" textAlign="center">
              Focused on responsive design
            </Typography>
          </Box>
        </Grid>

        {/* Segunda fila desktop / tercera fila móvil */}
        <Grid item xs={12} md={8}>
          <Box sx={{ ...cardStyle, height: "300px", marginTop: 2 }}>
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

        <Grid item xs={12} md={4}>
          <Box sx={{ ...cardStyle, height: "300px", marginTop: 2 }}>
            <Typography variant="h6" textAlign="left">
              <Box component="span" sx={labelStyle}>Name:</Box>
              <br /> Steven López Mancera
              <br />
              <Box component="span" sx={labelStyle}>Phone:</Box>
              <br /> +57 316 153 4971
              <br />
              <Box component="span" sx={labelStyle}>Email:</Box>
              <br /> stevenlopez009r@gmail.com
              <br />
              <Box component="span" sx={labelStyle}>Location:</Box>
              <br /> Bogotá
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Estilos reutilizables
const cardStyle = {
  height: "150px",
  borderRadius: "20px",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 3,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const labelStyle = {
  fontSize: "0.8rem",
  fontWeight: "bold",
};

export default AboutMe;
