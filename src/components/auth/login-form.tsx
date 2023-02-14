import HidePassWord from '@/assets/icons/hide-password.png';
import ShowPassword from '@/assets/icons/show-password.png';
import { LoginPayload } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../form";

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter username")
      .min(4, "Username is required to have at least 4 characters"),

    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Password is required to have at least 6 characters"),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  async function handleLoginSubmit(payload: LoginPayload) {
    await onSubmit?.(payload);
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField
        size="medium"
        name="username"
        label="Username"
        control={control}
      />
      <InputField
        type={showPassword ? "text" : "password"}
        size="medium"
        name="password"
        label="Password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <Image src={HidePassWord} alt='icon hide'/> : <Image src={ShowPassword} alt='icon show'/>}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null
        }
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
        }}
      >
        Login
      </Button>
    </Box>
  );
}
