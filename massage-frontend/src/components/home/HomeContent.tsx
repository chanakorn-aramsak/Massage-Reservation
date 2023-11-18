import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  variant?: "text" | "outlined" | "contained";
  showButton?: boolean;
  textButton?: string;
  colorButton?: "primary" | "secondary";
  href?: string;
};

export default function HomeContent({
  title,
  description,
  variant = "contained",
  showButton = false,
  textButton = "",
  colorButton = "primary",
  href = "",
}: Props) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="h-full p-5 place-content-evenly grid gap-4">
        <div
          className={`${
            colorButton === "primary" ? "text-primary" : "text-secondary"
          } font-extrabold text-xl lg:text-5xl text-center`}
        >
          {title}
        </div>
        <div
          className={`${
            colorButton === "primary" ? "text-primary" : "text-secondary"
          } font-light lg:font-normal text-xs sm:text-sm text-center`}
        >
          {description}
        </div>
        {showButton && (
          <Button
            variant={variant}
            className={`${
              variant === "contained"
                ? colorButton === "primary"
                  ? `bg-primary hover:bg-primaryHover`
                  : `bg-secondary hover:bg-secondaryHover`
                : ""
            } hover:bg-primaryHover w-full text-xs sm:text-base mt-3 p-0 h-auto  font-serif`}
          >
            <Link href={href} className="w-full h-full py-2 px-3 rounded-lg">
              {textButton}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
