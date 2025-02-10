import React from "react";

import AuthModal from "../components/modal";
import { handleSignIn, handleSignUp } from "@/auth/action";

const SignUp = () => {
  return (
    <AuthModal
      mode={"signUp"}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUp;
