import Link from "next/link";
import Image from "next/image";
import navbarLogo from "@/public/img/navbarLogo.png";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  let isLogin = true;
  return (
    <div className="h-[50px] w-full inset-0 px-4 py-2 mb-[100px] z-50 fixed flex flex-row bg-white">
      <Link href="/" className="w-full">
        <Image
          src={navbarLogo}
          alt="Logo"
          width={0}
          height={0}
          className="h-[100%] w-auto"
        />
      </Link>
      {isLogin ? (
        <>
          <div className="h-auto w-fit flex flex-row justify-end">
            <NavbarItem href="/reservations">Reservations</NavbarItem>
          </div>
          <div className="h-auto w-fit flex flex-row justify-end pl-6">
            <NavbarItem href="/">Username</NavbarItem>
          </div>
        </>
      ) : (
        <div className="h-auto w-fit flex flex-row justify-end">
          <NavbarItem href="/login">Login</NavbarItem>
        </div>
      )}
    </div>
  );
}
