"use client";
import Image from "next/image";
import RegisterImg from "@/public/img/registerImg.jpg";
import { Button } from "@mui/material";
import { useState } from "react";
import { register } from "@/services/user/user.service";
import { IRegister } from "@/interfaces/user/login.interface";
import { redirect } from "next/navigation";

export default function Register() {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  const handleSubmit = async (registerFormData: FormData) => {
    // validate password
    const password = registerFormData.get("password") as string;
    const confirmPassword = registerFormData.get("confirmPassword") as string;

    if (password.length < 6) {
      setPasswordError(true);
    }

    if (password !== confirmPassword) {
      setPasswordNotMatch(true);
    }

    if (passwordError || passwordNotMatch) {
      return;
    }

    const registerForm: IRegister = {
      name: registerFormData.get("username") as string,
      email: registerFormData.get("email") as string,
      tel: registerFormData.get("tel") as string,
      role: registerFormData.get("role") as string,
      password: password,
    };

    await register(registerForm);
    redirect("/");
  };

  return (
    <main className="h-full md:h-screen md:py-4 w-full flex items-center justify-center">
      <div className="container flex md:flex-row flex-col rounded-lg shadow-2xl m-4">
        <div className="md:w-[40%] w-0 relative md:rounded-l-lg">
          <Image
            src={RegisterImg}
            alt="Register"
            fill={true}
            className="object-cover rounded-l-lg z-0"
            priority={true}
          />
        </div>
        <div className="md:w-[60%] w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
          <h1 className="text-4xl pb-10 font-extrabold text-center">
            Register
          </h1>
          <form className="w-full" action={handleSubmit}>
            <div className="p-4 space-y-2">
              <label htmlFor="username" className="text-xl">
                Username
              </label>
              <input
                type="text"
                required
                name="username"
                placeholder="Username"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="p-4 space-y-2">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="example@gmail.com"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex md:flex-row flex-col">
              <div className="p-4 space-y-2 md:w-3/4">
                <label htmlFor="tel" className="text-xl">
                  Telephone Number
                </label>
                <input
                  type="text"
                  required
                  name="tel"
                  placeholder="098-765-4321"
                  className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="p-4 space-y-2 md:w-1/4">
                <label htmlFor="role" className="text-xl">
                  Role
                </label>
                <select
                  name="role"
                  defaultValue={""}
                  required
                  className="bg-white border-2 border-gray-200 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-primary"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-row space-x-4">
                <label className="text-xl">Password</label>
                {passwordError ? (
                  <p className="text-red-700">
                    *** Password must contains 6 characters ***
                  </p>
                ) : null}
                {passwordNotMatch ? (
                  <p className="text-red-700">
                    *** Password does not match ***
                  </p>
                ) : null}
              </div>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex flex-row space-x-4">
                <label className="text-xl">Confirm</label>

                {passwordNotMatch ? (
                  <p className="text-red-700">
                    *** Password does not match ***
                  </p>
                ) : null}
              </div>
              <input
                type="password"
                required
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-[40%] font-serif text-white bg-primary hover:bg-primaryHover my-2"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
