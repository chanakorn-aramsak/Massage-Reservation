import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditReservation from "@/components/EditReservation";
import { withAuth } from "@/lib/withAuth";
import { getBookingById } from "@/services/reservation/booking.service";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

async function EditReservationPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;
  const token = session.user.token;
  const response = await getBookingById(params.id, token);
  const booking = response.data;

  return (
    <>

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

export default withAuth(EditReservationPage, ["admin", "user"]);
