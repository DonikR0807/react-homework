import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { Credentials, LoginResponse } from "./types";
import { BASE_URL } from "src/shared/api";

export const authThunk: AsyncThunk<
  Promise<LoginResponse>,
  Credentials,
  AsyncThunkConfig
> = createAsyncThunk<Promise<LoginResponse>, Credentials>(
  "auth",
  async (credentials) => {
    const response = await fetch(`${BASE_URL}/api/v1/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const data: LoginResponse = await response.json();
      localStorage.setItem("token", data.token);
      return data;
    } else {
      throw new Error("Failed to log in");
    }
  },
);
