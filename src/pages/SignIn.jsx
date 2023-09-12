import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import BgFullHeight from "../components/Background/BgFullHeight";

const SignIn = () => {
  // Bindeo múltiple
  const [data, setData] = useState({});
  return (
    <>
      <BgFullHeight /* cityDestination={bgSection} */ />
      {/* <MainContainer /* destinations={destinations} */ /> */}

      <h1>Register htmlFor Our Service</h1>
      <HtmlForm id="registration-htmlForm">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <label>
          <input
            type="checkbox"
            id="termsAndConditions"
            name="termsAndConditions"
            required
          />
          I agree to the{" "}
          <a href="/terms-and-conditions" target="_blank">
            Terms and Conditions
          </a>
          .
        </label>

        <button type="submit">Register</button>
      </HtmlForm>

      <hr />

      <p>
        Already have an account? <a href="signIn">Log in</a>
      </p>

      <p>Or register with:</p>
      <button id="googleSignInButton">Register with Google</button>
    </>
  );
};

export default SignIn;
