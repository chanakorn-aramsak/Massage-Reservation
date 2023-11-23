import MassageCard from "@/components/MassageCard";
import Banner from "@/components/home/Banner";
import { withAuth } from "@/lib/withAuth";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { brown } from "@mui/material/colors";
import Carousel from "@/components/Carousel";
import Stepper from "@/components/Carousel";
import React from "react";
import { getShops } from "@/services/massage/massage.service";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { IMassage } from "@/interfaces/massage.interface";
import { redirect } from "next/navigation";
import AddIcon from "@/components/AddIcon";

async function Massages() {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;
  const userId = session.user._id;
  const token = session.user.token;
  const shopsJson = await getShops(session.user.token);
  const shops = Array.from(shopsJson.data) as IMassage[];

  return (
    <>
      <Banner />
      <Stepper massages={shops} />
      <div className="flex justify-center ">
        <AddIcon />
      </div>
    </>
  );
}

export default withAuth(Massages, ["admin", "user"]);
