import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100%",
        minHeight: "100vh",
        paddingTop: "60vh",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: "tiny",
          color: "#cdb4db",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        I'm Steven López <br /> Frontend Developer
      </Typography>
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
    </Box>
  );
};

export default Home;
