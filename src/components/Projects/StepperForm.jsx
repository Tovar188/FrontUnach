import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Forms from "./Forms";
import FormsPersons from "./FormsPersons";

//const steps = ['Sobre el Proyecto', 'Persona responsable técnica', 'Personal']; => 0->sobre el proyecto

/* function getStepComponent(step) {
  switch (step) {
    case 0:
      return <Forms></Forms>;

    case 1:
      return <FormsPersons></FormsPersons>;
    default:
  }
} */

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([]);
  ///const [skipped, setSkipped] = useState(new Set());

  /* const isStepSkipped = (step) => {
    return skipped.has(step);
  }; */

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //let newSkipped = skipped;
  //setSkipped(newSkipped);
  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  useEffect(() => {
    setSteps([
      { label: "Sobre el Proyecto" },
      { label: "Persona responsable técnica" },
     /*  { label: "Personal" }, */
    ]);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          /* const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          } */
          return (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps[activeStep] && activeStep === 0 && (
        <Forms stepper={true} handleNext={handleNext} />
      )}
      {steps[activeStep] && activeStep === 1 && (
        <FormsPersons stepper={true} handleNext={handleNext} handleBack={handleBack} />
      )}
      {/*  {activeStep === steps.length ? (
        <div>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </div>
      ) : (
        <div>
          {getStepComponent(activeStep)}
          <Stack direction="row" justifyContent={"flex-end"} spacing={2}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>

            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Stack>
        </div>
      )} */}
    </Box>
  );
}

export default StepperForm;
