import { Box, Grid, Typography } from "@mui/material";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescrypt.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import git from "../assets/git.png";
import html from "../assets/html.webp";
import css from "../assets/css.png";

const tools = [
  { name: "React", src: react },
  { name: "JavaScript", src: js },
  { name: "TypeScript", src: ts },
  { name: "GraphQL", src: graphql },
  { name: "Node", src: node },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "Git", src: git },
];

const Tools = () => {
  return (
    <Box
      id="tools"
      sx={{ width: "95%", paddingTop: "10vh", minHeight: "100vh", margin: "0 auto" }}
    >
      <Typography variant="h4" gutterBottom>
        Tools
      </Typography>
      <Grid container spacing={2}>
        {tools.map((tool) => (
          <Grid key={tool.name} item xs={6} sm={4} md={2.4}>
            <Box
              sx={{
                height: "200px",
                borderRadius: "20px",
                padding: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={tool.src}
                alt={`${tool.name} Logo`}
                sx={{
                  height: "80px",
                  width: "auto",
                  marginBottom: "8px",
                  borderRadius: "10px",
                }}
              />
              <Typography variant="subtitle1" align="center">
                {tool.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tools;

