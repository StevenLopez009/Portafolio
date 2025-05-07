import React from 'react';
import { Box, Typography } from '@mui/material';

type ProjectCardProps = {
  image: string;
  label: string;
  url: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, label, url }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      onClick={() =>
        openInNewTab(url)
      }
      sx={{
        height: "100%",
        backgroundImage: `url(${image})`,
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
          {label}
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
  );
};

export default ProjectCard;
