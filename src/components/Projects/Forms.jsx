//import DrawerComponent from "./DrawerComponent";
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Conteiner from "../Conteiner";
import { useFormik } from "formik";
import { ProjectInterface } from "../../data/interfaces/ProjectInterface";
import { ProjectSchema } from "../../data/schemas/ProjectSchema";
import moment from "moment";

const Prueba = ({ stepper, handleNext }) => {
  const formik = useFormik({
    initialValues: ProjectInterface,
    validationSchema: ProjectSchema,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  const handleSave = (values) => {
    const _values = {
      lugar: values.lugar,
      FechaIncio: moment(values.inicio).format("YYYY-MM-DD"),
      FechaFin: moment(values.fin).format("YYYY-MM-DD"),
      Horas: parseInt(values.contador),
    };
    console.log(_values);
    handleNext();
    //Ejecuta api
    /* try{
      setLoading(true)
      const result = await fetch("https::/api/register-proyecto", _values, "POST")
        const response = await result;
        if(response.results){
          handleNext();
        }else{
          sweetAlert("Ocurrio un problema")
        }
    }catch{
      sweetAlert("Problema")
    }finally{
      setLoading(false)
    }
    */
  };

  return (
    <>
      <Typography textAlign="center" variant="h5" marginBottom={1}>
        Registro
      </Typography>
      <Typography textAlign="center" variant="h6">
        Rellene el siguiente formularios con los datos que se solicitan:
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" marginBottom={1}>
            Lugar de realización
          </Typography>
          <Grid container>
            <Grid marginBottom={1} item xs={12} md={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Ingrese"
                name="lugar"
                value={formik.values.lugar}
                onChange={formik.handleChange}
                size="small"
                error={formik.touched.lugar}
                helperText={
                  formik.touched.lugar &&
                  formik.errors.lugar &&
                  formik.errors.lugar
                }
                required
              />
            </Grid>
          </Grid>

          <Typography variant="h5" marginBottom={1}>
            Vigencia
          </Typography>
          <Grid container spacing={2} columns={16} marginTop={1}>
            <Grid item xs={8}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  size="small"
                  sx={{ width: "100%" }}
                  label="Inicio"
                  name="incio"
                  value={formik.values.inicio}
                  renderInput={(params) => <TextField {...params} />}
                  error={formik.touched.inicio}
                  onChange={(e) => {
                    formik.handleChange({
                      target: { name: "inicio", value: e },
                    });
                  }}
                />
                <FormHelperText error>
                  {formik.errors.inicio && formik.errors.inicio}
                </FormHelperText>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={8}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Conclusión"
                  value={formik.values.fin}
                  name="fin"
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                  error={formik.touched.fin}
                  onChange={(e) => {
                    formik.handleChange({
                      target: { name: "fin", value: e },
                    });
                  }}
                />
                <FormHelperText error>
                  {formik.errors.fin && formik.errors.fin}
                </FormHelperText>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Conteiner
            name="horas"
            inicial={1}
            stock={10}
            state={formik.values.contador}
            setState={formik.setValues}
          />
        </CardContent>
      </Card>
      <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
        {/* <Button variant="contained">Limpiar</Button> */}
        <Button variant="contained" onClick={formik.handleSubmit}>
          Siguiente
        </Button>
      </Stack>
    </>
  );
};

export default Prueba;
