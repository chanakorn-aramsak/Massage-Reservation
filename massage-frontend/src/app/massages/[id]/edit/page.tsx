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
import { IMassage } from "@/interfaces/massage.interface";
import { redirect } from "next/navigation";
import AddIcon from "@/components/AddIcon";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditStudioForm from "@/components/EditStudioForm";

async function editPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const userId = session.user._id;
    const token = session.user.token;
    
    return (
        <>
            <EditStudioForm authToken={token} shopId={params.id}/>
        </>
    );
}

export default withAuth(editPage, ["admin"]);
