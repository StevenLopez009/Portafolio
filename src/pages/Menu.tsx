import { Box, Button } from "@mui/material";
import Home from "./Home";
import Portafolio from "./Portafolio";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Tools from "./Tools";

const Menu = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        margin: 3,
        marginLeft: "25%",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button sx={{ color: "white" }} onClick={() => handleScroll("home")}>
            Home
          </Button>
          <Button
            sx={{ color: "white" }}
            onClick={() => handleScroll("portfolio")}
          >
            Portafolio
          </Button>
          <Button sx={{ color: "white" }} onClick={() => handleScroll("about")}>
            About Me
          </Button>
          <Button
            sx={{ color: "white" }}
            onClick={() => handleScroll("resume")}
          >
            Resume
          </Button>
          <Button sx={{ color: "white" }} onClick={() => handleScroll("tools")}>
            Tools
          </Button>
        </Box>
        <Button
          sx={{
            position: "fixed",
            top: 60,
            right: 60,
            background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
            color: "#000",
            borderRadius: 2,
          }}
        >
          Lets Talk
        </Button>
      </Box>
      <Home />
      <Portafolio />
      <AboutMe />
      <Resume />
      <Tools />
    </Box>
  );
};

export default Menu;
