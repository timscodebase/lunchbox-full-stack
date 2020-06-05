import { useState, useEffect } from "react";

import SignupForm from "./SignupForm";
import SignInForm from "./SignInForm";

export default function Signup({ signupOpen, menuToggle, signupToggle }) {
  const [signup, setSignup] = useState(true);

  useEffect(() => {
    if (signupOpen == true) document.body.addEventListener("click", menuToggle);
  }, []);

  function handleClick() {
    menuToggle();
    signupToggle();
  }

  if (signup == true) {
    return (
      <SignupForm
        handleClick={handleClick}
        setSignup={setSignup}
        signup={signup}
        signupOpen={signupOpen}
      />
    );
  }
  return (
    <SignInForm
      handleClick={handleClick}
      setSignup={setSignup}
      signup={signup}
      signupOpen={signupOpen}
    />
  );
}
