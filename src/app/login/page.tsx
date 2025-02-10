"use client";
import React, { useState } from "react";
import axios from "axios";
import AuthModal from "../components/modal";
import { useRouter } from "next/navigation";

type SignInProp = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = async ({ email, password }: SignInProp) => {
    try {
      const response = await axios.post(`api/users/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        router.push("/");
        setOpen(false);
      }
    } catch (error) {
      setOpen(true);
      console.error(error);
    }
  };

  return <AuthModal handleSubmit={handleSubmit} mode={"signIn"} />;
};

export default SignIn;
