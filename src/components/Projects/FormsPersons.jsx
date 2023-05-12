import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import * as React from "react";
import PropTypes from "prop-types";
import Input from "@mui/material/Input";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function FormsPersons({ handleBack, handleNext }) {
  const [grado, setGrado] = useState("");
  const [adscripcion, setAdscripcion] = useState("");

  const [phoneOffice, setPhoneOffice] = React.useState({
    textmask: "(100) 000-0000",
  });

  const [cell, setCell] = React.useState({
    textmask: "(100) 000-0000",
  });

  const handleChange = (event) => {
    setGrado(event.target.value);
  };

  const handleChangeAdscripcion = (event) => {
    setAdscripcion(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhoneOffice({
      ...phoneOffice,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCell = (event) => {
    setCell({
      ...cell,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Typography textAlign="center" variant="h5" marginBottom={1}>
        Registro
      </Typography>
      <Typography textAlign="center" variant="h6">
        Rellene el siguiente formularios con los datos que se solicitan:
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h4" marginBottom={2}>
            Persona responsable técnica
          </Typography>

          <Grid>
            <Grid marginBottom={1}>
              <Typography marginBottom={1} variant="h6">
                Grado
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Elige un elemento</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  size="small"
                  labelId="demo-simple-select-label"
                  value={grado}
                  label="Ingrese"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Lic</MenuItem>
                  <MenuItem value={20}>Ing</MenuItem>
                  <MenuItem value={30}>Mtro</MenuItem>
                  <MenuItem value={40}>Mtra</MenuItem>
                  <MenuItem value={50}>Dra</MenuItem>
                  <MenuItem value={60}>Dr</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h6" marginBottom={1}>
            Nombre
          </Typography>
          <Grid container>
            <Grid marginBottom={1} item xs={12} md={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Ingrese"
                name="LugarRealizacion"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid marginBottom={1}>
              <Typography marginBottom={1} variant="h6">
                Centro de adscripcion
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Elige un elemento</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  size="small"
                  labelId="demo-simple-select-label"
                  value={adscripcion}
                  label="Ingrese"
                  onChange={handleChangeAdscripcion}
                >
                  <MenuItem value={1}>
                    Facultad de Contaduría y Administración, C-I
                  </MenuItem>
                  <MenuItem value={2}>
                    Facultad de Ciencias de la Administración, C-IV
                  </MenuItem>
                  <MenuItem value={3}>Facultad de Negocios, C-IV</MenuItem>
                  <MenuItem value={4}>
                    Facultad de Ciencias Administrativas, Comitán, C-VIII
                  </MenuItem>
                  <MenuItem value={5}>
                    Escuela de Contaduría y Administración, Pichucalco, C-VII
                  </MenuItem>
                  <MenuItem value={6}>
                    Escuela de Ciencias Administrativas, C-IX, Arriaga
                  </MenuItem>
                  <MenuItem value={7}>
                    Escuela de Ciencias Administrativas, Istmo-Costa, C-IX,
                    Tonalá
                  </MenuItem>
                  <MenuItem value={8}>Centro Universidad-Empresa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography variant="h6" marginBottom={1}>
            Correo electronico
          </Typography>
          <Grid container>
            <Grid marginBottom={1} item xs={12} md={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Ingrese"
                name="LugarRealizacion"
                size="small"
              />
            </Grid>
          </Grid>

          <Typography variant="h6" marginBottom={1}>
            Telefono de oficina
          </Typography>
          <Grid container>
            <Grid marginBottom={1} item xs={12} md={12}>
              <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">
                  Ingrese el numero
                </InputLabel>
                <Input
                  value={phoneOffice.textmask}
                  onChange={handleChangePhone}
                  name="textmask"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Typography variant="h6" marginBottom={1}>
            Telefono celular
          </Typography>
          <Grid container>
            <Grid marginBottom={1} item xs={12} md={12}>
              <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">
                  Ingrese el numero
                </InputLabel>
                <Input
                  value={cell.textmask}
                  onChange={handleChangeCell}
                  name="textmask"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
        <Button variant="contained" onClick={handleBack}>
          Regresar
        </Button>
        {/* <Button variant="contained" onClick={formik.handleSubmit}>
          Siguiente
        </Button> */}
      </Stack>
    </div>
  );
}

export default FormsPersons;
