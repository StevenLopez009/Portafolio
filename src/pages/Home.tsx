import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import useTypingEffect from "../components/useTipyngEffect";

// Asegúrate de que la ruta sea correcta

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const typedText = useTypingEffect("Frontend Developer", 150);

  return (
    <Box
      id="home"
      sx={{
        paddingTop: isMobile ? "20vh" : "60vh",
        height: { xs: "80vh", md: "90vh" },
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
        I'm Steven López <br /> {typedText}
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
