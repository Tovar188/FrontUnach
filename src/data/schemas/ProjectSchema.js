import Yup from "../../utils/Yupi18n";

const ProjectSchema = Yup.object({
  lugar: Yup.string().required().label("Lugar"),
  inicio: Yup.date().required().label("Incio"),
  fin: Yup.date().required().label("Fin"),
  contador: Yup.string().required().label("Horas"),
});

export { ProjectSchema };
