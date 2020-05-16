import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const SignupForm = styled.form`
  width: ${(props) => (props.signupOpen ? "0px" : "300px")};
  height: ${(props) => (props.signupOpen ? "0px" : "440px")};
  opacity: ${(props) => (props.signupOpen ? "0" : "1")};
  overflow: ${(props) => (props.signupOpen ? "hidden" : "visible")};
  background: ${(props) => props.theme.white};
  padding: ${(props) => props.theme.padding};
  border-top: 2px solid ${(props) => props.theme.brown};
  border-bottom: 2px solid ${(props) => props.theme.brown};
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;

  h3 {
    margin: 0 0 1rem 0 !important;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    border: 2px solid ${(props) => props.theme.brightPink};
    color: ${(props) => props.theme.brightPink};
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
      background: ${(props) => props.theme.brightPink};
      color: ${(props) => props.theme.white};
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 5px;
      content: "";
      display: block;
      background-image: ${(props) => props.theme.lg};
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }

  .flags {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      margin-bottom: 0;
    }

    input {
      width: 20px;
      margin: 0 20px;
    }
  }
`;

export default SignupForm;
