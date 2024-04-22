export default function validation(values) {
  const errors = {};

  if (values.text === "") {
    errors.text = "This field is required";
  } else {
    delete errors.text;
  }

  if (values.email === "") {
    errors.email = "This field is required";
  } else {
    delete errors.email;
  }

  if (values.tel === "") {
    errors.tel = "This field is required";
  } else {
    delete errors.tel;
  }

  return errors;
}
