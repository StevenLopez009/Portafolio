import { Box, Grid, Typography } from "@mui/material";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescrypt.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import git from "../assets/git.png";
import html from "../assets/html.webp";
import css from "../assets/css.png";

const Tools = () => {
  return (
    <Box
      id="tools"
      sx={{ width: "100%", paddingTop: "10vh", minHeight: "100vh" }}
    >
      <h2>Tools</h2>
      <Grid container spacing={0}>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={react}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              React
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={js}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Javascript
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={ts}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Typescript
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={graphql}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              GraphQl
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={node}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Node
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={0} sx={{ marginTop: 2 }}>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={html}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Html
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={css}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Css
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.4}>
          <Box
            sx={{
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={git}
              alt="React Logo"
              sx={{
                height: "80px",
                width: "auto",
                marginBottom: "8px",
                borderRadius: "10px",
              }}
            />
            <Typography variant="subtitle1" align="center">
              Git
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tools;
