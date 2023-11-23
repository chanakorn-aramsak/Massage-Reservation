import { ILogin, IRegister, IUser } from "@/interfaces/user/login.interface";

const API_BASE_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_BACKEND_PORT || 5001
}/api/v1`;

export const login = async (loginForm: ILogin) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
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
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
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
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
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

export const updateUserProfile = async (token: string, body: IUser) => {
  console.log("body" + JSON.stringify(body));
  try {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
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
