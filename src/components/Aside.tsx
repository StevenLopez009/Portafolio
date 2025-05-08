import {
  Box,
  Typography,
  Button,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import perfilImg from "../assets/perfil.png";

const Aside = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(58, 58, 58)",
        padding: 3,
        borderRadius: 2,
        position: "fixed",
        top: 30,
        left: { xs: "50%", md: 30 },
        transform: { xs: "translateX(-50%)", md: "none" },
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: { xs: "90%", md: "20%" },
        height: { xs: "40vh", md: "90vh" },
        zIndex: 1000,
      }}
    >
      <Avatar
        src={perfilImg}
        alt="Perfil"
        sx={{
          width: { xs: "30%", md: "90%" },
          height: { xs: "100%", md: "30vh" },
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          flex: 1,
          gap: 1,
          width: "100%",
        }}
      >
        <Typography variant="h6" color="white">
          Frontend Developer
        </Typography>
        <Typography variant="h6" color="white">
          Bogotá, Colombia
        </Typography>

        <Box
          sx={{
            backgroundColor: "rgb(165, 165, 165)",
            width: "100%",
            height: "auto",
            padding: 1,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 2,
            marginTop: "auto",
          }}
        >
          <a
            href="https://www.linkedin.com/in/lpz-steven/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#fff" }} />
          </a>
          <InstagramIcon sx={{ color: "#fff" }} />
          <a
            href="https://github.com/StevenLopez009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#fff" }} />
          </a>
          <Tooltip title={<span style={{ fontSize: "1.2rem" }}>stevenlopez009r@gmail.com</span>} arrow>
            <a href="mailto:stevenlopez009r@gmail.com">
              <EmailIcon sx={{ color: "#fff" }} />
            </a>
          </Tooltip>
          <Tooltip title={<span style={{ fontSize: "1.2rem" }}>3161534971</span>} arrow>
            <a href="tel:+573161534971">
              <PhoneAndroidIcon sx={{ color: "#fff" }} />
            </a>
          </Tooltip>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
            color: "#000",
            borderRadius: 2,
            width: "100%",
          }}
        >
          Let's Work Together
        </Button>
      </Box>
    </Box>
  );
};

export default Aside;

