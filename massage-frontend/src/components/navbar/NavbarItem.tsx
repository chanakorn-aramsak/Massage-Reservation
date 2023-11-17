import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export default function NavbarItem({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={`text-primary text-center my-auto ${className}`}
    >
      {children}
    </Link>
  );
}
