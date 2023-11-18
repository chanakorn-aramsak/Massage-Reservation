import Image from "next/image";
import navbarLogo from "@/public/img/navbarLogo.png";
import NavbarItem from "./NavbarItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoggedInMenu from "./LoggedInMenu";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] w-full inset-0 px-4 py-2 mb-[100px] z-50 fixed flex flex-row bg-white">
      <Image
        src={navbarLogo}
        alt="Logo"
        width={0}
        height={0}
        className="h-[100%] w-auto"
      />

      {session ? (
        <div className="justify-end flex flex-row w-full h-auto space-x-6">
          <LoggedInMenu userName={`${session.user.name}`} />
        </div>
      ) : (
        <div className="justify-end flex flex-row w-full h-auto space-x-6">
          <NavbarItem href="/login">Login</NavbarItem>
        </div>
      )}
    </div>
  );
}
