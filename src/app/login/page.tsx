
import React from "react";
import AuthModal from "../components/modal";
import { handleSignIn, handleSignUp } from "@/auth/action";

const SignIn = () => {

  return <AuthModal mode={"signIn"} handleSignIn={handleSignIn} handleSignUp={handleSignUp}/>;
};

export default SignIn;
