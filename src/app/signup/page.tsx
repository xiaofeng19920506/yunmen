"use client";
import React from "react";
import axios from "axios";
import AuthModal from "../components/modal";
import { useRouter } from "next/navigation";

type SignUpProp = {
  email: string;
  password: string;
  name: string;
};

const SignUp = () => {
  const router = useRouter();
  const handleSubmit = async ({ email, password, name }: SignUpProp) => {
    try {
      const response = await axios.post(`api/users/signup`, {
        email,
        password,
        username: name,
      });

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <AuthModal handleSubmit={handleSubmit} mode={"signUp"} />;
};

export default SignUp;
