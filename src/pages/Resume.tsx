import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

const Resume = () => {
  return (
    <Box id="resume" sx={{ width: "100%", minHeight: "100vh" }}>
      <Typography
        variant="h5"
        sx={{ color: "white", marginTop: "10vh", marginBottom: "2vh" }}
      >
        My Education
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "100%", backgroundColor: "transparent" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Institution
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Degree
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                height: "100px",
                "&:nth-of-type(even)": { backgroundColor: "transparent" },
              }}
            >
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                SENA
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                Tecnologo en Analisis y Desarrollo de Software
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                2022-2024
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                height: "100px",
                "&:nth-of-type(even)": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                UDEMY
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                web development
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                2023-2024
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h5"
        sx={{
          color: "white",
          marginTop: "10vh",
          marginBottom: "2vh",
          fontSize: "1.3rem",
        }}
      >
        Work Experience
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%",
          backgroundColor: "transparent",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Empresa
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Cargo
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                height: "100px",
                "&:nth-of-type(even)": { backgroundColor: "transparent" },
              }}
            >
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                Vertebra Soluciones
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                Desarrollador Frontend, Apoyo QA
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
                7 meses
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Resume;
