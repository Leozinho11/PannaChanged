import { useCallback } from "react";
import { login } from "../services/login.service";

const useLoginHook = () => {
  return useCallback(async (username: string, password: string) => {
    const loginResponse = await login({ username, password });
    localStorage.setItem("token", loginResponse.access_token);
  }, []);
};

export { useLoginHook };
