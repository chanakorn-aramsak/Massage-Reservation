"use client";

import { Button } from "@mui/material";
import { IUser } from "@/interfaces/user/login.interface";
import { useState } from "react";
import { updateUserProfile } from "@/services/user/user.service";
import { redirect } from "next/navigation";

export default function EditProfileForm({
  user,
  token,
}: {
  user: IUser;
  token: string;
}) {
  const handleSubmit = async (formData: FormData) => {
    const registerForm: any = {
      name: formData.get("username") as string,
      email: formData.get("email") as string,
      tel: formData.get("tel") as string,
      role: user.role,
    };

    console.log(registerForm);

    await updateUserProfile(token, registerForm);
    redirect("/");
  };
  return (
    <main className="md:w-[60%] w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
      <form className="w-full" action={handleSubmit}>
        <div className="p-4 space-y-2">
          <label htmlFor="username" className="text-xl">
            Username
          </label>
          <input
            type="text"
            defaultValue={user.name}
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
            defaultValue={user.email}
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
              defaultValue={user.tel}
              name="tel"
              placeholder="098-765-4321"
              className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="p-4 space-y-2 md:w-1/4">
            <label htmlFor="role" className="text-xl">
              Role
            </label>
            <input
              type="text"
              disabled
              defaultValue={user.role}
              name="role"
              placeholder="Role"
              className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-400 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-[40%] font-serif text-white bg-primary hover:bg-primaryHover my-2"
          >
            Edit Profile
          </Button>
        </div>
      </form>
    </main>
  );
}
