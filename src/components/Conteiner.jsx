import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// eslint-disable-next-line react/prop-types
const Conteiner = ({ state, stock, inicial, name, label = "Horas", setState, sx }) => {
  //const [contador, setContador] = useState(inicial);
  

  const addProduct = (num) => {
    //setContador(contador + num);
    const result = state + num;
    setState({
      contador: result,
    });
  };

  return (
    <Box sx={sx}>
      <Typography variant="h5">
        Horas dedicadas semanalmenta al proyecto
      </Typography>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={() => addProduct(-1)} disabled={state === inicial}>
          -
        </Button>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          name={name}
          value={state}
        />
        <Button onClick={() => addProduct(+1)} disabled={state === stock}>
          +
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Conteiner;
