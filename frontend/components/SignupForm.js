import { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import StyledSignupForm from "./styles/StyledSignupForm";

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
  right: 0px;
  z-index: 4;
  width: 300px;
  height: ${(props) => (props.signupOpen ? "100%" : "0px")};
  opacity: ${(props) => (props.signupOpen ? "1" : "0")};
  overflow: ${(props) => (props.signupOpen ? "visible" : "hidden")};
  transition: all 0.25s ease-in;
  background: ${(props) => props.theme.white};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ButtonLink = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.purple};
`;

export default function SignupForm({
  handleClick,
  setSignup,
  signup,
  signupOpen,
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ email, name, password }}>
      {({ loading, error }) => {
        return (
          <StyledSignup signupOpen={signupOpen}>
            <StyledSignupForm onSubmit={() => {}}>
              <fieldset disabled={loading} aria-busy={loading}>
                {/* <Error error={error} /> */}
                <h3>Signup</h3>
                <p>
                  Already have an account?{" "}
                  <ButtonLink onClick={() => setSignup(!signup)}>
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
                    type="password"
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
            </StyledSignupForm>
          </StyledSignup>
        );
      }}
    </Mutation>
  );
}
