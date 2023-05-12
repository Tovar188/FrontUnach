import { Button, Box, Container, Typography } from "@mui/material";

function RolSelection() {
  return (
    <Container sx={{ p: 2 }}>
        <Typography textAlign={'center'} sx={{ p: 2 }} variant='h4'>BIENVENIDO</Typography>
        <Typography textAlign={'center'} sx={{ p: 2 }} variant="h5">PROCESO DE INVESTIGACIÓN CIENTÍFICA</Typography>
        <Typography textAlign={'center'} sx={{ p: 2 }} variant="subtitle1">Elija el tipo de usuario que va a desempeñar</Typography>
        
        <Typography textAlign={'center'} sx={{ p: 2 }}></Typography>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: 200,
            height: 200,
            margin: 5,
          }}
        >
          <Button
            sx={{ marginBottom: 3, justifyContent: "center", width: "100%" }}
            size="large"
            variant="contained"
            disableElevation
          >
            Maestro
          </Button>

          <Button
            sx={{ marginBottom: 3, width: "100%" }}
            size="large"
            variant="contained"
            disableElevation
          >
            Coordinación de Investigación y Posgrado
          </Button>

          <Button
            sx={{ width: "100%" }}
            size="large"
            variant="contained"
            disableElevation
          >
            Evaluador
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default RolSelection;
