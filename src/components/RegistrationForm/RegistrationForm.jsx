import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { register } from "../../redux/auth/operations";
import {
  StyledForm,
  StyledButton,
  StyledField,
  StyledLabel,
} from "./RegistrationForm.styled";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <StyledLabel>
          Username
          <StyledField type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledField type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledField type="password" name="password" />
        </StyledLabel>
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
}
