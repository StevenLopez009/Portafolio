import { Box, Typography, Button, Avatar, Icon, Tooltip } from "@mui/material";
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
        width: "20%",
        padding: 3,
        borderRadius: 2,
        height: "90vh",
        position: "fixed",
        top: 30,
        left: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={perfilImg}
        alt="Perfil"
        sx={{
          width: "90%",
          height: "30vh",
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
      <Typography variant="h6" color="white" align="center">
        Frontend Developer
      </Typography>
      <Typography variant="h6" color="white" align="center">
        Bogotá, Colombia
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgb(165, 165, 165)",
          width: "100%",
          height: "5vh",
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
        <Tooltip
          title={
            <span style={{ fontSize: "1.2rem" }}>
              stevenlopez009r@gmail.com
            </span>
          }
          placement="top"
          arrow
        >
          <a href="mailto:stevenlopez009r@gmail.com">
            <EmailIcon sx={{ color: "#fff" }} />
          </a>
        </Tooltip>
        <Tooltip
          title={<span style={{ fontSize: "1.2rem" }}>3161534971</span>}
          placement="top"
          arrow
        >
          <a href="tel:+573161534971" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Aside;
