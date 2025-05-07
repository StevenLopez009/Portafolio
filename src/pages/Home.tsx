import { Box, Button, Typography } from "@mui/material";
import useTypingEffect from "../components/UseTipyngEffect";
// Asegúrate de que la ruta sea correcta

const Home = () => {
  const typedText = useTypingEffect("Frontend Developer", 150);
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
