import { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import Form from "./styles/Form";
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
  width: 300px;
  position: absolute;
  z-index: 2;
  transition: right 0.5s ease-in;
  top: 18px;
  right: ${(props) => (props.signupOpen ? "18px" : "-316px")};
  background: ${(props) => props.theme.white};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ButtonLink = styled.span`
  color: ${(props) => props.theme.purple};
`;

export default function Signup({ signupOpen, toggle }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={email, name, password}>
      {(updateSandwich, { loading, error }) => (
        <StyledSignup signupOpen={signupOpen}>
          <Form onSubmit={() => { }}>
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
              <button type="submit">Sav{loading ? "ing" : "e"} Changes</button>
              <button onClick={toggle}>Cancel</button>
            </ButtonBox>
          </Form>
        </StyledSignup>
      )}
    </Mutation>
  );
}