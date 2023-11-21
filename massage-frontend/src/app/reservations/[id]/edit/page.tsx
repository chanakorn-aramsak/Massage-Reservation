import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditReservation from "@/components/EditReservation";
import { getBookingById } from "@/services/reservation/booking.service";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function EditReservationPage({
    params,
}: {
    params: { id: string };
}) {
    const session = await getServerSession(authOptions);
    const token = session.user.token;
    const response = await getBookingById(params.id, token);
    const booking = response.data;

    return (
        <>
            {params.id}
            <Suspense fallback={<LinearProgress />}>
                <EditReservation
                    params={params}
                    authToken={token}
                    reservation={booking}
                />
            </Suspense>
        </>
    );
}
