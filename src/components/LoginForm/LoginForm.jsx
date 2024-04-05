import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import {
  StyledForm,
  StyledButton,
  StyledField,
  StyledLabel,
  RegisterLink,
  FormFooter,
  SignUpLink,
  Footer,
} from "./LoginForm.styled";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <StyledLabel>
          Email
          <StyledField type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledField type="password" name="password" />
        </StyledLabel>
        <Footer>
          <StyledButton type="submit">Log In</StyledButton>
          <FormFooter>
            <span>Donʼt have an account?</span>
            <RegisterLink>
              <SignUpLink to="/register">Sign up</SignUpLink>
            </RegisterLink>
          </FormFooter>
        </Footer>
      </StyledForm>
    </Formik>
  );
}
