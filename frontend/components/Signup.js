import { useState, useEffect } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import SignupForm from "./styles/SignupForm";
import Error from "./ErrorMessage";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      user
    }
  }
`;

const StyledSignup = styled.div`
  position: absolute;
  top: 40px;
  z-index: 4;
  width: 300px;
  height: ${(props) => (props.signupOpen ? "440px" : "0px")};
  opacity: ${(props) => (props.signupOpen ? "1" : "0")};
  overflow: ${(props) => (props.signupOpen ? "visible" : "hidden")};
  transition: all 0.25s ease-in;
  top: 40px;
  right: 0px;
  background: ${(props) => props.theme.white};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ButtonLink = styled.span`
  color: ${(props) => props.theme.purple};
`;

export default function Signup({ signupOpen, menuToggle, signupToggle }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    if (signupOpen == true) document.body.addEventListener("click", menuToggle);
  }, []);

  function handleClick() {
    menuToggle();
    signupToggle();
  }

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ email, name, password }}>
      {(updateSandwich, { loading, error }) => (
        <StyledSignup signupOpen={signupOpen}>
          <SignupForm onSubmit={() => {}}>
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <h3>Signup</h3>
              <p>
                Already have an account?{" "}
                <ButtonLink onClick={() => setSignedIn(!signedIn)}>
                  Sign In
                </ButtonLink>
              </p>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email address."
                  required
                  onChange={(e) => setEmail(e.target.val)}
                />
              </label>

              <label htmlFor="Name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What is your name?"
                  required
                  onChange={(e) => setName(e.target.val)}
                />
              </label>

              <label htmlFor="password">
                Password
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Select a password."
                  required
                  onChange={(e) => setPassword(e.target.val)}
                />
              </label>

              <label htmlFor="passwordConfirmation">
                Password Confirmation
                <input
                  type="text"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Select a password."
                  required
                  onChange={(e) => setPasswordConfirmation(e.target.val)}
                />
              </label>
              <ButtonBox>
                <button type="submit">
                  Sav{loading ? "ing" : "e"} Changes
                </button>
                <button onClick={handleClick}>Cancel</button>
              </ButtonBox>
            </fieldset>
          </SignupForm>
        </StyledSignup>
      )}
    </Mutation>
  );
}
