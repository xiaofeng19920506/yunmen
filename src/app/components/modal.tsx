"use client";
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import Link from "next/link";

type ModalProp = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (prop: any) => void;
  mode: "signIn" | "signUp";
};

const AuthModal: React.FC<ModalProp> = ({
  open,
  handleClose,
  mode,
  handleSubmit,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

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

      {mode === "signUp" && (
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />
      )}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={() => handleSubmit({ email, name, password })}
          color="primary"
        >
          {mode === "signUp" ? "Sign Up" : "Sign In"}
        </Button>
      </Box>
      <Link href={mode === "signUp" ? "/login" : "/signup"}>
        {mode === "signUp" ? "Please Sign In" : "Please Sign Up"}
      </Link>
    </Box>
  );
};

export default AuthModal;
