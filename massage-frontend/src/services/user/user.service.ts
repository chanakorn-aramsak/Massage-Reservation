import { ILogin, IRegister } from "@/interfaces/user/login.interface";

export const login = async (loginForm: ILogin) => {
  try {
    const res = await fetch("http://localhost:5001/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfile = async (token: string) => {
  try {
    const res = await fetch("http://localhost:5001/api/v1/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const register = async (registerForm: IRegister) => {
  try {
    const res = await fetch("http://localhost:5001/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
