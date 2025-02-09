"use client";
import React, { useState } from "react";
import axios from "axios";
import AuthModal from "../components/modal";
import { useRouter } from "next/navigation";

type SignUpProp = {
  email: string;
  password: string;
  name: string;
};

const SignUp = () => {
  const [open, setOpen] = useState<boolean>(true);
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
      setOpen(true);
      console.log(error);
    }
  };
  return (
    <AuthModal
      open={open}
      handleClose={() => setOpen(false)}
      handleSubmit={handleSubmit}
      mode={"signUp"}
    />
  );
};

export default SignUp;
