// app/components/AuthModal.tsx
import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import Link from "next/link";

type ModalProp = {
  mode: "signIn" | "signUp";
  handleSignIn: (formData: FormData) => Promise<void>;
  handleSignUp: (formData: FormData) => Promise<void>;
};

const AuthModal: React.FC<ModalProp> = ({
  mode,
  handleSignIn,
  handleSignUp,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "100%",
        borderRadius: 2,
        p: 3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" component="h2">
        {mode === "signUp" ? "Sign Up" : "Sign In"}
      </Typography>

      <form action={mode === "signIn" ? handleSignIn : handleSignUp}>
        {mode === "signUp" && (
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            required
          />
        )}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          type="email"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          type="password"
          required
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button type="submit" color="primary">
            {mode === "signUp" ? "Sign Up" : "Sign In"}
          </Button>
        </Box>
      </form>

      <Link href={mode === "signUp" ? "/login" : "/signup"}>
        {mode === "signUp" ? "Please Sign In" : "Please Sign Up"}
      </Link>
    </Box>
  );
};

export default AuthModal;
