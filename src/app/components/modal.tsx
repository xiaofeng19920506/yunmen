import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import Link from "next/link";

type ModalProp = {
  handleSubmit: (prop: any) => void;
  mode: "signIn" | "signUp";
};

const AuthModal: React.FC<ModalProp> = ({ mode, handleSubmit }) => {
  async function handleAuth() {}
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
      <form>
        {mode === "signUp" && (
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        <input type="email" name="email" />
        <input type="password" name="password" />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            onClick={}
            color="primary"
          >
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
