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
    <Box id="resume" sx={{ width: "100%", minHeight: "120vh" }}>
      <Typography variant="h5" sx={{ color: "white", marginTop: "10vh" }}>
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
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Institution
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Degree
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
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
              <TableCell sx={{ color: "white" }}>SENA</TableCell>
              <TableCell sx={{ color: "white" }}>
                Tecnologo en Analisis y Desarrollo de Software
              </TableCell>
              <TableCell sx={{ color: "white" }}>2022-2024</TableCell>
            </TableRow>
            <TableRow
              sx={{
                height: "100px",
                "&:nth-of-type(even)": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <TableCell sx={{ color: "white" }}>UDEMY</TableCell>
              <TableCell sx={{ color: "white" }}>
                Master's in Data Science
              </TableCell>
              <TableCell sx={{ color: "white" }}>2023-2024</TableCell>
            </TableRow>
            <TableRow
              sx={{
                height: "100px",
                "&:nth-of-type(even)": { backgroundColor: "#e0e0e0" },
              }}
            >
              <TableCell sx={{ color: "white" }}>Institute C</TableCell>
              <TableCell sx={{ color: "white" }}>
                Diploma in Web Development
              </TableCell>
              <TableCell sx={{ color: "white" }}>2020</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" sx={{ color: "white", marginTop: "10vh" }}>
        Work Experience
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%",
          backgroundColor: "transparent",
          marginTop: "5vh",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "transparent" }}>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Empresa
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Cargo
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem" }}
              >
                Tiempo
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
              <TableCell sx={{ color: "white" }}>Vertebra Soluciones</TableCell>
              <TableCell sx={{ color: "white" }}>
                Desarrollador Frontend, Apoyo QA
              </TableCell>
              <TableCell sx={{ color: "white" }}>7 meses</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Resume;
