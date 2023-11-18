"use client";
import { Menu, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function LoggedInMenu({ userName }: { userName: string }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-primary font-serif hover:bg-slate-50"
      >
        {userName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            router.push("/reservations");
            handleClose();
          }}
          className="text-primary font-serif"
        >
          Reservations
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
            handleClose();
          }}
          className="text-primary font-serif"
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
